import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service | Rotaract LIA',
  description: 'Terms of Service for Rotaract Club Lead India Ahead – rules and guidelines for using our website and participating in our programmes.',
}

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">
          Last updated: July 2026
        </p>

        <div className="space-y-10 text-base leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website of Rotaract Club Lead India Ahead ("Rotaract LIA", "we", "us", or "our"),
              you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use
              our website or services. These terms apply to all visitors, members, volunteers, and any other users
              of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. About Rotaract LIA</h2>
            <p>
              Rotaract LIA is a youth service organisation under Rotary International, District 3206, dedicated to
              community service, professional development, and international understanding. Our website is a platform
              to share our projects, events, and initiatives with the public and our members.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Use of the Website</h2>
            <p className="mb-3">You agree to use this website only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              <li>Infringe upon or violate the rights of any third party.</li>
              <li>Transmit any unsolicited or unauthorised advertising, promotional material, or spam.</li>
              <li>Attempt to gain unauthorised access to any part of the website or its related systems.</li>
              <li>Post or transmit content that is false, misleading, defamatory, or harmful.</li>
              <li>Violate any applicable local, national, or international law or regulation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website — including text, images, logos, graphics, event photos, and project
              descriptions — is the property of Rotaract LIA or its respective content contributors and is
              protected by applicable copyright and intellectual property laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, modify, or create derivative works of any content from this website
              without explicit written permission from Rotaract LIA, except for personal, non-commercial use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">5. User-Submitted Content</h2>
            <p>
              If you submit content to us via contact forms, event registrations, or any other means, you grant
              Rotaract LIA a non-exclusive, royalty-free right to use, display, and share that content for
              organisational and promotional purposes. You represent that you have the right to submit such content
              and that it does not violate any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">6. Event Participation</h2>
            <p>
              Participation in any Rotaract LIA event or programme is voluntary. By participating, you consent to
              being photographed or recorded for documentation and promotional purposes. Participants are expected
              to maintain respectful and professional conduct at all times. Rotaract LIA reserves the right to
              remove participants who violate the club's code of conduct.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">7. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided on an "as is" basis without warranties of any kind, either
              express or implied. Rotaract LIA makes no warranties regarding the accuracy, completeness,
              reliability, or availability of the website or its content. Use of the website is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Rotaract LIA and its members, officers, and volunteers shall
              not be liable for any indirect, incidental, special, or consequential damages arising out of or
              related to your use of this website or participation in our activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">9. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites for your convenience. These links do not constitute
              an endorsement of those sites. Rotaract LIA is not responsible for the content or privacy practices
              of any external site and encourages you to review their terms before interacting with them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">10. Changes to These Terms</h2>
            <p>
              Rotaract LIA reserves the right to update or modify these Terms of Service at any time. Changes will
              take effect upon posting to this page with a revised date. Continued use of the website after any
              changes constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">11. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India.
              Any disputes arising from these terms shall be subject to the jurisdiction of the courts in
              Coimbatore, Tamil Nadu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
