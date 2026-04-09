import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 内测模式开关
const BETA_MODE = process.env.NEXT_PUBLIC_BETA_MODE === 'true'

// 不需要内测验证的路径
const PUBLIC_PATHS = ['/beta', '/api/auth', '/api/health']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 如果不是内测模式，直接放行
  if (!BETA_MODE) {
    return NextResponse.next()
  }

  // 公开路径直接放行
  if (PUBLIC_PATHS.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // 检查是否已通过验证
  const betaVerified = request.cookies.get('beta_verified')

  if (!betaVerified) {
    // 未验证，重定向到内测页面
    const url = request.nextUrl.clone()
    url.pathname = '/beta'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: {
    // 排除静态资源和 Next.js 内部路径
    filter: '/((?!_next/static|_next/image|favicon.ico|.*\\..*|_next).*)',
  },
}
