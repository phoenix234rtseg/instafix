import { User, Wrench, ShieldCheck, Crown, MapPin, Bell, FileText, TrendingUp } from 'lucide-react';

export default function Features() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">Platform Features</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Comprehensive features tailored for every user role in the Instafix ecosystem
        </p>
      </div>

      <div className="space-y-16">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center">
              <User className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Customer Features</h2>
              <p className="text-gray-600 dark:text-gray-400">Seamless service booking and management</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <MapPin className="w-8 h-8 text-[#00C298]" />
              <h3 className="text-xl font-bold">Smart Service Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI-powered service search with pincode-based filtering, automatic pricing, and intelligent vendor matching
                based on location, ratings, and availability.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <FileText className="w-8 h-8 text-[#00C298]" />
              <h3 className="text-xl font-bold">Digital Signatures</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sign off on completed services with blockchain-hashed digital signatures, creating immutable proof of
                satisfaction and service quality.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <Bell className="w-8 h-8 text-[#00C298]" />
              <h3 className="text-xl font-bold">Real-Time Notifications</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive instant updates via WebSockets for booking confirmations, vendor assignments, service progress,
                and completion notifications.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <TrendingUp className="w-8 h-8 text-[#00C298]" />
              <h3 className="text-xl font-bold">Service History & Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track all past bookings, view spending patterns, access service receipts, and export transaction history
                for record-keeping.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
              <Wrench className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Vendor Features</h2>
              <p className="text-gray-600 dark:text-gray-400">Professional tools for service providers</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="text-xl font-bold">Intelligent Job Management</h3>
              <p className="text-gray-600 dark:text-gray-400">
                ML-powered scheduling dashboard with automatic job assignment, route optimization, and availability
                management. Accept or decline jobs with real-time notifications.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold">Earnings & Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track revenue, view completed jobs, monitor ratings and reviews, and access detailed performance
                analytics to grow your business.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-bold">Verification & Trust</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build credibility through verified badges, customer reviews, and blockchain-verified service completions
                that prove your reliability.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold">Availability Management</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Set working hours, block dates, manage service areas, and control your schedule with granular
                availability controls.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Admin Features</h2>
              <p className="text-gray-600 dark:text-gray-400">Operations and vendor management tools</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-xl font-bold">Vendor Onboarding</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Approve vendor applications, verify credentials, assign service categories, and manage vendor profiles
                with comprehensive approval workflows.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-xl font-bold">Service Management</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monitor active bookings, resolve disputes, manage service categories, update pricing rules, and oversee
                platform operations in real-time.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <h3 className="text-xl font-bold">Notification Center</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Send platform-wide announcements, manage automated notifications, and communicate with users and vendors
                through centralized messaging.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-bold">Audit Logs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access immutable audit trails of all platform activities, user actions, booking changes, and system
                events for compliance and debugging.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center">
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Super-Admin Features</h2>
              <p className="text-gray-600 dark:text-gray-400">System-level control and configuration</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="text-xl font-bold">User Role Management</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create and manage admin accounts, assign roles and permissions, configure access levels, and control
                system-wide user privileges.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-bold">Platform Configuration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Configure system settings, manage API integrations, update platform parameters, and control feature
                flags across the entire ecosystem.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-xl font-bold">Analytics Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-400">
                View comprehensive platform metrics, user growth, revenue analytics, vendor performance, and system
                health monitoring in real-time.
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-xl font-bold">Security Management</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monitor security events, manage authentication policies, review access logs, and configure enterprise
                security settings and compliance rules.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#00C298]/10 to-blue-500/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">All Features Include</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-center gap-2">
            <span className="text-[#00C298]">✓</span>
            Real-time WebSocket notifications
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#00C298]">✓</span>
            Blockchain-verified transactions
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#00C298]">✓</span>
            AI-powered insights and recommendations
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#00C298]">✓</span>
            Mobile-responsive design
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#00C298]">✓</span>
            Immutable audit trails
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#00C298]">✓</span>
            End-to-end encryption
          </li>
        </ul>
      </div>
    </div>
  );
}
