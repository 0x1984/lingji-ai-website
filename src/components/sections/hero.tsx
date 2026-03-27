"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const useCases = [
  {
    id: "sme",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    role: "企业主",
    person: "张老板",
    company: "电商公司 | 100+员工",
    title: "1天评估10个供应商",
    description: "发现2家风险企业，避免潜在损失",
    quote: "以前要2天，现在1天就查完了10个供应商，还发现了2家有风险记录。",
    command: '❯ /risk-summary "供应商A"',
    metrics: [
      { label: "评估速度", value: "10x" },
      { label: "发现问题", value: "2家" },
    ],
    gradient: "from-blue-600 to-cyan-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-950/40",
    highlights: ["3起法律纠纷", "涉案金额50万", "经营异常"],
  },
  {
    id: "lawyer",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    role: "律师",
    person: "李律师",
    company: "XX律所合伙人 | 10年+经验",
    title: "5层股权穿透",
    description: "发现隐形股东，揭示关联交易",
    quote: "用企查查查到第3层就断了。用灵吉AI查到第5层，发现了隐形股东。",
    command: '❯ /ownership-chain "目标公司" --depth 5',
    metrics: [
      { label: "穿透深度", value: "5层" },
      { label: "发现股东", value: "隐形" },
    ],
    gradient: "from-purple-600 to-pink-500",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-950/40",
    highlights: ["D公司实际控制(26%)", "家族控制关系", "关联交易风险"],
  },
  {
    id: "vc",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    role: "投资人",
    person: "王投资经理",
    company: "XX基金 | 专注早期投资",
    title: "发现竞品关联",
    description: "避免投资风险，影响决策",
    quote: "尽调发现拟投项目和竞品公司有关联，这直接影响投资决策。",
    command: '❯ /due-diligence "拟投公司" --full',
    metrics: [
      { label: "发现关联", value: "竞品" },
      { label: "投资风险", value: "高" },
    ],
    gradient: "from-orange-600 to-red-500",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-950/40",
    highlights: ["共享3个投资人", "CEO任职竞品董事", "利益冲突"],
  },
];

