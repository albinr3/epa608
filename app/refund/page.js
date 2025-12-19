import Link from 'next/link';

export const metadata = {
  title: 'Refund Policy | EPA608Practice.org',
  description: 'Refund Policy for EPA608Practice.org - Money-back guarantee for EPA 608 certification practice platform',
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8">
          Refund Policy
        </h1>
        
        <p className="text-sm text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Money-Back Guarantee</h2>
            <p className="leading-relaxed mb-4">
              We stand behind our EPA 608 exam preparation platform with a <strong>30-day money-back guarantee</strong>. If you are not satisfied with your purchase or if you do not pass your EPA 608 certification exam after using our platform, we will refund your payment in full.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Eligibility for Refund</h2>
            <p className="leading-relaxed mb-4">
              To be eligible for a refund, you must meet the following conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your refund request must be made within <strong>30 days</strong> of your purchase date</li>
              <li>You must have attempted the EPA 608 certification exam at least once after purchasing our service</li>
              <li>You must provide proof of your exam attempt (exam results, registration confirmation, or similar documentation)</li>
              <li>You must not have violated our Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Request a Refund</h2>
            <p className="leading-relaxed mb-4">
              To request a refund, please contact us through our <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline">contact page</Link> and include the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your account email address</li>
              <li>Date of purchase</li>
              <li>Order number or transaction ID (if available)</li>
              <li>Reason for refund request</li>
              <li>Proof of exam attempt (if applicable)</li>
            </ul>
            <p className="leading-relaxed mb-4">
              We will review your request and respond within <strong>5 business days</strong>. Once approved, refunds will be processed to your original payment method within 7-10 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Refund Processing</h2>
            <p className="leading-relaxed mb-4">
              Approved refunds will be processed to the original payment method used for the purchase. Processing times may vary depending on your payment provider:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Credit/Debit Cards:</strong> 7-10 business days</li>
              <li><strong>PayPal:</strong> 3-5 business days</li>
              <li><strong>Other Payment Methods:</strong> May vary, please contact us for specific timelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Non-Refundable Items</h2>
            <p className="leading-relaxed mb-4">
              The following are not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Refund requests made after 30 days from the purchase date</li>
              <li>Accounts that have been suspended or terminated for violation of our Terms of Service</li>
              <li>Purchases made through third-party platforms (please contact the platform directly)</li>
              <li>Refund requests without proof of exam attempt (for "Pass or get your money back" guarantee)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Account Access After Refund</h2>
            <p className="leading-relaxed mb-4">
              Upon approval and processing of your refund, your account access to premium features will be revoked. You will retain access to free features of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Legal Rights</h2>
            <p className="leading-relaxed mb-4">
              This refund policy does not affect your statutory rights as a consumer. If you are located in a jurisdiction that provides additional consumer protection rights, those rights remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about this Refund Policy, please contact us through our <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline">contact page</Link>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4">
          <Link 
            href="/terms" 
            className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            ← Terms of Service
          </Link>
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

