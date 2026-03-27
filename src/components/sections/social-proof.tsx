"use client";

import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/ui/fade-in";

const companies = [
  { name: "某电商巨头", shortName: "XX电商" },
  { name: "知名红圈律所", shortName: "XX律所" },
  { name: "头部VC基金", shortName: "XX资本" },
  { name: "大型商业银行", shortName: "XX银行" },
  { name: "500强企业", shortName: "XX制造" },
  { name: "独角兽公司", shortName: "XX科技" },
];

export function SocialProof() {
  return (
    <section className="border-y border-zinc-800 bg-zinc-900 py-20 dark:border-zinc-200 dark:bg-white">
      <FadeIn>
        <div className="container max-w-screen-2xl">
        {/* 数据展示 */}
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          <div className="text-center">
            <div className="text-5xl font-semibold tracking-tight text-white dark:text-zinc-950 sm:text-6xl">2,000+</div>
            <div className="mt-3 text-sm font-medium text-zinc-400 dark:text-zinc-600 sm:text-base">开发者</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-semibold tracking-tight text-white dark:text-zinc-950 sm:text-6xl">50,000+</div>
            <div className="mt-3 text-sm font-medium text-zinc-400 dark:text-zinc-600 sm:text-base">尽调报告</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-semibold tracking-tight text-white dark:text-zinc-950 sm:text-6xl">100,000+</div>
            <div className="mt-3 text-sm font-medium text-zinc-400 dark:text-zinc-600 sm:text-base">小时节省</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-semibold tracking-tight text-white dark:text-zinc-950 sm:text-6xl">99.9%</div>
            <div className="mt-3 text-sm font-medium text-zinc-400 dark:text-zinc-600 sm:text-base">API可用性</div>
          </div>
        </div>

        <Separator className="my-12 bg-zinc-800 dark:bg-zinc-200" />

        {/* 客户Logo墙 */}
        <div className="mb-16">
          <p className="mb-8 text-center text-sm font-medium text-zinc-400 dark:text-zinc-600">
            已被以下企业信赖使用
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
              >
                <div className="flex h-16 w-32 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-200 dark:bg-zinc-100">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-zinc-200 dark:text-zinc-700">
                      {company.shortName}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-12 bg-zinc-800 dark:bg-zinc-200" />

        {/* 用户评价 */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 shadow-2xl dark:border-zinc-200 dark:from-white dark:to-zinc-50 sm:p-12 lg:p-16">
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl text-yellow-400 sm:text-3xl">★</span>
              ))}
            </div>
            <blockquote className="text-xl font-medium leading-relaxed text-white dark:text-zinc-800 sm:text-2xl lg:text-3xl">
              "灵吉AI让我们的尽调效率提升了10倍。以前要2天的工作，现在2小时就完成了。"
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10 sm:gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white sm:h-16 sm:w-16 dark:bg-blue-600">
                <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-base font-semibold text-zinc-200 dark:text-zinc-800 sm:text-lg">李律师</p>
                <p className="text-sm text-zinc-400 dark:text-zinc-600 sm:text-base">某知名律所合伙人 | 10年+企业尽调经验</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </FadeIn>
    </section>
  );
}
