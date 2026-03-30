# Python + FastAPI 后端实施计划

**基于 fullstack-prime 项目的深度分析**

**创建时间**: 2026-03-30
**分析方法**: Systematic Debugging (Phase 1: Root Cause Investigation)

---

## 📊 项目分析总结

### 源项目架构 (TypeScript + Elysia)

**技术栈:**
- **框架**: Elysia (TypeScript Web Framework)
- **ORM**: Drizzle ORM
- **数据库**: PostgreSQL 16
- **缓存**: Redis 7
- **认证**: JWT + API Key
- **日志**: Pino + 文件系统

**核心功能模块:**
1. 用户认证系统（手机号 + 短信验证码）
2. API Key 管理（CRUD 操作）
3. API 代理网关（转发到内部服务）
4. 双层限流系统（基础限流 + 工具调用限流）
5. API 调用日志记录和统计

**数据库 Schema:**
```typescript
// 用户表
users {
  id: UUID (主键)
  phone: varchar(11) (唯一)
  apiKeys: jsonb [{ key_name, key, createdAt }]
  meta: jsonb
  createdAt: timestamp
}

// API 调用日志表
apiCallLogs {
  id: serial (主键)
  timestamp: timestamp
  traceId: varchar
  requestPayload: jsonb
  responsePayload: jsonb
  apiKey: varchar
  userId: UUID
  statusCode: integer
  path: text
  method: varchar
}

// 咨询表
consultations {
  id: serial (主键)
  name: text
  contact: text
  message: text
  createdAt: timestamp
}
```

---

## 🐍 Python 技术栈选择

### 核心框架
- **FastAPI 0.115+**: 现代化、高性能的 Web 框架
  - 自动生成 OpenAPI 文档
  - 类型提示和数据验证
  - 异步支持

### 数据库层
- **SQLAlchemy 2.0+**: Python ORM
  - 类型安全的 ORM 查询
  - 异步支持
  - 自动迁移

- **Alembic**: 数据库迁移工具

### 认证和安全
- **FastAPI Users**: 完整的用户认证系统
  - JWT 认证
  - 用户管理
  - API Key 认证

- **Passlib + bcrypt**: 密码加密（如果需要）

### 缓存和限流
- **Redis**: 缓存和限流存储
  - `redis-py` (同步)
  - `hiredis` (异步)

- **SlowAPI**: FastAPI 限流中间件
  - 基于内存的限流
  - 可自定义存储后端

### 数据验证
- **Pydantic v2**: 数据验证和序列化
  - 请求体验证
  - 响应序列化
  - 自动生成 JSON Schema

### HTTP 客户端
- **httpx**: 异步 HTTP 客户端
  - 用于 API 代理请求转发

### 其他工具
- **python-jose[cryptography]**: JWT 处理
- **alembic**: 数据库迁移
- **pytest**: 测试框架
- **black**: 代码格式化
- **ruff**: 快速 linter

---

## 📁 项目结构设计

```
backend/
├── app/
│   ├── main.py                 # FastAPI 应用入口
│   ├── config.py               # 配置管理（环境变量）
│   ├── dependencies.py         # 依赖注入
│   │
│   ├── api/                    # API 路由
│   │   ├── __init__.py
│   │   ├── auth.py             # 认证路由（/auth）
│   │   ├── users.py            # 用户管理（/user）
│   │   ├── api_keys.py         # API Key 管理
│   │   ├── usage.py            # 用量统计（/usage）
│   │   └── proxy.py            # API 代理（/api）
│   │
│   ├── core/                   # 核心功能
│   │   ├── __init__.py
│   │   ├── config.py           # 配置定义
│   │   ├── security.py         # 安全相关（JWT、密码）
│   │   ├── rate_limit.py       # 限流逻辑
│   │   └── logger.py           # 日志系统
│   │
│   ├── models/                 # SQLAlchemy 模型
│   │   ├── __init__.py
│   │   ├── user.py             # User 模型
│   │   ├── api_key.py          # APIKey 模型
│   │   ├── api_log.py          # APILog 模型
│   │   └── base.py             # 基础模型类
│   │
│   ├── schemas/                # Pydantic 模型（请求/响应）
│   │   ├── __init__.py
│   │   ├── auth.py             # 认证相关 Schema
│   │   ├── user.py             # 用户相关 Schema
│   │   ├── api_key.py          # API Key Schema
│   │   └── common.py           # 通用 Schema
│   │
│   ├── services/               # 业务逻辑层
│   │   ├── __init__.py
│   │   ├── auth_service.py     # 认证服务
│   │   ├── user_service.py     # 用户服务
│   │   ├── sms_service.py      # 短信服务
│   │   ├── captcha_service.py  # 验证码服务
│   │   └── usage_service.py    # 用量统计服务
│   │
│   ├── crud/                   # 数据库 CRUD 操作
│   │   ├── __init__.py
│   │   ├── user.py             # 用户 CRUD
│   │   └── api_log.py          # 日志 CRUD
│   │
│   ├── middleware/             # 中间件
│   │   ├── __init__.py
│   │   ├── auth.py             # 认证中间件
│   │   ├── rate_limit.py       # 限流中间件
│   │   └── logging.py          # 日志中间件
│   │
│   ├── utils/                  # 工具函数
│   │   ├── __init__.py
│   │   ├── redis.py            # Redis 客户端
│   │   └── helpers.py          # 辅助函数
│   │
│   └── db/                     # 数据库相关
│       ├── __init__.py
│       ├── session.py          # 数据库会话
│       └── base.py             # 基础配置
│
├── alembic/                    # 数据库迁移
│   ├── versions/
│   └── env.py
│
├── tests/                      # 测试
│   ├── test_auth.py
│   ├── test_api_keys.py
│   ├── test_rate_limit.py
│   └── conftest.py
│
├── requirements.txt            # 依赖
├── .env.example                # 环境变量示例
├── Dockerfile                  # Docker 配置
└── README.md                   # 项目说明
```

