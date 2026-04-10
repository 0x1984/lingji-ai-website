# 🚀 灵吉AI 数据库部署 - 快速指南

## 📊 3 分钟快速部署（推荐）

### 最简单方案：Vercel Postgres

**为什么选择 Vercel Postgres？**
- ✅ 零配置，点击创建
- ✅ 免费额度充足（内测够用）
- ✅ 自动备份和扩容
- ✅ 与前端无缝集成

---

## ⚡ 快速开始

### 1. 创建数据库（2分钟）

1. 访问 Vercel Dashboard：https://vercel.com/dashboard
2. 选择项目：`lingji-ai-website`
3. 点击 **"Storage"** 标签
4. 点击 **"Create Database"**
5. 选择 **"Postgres"**
6. 选择区域：**Hong Kong** (离国内最近)
7. 点击 **"Create"**

### 2. 获取连接信息（自动完成）

Vercel 会自动添加以下环境变量到你的项目：

```
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_HOST=
POSTGRES_DATABASE=
```

### 3. 代码已就绪（0分钟）

✅ 代码已经支持 Vercel Postgres，无需修改！

我们已经更新了：
- `backend/app/core/config.py` - 自动识别 Vercel 环境变量
- `backend/app/db/session.py` - 使用正确的连接字符串

### 4. 部署（1分钟）

```bash
# 方式1: 使用脚本
chmod +x vercel-postgres-setup.sh
./vercel-postgres-setup.sh

# 方式2: 手动部署
vercel --prod
```

---

## ✅ 验证部署

### 测试数据库连接

部署后，访问：
```
https://lingji-ai-website.vercel.app/api/health
```

应该返回：
```json
{"status": "healthy", "database": "connected"}
```

### 测试内测功能

1. 访问：https://lingji-ai-website.vercel.app
2. 自动跳转到 `/beta`
3. 输入邀请码：`LINGJI2024`
4. 完成登录

---

## 📊 数据库管理

### 查看数据库

1. 访问 Vercel Dashboard
2. 进入项目 → Storage
3. 点击数据库名称
4. 可以：
   - 查看连接信息
   - 浏览数据表
   - 执行 SQL 查询
   - 查看性能指标

### 本地开发连接

```bash
# 拉取 Vercel 环境变量到本地
vercel env pull .env.local

# 启动本地服务（使用云端数据库）
cd backend
./venv/bin/uvicorn app.main:app --reload
```

---

## 🎯 免费额度

Vercel Postgres 免费套餐包括：

| 资源 | 免费额度 | 内测阶段需求 |
|------|----------|--------------|
| 存储 | 5GB | ✅ 足够 |
| 计算时间 | 60小时/月 | ✅ 足够 |
| 数据行 | 10,000行 | ✅ 足够 |
| 同时连接 | 15个 | ✅ 足够 |

**估算**：
- 1000 用户 × 100 条记录/用户 = 100,000 行
- 超出免费额度，但前期完全够用

---

## 💰 成本预测

### 内测阶段（1-3个月）
- **成本**：$0/月
- **支持**：1000 用户，10万条记录

### 正式运营（3个月后）
如果超出免费额度：

**Hobby Plan**: $20/月
- 存储：256GB
- 计算时间：无限制
- 同时连接：60个

**Pro Plan**: $100/月
- 存储：512GB
- 计算时间：无限制
- 同时连接：200个
- 自动备份

---

## 🔧 高级配置

### 查看实时日志

```bash
vercel logs --follow
```

### 数据库备份

Vercel Postgres 自动备份：
- 连续备份（Point-in-Time Recovery）
- 保留7天（Hobby Plan）
- 保留30天（Pro Plan）

### 连接池优化

Vercel Postgres Prisma URL 自动包含连接池：
- 最多 15 个并发连接
- 连接复用
- 超时自动释放

---

## 🆘 故障排查

### 问题1：数据库连接失败

**症状**：API 返回 500 错误

**解决方案**：
```bash
# 检查环境变量
vercel env ls

# 确认 POSTGRES_PRISMA_URL 存在
```

### 问题2：数据库未初始化

**症状**：表不存在错误

**解决方案**：
```bash
# 运行迁移
cd backend
./venv/bin/alembic upgrade head
```

### 问题3：连接超时

**症状**：API 响应慢

**解决方案**：
- 使用 Prisma URL（包含连接池）
- 减少 `pool_size` 到 5
- 启用查询缓存

---

## 📚 相关文档

- [完整部署方案](./DATABASE_DEPLOYMENT_SOLUTION.md)
- [Vercel Postgres 文档](https://vercel.com/docs/storage/vercel-postgres)
- [内测部署指南](./BETA_DEPLOYMENT_GUIDE.md)

---

## 🎉 总结

**现在你有了一个完整的解决方案：**

✅ **前端**：Vercel (Next.js)
✅ **后端**：Vercel (FastAPI Serverless)
✅ **数据库**：Vercel Postgres
✅ **内测保护**：邀请码系统
✅ **部署脚本**：一键部署

**总耗时**：10分钟
**总成本**：$0/月（内测阶段）

---

**准备开始了吗？**

只需 3 步：
1. 访问 https://vercel.com/dashboard
2. 创建 Postgres 数据库
3. 运行 `vercel --prod`

就这么简单！🚀
