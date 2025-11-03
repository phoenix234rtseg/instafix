import { GitBranch, GitPullRequest, Code, TestTube, CheckCircle } from 'lucide-react';

export default function Contributing() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">Contributing</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Help us build the future of home services with secure, transparent, and efficient solutions
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#00C298]/10 via-blue-500/10 to-purple-500/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Welcome Contributors!</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Instafix is built by developers for developers. We welcome contributions of all kinds: bug fixes,
          new features, documentation improvements, and more. Every contribution helps make home services more
          trustworthy and efficient.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          By contributing to Instafix, you agree to abide by our code of conduct and licensing terms.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Getting Started</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-[#00C298] pl-6 space-y-3">
            <h3 className="text-xl font-bold">1. Fork the Repository</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Create your own fork of the repository to work on changes independently.
            </p>
            <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-4 font-mono text-sm">
              <code>git clone https://github.com/YOUR_USERNAME/instafix.git</code>
              <br />
              <code>cd instafix</code>
            </div>
          </div>

          <div className="border-l-4 border-[#00C298] pl-6 space-y-3">
            <h3 className="text-xl font-bold">2. Create a Branch</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Create a feature branch for your changes. Use descriptive branch names.
            </p>
            <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-4 font-mono text-sm">
              <code>git checkout -b feature/your-feature-name</code>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <p>Branch naming conventions:</p>
              <p>• <code>feature/</code> - New features</p>
              <p>• <code>fix/</code> - Bug fixes</p>
              <p>• <code>docs/</code> - Documentation changes</p>
              <p>• <code>refactor/</code> - Code refactoring</p>
              <p>• <code>test/</code> - Test improvements</p>
            </div>
          </div>

          <div className="border-l-4 border-[#00C298] pl-6 space-y-3">
            <h3 className="text-xl font-bold">3. Make Your Changes</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Follow our coding standards and best practices. Write clean, maintainable code.
            </p>
          </div>

          <div className="border-l-4 border-[#00C298] pl-6 space-y-3">
            <h3 className="text-xl font-bold">4. Test Your Changes</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Ensure all tests pass and add new tests for your changes.
            </p>
            <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-4 font-mono text-sm">
              <code>npm run test</code>
              <br />
              <code>npm run lint</code>
              <br />
              <code>npm run build</code>
            </div>
          </div>

          <div className="border-l-4 border-[#00C298] pl-6 space-y-3">
            <h3 className="text-xl font-bold">5. Commit Your Changes</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Write clear, descriptive commit messages following conventional commits format.
            </p>
            <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-4 font-mono text-sm space-y-1">
              <code>git add .</code>
              <br />
              <code>git commit -m "feat: add vendor rating system"</code>
            </div>
          </div>

          <div className="border-l-4 border-[#00C298] pl-6 space-y-3">
            <h3 className="text-xl font-bold">6. Push and Create Pull Request</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Push your changes and open a pull request with a clear description.
            </p>
            <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-4 font-mono text-sm">
              <code>git push origin feature/your-feature-name</code>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Coding Standards</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">TypeScript Best Practices</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Use strict TypeScript configuration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Define explicit types for all functions and variables</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Avoid <code>any</code> type unless absolutely necessary</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Use interfaces for object shapes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Leverage union types and generics appropriately</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">React Guidelines</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Use functional components with hooks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Keep components small and focused</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Extract reusable logic into custom hooks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Use proper dependency arrays in useEffect</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Implement error boundaries where appropriate</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">Code Style</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Use 2 spaces for indentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Use single quotes for strings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Add semicolons at end of statements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Use meaningful variable and function names</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Run ESLint before committing</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">Security Requirements</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Never commit secrets or API keys</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Validate and sanitize all user input</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Use environment variables for sensitive data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Follow principle of least privilege</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Test for common security vulnerabilities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
            <GitBranch className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Commit Message Format</h2>
        </div>

        <div className="bg-gray-50 dark:bg-[#1D1F1F] rounded-xl p-8 space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            We follow the Conventional Commits specification for clear and consistent commit history.
          </p>

          <div className="space-y-4">
            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <div className="font-mono text-sm mb-2">
                <span className="text-[#00C298]">type</span>
                <span className="text-gray-500">(</span>
                <span className="text-blue-500">scope</span>
                <span className="text-gray-500">): </span>
                <span className="text-gray-300">subject</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Example: feat(auth): add two-factor authentication</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-bold">Types:</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li><code className="text-[#00C298]">feat:</code> New feature</li>
                  <li><code className="text-blue-500">fix:</code> Bug fix</li>
                  <li><code className="text-purple-500">docs:</code> Documentation</li>
                  <li><code className="text-orange-500">style:</code> Formatting</li>
                  <li><code className="text-yellow-500">refactor:</code> Code restructuring</li>
                  <li><code className="text-green-500">test:</code> Adding tests</li>
                  <li><code className="text-red-500">chore:</code> Maintenance</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold">Examples:</h4>
                <div className="text-sm font-mono space-y-1 text-gray-600 dark:text-gray-400">
                  <div>feat(vendor): add earnings dashboard</div>
                  <div>fix(auth): resolve JWT expiration bug</div>
                  <div>docs(api): update endpoint documentation</div>
                  <div>test(booking): add integration tests</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
            <GitPullRequest className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Pull Request Guidelines</h2>
        </div>

        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">PR Description Template</h3>
            <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-4 font-mono text-sm space-y-2">
              <div className="text-gray-400">## Description</div>
              <div>Brief description of changes</div>
              <div className="h-2"></div>
              <div className="text-gray-400">## Type of Change</div>
              <div>- [ ] Bug fix</div>
              <div>- [ ] New feature</div>
              <div>- [ ] Breaking change</div>
              <div>- [ ] Documentation update</div>
              <div className="h-2"></div>
              <div className="text-gray-400">## Testing</div>
              <div>How has this been tested?</div>
              <div className="h-2"></div>
              <div className="text-gray-400">## Checklist</div>
              <div>- [ ] Code follows style guidelines</div>
              <div>- [ ] Self-review completed</div>
              <div>- [ ] Comments added for complex code</div>
              <div>- [ ] Tests added/updated</div>
              <div>- [ ] Documentation updated</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-3">
              <CheckCircle className="w-8 h-8 text-[#00C298]" />
              <h3 className="text-xl font-bold">Do's</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">✓</span>
                  <span>Keep PRs focused and small</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">✓</span>
                  <span>Write clear descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">✓</span>
                  <span>Reference related issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">✓</span>
                  <span>Add screenshots for UI changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C298] mt-1">✓</span>
                  <span>Respond to review comments</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-3">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <h3 className="text-xl font-bold">Don'ts</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Submit huge PRs with many changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Mix unrelated changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Skip tests or documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Push directly to main branch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Ignore CI/CD failures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
            <TestTube className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Testing Requirements</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">Unit Tests</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Write unit tests for all new functions and components. Aim for 80% code coverage.
            </p>
            <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-3 font-mono text-sm">
              <code>npm run test:unit</code>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">Integration Tests</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Test component interactions and API integrations. Ensure features work end-to-end.
            </p>
            <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-3 font-mono text-sm">
              <code>npm run test:integration</code>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#00C298]/10 to-blue-500/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Code of Conduct</h2>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <p>We are committed to providing a welcoming and inclusive environment. All contributors must:</p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 ml-4">
            <li>• Be respectful and considerate in all interactions</li>
            <li>• Accept constructive criticism gracefully</li>
            <li>• Focus on what's best for the community</li>
            <li>• Show empathy towards other community members</li>
            <li>• Report unacceptable behavior to maintainers</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-3">Questions?</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Need help getting started or have questions about contributing?
        </p>
        <div className="space-y-2 text-gray-600 dark:text-gray-400">
          <p>• Join our Discord community for live discussions</p>
          <p>• Check existing issues and discussions on GitHub</p>
          <p>• Email us at <a href="mailto:support@instafix.com" className="text-[#00C298] hover:underline">support@instafix.com</a></p>
        </div>
      </div>
    </div>
  );
}
