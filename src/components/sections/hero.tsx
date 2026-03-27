"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroSection() {
  const [, setActiveTab] = useState("sme");

  return (
    <section className="relative overflow-hidden bg-zinc-950 dark:bg-white">
      {/* 背景装饰 - Google AI 风格渐变 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-cyan-800/30 to-purple-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>

      {/* 网格背景 - Google AI 风格 */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
             backgroundSize: '80px 80px',
           }}
      />

      <FadeIn>
        <div className="relative container max-w-screen-2xl">
          <div className="mx-auto max-w-5xl px-4 py-24 sm:py-32 lg:py-40">
            {/* Hero 标题区域 - Google AI 风格 */}
            <div className="text-center">
              {/* Badge */}
              <Badge className="mb-8 inline-flex border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
                企业尽调，10倍提升效率
              </Badge>

              {/* 主标题 - 更大、更醒目 */}
              <h1 className="mb-8 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl dark:text-zinc-900 leading-[1.05]">
                企业数据，
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI原生
                </span>
              </h1>

              {/* 副标题 - 更清晰的层次 */}
              <p className="mx-auto mb-12 max-w-3xl text-xl font-normal leading-relaxed text-zinc-300 sm:text-2xl dark:text-zinc-600">
                在 Claude Code 中自动生成企业尽调报告。股权穿透、关联关系、风险评估，2分钟完成。
              </p>

              {/* CTA 按钮组 */}
              <div className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <Button
                  size="lg"
                  className="h-14 bg-blue-600 px-8 text-lg font-medium text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-700/40 transition-all duration-200 dark:bg-blue-600"
                >
                  免费获取 API Key
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 border-zinc-600 px-8 text-lg font-medium text-zinc-300 hover:bg-zinc-800/50 hover:text-white transition-all duration-200 dark:border-zinc-300 dark:text-zinc-700 dark:hover:bg-zinc-100"
                >
                  查看文档
                </Button>
              </div>

              {/* 数据指标 - 玻璃卡片效果，更简洁 */}
              <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm sm:gap-12 lg:p-12">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white sm:text-6xl dark:text-zinc-900">2,000+</div>
                  <div className="mt-3 text-sm font-medium text-zinc-400 sm:text-base dark:text-zinc-600">开发者</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white sm:text-6xl dark:text-zinc-900">10倍</div>
                  <div className="mt-3 text-sm font-medium text-zinc-400 sm:text-base dark:text-zinc-600">效率提升</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white sm:text-6xl dark:text-zinc-900">2分钟</div>
                  <div className="mt-3 text-sm font-medium text-zinc-400 sm:text-base dark:text-zinc-600">完成尽调</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 用户案例展示 - Google AI Showcase 风格 */}
      <div className="relative bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-24 dark:from-white dark:via-zinc-50 dark:to-white">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        </div>

        <FadeIn delay={200}>
          <div className="container max-w-screen-2xl">
            <div className="mx-auto max-w-6xl px-4">
              {/* 标题 */}
              <div className="mb-20 text-center">
                <h2 className="mb-6 text-5xl font-bold text-white sm:text-6xl dark:text-zinc-950">
                  谁在使用灵吉AI
                </h2>
                <p className="text-xl text-zinc-300 dark:text-zinc-600">
                  3个真实场景，10倍效率提升
                </p>
              </div>

              <Tabs defaultValue="sme" className="w-full" onValueChange={(value) => setActiveTab(value)}>
                <TabsList className="mb-8 grid w-full grid-cols-3 gap-3 border-2 border-zinc-700 bg-zinc-900/80 p-1 backdrop-blur-sm dark:border-zinc-300 dark:bg-white">
                  <TabsTrigger
                    value="sme"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-600 group flex flex-col items-center gap-2 py-4 transition-all"
                  >
                    <svg className="h-7 w-7 text-zinc-400 transition-colors group-hover:text-zinc-300 group-data-[state=active]:text-white dark:text-zinc-600 dark:group-hover:text-zinc-500 dark:group-data-[state=active]:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-base font-semibold text-zinc-400 transition-colors group-hover:text-zinc-200 group-data-[state=active]:text-white dark:text-zinc-700 dark:group-hover:text-zinc-600 dark:group-data-[state=active]:text-white">企业主</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="lawyer"
                    className="data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:data-[state=active]:bg-purple-600 group flex flex-col items-center gap-2 py-4 transition-all"
                  >
                    <svg className="h-7 w-7 text-zinc-400 transition-colors group-hover:text-zinc-300 group-data-[state=active]:text-white dark:text-zinc-600 dark:group-hover:text-zinc-500 dark:group-data-[state=active]:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <span className="text-base font-semibold text-zinc-400 transition-colors group-hover:text-zinc-200 group-data-[state=active]:text-white dark:text-zinc-700 dark:group-hover:text-zinc-600 dark:group-data-[state=active]:text-white">律师</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="vc"
                    className="data-[state=active]:bg-orange-600 data-[state=active]:text-white dark:data-[state=active]:bg-orange-600 group flex flex-col items-center gap-2 py-4 transition-all"
                  >
                    <svg className="h-7 w-7 text-zinc-400 transition-colors group-hover:text-zinc-300 group-data-[state=active]:text-white dark:text-zinc-600 dark:group-hover:text-zinc-500 dark:group-data-[state=active]:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-base font-semibold text-zinc-400 transition-colors group-hover:text-zinc-200 group-data-[state=active]:text-white dark:text-zinc-700 dark:group-hover:text-zinc-600 dark:group-data-[state=active]:text-white">投资人</span>
                  </TabsTrigger>
                </TabsList>

                {/* 案例1: 中小企业老板 */}
                <TabsContent value="sme" className="mt-0">
                  <Card className="border-2 border-blue-600 bg-zinc-900/50 backdrop-blur-sm shadow-2xl shadow-blue-600/10 dark:border-blue-600 dark:bg-white dark:shadow-xl">
                    <CardContent className="p-0">
                      {/* 图片区域 */}
                      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 sm:h-80">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="mb-4 flex justify-center">
                              <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                                <svg className="h-16 w-16 sm:h-20 sm:w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-3xl font-bold sm:text-4xl">风险评估报告</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-8 sm:p-12">
                        <div className="mb-8">
                          <h3 className="mb-3 text-2xl font-bold text-white dark:text-zinc-950">
                            1天评估10个供应商，发现2家风险
                          </h3>
                          <p className="text-base text-zinc-300 dark:text-zinc-600">
                            张老板 | 电商公司 | 100+员工
                          </p>
                        </div>

                        <div className="mb-8 space-y-5">
                          <p className="text-lg leading-relaxed text-zinc-100 dark:text-zinc-700">
                            &ldquo;以前要2天，现在1天就查完了10个供应商，还发现了2家有风险记录。&rdquo;
                          </p>

                          <div className="rounded-xl border border-zinc-700 bg-zinc-800/80 p-6 dark:border-zinc-200 dark:bg-zinc-50">
                            <p className="mb-3 text-sm font-semibold text-zinc-200 dark:text-zinc-700">使用的命令</p>
                            <code className="block rounded-lg border border-zinc-600 bg-zinc-950 px-4 py-3 text-sm font-mono text-cyan-400 dark:border-zinc-300 dark:bg-white dark:text-blue-600">
                              ❯ /risk-summary &quot;供应商A&quot;
                            </code>
                          </div>

                          <div className="rounded-xl border-2 border-blue-500/50 bg-blue-950/80 p-6 dark:border-blue-300 dark:bg-blue-50">
                            <p className="mb-4 text-sm font-semibold text-blue-200 dark:text-blue-700">关键发现</p>
                            <div className="space-y-3 text-base text-blue-100 dark:text-blue-900">
                              <div className="flex items-start gap-3">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400 dark:text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <span>供应商A: 3起法律纠纷，涉案金额50万元</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400 dark:text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <span>供应商C: 经营异常，列入异常名录</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30 dark:bg-blue-600">
                          了解更多 →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 案例2: 律所律师 */}
                <TabsContent value="lawyer" className="mt-0">
                  <Card className="border-2 border-purple-600 bg-zinc-900/50 backdrop-blur-sm shadow-2xl shadow-purple-600/10 dark:border-purple-600 dark:bg-white dark:shadow-xl">
                    <CardContent className="p-0">
                      {/* 图片区域 */}
                      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 sm:h-80">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="mb-4 flex justify-center">
                              <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                                <svg className="h-16 w-16 sm:h-20 sm:w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-3xl font-bold sm:text-4xl">股权穿透分析</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-8 sm:p-12">
                        <div className="mb-8">
                          <h3 className="mb-3 text-2xl font-bold text-white dark:text-zinc-950">
                            5层股权穿透，发现隐形股东
                          </h3>
                          <p className="text-base text-zinc-300 dark:text-zinc-600">
                            李律师 | XX律所合伙人 | 10年+经验
                          </p>
                        </div>

                        <div className="mb-8 space-y-5">
                          <p className="text-lg leading-relaxed text-zinc-100 dark:text-zinc-700">
                            &ldquo;用企查查查到第3层就断了。用灵吉AI查到第5层，发现了隐形股东。&rdquo;
                          </p>

                          <div className="rounded-xl border border-zinc-700 bg-zinc-800/80 p-6 dark:border-zinc-200 dark:bg-zinc-50">
                            <p className="mb-3 text-sm font-semibold text-zinc-200 dark:text-zinc-700">使用的命令</p>
                            <code className="block rounded-lg border border-zinc-600 bg-zinc-950 px-4 py-3 text-sm font-mono text-purple-400 dark:border-zinc-300 dark:bg-white dark:text-purple-600">
                              ❯ /ownership-chain &quot;目标公司&quot; --depth 5
                            </code>
                          </div>

                          <div className="rounded-xl border-2 border-purple-500/50 bg-purple-950/80 p-6 dark:border-purple-300 dark:bg-purple-50">
                            <p className="mb-4 text-sm font-semibold text-purple-200 dark:text-purple-700">关键发现</p>
                            <div className="space-y-3 text-base text-purple-100 dark:text-purple-800">
                              <div className="flex items-start gap-3">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>穿透5层，发现D公司为实际控制人(持股26%)</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>揭示家族控制关系，存在关联交易风险</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-600/30 dark:bg-purple-600">
                          了解更多 →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* 案例3: VC投资经理 */}
                <TabsContent value="vc" className="mt-0">
                  <Card className="border-2 border-orange-600 bg-zinc-900/50 backdrop-blur-sm shadow-2xl shadow-orange-600/10 dark:border-orange-600 dark:bg-white dark:shadow-xl">
                    <CardContent className="p-0">
                      {/* 图片区域 */}
                      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-orange-600 to-red-600 sm:h-80">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="mb-4 flex justify-center">
                              <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                                <svg className="h-16 w-16 sm:h-20 sm:w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-3xl font-bold sm:text-4xl">完整尽调报告</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-8 sm:p-12">
                        <div className="mb-8">
                          <h3 className="mb-3 text-2xl font-bold text-white dark:text-zinc-950">
                            发现竞品关联，避免投资风险
                          </h3>
                          <p className="text-base text-zinc-300 dark:text-zinc-600">
                            王投资经理 | XX基金 | 专注早期投资
                          </p>
                        </div>

                        <div className="mb-8 space-y-5">
                          <p className="text-lg leading-relaxed text-zinc-100 dark:text-zinc-700">
                            &ldquo;尽调发现拟投项目和竞品公司有关联，这直接影响投资决策。&rdquo;
                          </p>

                          <div className="rounded-xl border border-zinc-700 bg-zinc-800/80 p-6 dark:border-zinc-200 dark:bg-zinc-50">
                            <p className="mb-3 text-sm font-semibold text-zinc-200 dark:text-zinc-700">使用的命令</p>
                            <code className="block rounded-lg border border-zinc-600 bg-zinc-950 px-4 py-3 text-sm font-mono text-orange-400 dark:border-zinc-300 dark:bg-white dark:text-orange-600">
                              ❯ /due-diligence &quot;拟投公司&quot; --full
                            </code>
                          </div>

                          <div className="rounded-xl border border-orange-500/50 bg-orange-950/80 p-6 dark:border-orange-200 dark:bg-orange-50">
                            <p className="mb-4 text-sm font-semibold text-orange-200 dark:text-orange-700">关键发现</p>
                            <div className="space-y-3 text-base text-orange-100 dark:text-orange-800">
                              <div className="flex items-start gap-3">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <span>拟投公司与竞品公司共享3个投资人</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <span>拟投公司CEO同时担任竞品公司董事</span>
                              </div>
                              <div className="flex items-start gap-3">
                                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <span>存在潜在利益冲突，投资风险高</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-600/30 dark:bg-orange-600">
                          了解更多 →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </FadeIn>

        {/* 底部 CTA - Google AI 风格 */}
        <FadeIn delay={400}>
          <div className="container max-w-screen-2xl">
            <div className="mx-auto max-w-3xl px-4 pt-24 pb-16">
              <div className="rounded-3xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-800 p-12 shadow-2xl dark:border-zinc-200 dark:from-white dark:to-zinc-50 sm:p-16 lg:p-20">
                <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl dark:text-zinc-950">
                  免费开始，无需信用卡
                </h2>
                <p className="mb-10 text-center text-lg text-zinc-300 dark:text-zinc-600">
                  获取 API Key，立即在 Claude Code 中使用
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button
                    size="lg"
                    className="h-14 bg-blue-600 px-10 text-lg font-medium text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 dark:bg-blue-600"
                  >
                    免费获取 API Key →
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 border-zinc-600 px-10 text-lg font-medium text-white hover:bg-zinc-800 transition-colors dark:border-zinc-300 dark:text-zinc-900 dark:hover:bg-zinc-100"
                  >
                    查看文档
                  </Button>
                </div>
                <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-zinc-400 dark:text-zinc-600">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 dark:bg-zinc-200">
                      <svg className="h-3 w-3 text-zinc-400 dark:text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">10次/日免费</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 dark:bg-zinc-200">
                      <svg className="h-3 w-3 text-zinc-400 dark:text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">即时开通</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 dark:bg-zinc-200">
                      <svg className="h-3 w-3 text-zinc-400 dark:text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">无需信用卡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
