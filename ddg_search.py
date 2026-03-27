#!/usr/bin/env python3
"""
使用 DuckDuckGo HTML 版本的搜索（无需 JS）
"""
import requests
from bs4 import BeautifulSoup
from urllib.parse import quote


def search_duckduckgo(query: str, max_results: int = 10) -> list:
    """
    使用 DuckDuckGo 进行搜索

    Args:
        query: 搜索关键词
        max_results: 最大结果数

    Returns:
        搜索结果列表
    """
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }

    # DuckDuckGo HTML 版本（无需 JS）
    # 使用 ddg 参数请求 HTML 版本
    params = {
        'q': query,
        'kl': 'wt-wt'
    }

    try:
        response = requests.get(
            'https://html.duckduckgo.com/html/',
            params=params,
            headers=headers,
            timeout=15
        )

        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        results = []

        # DuckDuckGo HTML 版使用 class="result"
        for div in soup.find_all('div', class_='result'):
            if len(results) >= max_results:
                break

            try:
                # 提取标题和链接
                a_tag = div.find('a', class_='result__a')
                if not a_tag:
                    continue

                title = a_tag.get_text(strip=True)
                url = a_tag.get('href', '')

                # DuckDuckGo 的 URL 是重定向链接，提取真实的 URL
                # 格式: //duckduckgo.com/l/?uddg=<encoded_url>
                if 'uddg=' in url:
                    from urllib.parse import urlparse, parse_qs
                    parsed = urlparse(url)
                    params = parse_qs(parsed.query)
                    if 'uddg' in params:
                        from urllib.parse import unquote
                        url = unquote(params['uddg'][0])

                # 提取摘要
                snippet_elem = div.find('a', class_='result__snippet')
                snippet = snippet_elem.get_text(strip=True) if snippet_elem else ""

                if title and url and not url.startswith('//duckduckgo.com'):
                    results.append({
                        'title': title,
                        'url': url,
                        'snippet': snippet
                    })

            except Exception:
                continue

        return results

    except Exception as e:
        print(f"搜索失败: {e}")
        return []


def main():
    """测试"""
    query = "Stripe pricing design"
    print(f"🔍 DuckDuckGo 搜索: '{query}'\n")

    results = search_duckduckgo(query, max_results=5)

    print(f"✅ 找到 {len(results)} 个结果:\n")
    for i, result in enumerate(results, 1):
        print(f"{i}. {result['title']}")
        print(f"   {result['url']}")
        if result.get('snippet'):
            print(f"   {result['snippet'][:100]}...")
        print()


if __name__ == "__main__":
    main()
