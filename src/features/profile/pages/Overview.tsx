
import {
  UserRound,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Activity,
  Sparkles,
} from "lucide-react";

import { mockOverview } from "../data/profileData";

function Overview() {
  const cardStyle =
    "group rounded-2xl border border-[#30263d] bg-[#12111b] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#6b438d] hover:shadow-[0_12px_35px_rgba(168,85,247,0.10)] sm:p-6";

  const iconStyle =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:bg-[#a855f7]/20 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(168,85,247,0.15)]";

  const infoStyle =
    "flex items-start gap-3 rounded-xl p-2 transition-colors duration-300 hover:bg-[#1c192a]/70";

  return (
    <section className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3 motion-safe:animate-[fadeIn_.7s_ease-out_both]">

      {/* Main Content */}
      <div className="space-y-5 lg:col-span-2">

        {/* About Me */}
        <article className={`${cardStyle} motion-safe:animate-[fadeIn_.5s_ease-out_both]`}>
          <div className="mb-5 flex items-center gap-3">
            <div className={iconStyle}>
              <UserRound size={20} />
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#f5f3ff] transition-colors duration-300 group-hover:text-[#c084fc]">
                About Me
              </h2>
              <p className="mt-0.5 text-xs text-[#71717a]">
                Get to know more about me
              </p>
            </div>
          </div>

          <p className="text-sm leading-7 text-[#a1a1aa]">
            {mockOverview.description}
          </p>
        </article>

        {/* Personal Information */}
        <article className={`${cardStyle} motion-safe:animate-[fadeIn_.6s_ease-out_both]`}>
          <div className="mb-5 flex items-center gap-3">
            <div className={iconStyle}>
              <Sparkles size={20} />
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#f5f3ff] transition-colors duration-300 group-hover:text-[#c084fc]">
                Personal Information
              </h2>
              <p className="mt-0.5 text-xs text-[#71717a]">
                My professional and personal details
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

            {/* Location */}
            <div className={infoStyle}>
              <div className={iconStyle}>
                <MapPin size={19} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-[#71717a]">Location</p>
                <p className="mt-1 text-sm font-medium text-[#f5f3ff]">
                  {mockOverview.location}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className={infoStyle}>
              <div className={iconStyle}>
                <GraduationCap size={19} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-[#71717a]">Education</p>
                <p className="mt-1 text-sm font-medium text-[#f5f3ff]">
                  {mockOverview.education}
                </p>
              </div>
            </div>

            {/* Job Title */}
            <div className={`${infoStyle} sm:col-span-2`}>
              <div className={iconStyle}>
                <BriefcaseBusiness size={19} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-[#71717a]">Job Title</p>
                <p className="mt-1 text-sm font-medium text-[#f5f3ff]">
                  {mockOverview.jobTitle}
                </p>
              </div>
            </div>

          </div>
        </article>

        {/* Skills */}
        <article className={`${cardStyle} motion-safe:animate-[fadeIn_.7s_ease-out_both]`}>
          <div className="mb-5 flex items-center gap-3">
            <div className={iconStyle}>
              <Code2 size={20} />
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#f5f3ff] transition-colors duration-300 group-hover:text-[#c084fc]">
                Skills & Expertise
              </h2>
              <p className="mt-0.5 text-xs text-[#71717a]">
                Technologies and tools I work with
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {mockOverview.skill?.map((skill) => (
              <span
                key={skill}
                className="cursor-default rounded-lg border border-[#a855f7]/20 bg-[#a855f7]/10 px-3.5 py-2 text-xs font-medium text-[#c084fc] transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/50 hover:bg-[#a855f7]/20 hover:text-[#e9d5ff] hover:shadow-[0_5px_18px_rgba(168,85,247,0.15)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>

      </div>

      {/* Sidebar */}
      <aside className="space-y-5">

        {/* Current Activity */}
        <article className={cardStyle}>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#36c99a]/10 text-[#36c99a] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#36c99a]/20">
              <Activity size={20} />
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#f5f3ff] transition-colors duration-300 group-hover:text-[#36c99a]">
                Current Activity
              </h2>
              <p className="mt-0.5 text-xs text-[#71717a]">
                What I'm currently doing
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#30263d] bg-[#1c192a]/60 p-4 transition-all duration-300 group-hover:border-[#36c99a]/30">
            <div className="mb-3 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#36c99a] opacity-50 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#36c99a]" />
              </span>

              <span className="text-xs font-medium text-[#36c99a]">
                Currently Active
              </span>
            </div>

            <p className="text-sm leading-6 text-[#d4d0e0]">
              {mockOverview.activity}
            </p>
          </div>
        </article>

        {/* Profile Summary */}
        <article className="group overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_8px_30px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6b438d] hover:shadow-[0_12px_35px_rgba(168,85,247,0.10)]">
          <div className="h-1.5 origin-left bg-linear-to-r from-[#9333ea] via-[#a855f7] to-[#c084fc] transition-transform duration-500 group-hover:scale-x-105" />

          <div className="p-5">
            <div className="mb-3 flex items-center gap-2 text-[#c084fc]">
              <Sparkles size={18} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <h2 className="text-sm font-semibold text-[#f5f3ff]">
                Keep Growing
              </h2>
            </div>

            <p className="text-sm leading-6 text-[#a1a1aa]">
              Keep learning, building and sharing your journey with the iLink community.
            </p>
          </div>
        </article>

      </aside>
    </section>
  );
}

export default Overview;
