
import {
  UserRound,
  AtSign,
  Mail,
  MapPin,
  Phone,
  CalendarDays,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  TrendingUp,
  Sparkles,
  ContactRound,
} from "lucide-react";

import { mockAbout } from "../data/profileData";

function About() {
  const infoItems = [
    {
      label: "Full Name",
      value: mockAbout.fullName,
      icon: UserRound,
    },
    {
      label: "Username",
      value: mockAbout.userName,
      icon: AtSign,
    },
    {
      label: "Email Address",
      value: mockAbout.emailAddress,
      icon: Mail,
    },
    {
      label: "Phone Number",
      value: mockAbout.phone,
      icon: Phone,
    },
    {
      label: "Location",
      value: mockAbout.location,
      icon: MapPin,
    },
    {
      label: "Date of Birth",
      value: mockAbout.date_of_birth,
      icon: CalendarDays,
    },
  ];

  const professionalItems = [
    {
      label: "Job Title",
      value: mockAbout.jobTitle,
      icon: BriefcaseBusiness,
    },
    {
      label: "Department",
      value: mockAbout.department,
      icon: Building2,
    },
    {
      label: "Education",
      value: mockAbout.education,
      icon: GraduationCap,
    },
    {
      label: "Experience Level",
      value: mockAbout.experienceLevel,
      icon: TrendingUp,
    },
  ];

  const sectionHeading =
    "flex items-center gap-3 text-lg font-semibold text-[#f5f3ff]";

  const itemStyle =
    "group/item flex min-w-0 items-start gap-3 py-4 transition-all duration-300";

  const iconStyle =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1c192a] text-[#a855f7] transition-all duration-300 group-hover/item:bg-[#a855f7]/15 group-hover/item:text-[#c084fc]";

  const labelStyle =
    "text-[11px] font-semibold uppercase tracking-[0.12em] text-[#71717a]";

  const valueStyle =
    "mt-1.5 break-words text-sm font-medium leading-relaxed text-[#f5f3ff] sm:text-[15px]";

  return (
    <section className="mt-6 space-y-8 motion-safe:animate-[fadeIn_.6s_ease-out_both]">

      {/* Personal Information */}
      <section>
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc]">
              <ContactRound size={20} />
            </div>

            <div>
              <h2 className={sectionHeading}>
                Personal Information
              </h2>
              <p className="mt-1 text-xs text-[#a1a1aa] sm:text-sm">
                Your personal details and contact information
              </p>
            </div>
          </div>

          <span className="hidden rounded-full border border-[#30263d] px-3 py-1 text-xs text-[#71717a] sm:inline-flex">
            01 / Personal
          </span>
        </div>

        <div className="rounded-2xl border border-[#30263d] bg-[#12111b]/70 px-4 sm:px-6">
          <div className="grid grid-cols-1 divide-y divide-[#30263d]/70 sm:grid-cols-2 sm:gap-x-8 sm:divide-y-0 lg:grid-cols-3">
            {infoItems.map(({ label, value, icon: Icon }) => (
              <div key={label} className={itemStyle}>
                <div className={iconStyle}>
                  <Icon size={18} />
                </div>

                <div className="min-w-0 pt-0.5">
                  <p className={labelStyle}>{label}</p>
                  <p className={valueStyle}>
                    {value || "Not provided"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Information */}
      <section>
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc]">
              <BriefcaseBusiness size={20} />
            </div>

            <div>
              <h2 className={sectionHeading}>
                Professional Information
              </h2>
              <p className="mt-1 text-xs text-[#a1a1aa] sm:text-sm">
                Career, education and professional background
              </p>
            </div>
          </div>

          <span className="hidden rounded-full border border-[#30263d] px-3 py-1 text-xs text-[#71717a] sm:inline-flex">
            02 / Career
          </span>
        </div>

        <div className="rounded-2xl border border-[#30263d] bg-[#12111b]/70 px-4 sm:px-6">
          <div className="grid grid-cols-1 divide-y divide-[#30263d]/70 sm:grid-cols-2 sm:gap-x-8 sm:divide-y-0">
            {professionalItems.map(({ label, value, icon: Icon }) => (
              <div key={label} className={itemStyle}>
                <div className={iconStyle}>
                  <Icon size={19} />
                </div>

                <div className="min-w-0 pt-0.5">
                  <p className={labelStyle}>{label}</p>
                  <p className={valueStyle}>
                    {value || "Not provided"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Identity */}
      <section className="relative overflow-hidden border-y border-[#30263d] py-6 sm:py-7">
        <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#a855f7]/10 blur-3xl" />

        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#a855f7]/15 text-[#c084fc]">
                <Sparkles size={21} />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#f5f3ff]">
                  Professional Identity
                </h2>
                <p className="mt-1 text-xs text-[#a1a1aa] sm:text-sm">
                  Your current professional overview
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#a855f7]/25 bg-[#a855f7]/10 px-3 py-1.5 text-xs font-medium text-[#c084fc]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
              {mockAbout.experienceLevel || "Not specified"}
            </div>
          </div>

          <div className="mt-7 border-l-2 border-[#a855f7] pl-4 sm:pl-6">
            <h3 className="text-2xl font-bold tracking-tight text-[#f5f3ff] sm:text-3xl">
              {mockAbout.jobTitle || "Your Professional Title"}
            </h3>

            <p className="mt-2 text-sm text-[#a1a1aa]">
              {mockAbout.department || "Department not specified"}
            </p>
          </div>
        </div>
      </section>

    </section>
  );
}

export default About;
