import Link from 'next/link';

export const metadata = {
  title: "EPA 608 Type I Practice Test (Free) | EPA608Practice",
  description: "Practice for the EPA 608 Type I certification with free exam-style questions. Type I covers small appliances with 5 pounds or less of refrigerant.",
  robots: { index: false, follow: true },
};

export default function EPA608Type1PracticeTestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-slate-900">EPA 608 Type I Practice Test</h1>
        
        <div className="space-y-4 mb-8 text-gray-700">
          <p>
            The EPA 608 Type I certification is for technicians who work with small appliances containing 5 pounds or less of refrigerant. This includes domestic refrigerators, window air conditioners, and other small refrigeration units.
          </p>
          <p>
            This practice test helps you prepare for the Type I exam with real exam-style questions covering recovery procedures, safety regulations, and proper handling of refrigerants in small appliances.
          </p>
          <p>
            Type I is often the starting point for many HVAC technicians, but many choose to pursue Universal certification instead for greater job flexibility.
          </p>
          <p>
            Start practicing now with our free 20-question trial, then unlock 300+ questions and detailed explanations for just $9.99.
          </p>
        </div>

        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Free Practice Test (20 questions)
          </Link>
        </div>

        <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Full page coming soon. This is a placeholder to avoid 404 errors.
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-semibold mb-4 text-slate-900">Related Pages</h2>
          <ul className="space-y-2">
            <li><Link href="/epa-608-practice-test" className="text-blue-600 hover:underline">EPA 608 Practice Test</Link></li>
            <li><Link href="/epa-608-universal-practice-test" className="text-blue-600 hover:underline">EPA 608 Universal Practice Test</Link></li>
            <li><Link href="/epa-608-type-1-practice-test" className="text-blue-600 hover:underline">EPA 608 Type I Practice Test</Link></li>
            <li><Link href="/epa-608-type-2-practice-test" className="text-blue-600 hover:underline">EPA 608 Type II Practice Test</Link></li>
            <li><Link href="/epa-608-type-3-practice-test" className="text-blue-600 hover:underline">EPA 608 Type III Practice Test</Link></li>
            <li><Link href="/epa-608-practice-test-free" className="text-blue-600 hover:underline">EPA 608 Practice Test Free</Link></li>
            <li><Link href="/epa-608-practice-test-pdf" className="text-blue-600 hover:underline">EPA 608 Practice Test PDF</Link></li>
            <li><Link href="/what-is-epa-certification" className="text-blue-600 hover:underline">What is EPA Certification</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

