# 灵吉AI 内测网站部署指南

> 🚀 将灵吉AI以内测方式发布到公网，支持通过邀请码访问

---

## 📋 部署方案

### 前端部署：Vercel
- **优势**：自动 HTTPS、全球 CDN、零配置部署
- **费用**：免费额度充足
- **域名**：lingji-ai-website.vercel.app

### 后端部署：Vercel (Serverless Functions)
- **优势**：与前端集成、自动扩缩容
- **费用**：免费额度：100GB-hrs/月
- **域名**：lingji-ai-backend.vercel.app

---

## 🔐 内测保护机制

### 1. 邀请码系统
预定义的邀请码列表：
- `LINGJI2024` - 通用内测码
- `BETA001` - 早期用户
- `TEST2024` - 测试用户
- `EARLY2024` - 早鸟用户
- `INVITE2024` - 受邀用户

### 2. 访问控制
- 未验证用户自动重定向到 `/beta`
- 验证状态存储在 localStorage 和 Cookie
- 支持清除验证状态（退出登录）

### 3. 公开路径
以下路径无需验证：
- `/beta` - 内测邀请码输入页面
- `/api/auth/*` - 认证相关 API
- `/api/health` - 健康检查

---

## 🚀 快速部署

### 方法一：通过 Vercel CLI 部署（推荐）

#### 1. 安装 Vercel CLI
```bash
npm install -g vercel
```

#### 2. 登录 Vercel
```bash
vercel login
```

#### 3. 部署前端
```bash
cd /Users/xiejianyun/codetest/claude_projects/comp_data_ai/website
vercel
```

#### 4. 设置生产环境变量
在 Vercel Dashboard 中设置：
- `NEXT_PUBLIC_API_URL`: `https://lingji-ai-backend.vercel.app`
- `NEXT_PUBLIC_BETA_MODE`: `true`

#### 5. 部署到生产环境
```bash
vercel --prod
```

### 方法二：通过 GitHub Actions 自动部署

#### 1. 配置 Vercel Secrets
在 GitHub 仓库设置中添加以下 Secrets：
- `VERCEL_TOKEN` - Vercel API Token
- `VERCEL_ORG_ID` - Vercel 组织 ID
- `VERCEL_PROJECT_ID` - Vercel 项目 ID

**获取方法**：
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 获取项目信息
vercel link

# 查看配置
cat .vercel/project.json
```

#### 2. 推送代码触发部署
```bash
git add .
git commit -m "feat: 添加内测保护机制"
git push origin main
```

GitHub Actions 会自动部署到 Vercel。

---

## 🎯 内测邀请码管理

### 添加新邀请码

编辑 `src/app/beta/page.tsx`：

```typescript
const BETA_CODES = [
  'LINGJI2024',
  'BETA001',
  'TEST2024',
  'YOUR_NEW_CODE'  // 添加新码
]
```

### 邀请码使用场景

| 邀请码类型 | 用途 | 示例 |
|-----------|------|------|
| 通用码 | 社区推广 | LINGJI2024 |
| 专属码 | 特定用户 | VIP2024 |
| 测试码 | 内部测试 | TEST2024 |
| 活动码 | 线下活动 | MEETUP2024 |

---

## 📊 监控和分析

### Vercel Analytics
部署后自动启用：
- 页面访问量
- 首次内容绘制 (FCP)
- 最大内容绘制 (LCP)
- 累积布局偏移 (CLS)

### 查看部署日志
```bash
# 查看 Vercel 部署日志
vercel logs

# 实时查看
vercel logs --follow
```

---

## 🔄 更新部署

### 修改后重新部署
```bash
# 方式1: 使用 CLI
vercel --prod

# 方式2: 推送代码（自动部署）
git add .
git commit -m "update: 更新内容"
git push origin main
```

### 回滚部署
```bash
# 查看部署历史
vercel ls

