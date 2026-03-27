#!/usr/bin/env python3
"""
调试版本 - 查看 DuckDuckGo 实际页面结构
"""

import asyncio
from playwright.async_api import async_playwright


async def debug_duckduckgo():
    """调试 DuckDuckGo 页面结构"""
    async with async_playwright() as p:
        # 使用非 headless 模式以便查看
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()

        try:
            print("访问 DuckDuckGo...")
            await page.goto("https://duckduckgo.com/", wait_until="networkidle")

            print("输入搜索关键词...")
            await page.fill('input[name="q"]', "Stripe pricing")
            await page.press('input[name="q"]', "Enter")

            print("等待结果加载...")
            # 等待页面加载
            await asyncio.sleep(5)

            # 打印页面内容
            print("\n" + "="*50)
            print("页面 URL:", page.url)
            print("="*50)

            # 尝试不同的选择器
            selectors_to_try = [
                "div[data-testid='result']",
                "div.result",
                "div.web-result",
                "article",
                "li[data-layout='organic']",
                ".wasm__result",
                "[data-result]",
            ]

            for selector in selectors_to_try:
                try:
                    elements = await page.query_selector_all(selector)
                    if elements:
                        print(f"\n✅ 找到选择器: {selector} ({len(elements)} 个结果)")
                        # 打印第一个结果的结构
                        if elements:
                            first = elements[0]
                            content = await first.inner_html()
                            print(f"前 200 字符:\n{content[:200]}")
                except Exception as e:
                    print(f"\n❌ 选择器 {selector} 失败: {e}")

            # 等待用户查看
            print("\n浏览器将保持打开 10 秒，请查看页面...")
            await asyncio.sleep(10)

        finally:
            await browser.close()


if __name__ == "__main__":
    asyncio.run(debug_duckduckgo())
