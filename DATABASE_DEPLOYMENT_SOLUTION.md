# 灵吉AI 后端数据库部署方案

## 🎯 推荐方案：Vercel Postgres (最简单)

### 为什么选择 Vercel Postgres？
- ✅ **零配置**：一键创建，自动管理
- ✅ **免费额度**：60小时计算时间/月，5GB 存储
- ✅ **自动扩容**：根据负载自动调整
- ✅ **全球边缘**：数据靠近用户
- ✅ **与 Vercel 深度集成**：无需额外配置
- ✅ **开发友好**：支持本地开发、预览环境

---

## 🚀 快速开始（5分钟部署）

### 步骤1：创建 Vercel Postgres 数据库

1. 访问 Vercel Dashboard：https://vercel.com/dashboard
2. 选择你的项目：`lingji-ai-website`
3. 点击 "Storage" 标签
4. 点击 "Create Database"
5. 选择 "Postgres" → "Continue"
6. 选择区域：`Hong Kong` (或其他亚洲区域)
7. 点击 "Create"

### 步骤2：获取连接信息

创建后，Vercel 会自动添加以下环境变量：

```bash
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
```

### 步骤3：更新后端代码

由于 Vercel Postgres 使用 `postgres://` 协议，我们需要修改连接字符串格式：

```python
# backend/app/core/config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Vercel Postgres 环境变量
    POSTGRES_URL: str = ""
    POSTGRES_USER: str = ""
    POSTGRES_PASSWORD: str = ""
    POSTGRES_HOST: str = ""
    POSTGRES_DATABASE: str = ""
    POSTGRES_PRISMA_URL: str = ""  # 包含连接池的 URL

    @property
    def DATABASE_URL(self) -> str:
        """优先使用 Vercel Postgres URL"""
        if self.POSTGRES_URL:
            return self.POSTGRES_URL.replace("postgresql://", "postgresql+asyncpg://")
        if self.POSTGRES_PRISMA_URL:
            return self.POSTGRES_PRISMA_URL.replace("postgresql://", "postgresql+asyncpg://")
        # 本地开发回退
        return os.getenv("DATABASE_URL", "postgresql+asyncpg://xiejianyun@localhost/compdata_ai")

settings = Settings()
```

### 步骤4：运行数据库迁移

在 Vercel 项目根目录创建迁移脚本：

```bash
# scripts/migrate.sh
#!/bin/bash
cd backend
python -m alembic upgrade head
```

### 步骤5：部署后端

Vercel 会自动识别 `backend/` 目录并部署为 Serverless Functions。

---

## 📊 完整架构

```
┌─────────────────────────────────────────┐
│         Vercel 前端 (Next.js)            │
│    https://lingji-ai-website.vercel.app  │
└────────────┬────────────────────────────┘
             │
             │ API 调用
             ▼
┌─────────────────────────────────────────┐
│      Vercel Serverless Functions        │
│         (FastAPI 后端)                  │
│    /api/v1/* → backend/app/api/*        │
└────────────┬────────────────────────────┘
             │
             │ 数据查询
             ▼
┌─────────────────────────────────────────┐
│         Vercel Postgres                 │
│      (托管数据库)                       │
│  - 自动备份                             │
│  - 连接池管理                           │
│  - 边缘缓存                             │
└─────────────────────────────────────────┘
```

---

## 🔧 配置文件

### vercel.json (更新)

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["hkg1"],
  "env": {
    "NEXT_PUBLIC_API_URL": "https://lingji-ai-website.vercel.app",
    "NEXT_PUBLIC_BETA_MODE": "true"
  },
  "builds": [
    {
      "src": "backend/app/**/*.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/api/v1/(.*)",
      "dest": "/backend/app/api/$1"
    }
  ]
}
```

### backend/requirements.txt (更新)

```txt
# FastAPI
fastapi==0.115.0
uvicorn[standard]==0.30.0

# Database
sqlalchemy==2.0.35
asyncpg==0.29.0
alembic==1.13.0
psycopg2-binary==2.9.9

