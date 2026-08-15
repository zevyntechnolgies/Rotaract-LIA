import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | Rotaract LIA',
  description: 'Privacy Policy for Rotaract Club Lead India Ahead – how we collect, use, and protect your information.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fef08a] via-[#f59e0b] to-[#d97706] text-[#290e02] px-4 sm:px-6 lg:px-8 py-16 font-medium">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10 text-sm font-bold text-amber-950 hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold font-playfair text-[#451a03] mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">
          Last updated: July 2026
        </p>

        <div className="space-y-10 text-base leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Introduction</h2>
            <p>
              Rotaract Club Lead India Ahead (referred to as "Rotaract LIA", "we", "our", or "us") is committed to
              protecting your personal information and your right to privacy. This Privacy Policy explains what
              information we collect, how we use it, and your rights regarding that information when you visit our
              website or interact with us through our events, programmes, and contact forms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li><strong>Personal Identification:</strong> Name, email address, phone number when you fill in our contact form or register for events.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on the site, browser type, and device information collected automatically via analytics tools.</li>
              <li><strong>Photographs &amp; Media:</strong> Images or videos submitted or captured during club events with your consent.</li>
              <li><strong>Voluntarily Provided Information:</strong> Any information you provide through feedback forms, project applications, or membership inquiries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>To respond to your inquiries and contact form submissions.</li>
              <li>To send updates about upcoming events, programmes, and club activities (only with your consent).</li>
              <li>To improve our website experience and understand visitor behaviour.</li>
              <li>To manage membership records and volunteer coordination.</li>
              <li>To publish event photos and project highlights on our website or social media (with your consent).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Sharing of Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to any third parties. We may share your
              information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-slate-700 dark:text-slate-300">
              <li>With Rotary International or District 3206 bodies as required for club administration and reporting.</li>
              <li>With event co-organisers who require participant details solely for event management purposes.</li>
              <li>Where required by law, regulation, or a valid legal process.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience. Cookies are small data files stored in your
              browser. You can choose to disable cookies through your browser settings; however, some site features
              may not function properly as a result.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">6. Data Security</h2>
            <p>
              We implement reasonable technical and organisational measures to protect your personal data against
              unauthorised access, alteration, disclosure, or destruction. However, no method of internet
              transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">7. Retention of Data</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in
              this policy, or as required by applicable law. Contact form submissions are typically retained for
              a period of 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">8. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data where it is no longer needed.</li>
              <li>Withdraw consent for communications at any time by contacting us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">9. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the privacy practices
              or content of those sites. We encourage you to review the privacy policies of any third-party sites
              you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with a
              revised date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please reach
              out to us at:
            </p>
            <div className="mt-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm space-y-1">
              <p><strong>Rotaract Club Lead India Ahead</strong></p>
              <p>Email: <a href="mailto:racleadindiaahead2021@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">racleadindiaahead2021@gmail.com</a></p>
              <p>Location: Coimbatore, Tamil Nadu, India</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
