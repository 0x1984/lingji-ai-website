"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/80 dark:border-zinc-200 dark:bg-white/95 dark:supports-[backdrop-filter]:bg-white/80">
      <div className="container max-w-screen-2xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo 和主导航 */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-blue-600/30">
                灵
              </div>
              <span className="hidden font-bold text-white sm:inline-block dark:text-zinc-900">
                灵吉AI
              </span>
            </Link>

            {/* 桌面端导航 */}
            <nav className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-1 text-sm font-medium">
                <Link
                  href="/#features"
                  className="rounded-lg px-3 py-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white dark:text-zinc-600 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
                >
                  产品功能
                </Link>
                <Link
                  href="/#use-cases"
                  className="rounded-lg px-3 py-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white dark:text-zinc-600 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
                >
                  使用案例
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-lg px-3 py-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white dark:text-zinc-600 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
                >
                  定价
                </Link>
                <Link
                  href="/docs"
                  className="rounded-lg px-3 py-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white dark:text-zinc-600 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
                >
                  文档
                </Link>
              </div>
            </nav>
          </div>

          {/* 右侧按钮 */}
          <div className="flex items-center gap-3">
            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-900 hover:text-white dark:text-zinc-600 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* CTA 按钮 */}
            <Link
              href="/register"
              className="hidden sm:inline-flex"
            >
              <Button
                size="sm"
                className="h-9 bg-gradient-to-r from-blue-600 to-cyan-600 px-4 text-xs font-semibold text-white shadow-lg shadow-blue-600/30 hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl"
              >
                免费获取 API Key
              </Button>
            </Link>
          </div>
        </div>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-zinc-800 py-4 dark:border-zinc-200">
            <div className="flex flex-col gap-2">
              <Link
                href="/#features"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white dark:text-zinc-600 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                产品功能
              </Link>
              <Link
                href="/#use-cases"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white dark:text-zinc-600 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                使用案例
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white dark:text-zinc-600 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                定价
              </Link>
              <Link
                href="/docs"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white dark:text-zinc-600 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                文档
              </Link>
              <Link
                href="/register"
                className="sm:hidden mt-2 inline-flex w-full justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                免费获取 API Key
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