---

## 🎯 实施阶段划分

### 阶段 1: 基础架构搭建（3-5天）

#### 任务 1.1: 项目初始化
- [ ] 创建项目目录结构
- [ ] 配置虚拟环境（python -m venv venv）
- [ ] 安装依赖包
- [ ] 配置 pre-commit hooks（black, ruff）
- [ ] 创建 .env.example 文件

**可交付成果**: 可运行的项目骨架

#### 任务 1.2: 数据库配置
- [ ] 配置 SQLAlchemy + AsyncPG
- [ ] 创建数据库会话管理
- [ ] 配置 Alembic
- [ ] 创建初始迁移脚本
- [ ] 测试数据库连接

**可交付成果**: 可连接的数据库

#### 任务 1.3: 基础模型定义
- [ ] 创建 User 模型
- [ ] 创建 APIKey 模型
- [ ] 创建 APILog 模型
- [ ] 配置模型关系
- [ ] 生成并运行迁移

**可交付成果**: 数据库表结构

#### 任务 1.4: Pydantic Schemas
- [ ] 创建认证相关 Schema
- [ ] 创建用户管理 Schema
- [ ] 创建 API Key Schema
- [ ] 创建通用响应 Schema
- [ ] 测试验证逻辑

**可交付成果**: 完整的数据验证层

#### 任务 1.5: 基础中间件
- [ ] 创建 CORS 中间件
- [ ] 创建请求日志中间件
- [ ] 创建错误处理中间件
- [ ] 创建 Trace ID 中间件

**可交付成果**: 可复用的中间件系统

---

### 阶段 2: 认证系统实现（5-7天）

#### 任务 2.1: JWT 认证基础
- [ ] 安装 fastapi-users
- [ ] 配置 JWT 认证
- [ ] 创建用户数据库适配器
- [ ] 实现 JWT 生成和验证
- [ ] 编写单元测试

**可交付成果**: JWT 认证系统

#### 任务 2.2: 短信验证码服务
- [ ] 配置腾讯云短信 SDK
- [ ] 实现短信发送逻辑
- [ ] 实现验证码生成和存储（Redis）
- [ ] 添加发送限流（5分钟10次）
- [ ] 编写单元测试

**可交付成果**: 短信验证码服务

#### 任务 2.3: 图形验证码服务
- [ ] 配置阿里云验证码服务
- [ ] 实现验证码校验逻辑
- [ ] 集成到登录流程
- [ ] 编写单元测试

**可交付成果**: 图形验证码服务

#### 任务 2.4: 认证 API 实现
- [ ] POST /auth/send-code
- [ ] POST /auth/login
- [ ] GET /auth/me (获取当前用户)
- [ ] 集成所有中间件
- [ ] 编写集成测试

**可交付成果**: 完整的认证 API

---

### 阶段 3: API Key 管理系统（4-5天）

#### 任务 3.1: API Key 生成逻辑
- [ ] 实现 32 字节随机 Key 生成
- [ ] 创建 API Key 存储逻辑
- [ ] 实现 API Key 显示（脱敏）
- [ ] 编写单元测试

**可交付成果**: API Key 生成服务

