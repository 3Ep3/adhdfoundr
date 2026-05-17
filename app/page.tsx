import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHDFoundr — Stop Running on Urgency. Start Building on Clarity.",
  description:
    "An evidence-based coaching protocol for ADHD founders ready to harness their edge. Book a free discovery call with Dr. John Torrens.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-32 md:pb-36 max-w-5xl mx-auto">
        {/* background accent */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#ff5c00] opacity-10 blur-[120px] pointer-events-none" />

        <p className="text-[#ff5c00] text-sm font-semibold uppercase tracking-widest mb-6">
          For ADHD Founders
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8">
          Your brain is built
          <br />
          for entrepreneurship.
          <br />
          <span className="text-[#ff5c00]">
            But it's running on broken infrastructure.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          You're bold, fast, and visionary. You're also scattered, reactive, and
          exhausted. The same traits that make you great are costing you growth.
          There's a fix — and it's not another productivity hack.
        </p>

        <a
          href="https://calendly.com/d/ct62-cq8-tb7/breakthrough-discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ff5c00] hover:bg-[#e05200] text-white text-lg font-bold px-10 py-5 rounded-full transition-all duration-200 shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 hover:scale-[1.02]"
        >
          Book Your Free Discovery Call →
        </a>

        <p className="mt-4 text-sm text-gray-600">
          No pitch. No pressure. 30 minutes to see if this is right for you.
        </p>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="border-t border-white/5 px-6 py-20 max-w-5xl mx-auto">
        <p className="text-gray-500 text-sm uppercase tracking-widest mb-10">
          Sound familiar?
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            "Bold ideas, scattered execution — nothing gets finished.",
            "Urgency makes you productive, but also reactive and constantly reworking.",
            "Shiny objects hijack your week. Strategy keeps changing.",
            "You say yes fast, buy the thing, pivot the offer — and pay for it in stress.",
            "Three steps ahead, but the current step isn't done.",
            "Growth feels unpredictable no matter how hard you push.",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5"
            >
              <span className="text-[#ff5c00] text-xl mt-0.5 shrink-0">◆</span>
              <p className="text-gray-300 leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE FIX ── */}
      <section className="border-t border-white/5 px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#ff5c00] text-sm font-semibold uppercase tracking-widest mb-5">
              The Protocol
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
              8 weeks to a business that doesn't need you to be chaotic to grow.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              The Total Entrepreneur Protocol is an evidence-based, 1:1 coaching
              program built specifically for how your ADHD brain works — not
              against it. No willpower. No hacks. A real operating system.
            </p>
            <ul className="space-y-3 text-gray-300">
              {[
                "Phase I (Wks 1–4): Optimize your operating system — sleep, HRV, energy, focus.",
                "Phase II (Wks 5–8): Build execution systems designed for your ADHD brain.",
                "Phase III (12 Months): Community, accountability, and Dr. Torrens on speed dial.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#ff5c00] font-bold shrink-0">
                    0{i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-5">
              What you walk away with
            </p>
            <ul className="space-y-4">
              {[
                "8 × 60-min 1:1 video sessions with Dr. Torrens",
                "HeartMath HRV Monitor (yours to keep)",
                "Personalized Performance Playbook",
                "Daily tracking system + weekly reflection journal",
                "12-month community access + monthly group calls",
                "Optional accountability partner pairing",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="text-green-400 text-lg">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── ABOUT DR. TORRENS ── */}
      <section className="border-t border-white/5 px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <img
              src="https://cdn.prod.website-files.com/69f24ed0fb7ffef97a45e89c/69f275fbe9f8081e7b539615_JMTProfile.jpeg"
              alt="Dr. John Torrens"
              className="rounded-2xl w-full object-cover aspect-square"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-[#ff5c00] text-sm font-semibold uppercase tracking-widest mb-4">
              Your Coach
            </p>
            <h2 className="text-3xl font-black mb-2">John M. Torrens, Ph.D.</h2>
            <p className="text-gray-500 mb-6">
              ADHD Founder. Coach. Professor. Author.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              John built this protocol because he is an ADHD founder himself.
              After 25 years leading five Inc. 5000 companies, teaching
              entrepreneurship at Syracuse University, and studying what
              actually works — he created the system he wished had existed.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "5× Inc. 5000 Entrepreneur",
                "TEDx Speaker",
                "Syracuse University Professor",
                "Author: Lightning in a Bottle",
                "YPO International Board Member",
                "Early-Stage Investor",
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-sm text-gray-400 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="border-t border-white/5 px-6 py-24 text-center max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-[#ff5c00] opacity-5 blur-3xl" />
          <p className="text-[#ff5c00] text-sm font-semibold uppercase tracking-widest mb-5">
            Limited Enrollment
          </p>
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            Ready to stop running on urgency?
          </h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            Applications are reviewed to ensure fit. Book a free 30-minute
            discovery call — no pitch, no pressure. Just a real conversation
            about whether this is right for you.
          </p>
          <a
            href="https://calendly.com/d/ct62-cq8-tb7/breakthrough-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff5c00] hover:bg-[#e05200] text-white text-xl font-bold px-12 py-6 rounded-full transition-all duration-200 shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 hover:scale-[1.02]"
          >
            Book Your Free Discovery Call →
          </a>
          <p className="mt-5 text-sm text-gray-600">
            2-step application · takes about 5 minutes
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 px-6 py-8 text-center text-gray-600 text-sm">
        <p>
          © {new Date().getFullYear()} ADHDFoundr · This program is educational
          coaching, not clinical care.
        </p>
      </footer>
    </main>
  );
}