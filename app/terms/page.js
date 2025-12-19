import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | EPA608Practice.org',
  description: 'Terms of Service for EPA608Practice.org - EPA 608 certification practice platform',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8">
          Terms of Service
        </h1>
        
        <p className="text-sm text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed mb-4">
              By accessing and using EPA608Practice.org ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
            <p className="leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on EPA608Practice.org's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts</h2>
            <p className="leading-relaxed mb-4">
              To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide accurate, current, and complete information when creating your account</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and identification</li>
              <li>Accept all responsibility for any and all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Subscription and Payment</h2>
            <p className="leading-relaxed mb-4">
              Some features of the Service may require payment. By subscribing to a paid plan, you agree to pay the fees specified at the time of purchase. All fees are non-refundable except as required by law or as explicitly stated in our <Link href="/refund" className="text-blue-600 hover:text-blue-700 underline">Refund Policy</Link>.
            </p>
            <p className="leading-relaxed mb-4">
              We offer a 30-day money-back guarantee. If you are not satisfied with your purchase or do not pass your EPA 608 certification exam after using our platform, you may be eligible for a full refund. Please review our <Link href="/refund" className="text-blue-600 hover:text-blue-700 underline">Refund Policy</Link> for complete details, terms, and conditions.
            </p>
            <p className="leading-relaxed mb-4">
              We reserve the right to change our pricing at any time. Price changes will not affect existing subscriptions until the next billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property Rights</h2>
            <p className="leading-relaxed mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of EPA608Practice.org and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. User Content</h2>
            <p className="leading-relaxed mb-4">
              You retain ownership of any content you submit, post, or display on or through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content solely for the purpose of providing and improving the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Prohibited Uses</h2>
            <p className="leading-relaxed mb-4">
              You may not use the Service:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
              <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Disclaimer</h2>
            <p className="leading-relaxed mb-4">
              The materials on EPA608Practice.org's website are provided on an 'as is' basis. EPA608Practice.org makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="leading-relaxed mb-4">
              Further, EPA608Practice.org does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitations of Liability</h2>
            <p className="leading-relaxed mb-4">
              In no event shall EPA608Practice.org or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EPA608Practice.org's website, even if EPA608Practice.org or a EPA608Practice.org authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Accuracy of Materials</h2>
            <p className="leading-relaxed mb-4">
              The materials appearing on EPA608Practice.org's website could include technical, typographical, or photographic errors. EPA608Practice.org does not warrant that any of the materials on its website are accurate, complete, or current. EPA608Practice.org may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Links</h2>
            <p className="leading-relaxed mb-4">
              EPA608Practice.org has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by EPA608Practice.org of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Modifications</h2>
            <p className="leading-relaxed mb-4">
              EPA608Practice.org may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Governing Law</h2>
            <p className="leading-relaxed mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact Information</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us through our website.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

