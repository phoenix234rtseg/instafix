import { Rocket, Smartphone, Globe, Brain, CreditCard, TrendingUp, Shield, Zap } from 'lucide-react';

export default function Roadmap() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">Product Roadmap</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Our vision for the future of Instafix and planned feature releases
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#00C298]/10 via-blue-500/10 to-purple-500/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          We're building the world's most trusted and efficient home services platform. Our roadmap focuses on
          expanding capabilities, improving user experience, and maintaining our commitment to transparency and
          security through AI and blockchain technology.
        </p>
      </div>

      <div className="space-y-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Q1 2025 - Mobile First</h2>
              <p className="text-gray-600 dark:text-gray-400">Launch native mobile applications</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-bold">React Native App</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Native iOS and Android applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Push notifications for real-time updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Offline mode for vendor job management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>GPS tracking for vendor location sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Biometric authentication for secure access</span>
                </li>
              </ul>
              <div className="pt-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">
                  In Development
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-bold">Progressive Web App</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Installable web app for all platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Service workers for offline functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Background sync for delayed actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Optimized performance for mobile web</span>
                </li>
              </ul>
              <div className="pt-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                  In Development
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Q2 2025 - AI Enhancement</h2>
              <p className="text-gray-600 dark:text-gray-400">Advanced AI features and automation</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-xl font-bold">AI-Powered Pricing</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Dynamic pricing based on demand, location, urgency, and historical data. ML models predict optimal
                pricing for both customers and vendors.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#00C298]" />
                <h3 className="text-xl font-bold">Fraud Detection</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                AI-powered anomaly detection identifies suspicious activities, fake reviews, and fraudulent accounts
                in real-time to protect platform integrity.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <h3 className="text-xl font-bold">AI Chatbot Support</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                24/7 intelligent chatbot powered by GPT-4 provides instant support, answers questions, and helps
                with bookings and troubleshooting.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Brain className="w-8 h-8 text-[#00C298]" />
                <h3 className="text-xl font-bold">Predictive Maintenance</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                AI predicts when customers may need services based on historical patterns, seasonal trends, and
                service lifecycle data.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Q3 2025 - Global Expansion</h2>
              <p className="text-gray-600 dark:text-gray-400">Internationalization and market expansion</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-[#00C298]" />
                <h3 className="text-xl font-bold">Multi-Language Support</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Support for 15+ languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>RTL language support (Arabic, Hebrew)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Localized content and date/time formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Real-time translation in chat</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold">Multi-Currency</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Support for 50+ currencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Real-time exchange rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Region-specific pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Local payment methods</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-bold">Regional Service Types</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Adapt service categories to local markets. Support region-specific services, regulations, and
                licensing requirements.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-xl font-bold">Enterprise Solutions</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                White-label solutions for property management companies, real estate firms, and facility managers
                with custom branding and workflows.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Q4 2025 - Monetization & Growth</h2>
              <p className="text-gray-600 dark:text-gray-400">New revenue streams and user growth</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold">Subscription Plans</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Premium customer tiers with priority service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Vendor Pro accounts with enhanced visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Annual maintenance packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Business plans for property managers</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-[#00C298]" />
                <h3 className="text-xl font-bold">Payment Integration</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Multiple payment gateways (Stripe, PayPal, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Digital wallets and buy now, pay later options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Split payments and invoicing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">•</span>
                  <span>Automated billing for recurring services</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#00C298]" />
                <h3 className="text-xl font-bold">Advanced Analytics</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Comprehensive analytics dashboard for vendors showing revenue trends, customer insights, service
                performance, and growth recommendations.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <h3 className="text-xl font-bold">Marketing Tools</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Built-in marketing suite for vendors: promotional campaigns, discount codes, referral programs,
                and automated customer outreach.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Future Innovations</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-3">
            <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h3 className="font-bold">Video Consultations</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Virtual service assessments and remote troubleshooting via video calls
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-3">
            <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            <h3 className="font-bold">IoT Integration</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Connect with smart home devices for predictive maintenance alerts
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-3">
            <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <h3 className="font-bold">Marketplace API</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Public API for third-party integrations and partner ecosystems
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#00C298]/10 via-blue-500/10 to-purple-500/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Community Input</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This roadmap is shaped by feedback from our community. We prioritize features based on user needs,
          market demand, and strategic value.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/instafix/instafix/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#00C298] text-white rounded-lg font-medium hover:bg-[#00a57f] transition-colors"
          >
            Join Discussions
          </a>
          <a
            href="https://github.com/instafix/instafix/issues/new?labels=feature-request"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            Request Feature
          </a>
        </div>
      </div>
    </div>
  );
}
