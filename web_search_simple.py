#!/usr/bin/env python3
"""
简化版 Web Search - 用于测试
如果没有安装 playwright，先运行：pip install playwright && playwright install chromium
"""

import sys

def check_dependencies():
    """检查依赖是否安装"""
    try:
        import playwright
        print("✅ Playwright 已安装")
        return True
    except ImportError:
        print("❌ Playwright 未安装")
        print("\n请运行以下命令安装：")
        print("  pip install playwright")
        print("  playwright install chromium")
        return False

if __name__ == "__main__":
    if check_dependencies():
        print("\n依赖检查通过！现在可以使用 web search skill 了。")
        print("\n使用方法：")
        print('  /web-search "你的搜索关键词"')
        sys.exit(0)
    else:
        print("\n请先安装依赖，然后再使用 web search skill。")
        sys.exit(1)
