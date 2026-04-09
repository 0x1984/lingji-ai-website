<div align="center">

  # 🔒 灵吉AI 内测版

  **企业数据智能分析平台**

  [![Deploy](https://github.com/0x1984/lingji-ai-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/0x1984/lingji-ai-website/actions/workflows/deploy.yml)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Beta](https://img.shields.io/badge/Status-Beta-orange)](https://lingji-ai-website.vercel.app)

  **[在线体验](https://lingji-ai-website.vercel.app)** · **[申请内测](mailto:beta@lingji.ai)** · **[功能文档](./BETA_DEPLOYMENT_GUIDE.md)**

</div>

---

## 🎯 关于灵吉AI

灵吉AI是一个企业数据智能分析平台，为开发者和企业提供：

- 🔍 **企业搜索** - 快速查找企业信息
- 🔗 **股权穿透** - 多层股权结构分析
- 🌐 **关联关系** - 企业关联网络图谱
- ⚠️ **风险评估** - 综合风险指标分析
- 📊 **尽调报告** - 一键生成企业尽调报告

### 🚀 AI 时代的企业数据服务

与传统企业数据查询不同，灵吉AI专为 AI 工作流设计：

- ✅ **AI 原生** - 深度集成 Claude Code、OpenAI Codex 等平台
- ✅ **API 优先** - RESTful API + MCP Server 双重支持
- ✅ **深度分析** - 股权穿透 5 层 +，实际控制人识别
- ✅ **实时数据** - 工商局、司法、舆情等实时数据

---

## 🔐 内测计划

### 内测资格

目前处于**内测阶段**，需要邀请码才能访问。

#### 如何获得邀请码？

1. **GitHub Star** ⭐
   - Star 本项目并截图
   - 发送到 [beta@lingji.ai](mailto:beta@lingji.ai)
   - 我们会在 24 小时内发送邀请码

2. **社区贡献** 🤝
   - 在 Issue 中提出有价值的建议
   - 贡献代码或文档
   - 帮助其他用户

3. **早期用户** 🎁
   - 填写[申请表](https://lingji.ai/apply)
   - 说明使用场景
   - 我们会逐步开放名额

### 内测专享权益

| 权益 | 内测用户 | 正式用户 |
|------|----------|----------|
| 终身折扣 | **8折** | 无 |
| 功能抢先体验 | ✅ | ❌ |
| 专属客服支持 | ✅ | ❌ |
| 产品路线图影响力 | ✅ | ❌ |
| API 调用配额 | 1000/日 | 100/日 |

---

## 🚀 快速开始

### 方式一：在线体验（推荐）

1. 访问 [https://lingji-ai-website.vercel.app](https://lingji-ai-website.vercel.app)
2. 输入邀请码（如 `LINGJI2024`）
3. 开始使用

### 方式二：本地部署

```bash
# 克隆项目
git clone https://github.com/0x1984/lingji-ai-website.git
cd lingji-ai-website

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000

详细部署指南请参考 [BETA_DEPLOYMENT_GUIDE.md](./BETA_DEPLOYMENT_GUIDE.md)

---

## 📸 界面预览

### 内测邀请页面
- 🔒 简洁的邀请码输入界面
- 🎨 Google AI 风格深色主题
- 📱 完全响应式设计

### Dashboard
- 📊 API 使用统计
- 🔍 快速企业搜索
- 🔑 API Key 管理
- 📈 使用趋势分析

### 企业搜索
- ⚡ 实时搜索建议
- 📋 结构化企业信息
- 🔗 股权穿透视图
- ⚠️ 风险指标展示

---

## 🏗️ 技术架构

### 前端技术栈
- **框架**：Next.js 16 (App Router)
- **UI 组件**：Tailwind CSS + shadcn/ui
- **状态管理**：React Hooks + Context API
- **表单处理**：React Hook Form + Zod
- **部署**：Vercel (全球 CDN)

### 后端技术栈
- **框架**：FastAPI
- **数据库**：PostgreSQL 16
- **缓存**：Redis 7
- **认证**：JWT + 短信验证码
- **部署**：Vercel Serverless Functions

### AI 集成
- **MCP Server**：Model Context Protocol
- **Claude Code**：原生集成
- **OpenAI Codex**：Function Calling

---

## 📚 功能清单

### ✅ 已实现（v0.1.0）

#### 用户认证
- [x] 手机号 + 短信验证码登录
- [x] 微信登录（模拟模式）
- [x] JWT 令牌管理
- [x] 内测邀请码验证

#### Dashboard
- [x] API 使用统计
- [x] 快速企业搜索
- [x] 最近查询记录
- [x] 使用趋势图表

#### API 管理
- [x] API Key 创建
- [x] API Key 列表
- [x] API Key 删除
- [x] 使用配额显示

#### 企业数据 API
- [x] 企业基础信息查询
- [x] 股权穿透分析
- [x] 关联关系图谱
- [x] 风险评估指标

### 🚧 开发中（v0.2.0）

- [ ] 完整尽调报告生成
- [ ] 批量企业查询
- [ ] 数据导出（Excel/PDF）
- [ ] Webhook 通知
- [ ] 高级筛选功能

### 📋 计划中（v0.3.0）

- [ ] 用户自定义模型
- [ ] API 使用分析报告
- [ ] 团队协作功能
- [ ] 企业标签系统
- [ ] 定时查询任务

---

## 🤝 参与贡献

我们欢迎所有形式的贡献！

### 如何贡献？

1. **报告 Bug** 🐛
   - 在 Issues 中描述问题
   - 提供复现步骤
   - 附上截图或日志

2. **建议功能** 💡
   - 在 Issues 中描述功能需求
   - 说明使用场景
   - 提供设计思路

3. **贡献代码** 👨‍💻
   - Fork 本项目
   - 创建特性分支
   - 提交 Pull Request
   - 等待 Review

4. **完善文档** 📝
   - 修正文档错误
   - 添加使用示例
   - 翻译文档

### 贡献指南

请参考 [CONTRIBUTING.md](./CONTRIBUTING.md)（待完善）

---

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](./LICENSE) 文件

---

## 📞 联系我们

### 官方渠道
- **官网**：https://lingji.ai
- **邮箱**：[beta@lingji.ai](mailto:beta@lingji.ai)
- **GitHub**：https://github.com/0x1984/lingji-ai-website

### 社区
- **Issues**：https://github.com/0x1984/lingji-ai-website/issues
- **Discussions**：https://github.com/0x1984/lingji-ai-website/discussions

### 商务合作
- **商务邮箱**：[business@lingji.ai](mailto:business@lingji.ai)
- **合作咨询**：https://lingji.ai/partners

---

## 🙏 致谢

感谢以下开源项目：

- [Next.js](https://nextjs.org/) - React 框架
- [FastAPI](https://fastapi.tiangolo.com/) - Python Web 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [shadcn/ui](https://ui.shadcn.com/) - UI 组件库
- [Vercel](https://vercel.com/) - 部署平台

---

## 📊 项目状态

- **版本**：v0.1.0 (Beta)
- **最后更新**：2024-04-09
- **内测用户**：50+
- **GitHub Stars**：⭐ Star us to support!

---

<div align="center">

  **[🚀 开始内测](https://lingji-ai-website.vercel.app)** · **[⭐ Star 本项目](https://github.com/0x1984/lingji-ai-website)** · **[📧 申请内测](mailto:beta@lingji.ai)**

  Made with ❤️ by the LingJi AI Team

</div>
