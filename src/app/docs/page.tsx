import { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, BookOpen, Settings, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <section className="bg-zinc-50 py-32 dark:bg-zinc-950">
        <div className="container max-w-screen-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl dark:text-zinc-50">
              快速开始使用灵吉AI
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              4步完成配置，立即在 Claude Code 中查询企业数据
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container max-w-screen-2xl py-24">
        <div className="mx-auto max-w-5xl">
          {sections.map((section, sectionIndex) => (
            <FadeIn key={section.title} delay={sectionIndex * 100}>
              <div className="mb-16">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                    <section.icon className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
                  </div>
                  <h2 className="text-3xl font-semibold text-zinc-950 dark:text-zinc-50">
                    {section.title}
                  </h2>
                </div>

                {/* 快速开始 */}
                {section.steps && (
                  <div className="space-y-6">
                    {section.steps.map((step, stepIndex) => (
                      <Card
                        key={stepIndex}
                        className="border shadow-card dark:border-zinc-800"
                      >
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
                          <CardDescription className="text-base">
                            {step.description}
                          </CardDescription>
                        </CardHeader>
                        {step.code && (
                          <CardContent>
                            <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950">
                              <code>{step.code}</code>
                            </pre>
                          </CardContent>
                        )}
                        {step.action && (
                          <CardContent>
                            <Link href={step.actionHref}>
                              <Button className="h-10 bg-zinc-900 font-medium hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">
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
                        className="border shadow-card hover:shadow-card-hover transition-shadow duration-200 dark:border-zinc-800"
                      >
                        <CardHeader>
                          <CardTitle className="text-xl font-mono font-semibold text-zinc-900 dark:text-zinc-100">
                            {command.name}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {command.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <p className="mb-2 text-sm font-medium text-zinc-950 dark:text-zinc-50">
                              示例：
                            </p>
                            <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-950">
                              <code>{command.example}</code>
                            </pre>
                          </div>
                          <div>
                            <p className="mb-2 text-sm font-medium text-zinc-950 dark:text-zinc-50">
                              返回内容：
                            </p>
                            <ul className="space-y-1">
                              {command.details.map((detail, detailIndex) => (
                                <li
                                  key={detailIndex}
                                  className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                                >
                                  <Check className="h-4 w-4 text-zinc-900 dark:text-zinc-100" />
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
                        className="border shadow-card dark:border-zinc-800"
                      >
                        <CardHeader>
                          <CardTitle className="text-xl font-semibold">{topic.title}</CardTitle>
                          <CardDescription className="text-base">
                            {topic.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {topic.steps && (
                            <ol className="space-y-2">
                              {topic.steps.map((step, stepIndex) => (
                                <li
                                  key={stepIndex}
                                  className="flex gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                                >
                                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
                                    {stepIndex + 1}
                                  </span>
                                  {step}
                                </li>
                              ))}
                            </ol>
                          )}
                          {topic.code && (
                            <pre className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950">
                              <code>{topic.code}</code>
                            </pre>
                          )}
                          {topic.issues && (
                            <div className="space-y-3">
                              {topic.issues.map((issue, issueIndex) => (
                                <div
                                  key={issueIndex}
                                  className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
                                >
                                  <p className="mb-2 text-sm font-medium text-red-600 dark:text-red-400">
                                    问题：{issue.problem}
                                  </p>
                                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
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
      </section>

      {/* CTA */}
      <section className="bg-zinc-50 py-24 dark:bg-zinc-950">
        <div className="container max-w-screen-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-semibold text-zinc-950 dark:text-zinc-50">
              还没有 API Key？
            </h2>
            <p className="mb-8 text-xl text-zinc-600 dark:text-zinc-400">
              免费获取，立即开始使用
            </p>
            <Link href="/register">
              <Button size="lg" className="h-12 bg-zinc-900 font-medium hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">
                获取免费 API Key
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="container max-w-screen-2xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold text-zinc-950 dark:text-zinc-50">产品</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/#features" className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
                    功能
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
                    定价
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
                    文档
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-zinc-950 dark:text-zinc-50">公司</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
                    博客
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
                    联系我们
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-zinc-950 dark:text-zinc-50">法律</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/privacy" className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
                    隐私政策
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
                    服务条款
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-zinc-950 dark:text-zinc-50">灵吉AI</h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                企业数据，AI原生
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">
                © 2026 灵吉AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
