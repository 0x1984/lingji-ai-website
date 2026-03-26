"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTypewriter } from "@/hooks/use-typewriter";
import { FadeIn } from "@/components/ui/fade-in";

export function ProductDemo() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const demos = [
    {
      command: '/company-search "腾讯"',
      title: "企业基础信息查询",
      description: "快速获取工商信息、注册资本、法定代表人等",
      result: {
        company: "腾讯科技有限公司",
        representative: "马化腾",
        capital: "5000万元人民币",
        founded: "1998-11-11"
      }
    },
    {
      command: '/ownership-chain "目标公司"',
      title: "股权穿透分析",
      description: "追踪多层股权结构，识别实际控制人",
      result: {
        depth: "5层",
        ultimateOwner: "XX控股集团",
        controlPath: "目标公司 → A公司(30%) → B公司(60%) → XX控股"
      }
    },
    {
      command: '/risk-summary "供应商A"',
      title: "风险评估摘要",
      description: "综合风险等级，关键风险提示",
      result: {
        riskLevel: "高风险",
        risks: ["3起法律纠纷", "经营异常", "行政处罚1次"]
      }
    }
  ];

  // 使用打字机效果
  const { displayedText, isTyping, isComplete } = useTypewriter({
    text: demos[activeDemo].command,
    speed: 80,
    delay: 300,
    onComplete: () => {
      setTimeout(() => setShowLoading(true), 500);
    }
  });

  // 当loading显示后，延迟显示结果
  useEffect(() => {
    if (showLoading && !showResult) {
      const timer = setTimeout(() => {
        setShowLoading(false);
        setShowResult(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showLoading, showResult]);

  // 切换demo时重置状态
  const handleDemoChange = (index: number) => {
    setActiveDemo(index);
    setShowLoading(false);
    setShowResult(false);
    setAnimationKey(prev => prev + 1);
  };

  return (
    <section id="features" className="container max-w-screen-2xl py-24">
      <FadeIn>
        <div className="mx-auto max-w-4xl text-center">
        <Badge className="mb-4" variant="secondary">产品演示</Badge>
        <h2 className="mb-4 text-4xl font-bold text-zinc-950 dark:text-zinc-50">
          9个强大的Commands
        </h2>
        <p className="mb-12 text-xl text-zinc-600 dark:text-zinc-400">
          一个命令完成查询，从基础信息到深度尽调
        </p>
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Demo Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {demos.map((demo, index) => (
            <button
              key={index}
              onClick={() => handleDemoChange(index)}
              className={`rounded-xl px-6 py-3 text-base font-semibold transition-all ${
                activeDemo === index
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              {demo.title}
            </button>
          ))}
        </div>

        {/* Demo Display - 终端样式 */}
        <Card className="overflow-hidden border-2 shadow-2xl">
          <CardContent className="p-0">
            {/* 终端头部 */}
            <div className="rounded-t-lg bg-gradient-to-r from-zinc-800 to-zinc-900 px-4 py-3 dark:from-zinc-950 dark:to-zinc-900">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm font-mono text-zinc-400">Claude Code</span>
              </div>
            </div>

            {/* Command Input */}
            <div className="border-b border-zinc-200 bg-zinc-900 p-6 font-mono text-sm dark:border-zinc-700">
              <div className="flex items-center gap-3">
                <span className="text-lg text-cyan-400">❯</span>
                <span className="text-base text-zinc-100">
                  {isTyping || !isComplete ? (
                    <>
                      <span className="text-green-400">{displayedText.split(' ')[0]}</span>
                      <span className="text-zinc-300">{displayedText.split(' ').slice(1).join(' ')}</span>
                      <span className="animate-pulse">|</span>
                    </>
                  ) : (
                    <>
                      <span className="text-green-400">{demos[activeDemo].command.split(' ')[0]}</span>
                      <span className="text-zinc-300"> {demos[activeDemo].command.split(' ').slice(1).join(' ')}</span>
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* Loading Animation */}
            {showLoading && (
              <div className="border-b border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900">
                <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="h-5 w-5 animate-spin rounded-full border-3 border-zinc-300 border-t-blue-600" />
                  <span className="font-medium">正在查询企业数据...</span>
                </div>
              </div>
            )}

            {/* Result */}
            {showResult && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 dark:from-zinc-900 dark:to-zinc-950">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">查询成功</span>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                  {demos[activeDemo].title}
                </h3>
                <p className="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                  {demos[activeDemo].description}
                </p>

                <div className="space-y-3">
                  {activeDemo === 0 && (
                    <>
                      <div className="rounded-xl border-2 border-blue-200 bg-white p-5 shadow-md dark:border-blue-800 dark:bg-zinc-950">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{demos[0].result.company}</p>
                        </div>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <p><span className="font-semibold">法定代表人:</span> {demos[0].result.representative}</p>
                          <p><span className="font-semibold">注册资本:</span> {demos[0].result.capital}</p>
                          <p><span className="font-semibold">成立日期:</span> {demos[0].result.founded}</p>
                        </div>
                      </div>
                    </>
                  )}
                  {activeDemo === 1 && (
                    <>
                      <div className="rounded-xl border-2 border-purple-200 bg-white p-5 shadow-md dark:border-purple-800 dark:bg-zinc-950">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600">
                            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">股权穿透结果</p>
                        </div>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                          <p><span className="font-semibold">穿透深度:</span> <span className="rounded bg-purple-100 px-2 py-1 text-purple-900 dark:bg-purple-900 dark:text-purple-100">{demos[1].result.depth}</span></p>
                          <p><span className="font-semibold">实际控制人:</span> {demos[1].result.ultimateOwner}</p>
                          <p><span className="font-semibold">控制路径:</span> {demos[1].result.controlPath}</p>
                        </div>
                      </div>
                    </>
                  )}
                  {activeDemo === 2 && (
                    <>
                      <div className="rounded-xl border-2 border-red-300 bg-gradient-to-br from-red-50 to-orange-50 p-5 shadow-md dark:border-red-800 dark:from-red-950 dark:to-orange-950">
                        <div className="mb-3 flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600">
                            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <p className="text-lg font-bold text-red-900 dark:text-red-100">风险评估报告</p>
                        </div>
                        <div className="mb-3">
                          <span className="rounded-full bg-red-600 px-4 py-1 text-sm font-bold text-white">
                            {demos[2].result.riskLevel}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm font-medium text-red-800 dark:text-red-200">
                          {demos[2].result?.risks?.map((risk, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0 1 1 0 002 0zm-1 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                              </svg>
                              <span>{risk}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-8 flex gap-4">
                  <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400">
                    查看文档
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    免费试用
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* More Commands */}
        <div className="mt-12 rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50 p-8 text-center dark:border-zinc-700 dark:bg-zinc-900">
          <p className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            还有6个强大Commands
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['/key-personnel', '/beneficial-owner', '/relationships', '/risk-analysis', '/due-diligence', '/partnership-risk'].map((cmd, i) => (
              <span key={i} className="rounded-lg bg-white px-3 py-2 text-sm font-mono text-zinc-700 shadow-sm dark:bg-zinc-950 dark:text-zinc-300">
                {cmd}
              </span>
            ))}
          </div>
        </div>
        </div>
      </FadeIn>
    </section>
  );
}
