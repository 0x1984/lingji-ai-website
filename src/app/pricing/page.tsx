import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { Header } from "@/components/header/header";

export const metadata: Metadata = {
  title: "定价 - 灵吉AI",
  description: "灵活的定价方案，从免费到企业版，满足不同需求",
};

const plans = [
  {
    name: "免费版",
    description: "适合个人试用",
    price: "¥0",
    period: "/月",
    features: [
      { name: "10次/日查询", included: true },
      { name: "基础信息查询", included: true },
      { name: "社区支持", included: true },
      { name: "股权穿透", included: false },
      { name: "关联关系分析", included: false },
      { name: "风险评估报告", included: false },
      { name: "优先支持", included: false },
    ],
    cta: "开始使用",
    href: "/register",
    popular: false,
  },
  {
    name: "专业版",
    description: "适合中小企业和专业服务",
    price: "¥299",
    period: "/月",
    originalPrice: "¥399",
    features: [
      { name: "100次/日查询", included: true },
      { name: "9个Commands全部", included: true },
      { name: "股权穿透（3层）", included: true },
      { name: "关联关系分析", included: true },
      { name: "风险评估报告", included: true },
      { name: "优先支持（24小时）", included: true },
      { name: "API访问", included: false },
    ],
    cta: "立即开始",
    href: "/register",
    popular: true,
    badge: "推荐",
  },
  {
    name: "企业版",
    description: "适合大型企业和投资机构",
    price: "¥5,999",
    period: "/月起",
    features: [
      { name: "无限查询次数", included: true },
      { name: "API访问", included: true },
      { name: "股权穿透（10层+）", included: true },
      { name: "批量数据处理", included: true },
      { name: "定制功能开发", included: true },
      { name: "专属客户经理", included: true },
      { name: "SLA保障", included: true },
    ],
    cta: "联系销售",
    href: "mailto:sales@lingji.ai?subject=企业版咨询",
    popular: false,
  },
];

const faqs = [
  {
    question: "免费版真的永久免费吗？",
    answer:
      "是的，免费版永久免费，每天10次查询额度，适合个人试用和轻度使用。无需信用卡即可开始使用。",
  },
  {
    question: "专业版的首月优惠是什么？",
    answer:
      "新用户首月享受¥199优惠价（原价¥299），之后按月付费。可以随时取消，无长期合约。",
  },
  {
    question: "如何升级到专业版？",
    answer:
      '登录您的账户后，进入"订阅"页面，选择"专业版"套餐，完成支付（支持支付宝、微信、对公转账）即可即时升级。',
  },
  {
    question: "企业版的定制功能包括什么？",
    answer:
      "企业版提供定制开发服务，包括特定数据源接入、私有化部署、专属功能开发等。请联系销售团队详细讨论需求。",
  },
  {
    question: "可以随时取消订阅吗？",
    answer:
      "是的，专业版可以随时取消，无长期合约。取消后将在当前计费周期结束后停止服务，数据会保留30天。",
  },
  {
    question: "支持哪些支付方式？",
    answer:
      "支持支付宝、微信支付、对公转账。企业版支持银行转账和发票开具。",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        {/* Hero - 深色背景 */}
        <section className="relative overflow-hidden bg-zinc-950 py-32 dark:bg-white">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600" />
          </div>

          <div className="relative container max-w-screen-2xl">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-6 border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-600">
                定价方案
              </Badge>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl dark:text-zinc-950">
                简单透明
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  按需升级
                </span>
              </h1>
              <p className="text-xl text-zinc-300 dark:text-zinc-600">
                免费开始，按需升级。无需信用卡，随时取消。
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards - 深色背景 */}
        <section className="bg-zinc-900 py-24 dark:bg-zinc-50">
          <div className="container max-w-screen-2xl">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 lg:grid-cols-3">
                {plans.map((plan, index) => (
                  <FadeIn key={plan.name} delay={index * 100}>
                    <div
                      className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:scale-105 ${
                        plan.popular
                          ? "border-blue-600 bg-zinc-950/50 backdrop-blur-sm shadow-2xl shadow-blue-600/20 dark:border-blue-600 dark:bg-white dark:shadow-xl"
                          : "border-zinc-800 bg-zinc-950/50 backdrop-blur-sm dark:border-zinc-300 dark:bg-white"
                      }`}
                    >
                      {plan.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <Badge className="bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                            {plan.badge}
                          </Badge>
                        </div>
                      )}

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white dark:text-zinc-900">
                          {plan.name}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-600">
                          {plan.description}
                        </p>
                      </div>

                      <div className="mb-8">
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl font-semibold tracking-tight text-white dark:text-zinc-900">
                            {plan.price}
                          </span>
                          <span className="text-zinc-500 dark:text-zinc-500">
                            {plan.period}
                          </span>
                        </div>
                        {plan.originalPrice && (
                          <p className="mt-2 text-sm text-zinc-500 line-through dark:text-zinc-500">
                            原价 {plan.originalPrice}{plan.period}
                          </p>
                        )}
                      </div>

                      <Link href={plan.href} className="block">
                        <Button
                          size="lg"
                          className={`w-full h-12 text-base font-medium transition-all duration-200 ${
                            plan.popular
                              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 dark:bg-blue-600"
                              : "border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 dark:border-zinc-300 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                          }`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.cta}
                        </Button>
                      </Link>

                      <ul className="mt-8 space-y-3">
                        {plan.features.map((feature) => (
                          <li
                            key={feature.name}
                            className="flex items-start gap-3 text-sm"
                          >
                            <Check
                              className={`h-5 w-5 flex-shrink-0 ${
                                feature.included
                                  ? "text-blue-400 dark:text-blue-600"
                                  : "text-zinc-600 dark:text-zinc-500"
                              }`}
                            />
                            <span
                              className={
                                feature.included
                                  ? "text-zinc-300 dark:text-zinc-700"
                                  : "text-zinc-600 line-through dark:text-zinc-500"
                              }
                            >
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - 深色背景 */}
        <section className="bg-zinc-950 py-24 dark:bg-white">
          <div className="container max-w-screen-2xl">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-center text-4xl font-bold text-white sm:text-5xl dark:text-zinc-950">
                常见问题
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <FadeIn key={index} delay={index * 50}>
                    <div className="rounded-2xl border-2 border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 dark:border-zinc-200 dark:bg-zinc-100">
                      <h3 className="mb-3 text-lg font-semibold text-white dark:text-zinc-900">
                        {faq.question}
                      </h3>
                      <p className="text-zinc-400 dark:text-zinc-700">
                        {faq.answer}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA - 深色背景 */}
        <section className="bg-gradient-to-br from-zinc-950 to-zinc-900 py-24 dark:from-white dark:to-zinc-50">
          <div className="container max-w-screen-2xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl dark:text-zinc-950">
                还没有决定？
              </h2>
              <p className="mb-8 text-xl text-zinc-400 dark:text-zinc-600">
                免费版无需信用卡，立即开始使用
              </p>
              <Link href="/register">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 text-lg font-semibold text-white shadow-lg shadow-blue-600/30 hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl">
                  免费开始 →
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - 使用主页的 footer */}
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
                  <a href="/pricing" className="text-sm text-zinc-400 transition-colors hover:text-white dark:text-zinc-600 dark:hover:text-zinc-900">
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
