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
      <footer className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="container max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold text-zinc-950 dark:text-zinc-50">灵吉AI</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                企业数据，AI原生
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-zinc-950 dark:text-zinc-50">产品</h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><a href="#features" className="hover:text-zinc-950 dark:hover:text-zinc-50">功能</a></li>
                <li><a href="#pricing" className="hover:text-zinc-950 dark:hover:text-zinc-50">定价</a></li>
                <li><a href="/docs" className="hover:text-zinc-950 dark:hover:text-zinc-50">文档</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-zinc-950 dark:text-zinc-50">公司</h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><a href="/about" className="hover:text-zinc-950 dark:hover:text-zinc-50">关于我们</a></li>
                <li><a href="/blog" className="hover:text-zinc-950 dark:hover:text-zinc-50">博客</a></li>
                <li><a href="/contact" className="hover:text-zinc-950 dark:hover:text-zinc-50">联系我们</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-zinc-950 dark:text-zinc-50">法律</h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><a href="/privacy" className="hover:text-zinc-950 dark:hover:text-zinc-50">隐私政策</a></li>
                <li><a href="/terms" className="hover:text-zinc-950 dark:hover:text-zinc-50">服务条款</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            <p>&copy; 2026 灵吉AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