export function HeroSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <>
      {/* Hero 主标题区域 */}
      <section className="relative overflow-hidden bg-zinc-950 py-32 sm:py-40 dark:bg-white">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600" />
        </div>

        {/* 网格背景 */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
               backgroundSize: '80px 80px',
             }}
        />

        <FadeIn>
          <div className="relative container max-w-screen-2xl">
            <div className="mx-auto max-w-5xl px-4 py-24 sm:py-32 lg:py-40">
              {/* Hero 标题区域 */}
              <div className="text-center">
                {/* Badge */}
                <Badge className="mb-8 inline-flex border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
                  企业尽调，10倍提升效率
                </Badge>

                {/* 主标题 */}
                <h1 className="mb-8 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl dark:text-zinc-900 leading-[1.05]">
                  企业数据，
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AI原生
                  </span>
                </h1>

                {/* 副标题 */}
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

                {/* 数据指标 */}
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
      </section>

      {/* 用户案例展示 - 全新横向卡片设计 */}
      <section id="use-cases" className="relative bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-32 dark:from-white dark:via-zinc-50 dark:to-white">
        {/* 动态背景 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] animate-spin-slow opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]" />
        </div>

        <FadeIn delay={200}>
          <div className="relative container max-w-screen-2xl">
            <div className="mx-auto max-w-7xl px-4">
              {/* 标题 */}
              <div className="mb-16 text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
                  <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-sm font-medium text-blue-300">真实案例</span>
                </div>
                <h2 className="mb-6 text-5xl font-bold text-white sm:text-6xl dark:text-zinc-950">
                  谁在使用灵吉AI
                </h2>
                <p className="text-xl text-zinc-400 dark:text-zinc-600">
                  3个真实场景，10倍效率提升
                </p>
              </div>

              {/* 卡片网格 */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {useCases.map((useCase, index) => (
                  <Card
                    key={useCase.id}
                    className={`group relative overflow-hidden border-2 ${useCase.borderColor} ${useCase.bgColor} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl dark:hover:shadow-xl`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                    onMouseEnter={() => setHoveredCard(useCase.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* 动态渐变背景 */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />

                    <CardContent className="relative p-6 sm:p-8">
                      {/* 顶部图标和角色 */}
                      <div className="mb-6 flex items-start justify-between">
                        <div className={`rounded-2xl border ${useCase.borderColor} bg-gradient-to-br ${useCase.gradient} p-3 shadow-lg`}>
                          <div className="text-white">
                            {useCase.icon}
                          </div>
                        </div>
                        <Badge className={`border ${useCase.borderColor} ${useCase.bgColor} text-zinc-300 dark:text-zinc-600`}>
                          {useCase.role}
                        </Badge>
                      </div>

                      {/* 标题和描述 */}
                      <h3 className="mb-2 text-xl font-bold text-white dark:text-zinc-900">
                        {useCase.title}
                      </h3>
                      <p className="mb-4 text-sm text-zinc-400 dark:text-zinc-600">
                        {useCase.description}
                      </p>

                      {/* 人员信息 */}
                      <div className="mb-6 flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${useCase.gradient} text-white shadow-md`}>
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white dark:text-zinc-900">{useCase.person}</p>
                          <p className="text-xs text-zinc-500 dark:text-zinc-500">{useCase.company}</p>
                        </div>
                      </div>

                      {/* 引用 */}
                      <blockquote className="mb-6 rounded-lg border border-zinc-700/50 bg-zinc-900/50 p-4 backdrop-blur-sm dark:border-zinc-200 dark:bg-zinc-100">
                        <p className="text-sm leading-relaxed text-zinc-300 dark:text-zinc-700">
                          &ldquo;{useCase.quote}&rdquo;
                        </p>
                      </blockquote>

                      {/* 命令 */}
                      <div className="mb-6">
                        <code className="block rounded-lg border border-zinc-700 bg-zinc-950/80 px-3 py-2 text-xs font-mono text-zinc-400 backdrop-blur-sm dark:border-zinc-300 dark:bg-white dark:text-zinc-700">
                          {useCase.command}
                        </code>
                      </div>

                      {/* 关键指标 */}
                      <div className="mb-6 grid grid-cols-2 gap-3">
                        {useCase.metrics.map((metric, i) => (
                          <div key={i} className={`rounded-lg border ${useCase.borderColor} ${useCase.bgColor} p-3 text-center backdrop-blur-sm`}>
                            <div className={`text-lg font-bold bg-gradient-to-br ${useCase.gradient} bg-clip-text text-transparent`}>
                              {metric.value}
                            </div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* 关键发现 */}
                      <div className="rounded-lg border border-zinc-700/50 bg-zinc-900/30 p-4 backdrop-blur-sm dark:border-zinc-200 dark:bg-zinc-50">
                        <p className="mb-2 text-xs font-semibold text-zinc-400 dark:text-zinc-600">关键发现</p>
                        <ul className="space-y-1.5">
                          {useCase.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-zinc-400 dark:text-zinc-600">
                              <svg className="mt-0.5 h-3 w-3 flex-shrink-0 text-current" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* 底部 CTA */}
              <div className="mx-auto mt-20 max-w-3xl text-center">
                <div className="rounded-3xl border-2 border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-800 p-12 shadow-2xl dark:border-zinc-200 dark:from-white dark:to-zinc-50 sm:p-16 lg:p-20">
                  <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl dark:text-zinc-950">
                    免费开始，无需信用卡
                  </h2>
                  <p className="mb-10 text-center text-lg text-zinc-400 dark:text-zinc-600">
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
          </div>
        </FadeIn>
      </section>
    </>
  );
}
