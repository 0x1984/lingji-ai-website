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
    <section className="border-y border-zinc-200 bg-gradient-to-r from-blue-50 to-cyan-50 py-16 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900">
      <FadeIn>
        <div className="container max-w-screen-2xl">
        {/* 数据展示 */}
        <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 sm:text-5xl">2,000+</div>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">开发者</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 sm:text-5xl">50,000+</div>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">尽调报告</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 sm:text-5xl">100,000+</div>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">小时节省</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 sm:text-5xl">99.9%</div>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">API可用性</div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* 客户Logo墙 */}
        <div className="mb-12">
          <p className="mb-6 text-center text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            已被以下企业信赖使用
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-2 transition-all hover:scale-105"
              >
                <div className="flex h-16 w-32 items-center justify-center rounded-xl border-2 border-zinc-300 bg-white px-4 shadow-sm transition-all group-hover:border-blue-400 group-hover:shadow-md dark:border-zinc-600 dark:bg-zinc-800 dark:group-hover:border-blue-500">
                  <div className="text-center">
                    <div className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {company.shortName}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* 用户评价 */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border-2 border-blue-200 bg-white p-6 shadow-lg dark:border-blue-800 dark:bg-zinc-950 sm:p-8 lg:p-10">
            <div className="mb-4 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl text-yellow-500 sm:text-3xl">★</span>
              ))}
            </div>
            <blockquote className="text-lg font-medium text-zinc-800 dark:text-zinc-200 sm:text-xl lg:text-2xl">
              "灵吉AI让我们的尽调效率提升了10倍。以前要2天的工作，现在2小时就完成了。"
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8 sm:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 sm:h-14 sm:w-14">
                <svg className="h-6 w-6 text-white sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 sm:text-lg">李律师</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">某知名律所合伙人 | 10年+企业尽调经验</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </FadeIn>
    </section>
  );
}
