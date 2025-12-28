import Link from 'next/link';

export const metadata = {
  title: "What is EPA Certification? EPA 608 Explained | EPA608Practice",
  description: "Learn what EPA 608 certification is, why it's required, and how to get certified. EPA 608 is mandatory for HVAC technicians who handle refrigerants.",
  robots: { index: false, follow: true },
};

export default function WhatIsEPACertificationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-slate-900">What is EPA Certification?</h1>
        
        <div className="space-y-4 mb-8 text-gray-700">
          <p>
            EPA 608 certification is a mandatory certification required by the U.S. Environmental Protection Agency (EPA) for technicians who work with refrigeration and air conditioning systems. It's required for anyone who handles, recovers, recycles, or disposes of regulated refrigerants.
          </p>
          <p>
            The certification is divided into four types: Type I (small appliances), Type II (high-pressure systems), Type III (low-pressure systems), and Universal (all systems). Most technicians choose Universal certification because it provides the most job flexibility and avoids the need to retest later.
          </p>
          <p>
            To obtain EPA 608 certification, you must pass an exam that tests your knowledge of refrigerant handling, recovery procedures, leak detection, and safety regulations. The exam typically contains 25-50 questions depending on the certification type.
          </p>
          <p>
            Our free practice test helps you prepare for the EPA 608 exam with real exam-style questions, instant feedback, and clear explanations. Start with 20 free questions, then unlock 300+ questions for $9.99.
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

