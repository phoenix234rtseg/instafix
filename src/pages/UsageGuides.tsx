import { User, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

export default function UsageGuides() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">Usage Guides</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Step-by-step workflows for customers, vendors, and admins
        </p>
      </div>

      <div className="space-y-16">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center">
              <User className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Customer Workflow</h2>
              <p className="text-gray-600 dark:text-gray-400">Complete guide to booking and managing services</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-[#00C298] pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00C298] rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Sign Up & Create Account</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Navigate to the Instafix homepage and click "Sign Up"</p>
                <p>Enter your email, password, and basic profile information</p>
                <p>Verify your email address through the confirmation link</p>
                <p>Complete your profile with contact details and service address</p>
              </div>
            </div>

            <div className="border-l-4 border-[#00C298] pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00C298] rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Search for Services</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Use the AI-powered search to describe your service need (e.g., "plumbing leak repair")</p>
                <p>Enter your pincode or allow location access for accurate results</p>
                <p>Browse filtered services with automatic pricing based on your area</p>
                <p>View vendor profiles, ratings, and availability</p>
              </div>
            </div>

            <div className="border-l-4 border-[#00C298] pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00C298] rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Book a Service</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Select your preferred vendor and service package</p>
                <p>Choose a convenient date and time slot</p>
                <p>Provide detailed service requirements and special instructions</p>
                <p>Review pricing and confirm your booking</p>
                <p>Receive instant confirmation via email and in-app notification</p>
              </div>
            </div>

            <div className="border-l-4 border-[#00C298] pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00C298] rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold">Track Service Progress</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Receive real-time notifications when vendor accepts the job</p>
                <p>Get updates when vendor is on the way</p>
                <p>Track live status: "Scheduled" → "In Progress" → "Completed"</p>
                <p>Communicate with vendor through in-app messaging</p>
              </div>
            </div>

            <div className="border-l-4 border-[#00C298] pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00C298] rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <h3 className="text-xl font-bold">Sign Off & Review</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Review completed work with the vendor</p>
                <p>Sign digitally to confirm satisfaction (creates blockchain-hashed signature)</p>
                <p>Rate the vendor (1-5 stars) and leave a review</p>
                <p>Access your receipt and service documentation</p>
                <p>Report issues if work is unsatisfactory</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
              <Wrench className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Vendor Workflow</h2>
              <p className="text-gray-600 dark:text-gray-400">Managing jobs and building your reputation</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Register & Get Verified</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Submit vendor application with business details</p>
                <p>Upload required documents (license, certifications, insurance)</p>
                <p>Wait for admin approval (typically 24-48 hours)</p>
                <p>Set up your profile with services offered, pricing, and availability</p>
                <p>Define your service areas using pincodes</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Receive Job Notifications</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Get instant notifications when customers book services in your area</p>
                <p>Review job details: location, service type, schedule, and pricing</p>
                <p>ML algorithm prioritizes jobs based on your location and availability</p>
                <p>Accept or decline jobs within 15 minutes to maintain priority status</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Manage Your Schedule</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>View all accepted jobs in your dashboard calendar</p>
                <p>Get route optimization suggestions for multiple jobs</p>
                <p>Update job status: "Accepted" → "En Route" → "In Progress" → "Completed"</p>
                <p>Set working hours and block dates when unavailable</p>
                <p>Receive reminders 30 minutes before scheduled jobs</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold">Complete the Service</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Navigate to customer location using integrated maps</p>
                <p>Update status to "In Progress" when starting work</p>
                <p>Communicate with customer through in-app messaging</p>
                <p>Take before/after photos as documentation</p>
                <p>Mark job as "Completed" when finished</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <h3 className="text-xl font-bold">Get Customer Signature & Payment</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Request digital satisfaction signature from customer</p>
                <p>Signature is blockchain-hashed for immutable proof</p>
                <p>Payment is automatically processed upon signature</p>
                <p>View earnings in your dashboard</p>
                <p>Build reputation through customer ratings and reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Admin Workflow</h2>
              <p className="text-gray-600 dark:text-gray-400">Platform operations and vendor management</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Review Vendor Applications</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Access "Pending Applications" section in admin dashboard</p>
                <p>Review vendor profile, documents, and credentials</p>
                <p>Verify business licenses, certifications, and insurance</p>
                <p>Approve or reject application with feedback</p>
                <p>Approved vendors receive instant notification and dashboard access</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Monitor Active Bookings</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>View real-time dashboard of all platform activity</p>
                <p>Track bookings by status: Scheduled, In Progress, Completed, Cancelled</p>
                <p>Identify and investigate delayed or problematic jobs</p>
                <p>Contact customers or vendors to resolve issues</p>
                <p>Generate reports on booking trends and metrics</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Handle Disputes</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Review dispute reports from customers or vendors</p>
                <p>Access immutable audit logs to verify what occurred</p>
                <p>Review blockchain-hashed signatures and timestamps</p>
                <p>Mediate between parties and determine resolution</p>
                <p>Issue refunds or penalties as appropriate</p>
                <p>Update vendor status if policy violations found</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold">Manage Service Catalog</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Add new service categories and subcategories</p>
                <p>Update pricing rules and pincode-based adjustments</p>
                <p>Configure service parameters and requirements</p>
                <p>Enable or disable services based on demand</p>
                <p>Manage seasonal promotions and discounts</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <h3 className="text-xl font-bold">Platform Analytics</h3>
              </div>
              <div className="ml-11 space-y-2 text-gray-600 dark:text-gray-400">
                <p>Monitor daily active users, bookings, and revenue</p>
                <p>Analyze vendor performance metrics and customer satisfaction</p>
                <p>Identify high-performing and underperforming vendors</p>
                <p>Track service popularity and geographic trends</p>
                <p>Export reports for business intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#00C298]/10 via-blue-500/10 to-purple-500/10 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Common Scenarios</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-[#00C298] mt-1 flex-shrink-0" />
            <div>
              <p className="font-bold">Emergency Service Requests</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Customers can mark bookings as "Urgent" for priority vendor matching and faster response times.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-[#00C298] mt-1 flex-shrink-0" />
            <div>
              <p className="font-bold">Rescheduling Services</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Both customers and vendors can request rescheduling up to 4 hours before the scheduled time.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-[#00C298] mt-1 flex-shrink-0" />
            <div>
              <p className="font-bold">Cancellations</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cancellations within 24 hours incur no fee; later cancellations may have partial charges based on admin policy.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-[#00C298] mt-1 flex-shrink-0" />
            <div>
              <p className="font-bold">No-Show Protection</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                If a vendor doesn't show up, customers automatically receive a full refund and priority rebooking assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
