#!/usr/bin/env python3
import requests
from bs4 import BeautifulSoup
import urllib.parse


def search(query, max_results=10):
    """Web search using Bing"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }

    url = f"https://www.bing.com/search?q={urllib.parse.quote(query)}"

    try:
        resp = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(resp.text, 'html.parser')

        results = []
        for li in soup.find_all('li', class_='b_algo')[:max_results]:
            h2 = li.find('h2')
            if h2:
                a = h2.find('a')
                if a:
                    title = a.get_text(strip=True)
                    href = a.get('href', '')

                    # 获取摘要
                    p = li.find('p')
                    snippet = p.get_text(strip=True) if p else ""

                    if title and href and not href.startswith('javascript'):
                        results.append({
                            'title': title,
                            'url': href,
                            'snippet': snippet
                        })

        return results
    except Exception as e:
        print(f"Error: {e}")
        return []


if __name__ == "__main__":
    results = search("Stripe pricing design", 5)
    print(f"Found {len(results)} results:\n")
    for i, r in enumerate(results, 1):
        print(f"{i}. {r['title']}")
        print(f"   {r['url']}\n")
