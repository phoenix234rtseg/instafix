import { Shield, Lock, Key, FileCheck, Eye, AlertTriangle } from 'lucide-react';

export default function Security() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">Security</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Enterprise-grade security measures protecting your data and ensuring platform integrity
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 rounded-xl p-8 border border-red-200 dark:border-red-800">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold mb-3">Security is Our Priority</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Instafix implements multiple layers of security to protect user data, prevent unauthorized access,
              and ensure the integrity of all platform operations. Every feature is built with security-first principles.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#00C298] rounded-xl flex items-center justify-center">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Authentication & Authorization</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Key className="w-8 h-8 text-[#00C298]" />
              <h3 className="text-xl font-bold">JWT Authentication</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              JSON Web Tokens provide stateless, secure authentication. Tokens expire after 24 hours and are
              automatically refreshed. All API requests require valid JWT tokens in authorization headers.
            </p>
            <div className="bg-gray-50 dark:bg-[#1D1F1F] rounded p-3 text-sm font-mono">
              Authorization: Bearer &lt;JWT_TOKEN&gt;
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#00C298]" />
              <h3 className="text-xl font-bold">Row Level Security (RLS)</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              PostgreSQL RLS policies enforce data access at the database level. Users can only access their own
              data, and role-based policies control vendor and admin permissions. RLS is enabled on ALL tables.
            </p>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <p>✓ Customers: Own bookings only</p>
              <p>✓ Vendors: Assigned jobs only</p>
              <p>✓ Admins: Platform-wide read access</p>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-xl font-bold">Password Security</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Passwords are hashed using bcrypt with salt rounds. Minimum requirements: 8 characters, 1 uppercase,
              1 lowercase, 1 number. Password reset requires email verification with time-limited tokens.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-bold">Role-Based Access Control</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Four distinct roles (Customer, Vendor, Admin, Super-Admin) with granular permissions. Users cannot
              escalate privileges or access unauthorized features. Role assignment requires admin approval.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Data Protection</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-xl font-bold">Encryption at Rest</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              All sensitive data is encrypted using AES-256 encryption before storage. Database encryption is
              enabled at the infrastructure level. Personal information, payment details, and documents are
              individually encrypted with unique keys.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold">Encryption in Transit</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              All network communication uses TLS 1.3 encryption. HTTPS is enforced across the entire platform.
              WebSocket connections are secured with WSS protocol. API endpoints reject non-encrypted requests.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-xl font-bold">Data Minimization</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              We collect only essential data required for service delivery. Personal information is retained only
              as long as necessary. Users can request data deletion in compliance with GDPR and privacy regulations.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-[#00C298]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-bold">Secure Backups</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Automated daily backups with 30-day retention. Backups are encrypted and stored in geographically
              distributed locations. Point-in-time recovery available for disaster recovery scenarios.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
            <FileCheck className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Blockchain Verification</h2>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-200 dark:border-yellow-800 rounded-xl p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Immutable Satisfaction Signatures</h3>
            <p className="text-gray-700 dark:text-gray-300">
              When a customer signs off on completed work, their digital signature is hashed using SHA-256
              cryptographic algorithm. This creates an immutable, tamper-proof record that:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Cannot be altered or forged after creation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Provides cryptographic proof of customer satisfaction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Timestamped with precise completion date and time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Links customer ID, vendor ID, and booking details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Can be verified independently by any party</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1D1F1F] text-gray-100 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-400 mb-2">Example Hash</div>
            <div className="break-all text-xs">
              a3f7b9c2e8d4f1a6b5c9e2d7f4a8b1c5e9d3f7a2b6c4e8d1f5a9b3c7e2d6f4a1
            </div>
            <div className="text-gray-400 mt-3 text-xs">
              This hash uniquely identifies the transaction and cannot be reversed to expose the original signature.
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-3">
            <h3 className="text-lg font-bold">How It Works</h3>
            <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-decimal list-inside">
              <li>Customer completes digital signature on device</li>
              <li>Signature data combined with transaction metadata</li>
              <li>SHA-256 algorithm generates unique hash</li>
              <li>Hash stored in immutable audit log</li>
              <li>Original signature data discarded (privacy)</li>
            </ol>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-3">
            <h3 className="text-lg font-bold">Benefits</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-[#00C298]">✓</span>
                <span>Dispute resolution with cryptographic proof</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298]">✓</span>
                <span>Vendor accountability and trust building</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298]">✓</span>
                <span>Legal validity in case of disagreements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C298]">✓</span>
                <span>Enhanced platform transparency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
            <Eye className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Audit & Monitoring</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">Immutable Audit Logs</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Every system action is logged with timestamp, user ID, IP address, and action details. Logs are
              append-only and cannot be modified or deleted. Retained for 7 years for compliance purposes.
            </p>
            <div className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
              <p>• Authentication events</p>
              <p>• Data access and modifications</p>
              <p>• Role changes and permissions</p>
              <p>• Booking lifecycle events</p>
              <p>• Payment transactions</p>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">Edit-Only Policy</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Critical records cannot be deleted, only marked as inactive. This preserves data integrity and audit
              trail completeness. Administrators can disable accounts but not erase transaction history.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">Real-Time Monitoring</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Automated detection of suspicious activities: failed login attempts, unusual access patterns,
              privilege escalation attempts. Alerts sent to security team for immediate investigation.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold">Security Audits</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Regular third-party security audits, penetration testing, and vulnerability assessments. Code reviews
              for all security-critical features before deployment.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Best Practices</h2>
        </div>

        <div className="bg-gray-50 dark:bg-[#1D1F1F] rounded-xl p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">For Users</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Use strong, unique passwords and change them regularly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Never share your credentials with anyone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Log out after completing sessions, especially on shared devices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Report suspicious activity immediately to support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Verify vendor identity before allowing access to your property</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">For Developers</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Never commit secrets, API keys, or credentials to version control</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Use environment variables for all sensitive configuration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Validate and sanitize all user input to prevent injection attacks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Follow principle of least privilege when assigning permissions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00C298] mt-1">•</span>
                <span>Keep dependencies updated and monitor security advisories</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-3">Report Security Vulnerabilities</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If you discover a security vulnerability, please report it responsibly:
        </p>
        <div className="space-y-2">
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Email:</strong>{' '}
            <a href="mailto:security@instafix.com" className="text-[#00C298] hover:underline">
              security@instafix.com
            </a>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Please do not publicly disclose vulnerabilities until we've had time to address them. We appreciate
            responsible disclosure and will acknowledge your contribution.
          </p>
        </div>
      </div>
    </div>
  );
}
