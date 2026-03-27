"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

export function PricingPreview() {
  return (
    <section id="pricing" className="bg-zinc-900 py-24 dark:bg-zinc-100">
      <FadeIn>
        <div className="container max-w-screen-2xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl dark:text-zinc-950">
              简单透明的定价
            </h2>
            <p className="mb-12 text-xl text-zinc-400 dark:text-zinc-600">
              免费开始，按需升级
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
            {/* 免费版 */}
            <Card className="border-zinc-800 bg-zinc-950 dark:border-zinc-200 dark:bg-white">
              <CardHeader>
                <CardTitle className="text-zinc-100 dark:text-zinc-900">免费版</CardTitle>
                <CardDescription className="text-zinc-400 dark:text-zinc-600">适合个人试用</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white dark:text-zinc-950">¥0</span>
                  <span className="text-zinc-500 dark:text-zinc-500">/月</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    10次/日查询
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    基础信息查询
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    社区支持
                  </li>
                  <li className="flex items-center gap-2 text-zinc-600 dark:text-zinc-500">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    股权穿透
                  </li>
                  <li className="flex items-center gap-2 text-zinc-600 dark:text-zinc-500">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    关联关系分析
                  </li>
                </ul>
                <Separator className="bg-zinc-800 dark:bg-zinc-200" />
                <Link href="#register">
                  <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white dark:border-zinc-300 dark:text-zinc-700 dark:hover:bg-zinc-100">
                    开始使用
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 专业版 */}
            <Card className="border-2 border-blue-600 bg-zinc-950 shadow-xl shadow-blue-600/20 dark:border-blue-600 dark:bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-zinc-100 dark:text-zinc-900">专业版</CardTitle>
                  <Badge className="bg-blue-600 text-white dark:bg-blue-600">推荐</Badge>
                </div>
                <CardDescription className="text-zinc-400 dark:text-zinc-600">适合中小企业和专业服务</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white dark:text-zinc-950">¥299</span>
                  <span className="text-zinc-500 dark:text-zinc-500">/月</span>
                  <div className="mt-2 text-xs">
                    首月优惠 <span className="font-semibold text-blue-400 dark:text-blue-600">¥199</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    100次/日查询
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    9个Commands全部
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    股权穿透(3层)
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    关联关系分析
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    风险评估报告
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    优先支持(24小时)
                  </li>
                </ul>
                <Separator className="bg-zinc-800 dark:bg-zinc-200" />
                <Link href="#register">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30">
                    开始使用
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 企业版 */}
            <Card className="border-zinc-800 bg-zinc-950 dark:border-zinc-200 dark:bg-white">
              <CardHeader>
                <CardTitle className="text-zinc-100 dark:text-zinc-900">企业版</CardTitle>
                <CardDescription className="text-zinc-400 dark:text-zinc-600">适合大型企业和投资机构</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white dark:text-zinc-950">¥5,999</span>
                  <span className="text-zinc-500 dark:text-zinc-500">/月起</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    无限查询次数
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    API访问
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    股权穿透(10层+)
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    批量数据处理
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    定制功能
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300 dark:text-zinc-700">
                    <svg className="h-4 w-4 text-green-400 dark:text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    专属客户经理
                  </li>
                </ul>
                <Separator className="bg-zinc-800 dark:bg-zinc-200" />
                <Link href="#register">
                  <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white dark:border-zinc-300 dark:text-zinc-700 dark:hover:bg-zinc-100">
                    联系销售
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/pricing">
              <Button variant="link" className="text-lg text-zinc-400 hover:text-zinc-200 dark:text-zinc-600 dark:hover:text-zinc-800">
                查看完整定价详情 →
              </Button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
