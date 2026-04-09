#!/bin/bash
# 灵吉AI 内测网站部署脚本

set -e

echo "🚀 开始部署灵吉AI内测网站..."
echo ""

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 检查 Vercel CLI 是否安装
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}❌ Vercel CLI 未安装${NC}"
    echo "请先安装 Vercel CLI："
    echo "  npm install -g vercel"
    echo "  vercel login"
    exit 1
fi

echo -e "${BLUE}📦 检查项目文件...${NC}"

# 检查必要文件
REQUIRED_FILES=(
    "package.json"
    "vercel.json"
    "src/app/beta/page.tsx"
    "src/middleware.ts"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo -e "${RED}❌ 缺少必要文件: $file${NC}"
        exit 1
    fi
done

echo -e "${GREEN}✅ 所有必要文件存在${NC}"
echo ""

# 检查环境变量
echo -e "${BLUE}🔧 检查环境变量...${NC}"

if [ -z "$NEXT_PUBLIC_BETA_MODE" ]; then
    echo -e "${BLUE}⚠️  NEXT_PUBLIC_BETA_MODE 未设置，使用默认值: true${NC}"
    export NEXT_PUBLIC_BETA_MODE="true"
fi

echo -e "${GREEN}✅ NEXT_PUBLIC_BETA_MODE=$NEXT_PUBLIC_BETA_MODE${NC}"
echo ""

# 构建项目
echo -e "${BLUE}🔨 构建项目...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 构建成功${NC}"
else
    echo -e "${RED}❌ 构建失败${NC}"
    exit 1
fi
echo ""

# 部署到 Vercel
echo -e "${BLUE}🚀 部署到 Vercel...${NC}"
vercel --prod

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}🎉 部署成功！${NC}"
    echo ""
    echo "📍 内测地址："
    echo "   - https://lingji-ai-website.vercel.app"
    echo "   - https://lingji-ai-beta.vercel.app"
    echo ""
    echo "🔐 测试邀请码："
    echo "   - LINGJI2024"
    echo "   - BETA001"
    echo "   - TEST2024"
    echo ""
    echo "📊 Vercel Dashboard："
    echo "   - https://vercel.com/dashboard"
    echo ""
else
    echo -e "${RED}❌ 部署失败${NC}"
    exit 1
fi
