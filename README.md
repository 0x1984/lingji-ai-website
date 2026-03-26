# 灵吉AI 商务网站

企业数据，AI原生 - 在Claude Code中自动生成尽调报告

## 技术栈

- **框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS v4
- **组件**: shadcn/ui
- **语言**: TypeScript

## 快速开始

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
website/
├── src/
│   ├── app/
│   │   ├── page.tsx           # 首页
│   │   ├── layout.tsx         # 根布局
│   │   └── globals.css        # 全局样式
│   ├── components/
│   │   ├── header/            # 导航栏
│   │   ├── sections/          # 页面区块
│   │   │   ├── hero.tsx       # Hero Section（用户案例）
│   │   │   ├── social-proof.tsx
│   │   │   ├── product-demo.tsx
│   │   │   └── pricing-preview.tsx
│   │   └── ui/                # shadcn/ui组件
│   └── lib/
├── public/                    # 静态资源
├── package.json
└── tsconfig.json
```

## 页面结构

### 首页 (/)

1. **Hero Section** - 3个用户案例
   - 中小企业老板：评估10个供应商
   - 律所律师：发现隐形股东
   - VC投资经理：发现竞品关联

2. **Social Proof** - 社会证明
   - 2,000+开发者使用
   - 客户推荐

3. **Product Demo** - 产品演示
   - 3个核心Commands交互演示

4. **Pricing Preview** - 定价预览
   - 免费版：¥0/月（10次/日）
   - 专业版：¥299/月（100次/日）
   - 企业版：¥5,999/月起（无限）

## 设计决策

### 为什么选择Next.js + shadcn/ui？

1. **Next.js 15**
   - 最新版本，性能极佳
   - App Router（现代化架构）
   - SEO友好（服务端渲染）
   - 零配置部署到Vercel

2. **shadcn/ui**
   - 可复制粘贴的组件
   - 完全可定制
   - 现代设计
   - TypeScript原生

3. **Tailwind CSS v4**
   - 实用优先
   - 快速开发
   - 响应式设计

## 转化策略

**目标**: 产品发现和转化

**路径**: 访客 → 阅读案例 → 注册免费账号 → 获取API Key → 配置使用 → 付费转化

**关键指标**:
- 注册转化率: 15%
- 激活率: 67%
- 付费转化率: 20-30%

## 🚀 部署

### 快速部署到Vercel（推荐）

**最简单的方式 - 通过GitHub集成**：

1. **推送代码到GitHub**：
   ```bash
   git add .
   git commit -m "灵吉AI网站上线"
   git push origin main
   ```

2. **在Vercel上部署**：
   - 访问 https://vercel.com/new
   - 选择GitHub仓库
   - Vercel会自动检测Next.js并配置
   - 点击"Deploy"即可

**详细步骤请查看**: [DEPLOY.md](./DEPLOY.md)

### 手动部署命令

```bash
# 1. 构建项目
npm run build

# 2. 启动生产服务器
npm start
```

### 其他平台

- **Netlify**: 支持Next.js，一键部署
- **AWS Amplify**: 全托管服务
- **Cloudflare Pages**: 全球CDN加速

## 🔧 环境变量

创建 `.env.local` 文件：

```bash
# 复制示例文件
cp .env.example .env.local

# 编辑配置
# ENTERPRISE_API_BASE_URL=https://your-api.com
# ENTERPRISE_API_KEY=your_api_key
```

## 📚 相关文档

- [部署指南](./DEPLOY.md) - 详细的部署步骤
- [测试清单](./TESTING.md) - 功能验证清单
- [网站规划](../docs/website-plan.md)
- [商业模式](../docs/Business_Model.md)
- [转化策略](../docs/Conversion_Strategy.md)
