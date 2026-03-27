#!/usr/bin/env python3
"""
详细测试版本
"""

import asyncio
from playwright.async_api import async_playwright


async def test_search():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        try:
            print("访问 DuckDuckGo...")
            await page.goto("https://duckduckgo.com/", wait_until="networkidle")

            print("输入搜索关键词...")
            await page.fill('input[name="q"]', "Stripe pricing")
            await page.press('input[name="q"]', "Enter")

            print("等待页面加载...")
            await page.wait_for_load_state("networkidle", timeout=10000)
            await asyncio.sleep(3)

            print(f"当前 URL: {page.url}")

            # 检查页面内容
            content = await page.content()
            print(f"页面长度: {len(content)}")

            # 尝试不同的选择器
            selectors = [
                ("article", "文章标签"),
                ("li[data-layout='organic']", "有机结果"),
                ("[data-testid='result']", "测试结果"),
                ("a[class*='result__a']", "结果链接"),
            ]

            for selector, desc in selectors:
                try:
                    elements = await page.query_selector_all(selector)
                    print(f"\n{desc} ({selector}): 找到 {len(elements)} 个")

                    if elements:
                        # 打印第一个元素的内容
                        first = elements[0]
                        text = await first.inner_text()
                        print(f"  预览: {text[:100]}...")
                except Exception as e:
                    print(f"\n{desc} ({selector}): 错误 - {e}")

        finally:
            await browser.close()


if __name__ == "__main__":
    asyncio.run(test_search())
