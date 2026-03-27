# Web Search Skill 使用指南

## 🎯 快速开始

你的新 **Web Search Skill** 已经创建完成！这是一个基于 Playwright 的浏览器自动化搜索工具，**无需 API Key**。

## 📦 首次使用设置

```bash
# 1. 安装 Playwright（如果还没有安装）
pip install playwright

# 2. 安装 Chromium 浏览器
playwright install chromium
```

## 🚀 使用方法

### 基本用法

直接在对话中输入：

```
/web-search "你的搜索关键词"
```

### 高级用法

**指定搜索引擎：**
```
/web-search "Stripe 定价设计" --engine bing
```

**设置结果数量：**
```
/web-search "最佳 React 组件库 2026" --results 20
```

**组合使用：**
```
/web-search "SaaS landing page 最佳实践" --engine duckduckgo --results 15
```

## 📊 输出格式

每次搜索会返回结构化的结果：

```json
{
  "title": "结果标题",
  "url": "https://example.com",
  "snippet": "结果摘要..."
}
```

## ✨ 特性

- ✅ **无需 API Key** - 直接使用浏览器
- ✅ **真实搜索结果** - 与真实用户看到的一致
- ✅ **支持多引擎** - DuckDuckGo 和 Bing
- ✅ **结构化输出** - 方便后续处理
- ✅ **稳定可靠** - 不受 API 限制影响

## 🎨 使用场景

1. **研究调研** - 搜索最新技术、最佳实践
2. **竞品分析** - 查找竞争对手信息
3. **问题解决** - 搜索错误信息和解决方案
4. **资源发现** - 找到有用的工具、库、文档
5. **趋势追踪** - 了解行业动态和趋势

## 🔧 配置文件

**Skill 文件位置：**
- `~/.claude/skills/web-search/SKILL.md`
- `~/.claude/skills/web-search/browser_search.py`

**原始脚本位置：**
- `/Users/xiejianyun/codetest/claude_projects/comp_data_ai/website/browser_search.py`
- `/Users/xiejianyun/codetest/claude_projects/comp_data_ai/website/BROWSER_SEARCH_README.md`

## 📝 示例对话

**用户：**
```
/web-search "Stripe 定价页面设计"
```

**AI 响应：**
```
正在搜索 "Stripe 定价页面设计"...

找到 10 个结果：

1. Stripe Pricing - Stripe
   URL: https://stripe.com/pricing
   简单、透明的定价，无隐藏费用。按使用量付费...

2. How Stripe Designs Pricing Pages - Design Coach
   URL: https://designcoach.app/stripe-pricing
   Stripe 的定价页面设计分析...

[更多结果...]
```

## 🛠️ 故障排除

**问题 1：Playwright 未安装**
```bash
pip install playwright
playwright install chromium
```

**问题 2：浏览器启动失败**
```bash
# 重新安装浏览器
playwright install --force chromium
```

**问题 3：搜索无结果**
- 检查网络连接
- 尝试不同的关键词
- 切换到 Bing 引擎

**问题 4：速度慢**
- 这是正常现象，浏览器自动化比 API 慢
- 通常需要 5-10 秒完成搜索

## 🎯 下一步

现在你可以：

1. **立即测试** - 输入 `/web-search "测试搜索"`
2. **查看文档** - 阅读 `BROWSER_SEARCH_README.md`
3. **自定义** - 修改 `browser_search.py` 添加更多功能

## 💡 提示

- 使用具体的关键词获得更准确的结果
- 对于技术搜索，使用英文关键词效果更好
- 可以在搜索中包含年份（如 "2026"）获得最新结果
- 结果数量越多，搜索时间越长

---

**准备好开始搜索了吗？**

试试：`/web-search "最好的 AI 编程助手 2026"`
