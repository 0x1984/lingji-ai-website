"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/ui/fade-in";

const faqs = [
  {
    question: "如何配置到Claude Code？",
    answer: "1. 注册后获取API Key\n2. 在Claude Code设置中添加MCP服务器\n3. 配置服务器地址和API Key\n4. 重启Claude Code即可开始使用\n\n详细步骤请参考文档中的集成指南。"
  },
  {
    question: "免费版有什么限制？",
    answer: "免费版包含：\n• 每日10次查询\n• 基础企业信息查询\n• 社区支持\n\n专业版解锁：\n• 每日100次查询\n• 9个Commands全部可用\n• 股权穿透(3层)\n• 关联关系分析\n• 优先支持"
  },
  {
    question: "数据来源是什么？",
    answer: "我们的数据来自：\n• 国家企业信用信息公示系统\n• 中国裁判文书网\n• 国家知识产权局\n• 工商行政管理部门\n• 第三方授权数据源\n\n数据每日更新，准确率超过95%。"
  },
  {
    question: "如何升级到专业版？",
    answer: "升级步骤：\n1. 登录您的账户\n2. 进入\"订阅\"页面\n3. 选择\"专业版\"套餐\n4. 完成支付（支持支付宝、微信、对公转账）\n5. 即时升级完成\n\n新用户首月可享¥199优惠价（原价¥299）。"
  },
  {
    question: "支持哪些AI平台？",
    answer: "目前支持：\n• Claude Code（完全集成）\n• OpenAI Codex（MCP协议）\n• Cursor、Windsurf等AI IDE\n\n计划支持：\n• GitHub Copilot\n• 其他主流AI开发工具"
  },
  {
    question: "API调用失败怎么办？",
    answer: "常见问题排查：\n1. 检查API Key是否正确配置\n2. 确认账户剩余查询次数\n3. 查看网络连接状态\n4. 查看API状态页面\n\n如果问题持续，请联系客服或提交工单，我们会在24小时内响应。"
  },
  {
    question: "企业版和团队版有什么区别？",
    answer: "企业版包含：\n• 无限查询次数\n• API访问权限\n• 股权穿透10层+\n• 批量数据处理\n• 定制功能开发\n• 专属客户经理\n\n适合大型企业、投资机构、咨询公司等高频使用场景。"
  },
  {
    question: "可以申请试用吗？",
    answer: "当然可以！\n• 免费版：无需信用卡，注册即用\n• 专业版：7天免费试用（需绑定支付方式）\n• 企业版：请联系销售申请14天试用\n\n试用期间包含完整功能，无任何限制。"
  }
];

export function FAQ() {
  return (
    <section className="bg-zinc-950 py-24 dark:bg-white">
      <FadeIn>
        <div className="container max-w-screen-2xl">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl dark:text-zinc-950">
                常见问题
              </h2>
              <p className="text-xl text-zinc-400 dark:text-zinc-600 sm:text-lg">
                快速了解灵吉AI的使用方法和功能
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-2xl border-2 border-zinc-800 bg-zinc-900 px-5 py-1 dark:border-zinc-200 dark:bg-zinc-100 sm:px-6 sm:py-2"
                  >
                    <AccordionTrigger className="py-4 text-left text-base font-semibold text-zinc-100 hover:text-blue-400 dark:text-zinc-900 dark:hover:text-blue-600 sm:py-5 sm:text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm text-zinc-400 dark:text-zinc-700 sm:pb-5 sm:text-base">
                      <div className="whitespace-pre-line leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* 仍需帮助 */}
            <div className="mx-auto mt-16 max-w-3xl rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-950 to-zinc-900 p-10 text-center shadow-2xl dark:border-blue-500/30 dark:from-blue-50 dark:to-white">
              <h3 className="mb-3 text-2xl font-bold text-white dark:text-zinc-950">
                仍需帮助？
              </h3>
              <p className="mb-6 text-lg text-zinc-400 dark:text-zinc-700">
                我们的团队随时准备为您解答疑问
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:support@compdata.ai"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-6 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-xl"
                >
                  联系客服
                </a>
                <a
                  href="/docs"
                  className="inline-flex h-11 items-center justify-center rounded-full border-2 border-blue-500 px-6 text-base font-semibold text-blue-400 transition-all hover:bg-blue-950 hover:text-blue-300 dark:border-blue-600 dark:text-blue-600 dark:hover:bg-blue-50"
                >
                  查看文档
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