# 回滚到上一个版本
vercel rollback
```

---

## 🌐 自定义域名

### 添加自定义域名

1. 在 Vercel Dashboard 中添加域名
2. 配置 DNS 记录：
   - 类型：CNAME
   - 名称：@（或 www）
   - 值：cname.vercel-dns.com

3. 等待 SSL 证书自动生成

### 配置示例
```
类型     名称     值                    TTL
CNAME    @       cname.vercel-dns.com  3600
CNAME    www     cname.vercel-dns.com  3600
```

---

## 📝 内测用户管理

### 统计内测用户

在前端代码中添加统计：
```typescript
// 发送到后端统计
await fetch('/api/analytics/beta-signup', {
  method: 'POST',
  body: JSON.stringify({
    code: betaCode,
    timestamp: new Date().toISOString()
  })
})
```

### 导出内测用户列表

在 Vercel Dashboard 中：
1. 进入 Settings → Environment Variables
2. 查看 Analytics 数据
3. 或连接 Google Analytics

---

## 🎨 内测页面定制

### 修改邀请码页面

编辑 `src/app/beta/page.tsx`：

```typescript
// 修改标题
<h1 className="text-3xl font-bold text-white mb-2">灵吉AI</h1>

// 修改描述
<p className="text-gray-400">企业数据智能分析平台</p>

// 修改颜色
className="bg-gradient-to-br from-blue-900 to-purple-900"
```

### 添加公司 Logo

替换 Logo 部分：
```typescript
<img
  src="/logo.png"
  alt="灵吉AI"
  className="w-16 h-16"
/>
```

---

## 🔒 安全建议

### 1. 环境变量管理
- ❌ 不要在代码中硬编码 API Key
- ✅ 使用 Vercel Environment Variables
- ✅ 使用 `.env.example` 模板

### 2. API 安全
```typescript
// 验证请求来源
const allowedOrigins = [
  'https://lingji-ai-website.vercel.app',
  'http://localhost:3000'
]

// 速率限制
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15分钟
  max: 100 // 最多100次请求
}
```

### 3. 关闭内测模式
准备公测时：
```bash
# 在 Vercel Dashboard 中
NEXT_PUBLIC_BETA_MODE = false
```

---

## 📧 内测邀请邮件模板

```
主题：🎉 你已被邀请参加灵吉AI内测

你好 [姓名]，

感谢你对灵吉AI的关注！

你已被选为我们的内测用户，可以提前体验灵吉AI的所有功能。

内测邀请码：[邀请码]
内测地址：https://lingji-ai-website.vercel.app

内测用户专享权益：
✓ 终身 8 折优惠
✓ 优先体验新功能
✓ 专属客服支持
✓ 影响产品发展方向

使用步骤：
1. 访问内测地址
2. 输入邀请码：[邀请码]
3. 完成注册

如有任何问题，请回复此邮件。

祝使用愉快！
灵吉AI团队
```

---

## 🎯 成功指标

### 内测目标
- **第1周**：50+ 内测用户
- **第1月**：200+ 内测用户
- **转化率**：10% 转化为付费用户

### 关键指标
- 邀请码使用率
- 用户留存率
- API 调用次数
- 功能使用分布
- 用户反馈数量

---

## 🆘 常见问题

### Q: 邀请码失效怎么办？
A: 检查 `src/app/beta/page.tsx` 中的 `BETA_CODES` 数组，确保邀请码正确。

### Q: 如何关闭内测模式？
A: 在 Vercel Dashboard 中设置 `NEXT_PUBLIC_BETA_MODE=false`。

### Q: 如何添加更多邀请码？
A: 编辑 `BETA_CODES` 数组，添加新的邀请码字符串。

### Q: 部署后 404 错误？
A: 检查 `vercel.json` 配置，确保路由正确。

### Q: 如何查看内测用户数据？
A: 使用 Vercel Analytics 或集成 Google Analytics。

---

## 📚 相关文档

- [Vercel 部署文档](https://vercel.com/docs)
- [Next.js 部署指南](https://nextjs.org/docs/deployment)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [项目 CLAUDE.md](./CLAUDE.md)

---

**准备好部署了吗？**

运行以下命令开始部署：
```bash
vercel --prod
```

部署成功后，你将获得一个公网访问地址，可以通过邀请码进行内测！

🎉 祝内测顺利！
