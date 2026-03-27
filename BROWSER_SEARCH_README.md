# Browser-Based Web Search

基于 Playwright 的 Web Search 实现，无需 API Key，直接使用浏览器进行搜索。

## 特性

- ✅ 无需 API Key
- ✅ 支持 DuckDuckGo 和 Bing
- ✅ 可以绕过某些限制
- ✅ 处理动态内容
- ✅ 返回结构化结果

## 安装

```bash
# 安装依赖
pip install playwright
playwright install chromium
```

## 使用方法

### Python 脚本

```python
import asyncio
from browser_search import WebSearcher

async def search():
    searcher = WebSearcher(headless=True)

    # DuckDuckGo 搜索
    results = await searcher.search_duckduckgo("你的搜索关键词", max_results=10)

    # Bing 搜索
    results = await searcher.search_bing("你的搜索关键词", max_results=10)

    for i, result in enumerate(results, 1):
        print(f"{i}. {result['title']}")
        print(f"   URL: {result['url']}")
        print(f"   {result['snippet']}\n")

asyncio.run(search())
```

### 命令行

```bash
# 直接运行示例
python browser_search.py
```

## 输出格式

```python
{
    "title": "结果标题",
    "url": "https://example.com",
    "snippet": "结果摘要..."
}
```

## 优点

1. **无需 API Key** - 直接使用浏览器，不需要申请任何 API
2. **真实搜索结果** - 与真实用户看到的结果一致
3. **灵活性** - 可以轻松添加更多搜索引擎
4. **稳定性** - 不受 API 限制影响

## 其他方案

如果需要更多功能，可以考虑：

1. **SearXNG** - 开源元搜索引擎，可以自己部署
2. **Playwright MCP Server** - 将其封装为 MCP Server
3. **Browserbase** - 托管的浏览器自动化服务

## 参考资源

- [Playwright Documentation](https://playwright.dev/python/)
- [DuckDuckGo](https://duckduckgo.com/)
- [lucasjellema/playwright-scenarios - GitHub](https://github.com/lucasjellema/playwright-scenarios)
- [OlegZarevych/Playwright_Dotnet_duckduckgo - GitHub](https://github.com/OlegZarevych/Playwright_Dotnet_duckduckgo)
