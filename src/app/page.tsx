import { Header } from "@/components/header/header";
import { HeroSection } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { ProductDemo } from "@/components/sections/product-demo";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <ProductDemo />
        <PricingPreview />
        <FAQ />
      </main>
      <footer className="border-t border-zinc-800 bg-zinc-950 py-12 dark:border-zinc-200 dark:bg-white">
        <div className="container max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* 品牌区 */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-base font-bold text-white shadow-lg">
                  灵
                </div>
                <span className="text-lg font-bold text-white dark:text-zinc-900">
                  灵吉AI
                </span>
              </div>
              <p className="mb-6 text-sm text-zinc-400 dark:text-zinc-600 max-w-xs">
                企业数据，AI原生。在 Claude Code 中一键完成企业尽调。
              </p>
            </div>

            {/* 使用场景 */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white dark:text-zinc-900">使用场景</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#risk-summary" className="text-sm text-zinc-400 transition-colors hover:text-blue-400 dark:text-zinc-600 dark:hover:text-blue-600">
                    风险评估
                  </a>
                </li>
                <li>
                  <a href="#ownership-chain" className="text-sm text-zinc-400 transition-colors hover:text-purple-400 dark:text-zinc-600 dark:hover:text-purple-600">
                    股权穿透
                  </a>
                </li>
                <li>
                  <a href="#due-diligence" className="text-sm text-zinc-400 transition-colors hover:text-orange-400 dark:text-zinc-600 dark:hover:text-orange-600">
                    完整尽调
                  </a>
                </li>
              </ul>
            </div>

            {/* 产品 */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white dark:text-zinc-900">产品</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-zinc-400 transition-colors hover:text-white dark:text-zinc-600 dark:hover:text-zinc-900">
                    功能
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-zinc-400 transition-colors hover:text-white dark:text-zinc-600 dark:hover:text-zinc-900">
                    定价
                  </a>
                </li>
                <li>
                  <a href="/docs" className="text-sm text-zinc-400 transition-colors hover:text-white dark:text-zinc-600 dark:hover:text-zinc-900">
                    文档
                  </a>
                </li>
              </ul>
            </div>

            {/* 公司 */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white dark:text-zinc-900">公司</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-sm text-zinc-400 transition-colors hover:text-white dark:text-zinc-600 dark:hover:text-zinc-900">
                    关于我们
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm text-zinc-400 transition-colors hover:text-white dark:text-zinc-600 dark:hover:text-zinc-900">
                    联系我们
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-sm text-zinc-400 transition-colors hover:text-white dark:text-zinc-600 dark:hover:text-zinc-900">
                    隐私政策
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 底部版权 */}
          <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-200">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
              <p>&copy; 2026 灵吉AI. All rights reserved.</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs">系统正常运行</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
