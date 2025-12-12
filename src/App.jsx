import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, ArrowRight, Globe2, HeartHandshake } from "lucide-react";

// Melanin Unity — simple crystal-glass landing page
// Single-file React component (Tailwind assumed)

const PanAfricanGlow = () => (
  <>
    <div className="pointer-events-none absolute inset-0 opacity-70">
      {/* soft mesh */}
      <div className="absolute -top-40 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-r from-red-500/25 via-yellow-400/20 to-green-500/25" />
      <div className="absolute top-40 right-[-120px] h-[360px] w-[360px] rounded-full blur-3xl bg-red-500/15" />
      <div className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full blur-3xl bg-green-500/15" />
    </div>

    {/* subtle crystal shards */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[8%] top-[18%] h-32 w-32 rotate-12 rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-2xl" />
      <div className="absolute right-[10%] top-[28%] h-24 w-56 -rotate-6 rounded-3xl bg-white/4 ring-1 ring-white/10 backdrop-blur-2xl" />
      <div className="absolute left-[22%] bottom-[18%] h-24 w-40 rotate-6 rounded-3xl bg-white/4 ring-1 ring-white/10 backdrop-blur-2xl" />
    </div>
  </>
);

const GlassCard = ({ children, className = "" }) => (
  <div
    className={
      "rounded-2xl bg-white/[0.06] ring-1 ring-white/10 backdrop-blur-2xl shadow-[0_20px_80px_-40px_rgba(0,0,0,0.7)] " +
      className
    }
  >
    {children}
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/10">
    {children}
  </span>
);

export default function MelaninUnityCrystalSite() {
  return (
    <div className="min-h-screen bg-[#07070a] text-white">
      <div className="relative overflow-hidden">
        <PanAfricanGlow />

        {/* Top nav */}
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-xl flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm tracking-[0.28em] text-white/60">MELANIN UNITY</div>
                <div className="text-lg font-semibold">Crystal Glass</div>
              </div>
            </div>

            <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a className="hover:text-white" href="#mission">Mission</a>
              <a className="hover:text-white" href="#products">Products</a>
              <a className="hover:text-white" href="#community">Community</a>
              <a className="hover:text-white" href="#contact">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-xl bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 md:inline-flex">
                Sign In
              </button>
              <button className="rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 inline-flex items-center gap-2">
                Join
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-14 pt-10 md:pb-20 md:pt-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="flex flex-wrap gap-3"
              >
                <Pill>
                  <ShieldCheck className="h-4 w-4" />
                  Community-first brand
                </Pill>
                <Pill>
                  <Globe2 className="h-4 w-4" />
                  Global diaspora focus
                </Pill>
                <Pill>
                  <HeartHandshake className="h-4 w-4" />
                  Built on unity
                </Pill>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-6 text-4xl font-semibold leading-tight md:text-6xl"
              >
                A crystal-glass home for
                <span className="block bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
                  Melanin Unity.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
              >
                A clean, modern landing page with a crystal-glass aesthetic and a subtle Pan-African glow.
                Use it as your homepage for products, community, and mission.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <button className="rounded-2xl bg-white text-black px-5 py-3 font-semibold hover:bg-white/90 inline-flex items-center gap-2">
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="rounded-2xl bg-white/5 px-5 py-3 font-semibold text-white ring-1 ring-white/10 hover:bg-white/10">
                  Our Mission
                </button>
              </motion.div>

              <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  Courage
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-300" />
                  Wisdom
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Growth
                </div>
              </div>
            </div>

            {/* Hero right panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <GlassCard className="p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/60">Featured</div>
                    <div className="mt-1 text-xl font-semibold">Melanin Unity Complete</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 px-3 py-2 text-xs text-white/70 ring-1 ring-white/10">
                    Crystal Edition
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl bg-black/30 ring-1 ring-white/10 p-4">
                    <div className="text-sm text-white/60">What people come for</div>
                    <div className="mt-2 text-sm text-white/80">
                      Simple product pages, a strong mission, and a clear path to join the community.
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                      <div className="text-xs text-white/60">Aesthetic</div>
                      <div className="mt-1 text-sm font-semibold">Crystal Glass</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                      <div className="text-xs text-white/60">Accent</div>
                      <div className="mt-1 text-sm font-semibold">Pan-African Glow</div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-red-500/20 via-yellow-400/15 to-green-500/20 ring-1 ring-white/10 p-4">
                    <div className="text-xs text-white/70">Callout</div>
                    <div className="mt-1 text-sm text-white/85">
                      You can swap this panel for your product images or a newsletter signup.
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="text-sm text-white/60">Ready to publish?</div>
                  <button className="rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90">
                    Get Started
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <GlassCard className="p-6" id="mission">
            <div className="text-sm text-white/60">Mission</div>
            <div className="mt-2 text-lg font-semibold">Unity in action</div>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Build culture-forward products and a community that strengthens Black people and the African diaspora through
              shared values, education, and economic alignment.
            </p>
          </GlassCard>

          <GlassCard className="p-6" id="products">
            <div className="text-sm text-white/60">Products</div>
            <div className="mt-2 text-lg font-semibold">Clean, focused lineup</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li className="flex items-center justify-between gap-3">
                <span>Complete Multivitamin</span>
                <span className="text-white/60">Shop</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Body Wash</span>
                <span className="text-white/60">Shop</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Community Drops</span>
                <span className="text-white/60">Learn</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6" id="community">
            <div className="text-sm text-white/60">Community</div>
            <div className="mt-2 text-lg font-semibold">Join the circle</div>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Add your signup link, Discord, email list, or membership portal here. Keep it simple: one message, one CTA.
            </p>
            <div className="mt-4 flex gap-3">
              <button className="rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90">
                Join Now
              </button>
              <button className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10">
                Learn More
              </button>
            </div>
          </GlassCard>
        </div>

        {/* Footer */}
        <div id="contact" className="mt-10">
          <GlassCard className="p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm text-white/60">Contact</div>
                <div className="mt-1 text-lg font-semibold">melaninunity.com</div>
                <div className="mt-2 text-sm text-white/70">
                  Replace this with your email, business address, and links.
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/10">
                  Instagram
                </button>
                <button className="rounded-xl bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/10">
                  TikTok
                </button>
                <button className="rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90">
                  Email Us
                </button>
              </div>
            </div>
            <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/50">
              © {new Date().getFullYear()} Melanin Unity. All rights reserved.
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
