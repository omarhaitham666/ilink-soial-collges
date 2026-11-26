
import {
  Target,
  GraduationCap,
  BriefcaseBusiness,
  UserRound,
  CalendarDays,
  Sparkles,
  Trophy,
  Compass,
} from "lucide-react";

import { mockGoals } from "../data/profileData";

function Goals() {
  const categoryConfig = {
    professional: {
      label: "Professional",
      icon: BriefcaseBusiness,
      style: "border-[#a855f7]/25 bg-[#a855f7]/10 text-[#c084fc]",
    },
    education: {
      label: "Education",
      icon: GraduationCap,
      style: "border-[#73b9ff]/25 bg-[#73b9ff]/10 text-[#73b9ff]",
    },
    personal: {
      label: "Personal",
      icon: UserRound,
      style: "border-[#36c99a]/25 bg-[#36c99a]/10 text-[#36c99a]",
    },
  };

  const cardStyle =
    "group relative overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#6b438d] hover:shadow-[0_15px_40px_rgba(168,85,247,0.10)] sm:p-6";

  return (
    <section className="mt-6 space-y-6 motion-safe:animate-[fadeIn_.6s_ease-out_both]">

      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl border border-[#6b438d]/40 bg-linear-to-br from-[#211532] via-[#171321] to-[#12111b] p-5 sm:p-7">
        <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#a855f7]/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#a855f7]/15 text-[#c084fc]">
                <Target size={19} />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c084fc]">
                Future Vision
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-[#f5f3ff] sm:text-3xl">
              My Goals
            </h2>

            <p className="mt-2 max-w-lg text-sm leading-6 text-[#a1a1aa] sm:text-base">
              Dreams become goals when you take the first step. Here's what
              I'm working towards in my journey.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-[#a855f7]/20 bg-[#a855f7]/10 px-4 py-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#a855f7]/15 text-[#c084fc]">
              <Trophy size={22} />
            </div>

            <div>
              <p className="text-2xl font-bold text-[#f5f3ff]">
                {mockGoals.length}
              </p>
              <p className="text-xs text-[#a1a1aa]">Goals to achieve</p>
            </div>
          </div>
        </div>
      </div>

      {/* Goals Section Header */}
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

      {/* Goals Grid */}
      {mockGoals.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {mockGoals.map((goal, index) => {
            const category =
              categoryConfig[goal.category] || categoryConfig.personal;

            const Icon = category.icon;

            return (
              <article
                key={goal.id}
                className={`${cardStyle} motion-safe:animate-[fadeIn_.5s_ease-out_both]`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative Icon */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#a855f7]/4 blur-2xl transition-all duration-500 group-hover:bg-[#a855f7]/10" />

                <div className="relative">
                  {/* Card Top */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#a855f7]/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                      <Icon size={22} />
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold ${category.style}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {category.label}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold leading-snug text-[#f5f3ff] transition-colors duration-300 group-hover:text-[#c084fc]">
                      {goal.title}
                    </h3>

                    <p className="mt-3 min-h-14 text-sm leading-7 text-[#a1a1aa]">
                      {goal.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#30263d] pt-4">
                    <div className="flex items-center gap-2 text-xs text-[#71717a]">
                      <CalendarDays size={15} className="text-[#c084fc]" />
                      <span>Target Date</span>
                    </div>

                    <span className="rounded-lg bg-[#1c192a] px-3 py-1.5 text-xs font-semibold text-[#c4b5fd]">
                      {goal.targetDate || "Not specified"}
                    </span>
                  </div>

                  {/* Bottom Decoration */}
                  <div className="absolute -bottom-6 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-[#a855f7] to-[#c084fc] transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[#30263d] bg-[#12111b] px-5 py-16 text-center">
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

      {/* Bottom Message */}
      {mockGoals.length > 0 && (
        <div className="flex items-center gap-3 rounded-xl border border-[#30263d] bg-[#12111b]/70 px-4 py-4">
          <Sparkles size={19} className="shrink-0 text-[#c084fc]" />

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
