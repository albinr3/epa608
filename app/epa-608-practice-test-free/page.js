import Link from 'next/link';

export const metadata = {
  title: "Free EPA 608 Practice Test (20 Questions) | EPA608Practice",
  description: "Take a free EPA 608 practice test with 20 real exam-style questions. No credit card required. Start practicing now and unlock 300+ questions for $9.99.",
  robots: { index: false, follow: true },
};

export default function EPA608PracticeTestFreePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-slate-900">Free EPA 608 Practice Test</h1>
        
        <div className="space-y-4 mb-8 text-gray-700">
          <p>
            Start preparing for your EPA 608 certification exam with our free practice test. No credit card required, no sign-up fees—just 20 real exam-style questions to help you understand what the actual test is like.
          </p>
          <p>
            Our free practice test includes instant feedback and clear explanations for each question, so you can learn why each answer is correct or incorrect. This helps you build confidence and identify areas where you need more study.
          </p>
          <p>
            After trying the free 20 questions, you can unlock access to 300+ practice questions with detailed explanations for just $9.99. This gives you comprehensive coverage of all topics on the EPA 608 exam.
          </p>
          <p>
            Start your free practice test now and see how our exam simulator can help you pass the EPA 608 certification on your first try.
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

