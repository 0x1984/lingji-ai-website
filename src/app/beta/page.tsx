'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BetaGate() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // 内测邀请码列表
  const BETA_CODES = [
    'LINGJI2024',
    'BETA001',
    'TEST2024',
    'EARLY2024',
    'INVITE2024'
  ]

  useEffect(() => {
    // 检查是否已通过验证
    const isVerified = localStorage.getItem('beta_verified')
    if (isVerified === 'true') {
      router.push('/')
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // 验证邀请码
    if (BETA_CODES.includes(code.toUpperCase())) {
      localStorage.setItem('beta_verified', 'true')
      localStorage.setItem('beta_code', code.toUpperCase())
      router.push('/')
    } else {
      setError('邀请码无效，请联系我们获取内测资格')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-md w-full mx-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">灵吉AI</h1>
          <p className="text-gray-400">企业数据智能分析平台</p>
        </div>

        {/* Beta 卡片 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="mb-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-4">
              <span className="text-yellow-400 text-sm font-medium">🔒 内测版</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">需要邀请码</h2>
            <p className="text-gray-300 text-sm">
              灵吉AI目前处于内测阶段，仅限受邀用户访问
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-300 mb-2">
                内测邀请码
              </label>
              <input
                id="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="输入邀请码（如：LINGJI2024）"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={loading}
                autoFocus
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !code}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? '验证中...' : '进入内测'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-gray-400 text-sm text-center mb-3">
              没有邀请码？
            </p>
            <div className="space-y-2">
              <a
                href="https://github.com/0x1984/lingji-ai-website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                在 GitHub 上查看项目
              </a>
              <a
                href="mailto:beta@lingji.ai?subject=申请灵吉AI内测资格&body=你好，我想申请灵吉AI的内测资格。我的姓名是：，我的职业是：，我想使用灵吉AI来："
                className="block text-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                申请内测资格 →
              </a>
            </div>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            内测用户享有终身优惠权益
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © 2024 灵吉AI · 内测版 v0.1.0
          </p>
        </div>
      </div>
    </div>
  )
}
