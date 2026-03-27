#!/usr/bin/env python3
"""
简化版 Web Search - 使用 requests + BeautifulSoup
无需浏览器，更快速可靠
"""

import requests
from bs4 import BeautifulSoup
from typing import List, Dict
import urllib.parse


def search_bing(query: str, max_results: int = 10) -> List[Dict[str, str]]:
    """
    使用 Bing 进行搜索（无需浏览器）

    Args:
        query: 搜索关键词
        max_results: 最大结果数

    Returns:
        搜索结果列表
    """
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }

    # 构建搜索 URL
    search_url = f"https://www.bing.com/search?q={urllib.parse.quote(query)}"

    try:
        response = requests.get(search_url, headers=headers, timeout=10)
        response.raise_for_status()

        soup = BeautifulSoup(response.text, 'html.parser')
        results = []

        # Bing 的结果选择器
        for li in soup.find_all('li', class_='b_algo'):
            if len(results) >= max_results:
                break

            try:
                # 提取标题和链接
                link_elem = li.find('h2') or li.find('a')
                if link_elem:
                    # 如果是 h2，从里面找 a 标签
                    if link_elem.name == 'h2':
                        link_elem = link_elem.find('a')

                    if link_elem:
                        title = link_elem.get_text(strip=True)
                        url = link_elem.get('href', '')

                        # 提取摘要
                        caption = li.find('div', class_='b_caption')
                        snippet = ""
                        if caption:
                            # 尝试不同的选择器
                            p_elem = caption.find('p')
                            if p_elem:
                                snippet = p_elem.get_text(strip=True)
                            else:
                                snippet = caption.get_text(strip=True)[:200]

                        if title and url and not url.startswith('javascript'):
                            results.append({
                                'title': title,
                                'url': url,
                                'snippet': snippet
                            })
            except Exception as e:
                print(f"Error extracting result: {e}")
                continue

        return results

    except Exception as e:
        print(f"搜索失败: {e}")
        return []


def main():
    """示例用法"""
    print("🔍 搜索: 'Stripe pricing design'\n")
    results = search_bing("Stripe pricing design", max_results=5)

    print(f"✅ 找到 {len(results)} 个结果:\n")
    for i, result in enumerate(results, 1):
        print(f"{i}. {result['title']}")
        print(f"   URL: {result['url']}")
        if result.get('snippet'):
            print(f"   {result['snippet'][:100]}...")
        print()


if __name__ == "__main__":
    main()
