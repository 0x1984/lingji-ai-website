# Vercel 部署指南

## 🚀 快速部署步骤

### 方法一：通过Vercel Dashboard部署（推荐）

#### 1. 准备工作
首先需要将代码推送到GitHub：

```bash
# 创建GitHub仓库（如果没有）
# 1. 访问 https://github.com/new
# 2. 创建新仓库，命名为 lingji-ai-website
# 3. 不要初始化README

# 添加远程仓库
git remote add origin https://github.com/你的用户名/lingji-ai-website.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

#### 2. 在Vercel上部署
1. 访问 https://vercel.com/new
2. 登录或注册Vercel账户
3. 点击 "Import Project"
4. 选择 "Import Git Repository"
5. 输入GitHub仓库地址或从列表中选择
6. 配置项目：
   - **Framework Preset**: Next.js
   - **Root Directory**: `website` (如果仓库包含多个项目)
   - **Build Command**: `npm run build` (自动检测)
   - **Output Directory**: `.next` (自动检测)
7. 点击 "Deploy"
8. 等待部署完成（约2-3分钟）

#### 3. 获取域名
部署完成后，Vercel会自动分配一个域名：
- `https://your-project-name.vercel.app`

### 方法二：使用Vercel CLI部署

#### 1. 修复npm权限（需要密码）
```bash
sudo chown -R 501:20 "/Users/xiejianyun/.npm"
```

#### 2. 安装Vercel CLI
```bash
npm install -g vercel
```

#### 3. 登录并部署
```bash
# 登录Vercel
vercel login

# 部署项目
cd website
vercel

# 按提示操作：
# - 选择链接到现有项目或创建新项目
# - 确认配置
```

### 方法三：使用项目构建命令

```bash
# 先构建项目
npm run build

# 然后部署
npx vercel --prod
```

## 📋 部署前检查清单

- ✅ 代码已提交到Git
- ✅ package.json包含所有依赖
- ✅ next.config.js配置正确
- ✅ 环境变量已配置（如果需要）

## 🔧 环境变量配置

如果项目需要环境变量，在Vercel Dashboard中配置：

1. 进入项目Settings
2. 点击 "Environment Variables"
3. 添加变量：
   ```
   ENTERPRISE_API_BASE_URL=https://your-api.com
   ENTERPRISE_API_KEY=your_api_key
   ```

## 🌐 自定义域名

### 在Vercel中配置
1. 进入项目Settings → Domains
2. 添加自定义域名
3. 配置DNS记录：
   - 类型: A
   - 名称: @
   - 值: 76.76.21.21

## 📊 部署后验证

部署完成后，访问你的Vercel域名检查：

- [ ] 首页正常显示
- [ ] 所有动画正常工作
- [ ] 导航栏正常
- [ ] 响应式布局正常
- [ ] 控制台无错误

## 🔄 自动部署

配置GitHub后，每次推送代码到main分支，Vercel会自动部署：

```bash
git add .
git commit -m "update content"
git push
```

## 💡 提示

- 首次部署可能需要2-3分钟
- 后续部署会更快（利用缓存）
- Vercel免费版支持：
  - 无限项目
  - 100GB带宽/月
  - 自动HTTPS
  - 全球CDN

## 🐛 常见问题

### 1. 构建失败
检查package.json中的依赖是否正确

### 2. 样式丢失
确保Tailwind CSS配置正确

### 3. 路由404
检查next.config.js中的配置

---

**准备就绪！** 开始部署你的灵吉AI商务网站吧！
