
import {
  Target,
  GraduationCap,
  BriefcaseBusiness,
  UserRound,
  CalendarDays,
  Sparkles,
  Trophy,
  Compass,
  ArrowUpRight,
} from "lucide-react";

import { mockGoals } from "../data/profileData";

function Goals() {
  const categoryConfig = {
    professional: {
      label: "Professional",
      icon: BriefcaseBusiness,
      style: "border-[#a855f7]/25 bg-[#a855f7]/10 text-[#c084fc]",
      accent: "bg-[#a855f7]",
    },
    education: {
      label: "Education",
      icon: GraduationCap,
      style: "border-[#73b9ff]/25 bg-[#73b9ff]/10 text-[#73b9ff]",
      accent: "bg-[#73b9ff]",
    },
    personal: {
      label: "Personal",
      icon: UserRound,
      style: "border-[#36c99a]/25 bg-[#36c99a]/10 text-[#36c99a]",
      accent: "bg-[#36c99a]",
    },
  };

  return (
    <section className="mt-6 space-y-8 motion-safe:animate-[fadeIn_.6s_ease-out_both]">

      {/* Goals Introduction */}
      <header className="relative overflow-hidden border-b border-[#30263d] pb-7">
        <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#a855f7]/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-2">
              <Target size={17} className="text-[#c084fc]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c084fc]">
                Future Vision
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-[#f5f3ff] sm:text-3xl">
              My Goals
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#a1a1aa]">
              Dreams become goals when you take the first step. Here's what
              I'm working towards in my journey.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 border-l-2 border-[#a855f7] pl-4">
            <Trophy size={23} className="text-[#c084fc]" />

            <div>
              <p className="text-2xl font-bold leading-none text-[#f5f3ff]">
                {mockGoals.length}
              </p>
              <p className="mt-1.5 text-[11px] text-[#a1a1aa]">
                Goals to achieve
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Goals Section Heading */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-[#f5f3ff]">
            Aspirations & Ambitions
          </h3>
          <p className="mt-1 text-xs text-[#71717a] sm:text-sm">
            A collection of things I want to accomplish
          </p>
        </div>

        <div className="hidden items-center gap-2 text-xs font-medium text-[#a1a1aa] sm:flex">
          <Sparkles size={15} className="text-[#c084fc]" />
          Dream big
        </div>
      </div>

      {/* Goals List */}
      {mockGoals.length > 0 ? (
        <div className="divide-y divide-[#30263d] border-y border-[#30263d]">
          {mockGoals.map((goal, index) => {
            const category =
              categoryConfig[goal.category] || categoryConfig.personal;

            const Icon = category.icon;

            return (
              <article
                key={goal.id}
                className="
                  group relative flex flex-col gap-4 py-5
                  transition-all duration-300
                  hover:bg-[#12111b]/70
                  sm:flex-row sm:items-start sm:gap-5 sm:px-4
                "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Number / Icon */}
                <div className="flex shrink-0 items-center gap-3 sm:block">
                  <div className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl border border-[#30263d]
                    bg-[#12111b] text-[#c084fc]
                    transition-all duration-300
                    group-hover:border-[#a855f7]/40
                    group-hover:bg-[#a855f7]/10
                    group-hover:scale-105
                  ">
                    <Icon size={20} />
                  </div>

                  <span className="text-xs font-semibold tabular-nums text-[#52525b] sm:hidden">
                    GOAL {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Goal Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold leading-snug text-[#f5f3ff] transition-colors duration-300 group-hover:text-[#c084fc] sm:text-lg">
                      {goal.title}
                    </h3>

                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${category.style}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {category.label}
                    </span>
                  </div>

                  <p className="mt-2 max-w-3xl text-sm leading-7 text-[#a1a1aa]">
                    {goal.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#71717a]">
                      <CalendarDays size={14} className="text-[#c084fc]" />
                      <span>Target Date:</span>
                      <span className="font-medium text-[#c4b5fd]">
                        {goal.targetDate || "Not specified"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desktop Index */}
                <div className="hidden shrink-0 items-center gap-2 pt-1 text-xs font-medium text-[#52525b] sm:flex">
                  <span>#{String(index + 1).padStart(2, "0")}</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c084fc]"
                  />
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-[#a855f7] to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center border-y border-[#30263d] px-5 py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc]">
            <Compass size={29} />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-[#f5f3ff]">
            No goals added yet
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-[#a1a1aa]">
            Every great achievement starts with a dream. Your future goals
            will appear here.
          </p>
        </div>
      )}

      {/* Closing Message */}
      {mockGoals.length > 0 && (
        <div className="flex items-start gap-3 py-2">
          <Sparkles size={19} className="mt-0.5 shrink-0 text-[#c084fc]" />

          <p className="text-xs leading-6 text-[#a1a1aa] sm:text-sm">
            Every goal represents a new opportunity to grow, learn and become
            better.
            <span className="ml-1 font-medium text-[#c084fc]">
              Keep moving forward.
            </span>
          </p>
        </div>
      )}
    </section>
  );
}

export default Goals;
