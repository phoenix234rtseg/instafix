import { Sparkles, Shield, Zap, Users, Brain, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="inline-block px-4 py-2 bg-[#00C298]/10 text-[#00C298] rounded-full text-sm font-medium">
          AI-Powered Home Services Platform
        </div>
        <h1 className="text-5xl font-bold leading-tight">
          Welcome to <span className="text-[#00C298]">Instafix</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          A secure, full-stack marketplace connecting customers and vendors through verified services,
          blockchain-hashed satisfaction signatures, and real-time AI-driven automation.
        </p>
        <div className="flex gap-4">
          <a
            href="#getting-started"
            className="px-6 py-3 bg-[#00C298] text-white rounded-lg font-medium hover:bg-[#00a57f] transition-colors"
          >
            Get Started
          </a>
          <a
            href="https://github.com/instafix"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-12">
        <h2 className="text-3xl font-bold mb-6">The Problem We Solve</h2>
        <div className="bg-gray-50 dark:bg-[#1D1F1F] rounded-xl p-8 space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Traditional home service platforms struggle with trust, accountability, and transparency. Customers face:
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span>Unreliable vendor verification and quality control</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span>Lack of transparent pricing and hidden costs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span>No immutable proof of service completion or satisfaction</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span>Poor coordination between customers, vendors, and support teams</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Core Innovations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#00C298]/10 to-transparent border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3 hover:shadow-lg hover:shadow-[#00C298]/10 transition-all">
            <div className="w-12 h-12 bg-[#00C298] rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">AI-Driven Intelligence</h3>
            <p className="text-gray-600 dark:text-gray-400">
              GPT-4 powered service discovery, intelligent pricing, and ML-based vendor scheduling for optimal efficiency.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Blockchain Verification</h3>
            <p className="text-gray-600 dark:text-gray-400">
              SHA-256 hashed digital signatures create immutable proof of service completion and customer satisfaction.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Real-Time Updates</h3>
            <p className="text-gray-600 dark:text-gray-400">
              WebSocket-powered live notifications keep all parties synchronized with instant status updates.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Role-Based Dashboards</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tailored interfaces for customers, vendors, admins, and super-admins with granular access control.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3 hover:shadow-lg hover:shadow-green-500/10 transition-all">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Enterprise Security</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Row-level security, JWT authentication, encrypted storage, and immutable audit trails ensure data safety.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-transparent border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3 hover:shadow-lg hover:shadow-pink-500/10 transition-all">
            <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Smart Automation</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Automated workflows, pincode-based pricing, and intelligent service matching reduce manual overhead.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#00C298]/10 via-blue-500/10 to-purple-500/10 rounded-xl p-8 space-y-4">
        <h2 className="text-2xl font-bold">Why Instafix?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Instafix isn't just another service marketplace—it's a trust infrastructure for the home services industry.
          By combining AI intelligence, blockchain verification, and real-time coordination, we ensure accountability
          at every step while providing an exceptional experience for all stakeholders.
        </p>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
        <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="#features"
            className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-[#00C298] transition-colors"
          >
            <h3 className="font-bold mb-2">Explore Features</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learn about role-based capabilities and platform features
            </p>
          </a>
          <a
            href="#getting-started"
            className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-[#00C298] transition-colors"
          >
            <h3 className="font-bold mb-2">Getting Started</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Set up your development environment in minutes
            </p>
          </a>
          <a
            href="#architecture"
            className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-[#00C298] transition-colors"
          >
            <h3 className="font-bold mb-2">Architecture</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Understand the technical stack and system design
            </p>
          </a>
          <a
            href="#security"
            className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-[#00C298] transition-colors"
          >
            <h3 className="font-bold mb-2">Security</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learn about our security measures and best practices
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
