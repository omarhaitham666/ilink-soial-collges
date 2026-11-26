import { Lightbulb, Sparkles, TrendingUp } from "lucide-react";

function SuggestionHeader() {
  return (
    <section className="suggestion-glow group relative w-full overflow-hidden rounded-3xl border border-[#30263d] bg-[#12111b] shadow-[0_15px_50px_rgba(0,0,0,0.25)]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="suggestion-pulse absolute -right-20 -top-24 h-60 w-60 rounded-full bg-[#a855f7]/10 blur-3xl" />

        <div className="suggestion-float-reverse absolute -bottom-20 left-1/4 h-44 w-44 rounded-full bg-[#7c3aed]/10 blur-3xl" />

        <div className="suggestion-float absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-[#c084fc]/5 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-[#a855f7]/40 to-transparent" />
      </div>

      <div className="relative flex min-h-48 items-center justify-between gap-8 px-6 py-5 sm:px-8 lg:px-10">
        {/* Content */}
        <div className="min-w-0 max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#a855f7]/20 bg-[#a855f7]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#c084fc]">
            <span className="relative flex h-4 w-4 items-center justify-center">
              <span className="suggestion-pulse absolute inset-0 rounded-full bg-[#a855f7]/20" />

              <Sparkles size={12} className="relative" />
            </span>

            Community Ideas
          </div>

          {/* Title */}
          <h1 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Shape the future of{" "}
            <span className="suggestion-shimmer inline-block bg-linear-to-r from-[#e9d5ff] via-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent">
              iLink
            </span>
          </h1>

          {/* Description */}
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#91899c]">
            Have an idea that could make iLink better? Share it with the
            community, vote on ideas you love, and help decide what comes next.
          </p>

          {/* Stats */}
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="group/stat inline-flex items-center gap-2 rounded-xl border border-[#30263d] bg-[#0f0f16]/70 px-3 py-2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/30 hover:bg-[#1c192a]">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc] transition-transform duration-300 group-hover/stat:scale-110 group-hover/stat:rotate-6">
                <Lightbulb size={13} />
              </div>

              <span className="text-[11px] font-semibold text-[#d4d4dc]">
                Community driven
              </span>
            </div>

            <div className="group/stat inline-flex items-center gap-2 rounded-xl border border-[#30263d] bg-[#0f0f16]/70 px-3 py-2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/30 hover:bg-[#1c192a]">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#a855f7] transition-transform duration-300 group-hover/stat:scale-110 group-hover/stat:-rotate-6">
                <TrendingUp size={13} />
              </div>

              <span className="text-[11px] font-semibold text-[#d4d4dc]">
                Vote & influence
              </span>
            </div>
          </div>
        </div>

        {/* Animated Visual */}
        <div className="relative hidden shrink-0 lg:block">
          <div className="relative flex h-32 w-32 items-center justify-center">
            {/* Outer Glow */}
            <div className="suggestion-pulse absolute h-24 w-24 rounded-full bg-[#a855f7]/10 blur-2xl" />

            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-[#a855f7]/10" />

            {/* Rotating Ring */}
            <div className="suggestion-spin absolute inset-2 rounded-full border border-dashed border-[#a855f7]/20" />

            {/* Reverse Ring */}
            <div className="suggestion-spin-reverse absolute inset-5 rounded-full border border-dotted border-[#c084fc]/10" />

            {/* Orbit */}
            <div className="suggestion-orbit absolute inset-0">
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c084fc] shadow-[0_0_14px_rgba(192,132,252,0.8)]" />
            </div>

            {/* Center */}
            <div className="suggestion-float relative flex h-20 w-20 items-center justify-center rounded-3xl border border-[#a855f7]/30 bg-linear-to-br from-[#a855f7]/20 via-[#1c192a] to-[#7c3aed]/10 text-[#c084fc] shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Lightbulb
                size={38}
                strokeWidth={1.4}
                className="transition-transform duration-500 group-hover:-rotate-12"
              />
            </div>

            {/* Spark */}
            <div className="suggestion-float-reverse absolute -right-1 top-3 flex h-7 w-7 items-center justify-center rounded-lg border border-[#c084fc]/20 bg-[#1c192a]/90 text-[#c084fc] shadow-lg backdrop-blur-md transition-all duration-500 group-hover:scale-110">
              <Sparkles size={13} />
            </div>

            {/* Trend */}
            <div className="suggestion-float absolute -bottom-1 left-0 flex h-6 w-6 items-center justify-center rounded-md border border-[#a855f7]/20 bg-[#1c192a]/90 text-[#a855f7] shadow-lg backdrop-blur-md transition-all duration-500 group-hover:scale-110">
              <TrendingUp size={11} />
            </div>

            {/* Dot */}
            <span className="suggestion-pulse absolute bottom-6 right-3 h-1.5 w-1.5 rounded-full bg-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuggestionHeader;