import { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, BookOpen, Settings, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header/header";

export const metadata: Metadata = {
  title: "文档 - 灵吉AI",
  description: "快速开始指南，配置教程，Commands参考",
};

const sections = [
  {
    title: "快速开始",
    icon: Terminal,
    steps: [
      {
        title: "1. 获取 API Key",
        description: "访问注册页面，填写基本信息，立即获取免费 API Key",
        action: "获取 API Key",
        actionHref: "/register",
      },
      {
        title: "2. 配置 MCP Server",
        description: "在 Claude Code 中配置灵吉AI MCP Server",
        code: `{
  "mcpServers": {
    "lingji-ai": {
      "command": "python",
      "args": ["-m", "lingji_ai_mcp"],
      "env": {
        "LINGJI_AI_API_KEY": "your_api_key_here"
      }
    }
  }
}`,
      },
      {
        title: "3. 重启 Claude Code",
        description: "完全退出并重新启动 Claude Code",
      },
      {
        title: "4. 开始使用",
        description: "在 Claude Code 中输入命令查询企业信息",
        code: `/company-search "腾讯"`,
      },
    ],
  },
  {
    title: "Commands 参考",
    icon: BookOpen,
    commands: [
      {
        name: "/company-search",
        description: "查询企业基础信息",
        example: "/company-search \"腾讯\"",
        details: ["工商注册信息", "经营范围", "注册资本", "法定代表人"],
      },
      {
        name: "/ownership-chain",
        description: "股权穿透分析",
        example: "/ownership-chain \"目标公司\" --depth 5",
        details: ["1-5层股权结构", "实际控制人识别", "可视化股权图谱"],
      },
      {
        name: "/due-diligence",
        description: "完整尽调报告",
        example: "/due-diligence \"拟投公司\"",
        details: ["综合企业信息", "股权穿透", "关联关系", "风险评估"],
      },
      {
        name: "/risk-summary",
        description: "风险摘要",
        example: "/risk-summary \"供应商A\"",
        details: ["诉讼记录", "经营异常", "风险等级"],
      },
    ],
  },
  {
    title: "配置指南",
    icon: Settings,
    topics: [
      {
        title: "Claude Code 配置",
        description: "详细的 Claude Code MCP Server 配置步骤",
        steps: [
          "打开 Claude Code",
          "按 Cmd/Ctrl + Shift + P 打开命令面板",
          "输入 \"MCP\" 并选择 \"Configure MCP Servers\"",
          "添加灵吉AI MCP Server 配置",
          "重启 Claude Code",
        ],
      },
      {
        title: "环境变量设置",
        description: "设置 API Key 等环境变量",
        code: `export LINGJI_AI_API_KEY="your_api_key_here"`,
      },
      {
        title: "故障排查",
        description: "常见问题解决方案",
        issues: [
          {
            problem: "MCP Server 无法启动",
            solution: "检查 Python 环境，确保已安装 lingji_ai_mcp 包",
          },
          {
            problem: "API 调用失败",
            solution: "验证 API Key 是否正确，检查网络连接",
          },
          {
            problem: "命令不生效",
            solution: "确认 MCP Server 配置正确，重启 Claude Code",
          },
        ],
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="flex flex-col font-sans">
      <Header />
      <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-zinc-950 py-32 dark:bg-white">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600" />
        </div>

        <div className="relative container max-w-screen-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-600">
              开发者文档
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl dark:text-zinc-950">
              快速开始使用灵吉AI
            </h1>
            <p className="text-xl text-zinc-300 dark:text-zinc-600">
              4步完成配置，立即在 Claude Code 中查询企业数据
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-zinc-900 py-24 dark:bg-zinc-50">
        <div className="container max-w-screen-2xl">
          <div className="mx-auto max-w-5xl">
            {sections.map((section, sectionIndex) => (
              <FadeIn key={section.title} delay={sectionIndex * 100}>
                <div className="mb-16">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-blue-500/30 bg-blue-950/40 backdrop-blur-sm dark:border-blue-500/30 dark:bg-blue-50">
                      <section.icon className="h-6 w-6 text-blue-400 dark:text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-white dark:text-zinc-950">
                      {section.title}
                    </h2>
                  </div>

                {/* 快速开始 */}
                {section.steps && (
                  <div className="space-y-6">
                    {section.steps.map((step, stepIndex) => (
                      <Card
                        key={stepIndex}
                        className="border-2 border-zinc-800 bg-zinc-950/50 backdrop-blur-sm dark:border-zinc-200 dark:bg-white"
                      >
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold text-white dark:text-zinc-900">{step.title}</CardTitle>
                          <CardDescription className="text-base text-zinc-400 dark:text-zinc-600">
                            {step.description}
                          </CardDescription>
                        </CardHeader>
                        {step.code && (
                          <CardContent>
                            <pre className="overflow-x-auto rounded-lg border border-zinc-700 bg-zinc-950/80 p-4 text-sm text-zinc-300 backdrop-blur-sm dark:border-zinc-300 dark:bg-zinc-100 dark:text-zinc-700">
                              <code>{step.code}</code>
                            </pre>
                          </CardContent>
                        )}
                        {step.action && (
                          <CardContent>
                            <Link href={step.actionHref}>
                              <Button className="h-10 bg-gradient-to-r from-blue-600 to-cyan-600 font-medium text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-600/30 dark:from-blue-600 dark:to-cyan-600">
                                {step.action}
                                <ChevronRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </CardContent>
                        )}
                      </Card>
                    ))}
                  </div>
                )}

                {/* Commands 参考 */}
                {section.commands && (
                  <div className="grid gap-6 sm:grid-cols-2">
                    {section.commands.map((command, commandIndex) => (
                      <Card
                        key={commandIndex}
                        className="border-2 border-zinc-800 bg-zinc-950/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-zinc-200 dark:bg-white dark:hover:shadow-xl"
                      >
                        <CardHeader>
                          <CardTitle className="text-xl font-mono font-semibold text-white dark:text-zinc-900">
                            {command.name}
                          </CardTitle>
                          <CardDescription className="text-base text-zinc-400 dark:text-zinc-600">
                            {command.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <p className="mb-2 text-sm font-medium text-zinc-300 dark:text-zinc-700">
                              示例：
                            </p>
                            <pre className="overflow-x-auto rounded-lg border border-zinc-700 bg-zinc-950/80 p-3 text-xs text-zinc-300 backdrop-blur-sm dark:border-zinc-300 dark:bg-zinc-100 dark:text-zinc-700">
                              <code>{command.example}</code>
                            </pre>
                          </div>
                          <div>
                            <p className="mb-2 text-sm font-medium text-zinc-300 dark:text-zinc-700">
                              返回内容：
                            </p>
                            <ul className="space-y-1">
                              {command.details.map((detail, detailIndex) => (
                                <li
                                  key={detailIndex}
                                  className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-600"
                                >
                                  <Check className="h-4 w-4 text-blue-400 dark:text-blue-600" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {/* 配置指南 */}
                {section.topics && (
                  <div className="space-y-6">
                    {section.topics.map((topic, topicIndex) => (
                      <Card
                        key={topicIndex}
                        className="border-2 border-zinc-800 bg-zinc-950/50 backdrop-blur-sm dark:border-zinc-200 dark:bg-white"
                      >
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold text-white dark:text-zinc-900">{topic.title}</CardTitle>
                          <CardDescription className="text-base text-zinc-400 dark:text-zinc-600">
                            {topic.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {topic.steps && (
                            <ol className="space-y-2">
                              {topic.steps.map((step, stepIndex) => (
                                <li
                                  key={stepIndex}
                                  className="flex gap-3 text-sm text-zinc-300 dark:text-zinc-700"
                                >
                                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white dark:bg-blue-600">
                                    {stepIndex + 1}
                                  </span>
                                  {step}
                                </li>
                              ))}
                            </ol>
                          )}
                          {topic.code && (
                            <pre className="overflow-x-auto rounded-lg border border-zinc-700 bg-zinc-950/80 p-4 text-sm text-zinc-300 backdrop-blur-sm dark:border-zinc-300 dark:bg-zinc-100 dark:text-zinc-700">
                              <code>{topic.code}</code>
                            </pre>
                          )}
                          {topic.issues && (
                            <div className="space-y-3">
                              {topic.issues.map((issue, issueIndex) => (
                                <div
                                  key={issueIndex}
                                  className="rounded-lg border-2 border-red-500/30 bg-red-950/40 p-4 backdrop-blur-sm dark:border-red-200 dark:bg-red-50"
                                >
                                  <p className="mb-2 text-sm font-medium text-red-400 dark:text-red-600">
                                    问题：{issue.problem}
                                  </p>
                                  <p className="text-sm text-zinc-300 dark:text-zinc-700">
                                    解决：{issue.solution}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-950 to-zinc-900 py-24 dark:from-white dark:to-zinc-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600" />
        </div>
        <div className="relative container max-w-screen-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl dark:text-zinc-950">
              还没有 API Key？
            </h2>
            <p className="mb-8 text-xl text-zinc-400 dark:text-zinc-600">
              免费获取，立即开始使用
            </p>
            <Link href="/register">
              <Button size="lg" className="h-14 bg-gradient-to-r from-blue-600 to-cyan-600 px-10 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl">
                获取免费 API Key →
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
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
                  <a href="/#risk-summary" className="text-sm text-zinc-400 transition-colors hover:text-blue-400 dark:text-zinc-600 dark:hover:text-blue-600">
                    风险评估
                  </a>
                </li>
                <li>
                  <a href="/#ownership-chain" className="text-sm text-zinc-400 transition-colors hover:text-purple-400 dark:text-zinc-600 dark:hover:text-purple-600">
                    股权穿透
                  </a>
                </li>
                <li>
                  <a href="/#due-diligence" className="text-sm text-zinc-400 transition-colors hover:text-orange-400 dark:text-zinc-600 dark:hover:text-orange-600">
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
                  <a href="/#features" className="text-sm text-zinc-400 transition-colors hover:text-white dark:text-zinc-600 dark:hover:text-zinc-900">
                    功能
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="text-sm text-zinc-400 transition-colors hover:text-white dark:text-zinc-600 dark:hover:text-zinc-900">
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
