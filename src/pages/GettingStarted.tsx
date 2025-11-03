import { Terminal, FolderTree, Key, Play } from 'lucide-react';

export default function GettingStarted() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">Getting Started</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Set up your Instafix development environment in minutes
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#00C298] rounded-xl flex items-center justify-center">
            <Terminal className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Installation</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3">1. Clone the Repository</h3>
            <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">bash</span>
              </div>
              <code>git clone https://github.com/instafix/instafix.git</code>
              <br />
              <code>cd instafix</code>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">2. Install Dependencies</h3>
            <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">bash</span>
              </div>
              <code>npm install</code>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              This will install all required frontend and backend dependencies including React, TypeScript, Supabase, and AI libraries.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">3. Start Development Server</h3>
            <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">bash</span>
              </div>
              <code>npm run dev</code>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              The application will start on <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">http://localhost:5173</code>
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <Key className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Environment Configuration</h2>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Create a <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">.env</code> file in the project root with the following variables:
          </p>

          <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto space-y-1">
            <div className="text-gray-400 mb-2">.env</div>
            <div><span className="text-blue-400">VITE_SUPABASE_URL</span>=your_supabase_project_url</div>
            <div><span className="text-blue-400">VITE_SUPABASE_ANON_KEY</span>=your_supabase_anon_key</div>
            <div className="h-2"></div>
            <div><span className="text-blue-400">VITE_OPENAI_API_KEY</span>=your_openai_api_key</div>
            <div className="h-2"></div>
            <div><span className="text-blue-400">VITE_GOOGLE_MAPS_API_KEY</span>=your_google_maps_key</div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Important Security Note</h4>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Never commit your <code>.env</code> file to version control. Keep your API keys secure and rotate them regularly.
              The <code>.env</code> file is already included in <code>.gitignore</code>.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold">How to Get Your Keys</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <h4 className="font-bold mb-2">Supabase</h4>
              <ol className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-decimal list-inside">
                <li>Create account at supabase.com</li>
                <li>Create a new project</li>
                <li>Go to Settings → API</li>
                <li>Copy Project URL and anon key</li>
              </ol>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <h4 className="font-bold mb-2">OpenAI</h4>
              <ol className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-decimal list-inside">
                <li>Sign up at platform.openai.com</li>
                <li>Navigate to API Keys</li>
                <li>Create new secret key</li>
                <li>Copy and save securely</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
            <FolderTree className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Project Structure</h2>
        </div>

        <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-6 font-mono text-sm overflow-x-auto">
          <pre className="space-y-1">
{`instafix/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── customer/       # Customer-specific components
│   │   ├── vendor/         # Vendor dashboard components
│   │   ├── admin/          # Admin panel components
│   │   └── shared/         # Shared components
│   ├── pages/              # Page components
│   │   ├── CustomerDashboard.tsx
│   │   ├── VendorDashboard.tsx
│   │   └── AdminPanel.tsx
│   ├── services/           # API and service layer
│   │   ├── supabase.ts     # Supabase client
│   │   ├── ai.ts           # AI service integration
│   │   └── blockchain.ts   # Signature hashing
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript types
│   └── App.tsx             # Main application
├── supabase/
│   ├── migrations/         # Database migrations
│   └── functions/          # Edge functions
├── public/                 # Static assets
├── .env                    # Environment variables
├── package.json
└── README.md`}
          </pre>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Next Steps</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-[#00C298] transition-colors">
            <h3 className="text-xl font-bold mb-3">Explore Features</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Learn about the platform's capabilities for customers, vendors, and admins.
            </p>
            <a href="#features" className="text-[#00C298] font-medium hover:underline">
              View Features →
            </a>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-[#00C298] transition-colors">
            <h3 className="text-xl font-bold mb-3">Understand Architecture</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Dive deep into the technical stack and system design.
            </p>
            <a href="#architecture" className="text-[#00C298] font-medium hover:underline">
              View Architecture →
            </a>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-[#00C298] transition-colors">
            <h3 className="text-xl font-bold mb-3">Usage Guides</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Follow workflows for each user role with practical examples.
            </p>
            <a href="#usage-guides" className="text-[#00C298] font-medium hover:underline">
              View Guides →
            </a>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-[#00C298] transition-colors">
            <h3 className="text-xl font-bold mb-3">Contributing</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Learn how to contribute to the Instafix project.
            </p>
            <a href="#contributing" className="text-[#00C298] font-medium hover:underline">
              View Guidelines →
            </a>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-3">Need Help?</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If you encounter any issues during setup, check out these resources:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            <a href="https://github.com/instafix/instafix/issues" target="_blank" rel="noopener noreferrer" className="text-[#00C298] hover:underline">
              GitHub Issues
            </a> - Report bugs or request features
          </li>
          <li>
            <a href="https://discord.gg/instafix" target="_blank" rel="noopener noreferrer" className="text-[#00C298] hover:underline">
              Discord Community
            </a> - Get help from other developers
          </li>
          <li>
            <a href="mailto:support@instafix.com" className="text-[#00C298] hover:underline">
              Email Support
            </a> - Reach out to the team directly
          </li>
        </ul>
      </div>
    </div>
  );
}
