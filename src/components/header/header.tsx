import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-black/95 dark:supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-bold text-white">
              灵
            </div>
            <span className="hidden font-bold sm:inline-block">
              灵吉AI
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 sm:flex dark:text-zinc-400">
            <Link
              href="#features"
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              产品
            </Link>
            <Link
              href="#pricing"
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              定价
            </Link>
            <Link
              href="/docs"
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              文档
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="#register"
            className="inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 bg-blue-600 px-3 text-xs font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 sm:bg-gradient-to-r sm:px-4 sm:text-sm sm:hover:from-blue-700 sm:hover:to-cyan-700"
          >
            <span className="sm:hidden">API Key</span>
            <span className="hidden sm:inline">免费获取API Key</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
