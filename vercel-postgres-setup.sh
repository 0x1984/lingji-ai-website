#!/bin/bash
# 灵吉AI - Vercel Postgres 快速配置脚本

set -e

echo "🚀 灵吉AI Vercel Postgres 配置向导"
echo "=================================="
echo ""

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠️  Vercel CLI 未安装${NC}"
    echo "请先运行: npm install -g vercel"
    exit 1
fi

echo -e "${BLUE}步骤 1/5: 登录 Vercel${NC}"
if ! vercel whoami &> /dev/null; then
    vercel login
else
    echo -e "${GREEN}✅ 已登录${NC}"
fi
echo ""

echo -e "${BLUE}步骤 2/5: 连接项目${NC}"
vercel link --yes
echo ""

echo -e "${BLUE}步骤 3/5: 创建 Vercel Postgres 数据库${NC}"
echo "请访问以下链接创建数据库："
echo ""
echo "🔗 https://vercel.com/docs/storage/vercel-postgres/quickstart"
echo ""
echo "或者："
echo "1. 访问: https://vercel.com/dashboard"
echo "2. 选择项目: lingji-ai-website"
echo "3. 点击 'Storage' 标签"
echo "4. 点击 'Create Database'"
echo "5. 选择 'Postgres'"
echo "6. 选择区域: Hong Kong (或新加坡)"
echo "7. 点击 'Create'"
echo ""
read -p "按回车继续，完成数据库创建后..."
echo ""

echo -e "${BLUE}步骤 4/5: 拉取环境变量${NC}"
vercel env pull .env.local
echo -e "${GREEN}✅ 环境变量已拉取${NC}"
echo ""

echo -e "${BLUE}步骤 5/5: 部署到 Vercel${NC}"
echo "部署配置包括："
echo "  - 前端 (Next.js)"
echo "  - 后端 (FastAPI)"
echo "  - 数据库 (Vercel Postgres)"
echo ""
read -p "是否立即部署? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    vercel --prod
    echo ""
    echo -e "${GREEN}🎉 部署成功！${NC}"
    echo ""
    echo "📍 访问地址："
    vercel ls
else
    echo "稍后可以运行: vercel --prod"
fi
echo ""

echo -e "${BLUE}📊 后续操作：${NC}"
echo "1. 运行数据库迁移（如果需要）"
echo "2. 测试 API 连接"
echo "3. 配置自定义域名（可选）"
echo ""
echo "详细文档: DATABASE_DEPLOYMENT_SOLUTION.md"