#### 任务 3.2: API Key CRUD API
- [ ] POST /user/create_key
- [ ] GET /user/list_keys
- [ ] PUT /user/update_key
- [ ] DELETE /user/delete_key
- [ ] 编写集成测试

**可交付成果**: API Key 管理 API

#### 任务 3.3: API Key 认证中间件
- [ ] 创建 X-API-Key 头提取
- [ ] 实现 API Key 验证逻辑
- [ ] 集成到路由保护
- [ ] 编写单元测试

**可交付成果**: API Key 认证中间件

---

### 阶段 4: 限流系统（3-4天）

#### 任务 4.1: Redis 集成
- [ ] 配置 Redis 连接
- [ ] 创建 Redis 客户端单例
- [ ] 实现健康检查
- [ ] 编写连接测试

**可交付成果**: Redis 连接

#### 任务 4.2: 双层限流实现
- [ ] 实现基础限流（100次/分钟）
- [ ] 实现工具限流（500次/天）
- [ ] 实现 VIP 用户识别
- [ ] 创建限流依赖注入
- [ ] 编写单元测试

**可交付成果**: 限流系统

#### 任务 4.3: 限流 API 集成
- [ ] 集成到 /api/* 路由
- [ ] 添加限流响应头
- [ ] 编写集成测试

**可交付成果**: 启用的限流系统

---

### 阶段 5: API 代理系统（4-5天）

#### 任务 5.1: HTTP 客户端配置
- [ ] 配置 httpx 异步客户端
- [ ] 实现请求转发逻辑
- [ ] 实现响应处理
- [ ] 添加超时和重试逻辑
- [ ] 编写单元测试

**可交付成果**: HTTP 客户端

#### 任务 5.2: API 代理路由
- [ ] 实现 /api/* 代理
- [ ] 添加认证注入（X-API-Key, X-User-ID）
- [ ] 实现路径重写
- [ ] 实现查询参数转发
- [ ] 编写集成测试

**可交付成果**: API 代理

#### 任务 5.3: 日志记录
- [ ] 实现请求/响应日志记录
- [ ] 记录到数据库（api_call_logs 表）
- [ ] 添加性能计时
- [ ] 编写单元测试

**可交付成果**: 日志系统

---

### 阶段 6: 用量统计系统（3-4天）

#### 任务 6.1: 日志查询服务
- [ ] 实现按 API Key 查询
- [ ] 实现按时间范围查询
- [ ] 实现分页
- [ ] 编写单元测试

**可交付成果**: 日志查询服务

#### 任务 6.2: 日统计 API
- [ ] 实现 GET /user/usage/daily-by-api-key
- [ ] 实现日期序列生成
- [ ] 实现数据聚合
- [ ] 编写集成测试

**可交付成果**: 日统计 API

---

### 阶段 7: 测试和文档（3-4天）

#### 任务 7.1: 单元测试
- [ ] 测试所有服务层
- [ ] 测试所有 CRUD 操作
- [ ] 测试所有中间件
- [ ] 目标覆盖率 >80%

#### 任务 7.2: 集成测试
- [ ] 测试完整登录流程
- [ ] 测试 API Key 生命周期
- [ ] 测试限流逻辑
- [ ] 测试 API 代理

#### 任务 7.3: API 文档
- [ ] 配置 FastAPI 自动文档
- [ ] 添加详细描述
- [ ] 添加示例
- [ ] 生成 OpenAPI schema

#### 任务 7.4: README 文档
- [ ] 安装说明
- [ ] 配置说明
- [ ] API 使用指南
- [ ] 部署指南

---

## 🔄 使用 Subagent-Driven Development

### 工作流程

```bash
# 1. 创建任务列表
使用 TodoCreate 工具创建所有任务

# 2. 对每个任务:
a) 使用 Agent tool 启动 subagent
   - subagent_type: "general-purpose"
   - 提供详细的任务描述和上下文

b) Subagent 实现代码并自测

c) 请求 code review
   - 使用 requesting-code-review

d) 修复 review 发现的问题

e) 标记任务完成
   - 使用 TaskUpdate 标记为 completed

# 3. 所有任务完成后
a) 最终 code review
b) 集成测试
c) 部署
```

### 第一个任务示例

**任务 1.1: 项目初始化**

```python
# Agent Prompt:
"""
你是 FastAPI 专家。请初始化一个 Python + FastAPI 项目。

**项目信息:**
- 项目名称: lingji-ai-backend
- 框架: FastAPI 0.115+
- Python 版本: 3.11+
- ORM: SQLAlchemy 2.0+
- 数据库: PostgreSQL 16

**任务要求:**
1. 创建完整的项目目录结构
2. 配置 pyproject.toml 或 requirements.txt
3. 配置 .gitignore
4. 配置 black 和 ruff
5. 创建 .env.example 文件
6. 创建 README.md
7. 创建 Dockerfile

**重要:**
- 使用最新的 FastAPI 最佳实践
- 遵循 PEP 8 代码规范
- 添加详细的注释
- 测试项目可以成功运行

完成后请报告：
1. 创建了哪些文件
2. 遇到了什么问题
3. 如何验证项目正确初始化
"""
```

---

## 📦 核心依赖包

```txt
# FastAPI 和服务器
fastapi==0.115.0
uvicorn[standard]==0.30.0
python-multipart==0.0.9

# 数据库
sqlalchemy==2.0.35
asyncpg==0.29.0
alembic==1.13.0

# 认证
fastapi-users==0.14.0
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4

# 数据验证
pydantic==2.9.0
pydantic-settings==2.6.0
email-validator==2.1.0

# Redis
redis==5.0.7
hiredis==2.4.0

# HTTP 客户端
httpx==0.27.0

# 限流
slowapi==0.1.9

# 日志
loguru==0.7.2

# 测试
pytest==8.3.0
pytest-asyncio==0.23.0
httpx==0.27.0

# 代码质量
black==24.10.0
ruff==0.7.0
mypy==1.13.0

# 环境变量
python-dotenv==1.0.1
```

---

## 🗄️ 数据库模型映射

### SQLAlchemy 模型定义

```python
# app/models/user.py
from sqlalchemy import Column, String, DateTime, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.db.base import Base

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    phone = Column(String(11), unique=True, index=True, nullable=False)
    api_keys = Column(JSON, nullable=False, default=list)
    meta = Column(JSON, nullable=False, default=dict)
    created_at = Column(DateTime(timezone=True), nullable=False)

    # 关系
    api_logs = relationship("APILog", back_populates="user")

# app/models/api_log.py
class APILog(Base):
    __tablename__ = "api_call_logs"

    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(DateTime(timezone=True), nullable=False, index=True)
    trace_id = Column(String(255), nullable=False)
    request_payload = Column(JSON)
    response_payload = Column(JSON)
    api_key = Column(String(255), nullable=False, index=True)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False, index=True)
    status_code = Column(Integer, nullable=False)
    path = Column(String, nullable=False)
    method = Column(String(10), nullable=False)

    # 关系
    user = relationship("User", back_populates="api_logs")
```

---

## 🔐 认证系统设计

### JWT 配置

```python
# app/core/security.py
from datetime import datetime, timedelta
from jose import jwt
from app.core.config import settings

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.JWT_SECRET, algorithm="HS256")
    return encoded_jwt

def verify_token(token: str) -> dict:
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=["HS256"])
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials"
        )
```

---

## ⚡ 限流系统设计

### Redis 限流实现

```python
# app/core/rate_limit.py
from fastapi import Request, HTTPException
from app.utils.redis import redis_client

class RateLimiter:
    def __init__(self):
        self.basic_limit = 100  # 100次/分钟
        self.tool_limit = 500    # 500次/天

    async def check_rate_limit(self, user_id: str, path: str):
        """双层限流检查"""
        # 1. 基础限流（100次/分钟）
        basic_key = f"rate_limit_basic:{user_id}"
        basic_count = await redis_client.incr(basic_key)

        if basic_count == 1:
            await redis_client.expire(basic_key, 60)

        if basic_count > self.basic_limit:
            raise HTTPException(
                status_code=429,
                detail="请求过于频繁，请稍后再试"
            )

        # 2. 工具限流（500次/天）
        tool_category = path.split('/')[1] if '/' in path else 'unknown'
        tool_key = f"rate_limit_tool:{user_id}:{tool_category}"
        tool_count = await redis_client.incr(tool_key)

        if tool_count == 1:
            await redis_client.expire(tool_key, 86400)  # 24小时

        if tool_count > self.tool_limit:
            raise HTTPException(
                status_code=429,
                detail=f"工具 {tool_category} 每日调用次数已达上限"
            )

rate_limiter = RateLimiter()
```

---

## 🚀 下一步行动

### 立即可执行

我已经准备好开始实施。请确认以下内容：

1. **从哪个阶段开始？**
   - 建议：阶段 1（基础架构搭建）

2. **是否立即开始？**
   - 我将使用 Subagent-Driven Development 方法
   - 每个任务使用独立的 subagent
   - 完成后请求 code review

3. **是否需要我创建第一个 subagent？**
   - 任务 1.1: 项目初始化

**请确认后，我将立即开始实施！**
