# 🚀 灵吉AI网站 - Vercel一键部署指南

## 📋 当前状态

✅ GitHub仓库已创建完成
- 仓库地址：https://github.com/0x1984/lingji-ai-website
- 代码已推送完成
- 准备就绪，可以部署！

## ⚡ 快速部署（3分钟完成）

### 第1步：打开Vercel导入页面

**直接点击这个链接**：
```
https://vercel.com/new?utm_source=github_deployments
```

或者：
1. 访问 https://vercel.com
2. 点击 "New Project"
3. 选择 "Import Git Repository"

### 第2步：选择GitHub仓库

1. 点击 **"GitHub"** 图标
2. 在仓库列表中找到 **"lingji-ai-website"**
3. 点击 **"Import"** 按钮

### 第3步：确认配置（Vercel会自动检测）

Vercel会自动填充以下配置：

| 配置项 | 值 | 状态 |
|--------|-----|------|
| Framework Preset | Next.js | ✅ 自动检测 |
| Root Directory | ./ | ✅ 自动检测 |
| Build Command | `npm run build` | ✅ 自动检测 |
| Output Directory | `.next` | ✅ 自动检测 |

**无需修改任何配置！直接点击底部的 "Deploy" 按钮！**

### 第4步：等待部署完成

- ⏱️ 等待时间：2-3分钟
- 📊 你会看到实时构建日志
- ✅ 成功后会显示 "Congratulations!"

### 第5步：访问你的网站

部署完成后，Vercel会给你一个域名：
```
https://lingji-ai-website-0x1984.vercel.app
```

或类似的域名。

## 🎯 域名格式

你的网站域名会是：
```
https://lingji-ai-website-[你的用户名].vercel.app
```

示例：
- `https://lingji-ai-website-0x1984.vercel.app`
- `https://lingji-ai-website.vercel.app`（如果可用）

## 🔄 自动部署已配置

部署成功后，每次你推送新代码到GitHub：

```bash
git add .
git commit -m "更新内容"
git push
```

Vercel会**自动检测并重新部署**你的网站！

## ⚙️ 可选配置

### 设置自定义域名

1. 进入Vercel项目Dashboard
2. 点击 "Settings" → "Domains"
3. 添加你的域名（如 `www.lingji.ai`）
4. 配置DNS记录

### 环境变量配置（如需要）

如果项目需要API密钥：

1. 进入Vercel项目Dashboard
2. 点击 "Settings" → "Environment Variables"
3. 添加变量：
   ```
   NEXT_PUBLIC_API_URL=https://your-api.com
   ```

## 📊 部署状态检查

部署完成后，检查以下功能：

- [ ] 首页正常显示
- [ ] 灵吉AI品牌名称正确
- [ ] 动画效果正常
- [ ] 导航栏工作正常
- [ ] 移动端显示正常

## 🐛 遇到问题？

### 构建失败
- 检查 `package.json` 中的依赖
- 查看Vercel构建日志

### 路由404
- 确认使用的是Next.js App Router
- 检查 `app/` 目录结构

### 样式丢失
- 确认Tailwind CSS配置正确
- 检查构建日志

## 📞 获取帮助

- Vercel文档: https://vercel.com/docs
- Next.js部署: https://nextjs.org/docs/deployment
- 或联系我协助

---

**准备好开始了？** 现在就打开Vercel开始部署吧！🚀
