import { Layers, Database, Cloud, Brain, Lock, Zap } from 'lucide-react';

export default function Architecture() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">Architecture & Tech Stack</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A comprehensive overview of Instafix's technical architecture and technology choices
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#00C298]/10 via-blue-500/10 to-purple-500/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">System Overview</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Instafix is built on a modern, scalable architecture combining React frontend, Supabase backend,
          AI-powered intelligence, and blockchain verification. The system prioritizes security, real-time
          communication, and user experience across all touchpoints.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Frontend Stack</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00C298] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">React 18</h3>
                <p className="text-sm text-gray-500">UI Library</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Modern component-based architecture with hooks, context API, and concurrent rendering for optimal performance.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">TypeScript</h3>
                <p className="text-sm text-gray-500">Type System</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Strongly-typed JavaScript ensuring code quality, better IDE support, and catching errors at compile time.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Vite</h3>
                <p className="text-sm text-gray-500">Build Tool</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Lightning-fast HMR, optimized builds, and modern development experience with instant server start.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TW</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tailwind CSS</h3>
                <p className="text-sm text-gray-500">Styling</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Utility-first CSS framework for rapid UI development with consistent design system.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">UI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">shadcn/ui</h3>
                <p className="text-sm text-gray-500">Component Library</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Beautiful, accessible, and customizable component library built on Radix UI primitives.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">WebSockets</h3>
                <p className="text-sm text-gray-500">Real-time</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Supabase Realtime for instant bidirectional communication and live data synchronization.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
            <Database className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Backend Stack</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Supabase</h3>
                <p className="text-sm text-gray-500">Backend Platform</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Complete backend solution with PostgreSQL database, authentication, real-time subscriptions, and storage.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">PG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PostgreSQL</h3>
                <p className="text-sm text-gray-500">Database</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Robust relational database with advanced features, ACID compliance, and excellent performance.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Edge Functions</h3>
                <p className="text-sm text-gray-500">Serverless Compute</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Deno-powered serverless functions for business logic, webhooks, and third-party integrations.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Row Level Security</h3>
                <p className="text-sm text-gray-500">Access Control</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              PostgreSQL RLS policies enforce granular data access control at the database level.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">AI & Intelligence Layer</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">GPT-4</h3>
                <p className="text-sm text-gray-500">Large Language Model</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Powers intelligent service discovery, natural language queries, and automated customer support.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">LC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">LangChain</h3>
                <p className="text-sm text-gray-500">AI Framework</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Orchestrates LLM chains, embeddings, and vector stores for intelligent service recommendations.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ML</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Machine Learning</h3>
                <p className="text-sm text-gray-500">Predictive Analytics</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Vendor scheduling optimization, demand forecasting, and intelligent job assignment algorithms.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">GM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Google Maps API</h3>
                <p className="text-sm text-gray-500">Location Services</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Geocoding, route optimization, and pincode-based service area validation.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Security & Blockchain</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">#</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SHA-256 Hashing</h3>
                <p className="text-sm text-gray-500">Cryptography</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Digital satisfaction signatures are hashed using SHA-256 for immutable proof of service completion.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">JWT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">JWT Authentication</h3>
                <p className="text-sm text-gray-500">Auth</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Secure, stateless authentication with JSON Web Tokens for API access and session management.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">End-to-End Encryption</h3>
                <p className="text-sm text-gray-500">Data Protection</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Sensitive data encrypted at rest and in transit using AES-256 and TLS 1.3.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Audit Logs</h3>
                <p className="text-sm text-gray-500">Compliance</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Immutable audit trails track all system activities for compliance and forensic analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">DevOps & Infrastructure</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-3">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold">GitHub</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Version control and CI/CD</p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <h3 className="text-lg font-bold">Docker</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Containerization</p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">▲</span>
            </div>
            <h3 className="text-lg font-bold">Vercel</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Frontend hosting</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1D1F1F] text-white rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold">System Architecture Diagram</h2>
        <div className="space-y-4 text-sm font-mono">
          <div className="border border-gray-700 rounded p-4">
            <div className="text-[#00C298] mb-2">┌─ FRONTEND LAYER ─────────────────────┐</div>
            <div className="ml-4">React + TypeScript + Tailwind CSS</div>
            <div className="ml-4">Vite Build Tool + shadcn/ui Components</div>
            <div className="ml-4 text-gray-400">└─ Real-time WebSocket Subscriptions</div>
          </div>

          <div className="border border-gray-700 rounded p-4">
            <div className="text-blue-400 mb-2">┌─ BACKEND LAYER ──────────────────────┐</div>
            <div className="ml-4">Supabase PostgreSQL Database</div>
            <div className="ml-4">Row Level Security + JWT Auth</div>
            <div className="ml-4">Edge Functions (Serverless)</div>
            <div className="ml-4 text-gray-400">└─ Real-time Subscriptions Engine</div>
          </div>

          <div className="border border-gray-700 rounded p-4">
            <div className="text-purple-400 mb-2">┌─ AI INTELLIGENCE LAYER ──────────────┐</div>
            <div className="ml-4">GPT-4 + LangChain</div>
            <div className="ml-4">ML Scheduling Algorithms</div>
            <div className="ml-4 text-gray-400">└─ Google Maps API Integration</div>
          </div>

          <div className="border border-gray-700 rounded p-4">
            <div className="text-yellow-400 mb-2">┌─ SECURITY & BLOCKCHAIN LAYER ────────┐</div>
            <div className="ml-4">SHA-256 Signature Hashing</div>
            <div className="ml-4">Immutable Audit Logs</div>
            <div className="ml-4 text-gray-400">└─ End-to-End Encryption (AES-256)</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#00C298]/10 to-blue-500/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Why This Stack?</h2>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Scalability:</strong> Supabase and serverless architecture scale automatically with demand.
          </p>
          <p>
            <strong>Developer Experience:</strong> TypeScript, Vite, and modern tooling ensure fast, maintainable development.
          </p>
          <p>
            <strong>Security First:</strong> RLS, JWT, encryption, and blockchain verification provide enterprise-grade security.
          </p>
          <p>
            <strong>Real-time:</strong> WebSocket integration keeps all users synchronized with instant updates.
          </p>
          <p>
            <strong>AI-Powered:</strong> GPT-4 and ML algorithms provide intelligent automation and recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
