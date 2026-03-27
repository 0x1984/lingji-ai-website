"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("sme");

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-32 sm:py-40 dark:bg-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600" />
      </div>

      {/* 网格背景 */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
             backgroundSize: '60px 60px',
           }}
      />

      <FadeIn>
        <div className="relative container max-w-screen-2xl">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-8 border-blue-400 bg-blue-500/20 text-blue-100 dark:border-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
              企业尽调，10倍提升效率
            </Badge>

            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl dark:text-zinc-950 leading-[1.1]">
              在Claude Code中<br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                2分钟完成深度尽调
              </span>
            </h1>

            <p className="mb-12 max-w-2xl text-lg text-blue-100 dark:text-zinc-600 sm:text-xl leading-relaxed">
              AI驱动的企业数据查询平台。9个Commands，股权穿透，关联关系，风险评估。
            </p>

            {/* CTA 按钮组 */}
            <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button
                size="lg"
                className="h-14 bg-blue-600 px-8 text-lg font-medium text-white hover:bg-blue-700 transition-all duration-200"
              >
                免费获取 API Key
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-blue-400 px-8 text-lg font-medium text-blue-100 hover:bg-blue-400/10 transition-all duration-200 dark:border-blue-600 dark:text-blue-600 dark:hover:bg-blue-600/10"
              >
                查看文档
              </Button>
            </div>

            {/* 数据指标 - 玻璃卡片效果 */}
            <div className="mb-16 grid grid-cols-3 gap-6 rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm sm:gap-12 sm:p-10">
              <div>
                <div className="text-5xl font-semibold text-white dark:text-zinc-900 sm:text-6xl">2,000+</div>
                <div className="mt-2 text-sm text-blue-100 dark:text-zinc-600 sm:text-base">开发者使用</div>
              </div>
              <div>
                <div className="text-5xl font-semibold text-white dark:text-zinc-900 sm:text-6xl">10倍</div>
                <div className="mt-2 text-sm text-blue-100 dark:text-zinc-600 sm:text-base">效率提升</div>
              </div>
              <div>
                <div className="text-5xl font-semibold text-white dark:text-zinc-900 sm:text-6xl">2分钟</div>
                <div className="mt-2 text-sm text-blue-100 dark:text-zinc-600 sm:text-base">完成尽调</div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 3个用户案例 - 移到浅色背景 */}
      <div className="relative bg-zinc-50 py-20 dark:bg-zinc-950">
        <FadeIn delay={200}>
          <div className="container max-w-screen-2xl">
            <div className="mx-auto max-w-5xl">
              <Tabs defaultValue="sme" className="w-full" onValueChange={(value) => setActiveTab(value)}>
                <TabsList className="grid w-full grid-cols-3 gap-2 p-1 sm:gap-3">
                  <TabsTrigger value="sme" className="text-sm sm:text-base">中小企业老板</TabsTrigger>
                  <TabsTrigger value="lawyer" className="text-sm sm:text-base">律所律师</TabsTrigger>
                  <TabsTrigger value="vc" className="text-sm sm:text-base">VC投资经理</TabsTrigger>
                </TabsList>

                {/* 案例1: 中小企业老板 */}
                <TabsContent value="sme" className="mt-6">
                  <Card className="border shadow-card dark:border-zinc-800">
                    <CardHeader>
                      <div className="mb-3">
                        <CardTitle className="text-xl font-semibold">1天评估10个供应商，发现2家风险</CardTitle>
                        <CardDescription className="mt-2">张老板 | 电商公司 | 100+员工</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
                        <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                          "以前要2天，现在1天就查完了，还发现了2家有风险记录。"
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">使用的命令:</p>
                        <code className="block rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-mono text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
                          ❯ /risk-summary "供应商A"
                        </code>
                      </div>

                      <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
                        <p className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">关键发现</p>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <div className="flex items-start gap-2">
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span>供应商A: 3起法律纠纷，涉案金额50万元</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span>供应商C: 经营异常，列入异常名录</span>
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full border-zinc-300 text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800">
                        了解更多 →
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 案例2: 律所律师 */}
                <TabsContent value="lawyer" className="mt-6">
                  <Card className="border shadow-card dark:border-zinc-800">
                    <CardHeader>
                      <div className="mb-3">
                        <CardTitle className="text-xl font-semibold">5层股权穿透，发现隐形股东</CardTitle>
                        <CardDescription className="mt-2">李律师 | XX律所合伙人 | 10年+经验</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
                        <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                          "用企查查查到第3层就断了。用灵吉AI查到第5层，发现了隐形股东。"
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">使用的命令:</p>
                        <code className="block rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-mono text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
                          ❯ /ownership-chain "目标公司" --depth 5
                        </code>
                      </div>

                      <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
                        <p className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">关键发现</p>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <div className="flex items-start gap-2">
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>穿透5层，发现D公司为实际控制人(持股26%)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>揭示家族控制关系，存在关联交易风险</span>
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full border-zinc-300 text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800">
                        了解更多 →
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 案例3: VC投资经理 */}
                <TabsContent value="vc" className="mt-6">
                  <Card className="border-2 border-zinc-200 shadow-lg dark:border-zinc-800">
                    <CardHeader>
                      <div className="mb-3">
                        <CardTitle className="text-xl">发现竞品关联，避免投资风险</CardTitle>
                        <CardDescription className="mt-2">王投资经理 | XX基金 | 专注早期投资</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg bg-gradient-to-r from-orange-50 to-red-50 p-5 dark:from-orange-950 dark:to-red-950">
                        <p className="text-base font-medium text-zinc-800 dark:text-zinc-200">
                          "尽调发现拟投项目和竞品公司有关联，这直接影响投资决策。"
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">使用的命令:</p>
                        <code className="block rounded-lg bg-zinc-900 px-4 py-3 text-sm font-mono text-orange-400 dark:bg-zinc-950">
                          ❯ /due-diligence "拟投公司" --full
                        </code>
                      </div>

                      <div className="rounded-lg border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-red-50 p-5 dark:border-orange-700 dark:from-orange-950 dark:to-red-950">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-600">
                            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <p className="text-lg font-bold text-orange-900 dark:text-orange-100">
                            关键发现
                          </p>
                        </div>
                        <div className="mt-3 space-y-2 text-sm font-medium text-orange-800 dark:text-orange-200">
                          <div className="flex items-start gap-2">
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span>拟投公司与竞品公司共享3个投资人</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span>拟投公司CEO同时担任竞品公司董事</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span>存在潜在利益冲突，投资风险高</span>
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400">
                        了解更多 →
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={400}>
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <div className="rounded-xl border border-zinc-200 bg-white p-12 shadow-card dark:border-zinc-800 dark:bg-zinc-900 sm:p-16">
              <h2 className="mb-4 text-3xl font-semibold text-zinc-950 dark:text-zinc-50">
                免费开始，无需信用卡
              </h2>
              <p className="mb-10 text-lg text-zinc-600 dark:text-zinc-400">
                获取 API Key，立即在 Claude Code 中使用
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="h-12 bg-zinc-900 px-8 text-base font-medium text-white hover:bg-zinc-800 transition-colors dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">
                  免费获取 API Key →
                </Button>
                <Button size="lg" variant="outline" className="h-12 border-zinc-300 px-8 text-base font-medium text-zinc-900 hover:bg-zinc-50 transition-colors dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800">
                  查看文档
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <svg className="h-3 w-3 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>10次/日免费</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <svg className="h-3 w-3 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>即时开通</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <svg className="h-3 w-3 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>无需信用卡</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
