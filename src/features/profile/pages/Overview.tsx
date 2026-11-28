
import {
  UserRound,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Activity,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { mockOverview } from "../data/profileData";

function Overview() {
  const sectionHeading =
    "text-base font-semibold text-[#f5f3ff] transition-colors duration-300";

  const infoStyle =
    "group/item flex min-w-0 items-start gap-3  py-4 transition-all duration-300 last:border-b-0 hover:bg-[#1c192a]/40 sm:px-3";

  const iconStyle =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1c192a] text-[#c084fc] transition-all duration-300 group-hover/item:scale-105 group-hover/item:bg-[#a855f7]/15";

  const labelStyle =
    "text-[11px] font-semibold uppercase tracking-[0.12em] text-[#71717a]";

  const valueStyle =
    "mt-1.5 break-words text-sm font-medium leading-relaxed text-[#f5f3ff]";

  return (
    <section className="mt-6 space-y-8 motion-safe:animate-[fadeIn_.7s_ease-out_both]">

      {/* Main Overview Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

        {/* Main Content */}
        <div className="min-w-0 space-y-9 lg:col-span-2">

          {/* About Me */}
          <section className="relative border-b border-[#30263d] pb-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#a855f7]/5 blur-3xl" />

            <div className="relative mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc]">
                <UserRound size={20} />
              </div>

              <div>
                <h2 className={sectionHeading}>About Me</h2>
                <p className="mt-1 text-xs text-[#71717a]">
                  Get to know more about me
                </p>
              </div>
            </div>

            <p className="relative max-w-3xl text-sm leading-8 text-[#b4b0c0] sm:text-[15px]">
              {mockOverview.description}
            </p>
          </section>

          {/* Personal Information */}
          <section>
            <div className="mb-3 flex items-center justify-between ms-3 gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc]">
                  <Sparkles size={20} />
                </div>

                <div>
                  <h2 className={sectionHeading}>
                    Personal Information
                  </h2>
                  <p className="mt-1 text-xs text-[#71717a]">
                    Personal and professional details
                  </p>
                </div>
              </div>

              <span className="hidden text-[10px] font-semibold uppercase tracking-widest text-[#52525b] sm:block">
                PROFILE DETAILS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6">
              {/* Location */}
              <div className={infoStyle}>
                <div className={iconStyle}>
                  <MapPin size={18} />
                </div>

                <div className="min-w-0">
                  <p className={labelStyle}>Location</p>
                  <p className={valueStyle}>
                    {mockOverview.location || "Not provided"}
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className={infoStyle}>
                <div className={iconStyle}>
                  <GraduationCap size={19} />
                </div>

                <div className="min-w-0">
                  <p className={labelStyle}>Education</p>
                  <p className={valueStyle}>
                    {mockOverview.education || "Not provided"}
                  </p>
                </div>
              </div>

              {/* Job Title */}
              <div className={`${infoStyle} sm:col-span-2`}>
                <div className={iconStyle}>
                  <BriefcaseBusiness size={19} />
                </div>

                <div className="min-w-0">
                  <p className={labelStyle}>Job Title</p>
                  <p className={valueStyle}>
                    {mockOverview.jobTitle || "Not provided"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="border-t border-[#30263d] pt-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc]">
                <Code2 size={20} />
              </div>

              <div>
                <h2 className={sectionHeading}>
                  Skills & Expertise
                </h2>
                <p className="mt-1 text-xs text-[#71717a]">
                  Technologies and tools I work with
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {mockOverview.skill?.map((skill) => (
                <span
                  key={skill}
                  className="
                    cursor-default rounded-lg
                    border border-[#30263d]
                    bg-[#12111b]
                    px-3.5 py-2
                    text-xs font-medium text-[#c4b5fd]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-[#a855f7]/50
                    hover:bg-[#a855f7]/10
                    hover:text-[#e9d5ff]
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="min-w-0 space-y-8 lg:border-l lg:border-[#30263d] lg:pl-6">

          {/* Current Activity */}
          <section>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#36c99a]/10 text-[#36c99a]">
                <Activity size={20} />
              </div>

              <div>
                <h2 className="text-base font-semibold text-[#f5f3ff]">
                  Current Activity
                </h2>
                <p className="mt-1 text-xs text-[#71717a]">
                  What I'm currently doing
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-[#36c99a]/50 py-1 pl-4 transition-all duration-300 hover:border-[#36c99a]">
              <div className="mb-3 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#36c99a] opacity-50 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#36c99a]" />
                </span>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#36c99a]">
                  Currently Active
                </span>
              </div>

              <p className="text-sm leading-7 text-[#b4b0c0]">
                {mockOverview.activity}
              </p>
            </div>
          </section>

          {/* Profile Summary */}
          <section className="relative overflow-hidden border-y border-[#30263d] py-6">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#a855f7]/10 blur-3xl" />

            <div className="relative">
              <div className="mb-4 flex items-center gap-2 text-[#c084fc]">
                <Sparkles size={18} />
                <h2 className="text-sm font-semibold text-[#f5f3ff]">
                  Keep Growing
                </h2>
              </div>

              <p className="text-sm leading-7 text-[#a1a1aa]">
                Keep learning, building and sharing your journey with the iLink community.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#c084fc] transition-all duration-300">
                <span>Growth is a journey</span>
                <ArrowUpRight size={15} />
              </div>
            </div>
          </section>

        </aside>
      </div>
    </section>
  );
}

export default Overview;