# Vercel SDK (可选)
vercel==0.3.1

# 其他依赖...
```

---

## 🎯 其他简单方案对比

### 方案2：Neon (Serverless PostgreSQL)

**优势**：
- 免费额度：0.5GB 存储，191小时计算/月
- 自动暂停/启动（节省成本）
- Branch 功能（开发/测试环境）
- 兼容 PostgreSQL 15

**部署步骤**：
1. 访问 https://neon.tech
2. 创建项目
3. 获取连接字符串
4. 在 Vercel 中添加环境变量：`DATABASE_URL`
5. 部署

### 方案3：Supabase (PostgreSQL + Auth)

**优势**：
- 免费额度：500MB 数据库，2GB 流量
- 内置用户认证（可替代我们自己实现）
- 实时订阅功能
- Dashboard 可视化管理

**部署步骤**：
1. 访问 https://supabase.com
2. 创建项目
3. 使用 Supabase Auth（替代我们的登录系统）
4. 在 Vercel 中添加环境变量

### 方案4：Railway (全栈部署)

**优势**：
- 一键部署 PostgreSQL + Redis
- 免费额度：$5/月额度
- 简单的 Dashboard
- 支持多种服务

**部署步骤**：
1. 访问 https://railway.app
2. 新建项目
3. 添加 PostgreSQL 服务
4. 添加 Redis 服务
5. 获取连接字符串
6. 在 Vercel 中配置环境变量

---

## 💰 成本对比

| 方案 | 免费额度 | 超出费用 | 推荐场景 |
|------|----------|----------|----------|
| **Vercel Postgres** | 60小时/月 | $0.15/GB | 🔥 最推荐 |
| **Neon** | 0.5GB + 191小时 | $0.19/GB | 开发/小项目 |
| **Supabase** | 500MB + 2GB流量 | $0.125/MB | 需要 Auth |
| **Railway** | $5/月额度 | 按使用量 | 全栈部署 |

---

## 🚀 我的推荐：混合方案

### 内测阶段（现在）
```
前端：Vercel (免费)
后端：Vercel Serverless Functions (免费额度)
数据库：Vercel Postgres (免费额度)
```

**成本**：$0/月
**适合**：< 1000 用户，< 10,000 API 调用/天

### 正式运营阶段（3个月后）
```
前端：Vercel Pro ($20/月)
后端：Railway 或 Fly.io ($10-30/月)
数据库：Vercel Postgres Pro ($20/月) 或 Neon ($29/月)
```

**成本**：$50-70/月
**适合**：< 10,000 用户，< 100,000 API 调用/天

### 规模扩展阶段
```
前端：Vercel Pro + CDN
后端：Kubernetes 或 AWS ECS
数据库：AWS RDS 或 Google Cloud SQL
```

**成本**：$500+/月
**适合**：大规模用户

---

## 🎯 快速实施方案（今天就能上线）

### 最简单方案：Vercel Postgres

**总耗时**：30分钟

**步骤**：
1. 在 Vercel 创建 Postgres 数据库 (5分钟)
2. 更新后端配置文件 (5分钟)
3. 运行数据库迁移 (10分钟)
4. 部署到 Vercel (10分钟)

**无需**：
- ❌ 配置服务器
- ❌ 安装数据库软件
- ❌ 设置防火墙
- ❌ 配置域名
- ❌ 管理 SSL 证书

---

## 📝 下一步行动

### 选项A：我帮你配置 Vercel Postgres
告诉我，我会提供：
1. 详细的配置步骤
2. 需要修改的代码
3. 一键部署脚本

### 选项B：使用其他方案
告诉我你想用哪个：
- Neon（更灵活）
- Supabase（自带 Auth）
- Railway（全栈托管）

### 选项C：先跳过数据库
可以先部署前端（静态页面），后端 API 稍后添加

---

**你想用哪种方案？** 我推荐 **Vercel Postgres**，因为最简单且与前端部署无缝集成。
