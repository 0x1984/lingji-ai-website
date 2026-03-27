#!/usr/bin/env python3
"""
工作版本的 Web Search
"""
import requests
from bs4 import BeautifulSoup
from urllib.parse import quote


def web_search(query: str, max_results: int = 10) -> list:
    """
    使用 Bing 进行搜索

    Args:
        query: 搜索关键词
        max_results: 最大结果数

    Returns:
        搜索结果列表 [{"title": "...", "url": "...", "snippet": "..."}]
    """
    # 更真实的浏览器 headers
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Cache-Control': 'max-age=0'
    }

    # 构建搜索 URL
    search_url = f"https://www.bing.com/search?q={quote(query)}"

    try:
        response = requests.get(search_url, headers=headers, timeout=15)
        response.raise_for_status()

        soup = BeautifulSoup(response.text, 'html.parser')
        results = []

        # 查找所有搜索结果
        for li in soup.find_all('li', class_='b_algo'):
            if len(results) >= max_results:
                break

            try:
                # 提取 h2 中的链接
                h2 = li.find('h2')
                if not h2:
                    continue

                a_tag = h2.find('a')
                if not a_tag:
                    continue

                title = a_tag.get_text(strip=True)
                url = a_tag.get('href', '')

                # 跳过 javascript 链接
                if not url or url.startswith('javascript'):
                    continue

                # 提取摘要
                snippet = ""
                caption_div = li.find('div', class_='b_caption')
                if caption_div:
                    p_tag = caption_div.find('p')
                    if p_tag:
                        snippet = p_tag.get_text(strip=True)
                    else:
                        # 使用整个 caption 的文本
                        snippet = caption_div.get_text(strip=True)[:200]

                if title:
                    results.append({
                        'title': title,
                        'url': url,
                        'snippet': snippet
                    })

            except Exception as e:
                # 跳过解析失败的结果
                continue

        return results

    except Exception as e:
        print(f"搜索失败: {e}")
        return []


def main():
    """测试函数"""
    query = "Stripe pricing design"
    print(f"🔍 搜索: '{query}'\n")

    results = web_search(query, max_results=5)

    print(f"✅ 找到 {len(results)} 个结果:\n")
    for i, result in enumerate(results, 1):
        print(f"{i}. {result['title']}")
        print(f"   {result['url']}")
        if result.get('snippet'):
            print(f"   {result['snippet'][:100]}...")
        print()


if __name__ == "__main__":
    main()
