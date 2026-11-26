
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
  const cardStyle =
    "group rounded-2xl border border-[#30263d] bg-[#12111b] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6b438d] hover:shadow-[0_12px_35px_rgba(168,85,247,0.10)] sm:p-6";

  const iconStyle =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#a855f7]/20";

  const labelStyle = "text-xs font-medium uppercase tracking-wider text-[#71717a]";

  const valueStyle = "mt-1.5 break-words text-sm font-medium text-[#f5f3ff] sm:text-base";

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

  return (
    <section className="mt-6 space-y-5 motion-safe:animate-[fadeIn_.6s_ease-out_both]">

      {/* Personal Information */}
      <article className={cardStyle}>
        <div className="mb-6 flex items-center gap-3">
          <div className={iconStyle}>
            <ContactRound size={20} />
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#f5f3ff] sm:text-lg">
              Personal Information
            </h2>
            <p className="mt-1 text-xs text-[#a1a1aa] sm:text-sm">
              Your personal details and contact information
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {infoItems.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="group/item flex min-w-0 items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-[#30263d] hover:bg-[#1c192a]/70"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1c192a] text-[#a855f7] transition-all duration-300 group-hover/item:bg-[#a855f7]/15 group-hover/item:text-[#c084fc]">
                <Icon size={17} />
              </div>

              <div className="min-w-0">
                <p className={labelStyle}>{label}</p>
                <p className={valueStyle}>{value || "Not provided"}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* Professional Information */}
      <article className={cardStyle}>
        <div className="mb-6 flex items-center gap-3">
          <div className={iconStyle}>
            <BriefcaseBusiness size={20} />
          </div>

          <div>
            <h2 className="text-base font-semibold text-[#f5f3ff] sm:text-lg">
              Professional Information
            </h2>
            <p className="mt-1 text-xs text-[#a1a1aa] sm:text-sm">
              Your career, department and professional background
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {professionalItems.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="group/item flex min-w-0 items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-[#30263d] hover:bg-[#1c192a]/70"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1c192a] text-[#a855f7] transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-[#a855f7]/15 group-hover/item:text-[#c084fc]">
                <Icon size={18} />
              </div>

              <div className="min-w-0">
                <p className={labelStyle}>{label}</p>
                <p className={valueStyle}>{value || "Not provided"}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* Profile Highlight */}
      <article className="relative overflow-hidden rounded-2xl border border-[#6b438d]/50 bg-linear-to-br from-[#1c192a] via-[#171321] to-[#12111b] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.16)] sm:p-6">
        <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#a855f7]/10 blur-3xl transition-all duration-500" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/15 text-[#c084fc]">
              <Sparkles size={21} />
            </div>

            <div>
              <h3 className="font-semibold text-[#f5f3ff]">
                Professional Profile
              </h3>
              <p className="mt-1 text-sm text-[#a1a1aa]">
                Your current professional identity
              </p>
            </div>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#a855f7]/25 bg-[#a855f7]/10 px-4 py-2 text-sm font-medium text-[#c084fc]">
            <span className="h-2 w-2 rounded-full bg-[#a855f7]" />
            {mockAbout.experienceLevel || "Not specified"}
          </div>
        </div>

        <div className="relative mt-5 border-t border-[#30263d] pt-5">
          <p className="text-2xl font-semibold tracking-tight text-[#f5f3ff] sm:text-3xl">
            {mockAbout.jobTitle || "Your Professional Title"}
          </p>
          <p className="mt-2 text-sm text-[#a1a1aa]">
            {mockAbout.department || "Department not specified"}
          </p>
        </div>
      </article>

    </section>
  );
}

export default About;
