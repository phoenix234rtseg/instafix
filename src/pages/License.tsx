import { FileText, Users, Mail, MessageCircle, Heart } from 'lucide-react';

export default function License() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">License & Credits</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Open source licensing, acknowledgments, and contact information
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#00C298] rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">MIT License</h2>
        </div>

        <div className="bg-gray-50 dark:bg-[#1D1F1F] rounded-xl p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full font-medium">
                Open Source
              </span>
              <span className="text-gray-600 dark:text-gray-400">Copyright © 2025 Instafix</span>
            </div>

            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-lg p-6 font-mono text-sm space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software
                and associated documentation files (the "Software"), to deal in the Software without restriction,
                including without limitation the rights to use, copy, modify, merge, publish, distribute,
                sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                The above copyright notice and this permission notice shall be included in all copies or
                substantial portions of the Software.
              </p>

              <p className="text-gray-700 dark:text-gray-300 font-bold">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
                BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">What This Means</h3>
            <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">✓</span>
                <span>You can use Instafix for personal or commercial projects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">✓</span>
                <span>You can modify the source code to suit your needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">✓</span>
                <span>You can distribute copies of the original or modified software</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">✓</span>
                <span>You can sell your modifications or services based on Instafix</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">!</span>
                <span>You must include the original copyright and license notice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">!</span>
                <span>The software is provided without warranty</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Acknowledgments</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">Core Technologies</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  React - UI library by Meta
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  TypeScript - Microsoft
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  Vite - Next generation build tool
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  Supabase - Open source Firebase alternative
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  Tailwind CSS - Utility-first CSS framework
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">AI & Services</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  OpenAI - GPT-4 language models
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://langchain.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  LangChain - LLM framework
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://developers.google.com/maps" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  Google Maps API - Location services
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>SHA-256 - Secure hashing algorithm</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">UI Components & Icons</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  shadcn/ui - Component library
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  Lucide React - Icon library
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://www.radix-ui.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  Radix UI - Unstyled primitives
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">Development Tools</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://eslint.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  ESLint - Code linting
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  GitHub - Version control & CI/CD
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C298] transition-colors">
                  Vercel - Hosting platform
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#00C298]/10 to-purple-500/10 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4">Special Thanks</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We're grateful to the open source community and all contributors who have helped make Instafix possible.
            Special thanks to:
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-[#00C298] mt-1">•</span>
              <span>Our core contributors and maintainers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00C298] mt-1">•</span>
              <span>Community members who report bugs and suggest improvements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00C298] mt-1">•</span>
              <span>Early adopters and beta testers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#00C298] mt-1">•</span>
              <span>Open source maintainers whose projects we depend on</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Community & Support</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="https://github.com/instafix/instafix"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4 hover:border-[#00C298] transition-colors"
          >
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">GitHub</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Star the repo, report issues, and contribute code
              </p>
            </div>
          </a>

          <a
            href="https://discord.gg/instafix"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4 hover:border-[#00C298] transition-colors"
          >
            <div className="w-12 h-12 bg-[#5865F2] rounded-lg flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Discord Community</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Join discussions, get help, and connect with other developers
              </p>
            </div>
          </a>

          <a
            href="mailto:support@instafix.com"
            className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4 hover:border-[#00C298] transition-colors"
          >
            <div className="w-12 h-12 bg-[#00C298] rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                support@instafix.com
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Contact Information</h2>
        <div className="bg-gray-50 dark:bg-[#1D1F1F] rounded-xl p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">General Inquiries</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:support@instafix.com" className="text-[#00C298] hover:underline">
                    support@instafix.com
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a href="https://instafix.com" target="_blank" rel="noopener noreferrer" className="text-[#00C298] hover:underline">
                    instafix.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Security</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>
                  <strong>Security Issues:</strong>{' '}
                  <a href="mailto:security@instafix.com" className="text-[#00C298] hover:underline">
                    security@instafix.com
                  </a>
                </p>
                <p className="text-sm">
                  Please report security vulnerabilities responsibly. We appreciate responsible disclosure.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Business & Partnerships</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:business@instafix.com" className="text-[#00C298] hover:underline">
                    business@instafix.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Press & Media</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:press@instafix.com" className="text-[#00C298] hover:underline">
                    press@instafix.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#00C298]/10 via-blue-500/10 to-purple-500/10 rounded-xl p-8 text-center">
        <Heart className="w-12 h-12 text-[#00C298] mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Built with Care</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Instafix is built by a passionate team dedicated to transforming home services through technology.
          We believe in transparency, security, and creating value for everyone in the ecosystem.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          © 2025 Instafix. All rights reserved.
        </p>
      </div>
    </div>
  );
}
