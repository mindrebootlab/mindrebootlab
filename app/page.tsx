import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="text-gray-800 bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-sm sticky top-0 bg-white z-10">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="MindReboot Lab" width={32} height={32} />
          <span className="text-xl font-bold">MindReboot Lab</span>
        </div>
        <nav className="hidden md:flex space-x-4 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/free-audios">Free Audios</Link>
          <Link href="/personalized-audio">Personalized Audio</Link>
          <Link href="/hypnosis-programs">Programs</Link>
          <Link href="/sessions">1:1 Sessions</Link>
          <Link href="/learn-hypnotherapy">Learn</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-600">MindReboot Lab</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Reprogram your subconscious mind and overcome stress, anxiety, insomnia, low confidence, addictions and more — all through the power of Hypnotherapy.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/free-audios" className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition">🎧 Free Audios</Link>
          <Link href="/personalized-audio" className="px-6 py-3 rounded border hover:bg-gray-100 transition">✨ Personalized Audio</Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">How It Works — Just 3 Steps</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { step: '1. Choose Your Goal', text: 'Pick what you want to reprogram — stress, sleep, fears, or focus.' },
            { step: '2. Listen or Personalize', text: 'Choose free tracks or order a personalized hypnosis audio.' },
            { step: '3. Reboot Your Mind', text: 'Repeat listening and feel the shift in your habits, confidence, and clarity.' },
          ].map((item, i) => (
            <div key={i} className="p-6 border rounded-xl bg-white">
              <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Explore Our Hypnosis Programs</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: '🚬 Quit Smoking', desc: 'Break nicotine addiction and regain control.' },
            { title: '🔋 Boost Sexual Performance', desc: 'Unblock your subconscious for peak intimacy.' },
            { title: '⏳ Beat Procrastination', desc: 'Reprogram your mind to take action consistently.' },
          ].map((p, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/hypnosis-programs" className="text-blue-600 underline">See All Programs</Link>
        </div>
      </section>

      {/* Learn Hypnotherapy */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Become a Certified Hypnotherapist</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Enroll in our expert-led course and learn how to use hypnotherapy professionally to transform lives — including your own.
        </p>
        <Link href="/learn-hypnotherapy" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          🎓 Enroll Now
        </Link>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Trusted by Thousands</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-4 border rounded shadow">
            <p className="text-lg italic">"87% of users reported reduced anxiety within 3 weeks of daily listening."</p>
            <p className="text-sm text-right mt-2 text-gray-500">– Clinical Study, 2023</p>
          </div>
          <div className="p-4 border rounded shadow">
            <p className="text-lg italic">"I beat my fear of flying thanks to MindReboot’s custom audio. It was surreal!"</p>
            <p className="text-sm text-right mt-2 text-gray-500">– Simran P., India</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link href="/testimonials" className="text-blue-600 underline">Read More Testimonials</Link>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">From Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((id) => (
            <div key={id} className="border rounded overflow-hidden shadow-sm">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Placeholder Blog Title {id}</h3>
                <p className="text-sm text-gray-600">Short summary of the blog post goes here.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/blog" className="text-blue-600 underline">Visit Blog</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-4">Ready to Reboot Your Mind?</h2>
        <p className="mb-6">Start your transformation now with a personalized hypnosis audio made just for you.</p>
        <Link href="/personalized-audio" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Get Personalized Audio
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-sm py-8 px-6 mt-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <p className="font-bold text-lg mb-2">MindReboot Lab</p>
            <p>Helping people overcome mental blocks through the power of subconscious reprogramming and science-backed hypnotherapy.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Quick Links</p>
            <ul className="space-y-1">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Connect</p>
            <p>Email: support@mindrebootlab.com</p>
            <p>© {new Date().getFullYear()} MindReboot Lab</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
