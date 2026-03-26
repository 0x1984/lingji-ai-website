import { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

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
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-24 dark:from-blue-950 dark:to-cyan-950">
        <div className="container max-w-screen-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
              简单透明的定价
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              免费开始，按需升级。无需信用卡，随时取消。
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container max-w-screen-2xl py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 100}>
                <div
                  className={`relative rounded-3xl border-2 p-8 ${
                    plan.popular
                      ? "border-blue-600 bg-white shadow-2xl dark:border-blue-400 dark:bg-zinc-900"
                      : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-zinc-950 dark:text-zinc-50">
                        {plan.price}
                      </span>
                      <span className="text-zinc-600 dark:text-zinc-400">
                        {plan.period}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <p className="mt-2 text-sm text-zinc-500 line-through dark:text-zinc-500">
                        原价 {plan.originalPrice}{plan.period}
                      </p>
                    )}
                  </div>

                  <Link href={plan.href}>
                    <Button
                      size="lg"
                      className={`w-full ${
                        plan.popular
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.name}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check
                          className={`h-5 w-5 flex-shrink-0 ${
                            feature.included
                              ? "text-blue-600 dark:text-blue-400"
                              : "text-zinc-300 dark:text-zinc-700"
                          }`}
                        />
                        <span
                          className={
                            feature.included
                              ? "text-zinc-700 dark:text-zinc-300"
                              : "text-zinc-400 line-through dark:text-zinc-600"
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
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 py-24 dark:bg-zinc-950">
        <div className="container max-w-screen-2xl">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-zinc-950 dark:text-zinc-50">
              常见问题
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 50}>
                  <div className="rounded-2xl border-2 border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                    <h3 className="mb-3 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                      {faq.question}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container max-w-screen-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-zinc-950 dark:text-zinc-50">
              还没有决定？
            </h2>
            <p className="mb-8 text-xl text-zinc-600 dark:text-zinc-400">
              免费版无需信用卡，立即开始使用
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                免费开始
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
