#!/usr/bin/env python3
"""
基于 Playwright 的 Web Search 实现
使用 DuckDuckGo 进行搜索，无需 API Key
"""

import asyncio
from playwright.async_api import async_playwright
from typing import List, Dict
import json


class WebSearcher:
    """基于浏览器的 Web Search 工具"""

    def __init__(self, headless: bool = True):
        self.headless = headless

    async def search_duckduckgo(
        self, query: str, max_results: int = 10
    ) -> List[Dict[str, str]]:
        """
        使用 DuckDuckGo 进行搜索

        Args:
            query: 搜索关键词
            max_results: 最大结果数

        Returns:
            搜索结果列表，每个结果包含 title, url, snippet
        """
        async with async_playwright() as p:
            # 启动浏览器 - 添加反检测设置
            browser = await p.chromium.launch(
                headless=self.headless,
                args=[
                    '--disable-blink-features=AutomationControlled',
                ]
            )
            context = await browser.new_context(
                viewport={'width': 1920, 'height': 1080},
                user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            )
            page = await context.new_page()

            try:
                # 访问 DuckDuckGo
                await page.goto("https://duckduckgo.com/", wait_until="networkidle")

                # 输入搜索关键词
                await page.fill('input[name="q"]', query)

                # 点击搜索按钮或按 Enter
                await page.press('input[name="q"]', "Enter")

                # 等待导航完成
                await page.wait_for_load_state("networkidle", timeout=10000)

                # 额外等待让结果加载
                await asyncio.sleep(2)

                # 等待结果加载 - 使用正确的选择器
                try:
                    await page.wait_for_selector("article", timeout=10000)
                except:
                    # 如果超时，继续尝试提取结果
                    pass

                # 提取搜索结果
                results = []
                elements = await page.query_selector_all("article")

                for element in elements[:max_results]:
                    try:
                        # 提取标题和链接 - 使用 DuckDuckGo 的实际选择器
                        title_elem = await element.query_selector("a[data-testid='result-title-a']")
                        snippet_elem = await element.query_selector("div[data-testid='result-snippet']")

                        if title_elem:
                            title = await title_elem.inner_text()
                            url = await title_elem.get_attribute("href")

                            snippet = ""
                            if snippet_elem:
                                snippet = await snippet_elem.inner_text()

                            results.append(
                                {"title": title.strip(), "url": url, "snippet": snippet.strip()}
                            )
                    except Exception as e:
                        # 如果新选择器失败，尝试通用选择器
                        try:
                            title_elem = await element.query_selector("h2 a")
                            if title_elem:
                                title = await title_elem.inner_text()
                                url = await title_elem.get_attribute("href")
                                snippet = ""
                                results.append(
                                    {"title": title.strip(), "url": url, "snippet": snippet.strip()}
                                )
                        except Exception as e2:
                            print(f"Error extracting result: {e}")
                            continue

                return results

            finally:
                await browser.close()

    async def search_bing(self, query: str, max_results: int = 10) -> List[Dict[str, str]]:
        """
        使用 Bing 进行搜索

        Args:
            query: 搜索关键词
            max_results: 最大结果数

        Returns:
            搜索结果列表
        """
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=self.headless)
            page = await browser.new_page()

            try:
                # 访问 Bing
                await page.goto("https://www.bing.com/", wait_until="networkidle")

                # 输入搜索关键词
                await page.fill('input[name="q"]', query)
                await page.press('input[name="q"]', "Enter")

                # 等待结果加载
                await page.wait_for_selector("li.b_algo", timeout=10000)

                # 提取搜索结果
                results = []
                elements = await page.query_all_selector("li.b_algo")

                for element in elements[:max_results]:
                    try:
                        # 提取标题和链接
                        title_elem = await element.query_selector("h2 a")
                        snippet_elem = await element.query_selector("p")

                        if title_elem:
                            title = await title_elem.inner_text()
                            url = await title_elem.get_attribute("href")

                            snippet = ""
                            if snippet_elem:
                                snippet = await snippet_elem.inner_text()

                            results.append(
                                {"title": title.strip(), "url": url, "snippet": snippet.strip()}
                            )
                    except Exception as e:
                        print(f"Error extracting result: {e}")
                        continue

                return results

            finally:
                await browser.close()


async def main():
    """示例用法"""
    searcher = WebSearcher(headless=True)

    # DuckDuckGo 搜索示例
    print("🔍 在 DuckDuckGo 上搜索: 'Stripe pricing design'")
    results = await searcher.search_duckduckgo("Stripe pricing design", max_results=5)

    print(f"\n找到 {len(results)} 个结果:\n")
    for i, result in enumerate(results, 1):
        print(f"{i}. {result['title']}")
        print(f"   URL: {result['url']}")
        print(f"   {result['snippet']}\n")


if __name__ == "__main__":
    asyncio.run(main())
