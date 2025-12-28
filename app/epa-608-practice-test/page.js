import Link from 'next/link';
import Image from 'next/image';

// Compute baseUrl and trim trailing slash
const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

export async function generateMetadata() {
  return {
    metadataBase: new URL(`${baseUrl}/`),
    title: "EPA 608 Practice Test (Free) – Real Exam Questions (2025) | EPA608Practice",
    description: "Take a free EPA 608 practice test with real exam-style questions, instant feedback, and clear explanations. Start free (20 questions), then unlock 300+ for $9.99.",
    alternates: {
      canonical: "/epa-608-practice-test",
      languages: {
        "x-default": "/epa-608-practice-test",
        en: "/epa-608-practice-test",
        es: "/es/epa-608-practice-test-en-espanol",
      },
    },
    openGraph: {
      title: "EPA 608 Practice Test (Free) – Real Exam Questions (2025) | EPA608Practice",
      description: "Take a free EPA 608 practice test with real exam-style questions, instant feedback, and clear explanations. Start free (20 questions), then unlock 300+ for $9.99.",
      type: "website",
      locale: "en_US",
      url: "/epa-608-practice-test",
    },
    twitter: {
      card: "summary_large_image",
      title: "EPA 608 Practice Test (Free) – Real Exam Questions (2025) | EPA608Practice",
      description: "Take a free EPA 608 practice test with real exam-style questions, instant feedback, and clear explanations.",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function EPA608PracticeTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="HVAC Prep" 
              width={400}
              height={96}
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
              quality={100}
              priority
              unoptimized
            />
          </Link>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
            <Link
              href="/"
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Pricing
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/30 to-gray-50 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4 sm:mb-6">
            Free EPA 608 Practice Test
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight text-slate-900">
            EPA 608 Practice Test (Free)
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600 mb-6 sm:mb-8 font-semibold">
            Real exam-style questions, instant feedback, and clear explanations.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            If you're preparing for EPA Section 608, practicing with exam-style questions is the fastest way to build confidence. This free EPA 608 practice test helps you learn what the exam asks, why the correct answer is correct, and what to watch out for on test day.
          </p>
          
          <ul className="list-none space-y-2 mb-6 sm:mb-8 max-w-2xl mx-auto text-left">
            <li className="flex items-center gap-3 text-base sm:text-lg md:text-xl text-gray-700">
              <span className="text-green-600 text-xl">✓</span>
              <span>Start free in seconds (no setup)</span>
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg md:text-xl text-gray-700">
              <span className="text-green-600 text-xl">✓</span>
              <span>Instant feedback + explanations</span>
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg md:text-xl text-gray-700">
              <span className="text-green-600 text-xl">✓</span>
              <span>Study Universal, Type I, Type II, and Type III topics</span>
            </li>
          </ul>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link 
              href="/?quiz=1" 
              className="px-6 sm:px-12 md:px-20 lg:px-24 py-3 sm:py-4 md:py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Free Practice Test
            </Link>
            <Link 
              href="/epa-608-universal-practice-test" 
              className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-white text-blue-600 font-semibold text-base sm:text-lg md:text-xl rounded-lg hover:bg-gray-100 transition-colors border-2 border-blue-600"
            >
              Practice Universal Questions
            </Link>
            <Link 
              href="#study-plan" 
              className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-white text-blue-600 font-semibold text-base sm:text-lg md:text-xl rounded-lg hover:bg-gray-100 transition-colors border-2 border-blue-600"
            >
              See Study Plan
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900">
            How this EPA 608 practice test works
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="list-none space-y-4 mb-6">
              <li className="flex items-start gap-3 text-base sm:text-lg md:text-xl text-gray-700">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Practice in short sessions (quick review)</span>
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg md:text-xl text-gray-700">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Focus on weak areas (targeted learning)</span>
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg md:text-xl text-gray-700">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Use exam mode to simulate the real test experience (timed + no hints)</span>
              </li>
            </ul>
            <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl border-2 border-blue-200">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2">
                <strong>Free access:</strong> Start with 20 questions to try it.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                <strong>Full access:</strong> Unlock 300+ questions and explanations for $9.99.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Universal vs Types */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-slate-900">
            EPA 608: Universal vs Type I, II, III
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <Link 
              href="/?quiz=1&type=universal" 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-t-4 border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer block"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Universal</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Covers all system types (Type I, II, and III). Most comprehensive certification.
              </p>
            </Link>
            <Link 
              href="/?quiz=1&type=type1" 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-t-4 border-green-500 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer block"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Type I</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Small appliances with 5 pounds or less of refrigerant (domestic refrigerators, window AC units).
              </p>
            </Link>
            <Link 
              href="/?quiz=1&type=type2" 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-t-4 border-purple-500 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer block"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Type II</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                High-pressure systems (residential and commercial air conditioners, heat pumps).
              </p>
            </Link>
            <Link 
              href="/?quiz=1&type=type3" 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-t-4 border-orange-500 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer block"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Type III</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Low-pressure systems (large industrial equipment, chillers).
              </p>
            </Link>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 mb-6 max-w-3xl mx-auto">
            Most students choose Universal because it opens the most job opportunities and avoids re-testing later.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/epa-608-universal-practice-test" className="text-blue-600 hover:underline text-base sm:text-lg font-semibold">Universal Practice Test</Link>
            <Link href="/epa-608-type-1-practice-test" className="text-blue-600 hover:underline text-base sm:text-lg font-semibold">Type I Practice Test</Link>
            <Link href="/epa-608-type-2-practice-test" className="text-blue-600 hover:underline text-base sm:text-lg font-semibold">Type II Practice Test</Link>
            <Link href="/epa-608-type-3-practice-test" className="text-blue-600 hover:underline text-base sm:text-lg font-semibold">Type III Practice Test</Link>
          </div>
        </div>
      </section>

      {/* Sample Questions */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900">
            Sample EPA 608 practice questions (with explanations)
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-slate-900">Question 1:</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">What is the first step in recovering refrigerant from a system?</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-base sm:text-lg text-gray-700">
                <li>A) Connect the recovery cylinder</li>
                <li>B) Check the recovery cylinder capacity</li>
                <li>C) Start the recovery machine</li>
                <li>D) Open the service valves</li>
              </ul>
              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <p className="text-sm sm:text-base text-gray-700">
                  <strong className="text-green-600">Correct Answer: B</strong> - You must first check the recovery cylinder capacity to ensure it can hold the amount of refrigerant you're recovering. This prevents overfilling and potential safety hazards.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl border-2 border-green-200 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-slate-900">Question 2:</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">Which certification type is required to work on low-pressure appliances?</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-base sm:text-lg text-gray-700">
                <li>A) Type I</li>
                <li>B) Type II</li>
                <li>C) Type III</li>
                <li>D) Universal</li>
              </ul>
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <p className="text-sm sm:text-base text-gray-700">
                  <strong className="text-green-600">Correct Answer: C</strong> - Type III certification is specifically for low-pressure refrigeration systems. Universal certification also covers Type III systems.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-2xl border-2 border-purple-200 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-slate-900">Question 3:</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">What should you never do when handling refrigerants?</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-base sm:text-lg text-gray-700">
                <li>A) Use recovery equipment</li>
                <li>B) Check for leaks</li>
                <li>C) Mix different refrigerants</li>
                <li>D) Store in approved cylinders</li>
              </ul>
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <p className="text-sm sm:text-base text-gray-700">
                  <strong className="text-green-600">Correct Answer: C</strong> - Mixing different refrigerants is strictly prohibited. Each refrigerant has specific properties, and mixing can create dangerous conditions and damage equipment.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/?quiz=1" 
              className="inline-block px-6 sm:px-12 md:px-20 py-3 sm:py-4 md:py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Ready for more like these? Start the free practice test.
            </Link>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900">
            What you'll learn by practicing (what the exam actually tests)
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="list-none space-y-3 text-base sm:text-lg md:text-xl text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Recovery procedures and safety</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Leak detection and repair rules</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Refrigerant handling and regulations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>System types and pressure categories</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Best practices for servicing and compliance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Study Plan */}
      <section id="study-plan" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900">
            Study plan (simple and effective)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-slate-900">7-day plan:</h3>
              <ul className="list-none space-y-3 text-base sm:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">Day 1-2:</span>
                  <span>Take the free 20-question practice test to identify weak areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">Day 3-4:</span>
                  <span>Focus on your weakest topics with targeted practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">Day 5-6:</span>
                  <span>Take full-length practice tests in exam mode</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">Day 7:</span>
                  <span>Review all incorrect answers and take one final practice test</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-slate-900">2–4 weeks plan:</h3>
              <ul className="list-none space-y-3 text-base sm:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">Week 1:</span>
                  <span>Complete the free practice test and unlock full access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">Week 2:</span>
                  <span>Practice 50-100 questions per day, focusing on different topics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">Week 3:</span>
                  <span>Take multiple full-length practice tests in exam mode</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">Week 4:</span>
                  <span>Review all weak areas and take final practice tests until you consistently score 85% or higher</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900 px-2">
            FAQ
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">Is this a real EPA 608 practice test?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  Yes, our practice test uses real exam-style questions that mirror the format, difficulty, and topics you'll encounter on the actual EPA 608 certification exam. While we can't use the exact questions from the official exam, our questions are based on the same EPA regulations and testing standards.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">How many questions are on the EPA 608 exam?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  The EPA 608 exam typically contains between 25 and 50 questions, depending on the certification type you're seeking. Type I, II, and III exams usually have 25 questions each, while Universal certification exams may have up to 50 questions since they cover all system types.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">How hard is the EPA 608 exam?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  The difficulty varies by individual, but most students find the exam challenging without proper preparation. The key is understanding EPA regulations, recovery procedures, and safety requirements. With consistent practice using our simulator, most students pass on their first or second attempt.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">What's the difference between Core and Universal?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  Core is the foundational exam covering EPA regulations, environmental impact, and safety. Universal certification = Core + Type I + Type II + Type III. Most technicians choose Universal because it provides the most job flexibility and avoids the need to retest later if you want to work on different system types.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">Can I practice for free?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  Yes! We offer 20 free practice questions with instant feedback and explanations. This lets you experience our simulator and see the quality of our questions before deciding to unlock the full 300+ question bank for $9.99.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">Do you have an EPA 608 practice test PDF?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  We don't offer a downloadable PDF. Our interactive online simulator provides instant feedback, progress tracking, and detailed explanations that are more effective than static PDFs. The simulator works on any device—phone, tablet, or computer—so you can study anywhere without needing to print anything.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">How long should I study?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  Most students need 1-4 weeks of consistent practice, depending on their prior knowledge and study schedule. We recommend practicing 30-60 minutes per day. Use our 7-day or 2-4 week study plans as a guide, and continue practicing until you consistently score 85% or higher on practice tests.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">What score do I need to pass?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  You need to score at least 70% to pass the EPA 608 exam. However, we recommend aiming for 85% or higher on practice tests to ensure you're well-prepared and confident on test day. Our practice test tracks your scores so you can monitor your progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-slate-900">
            Ready to Start Practicing?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Join thousands of technicians who have already passed their EPA 608 certification by practicing with our simulator. Start free and get ready for the real exam.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/?quiz=1" 
              className="px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Start Free EPA 608 Practice Test
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} EPA608Practice.org. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
