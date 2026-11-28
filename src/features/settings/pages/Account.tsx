
import {
  Camera,
  UserRound,
  Save,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  MapPin,
  TrendingUp,
} from "lucide-react";

import { mockAbout, ProfileBaseData } from "../../profile/data/profileData";
import { Formik, Form } from "formik";

function Account() {
  const initialValues = {
    name: "",
    userName: "",
    department: "",
    jobTitle: "",
    education: "",
    location: "",
    bio: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  const inputClass =
    "box-border w-full min-w-0 rounded-lg border border-[#30263d] bg-[#0f0f16] px-3 py-2.5 text-xs text-white outline-none transition-all duration-300 placeholder:text-[#5f5968] hover:border-[#49305e] focus:border-[#a855f7]/60 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.08)] sm:rounded-xl sm:px-3.5 sm:py-3 sm:text-sm";

  const labelClass =
    "mb-2 block text-[11px] font-semibold text-[#d4d4dc] sm:text-xs";

  return (
    <div className="w-full min-w-0">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="w-full min-w-0 space-y-5">

          {/* Profile Header */}
          <section className="group w-full min-w-0 overflow-hidden rounded-none border-0 bg-transparent shadow-none transition-all duration-300 sm:rounded-2xl sm:border sm:border-[#30263d] sm:bg-[#12111b] sm:shadow-[0_10px_35px_rgba(0,0,0,0.2)] sm:hover:border-[#49305e]">

            {/* Section Heading */}
            <div className="relative overflow-hidden border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-0 py-3.5  sm:px-5 sm:py-4">
              <div className="pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full bg-[#a855f7]/10 blur-3xl transition-all duration-500 group-hover:bg-[#a855f7]/15" />

              <div className="relative flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#a855f7]/20 bg-[#a855f7]/10 ms-1.5 text-[#c084fc] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#a855f7]/20 sm:h-10 sm:w-10 sm:rounded-xl">
                  <UserRound size={18} />
                </div>

                <div className="min-w-0">
                  <h2 className="text-sm font-bold text-white sm:text-base">
                    Profile Information
                  </h2>

                  <p className="mt-0.5 text-[10px] leading-5 text-[#81778e] sm:mt-1 sm:text-xs">
                    Manage your personal and professional profile information.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="min-w-0 py-4 sm:p-5">

              {/* Cover + Avatar */}
              <div className="mb-6 overflow-hidden rounded-xl border border-[#30263d] bg-[#0f0f16]">

                {/* Cover */}
                <div className="group/cover relative h-28 w-full overflow-hidden sm:h-40">
                  <img
                    src={ProfileBaseData.coverImage}
                    alt="Profile cover"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover/cover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#0f0f16]/85 via-[#0f0f16]/10 to-black/10" />

                  <button
                    type="button"
                    className="absolute right-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/50 px-2.5 py-2 text-[9px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#c084fc]/50 hover:bg-[#a855f7]/30 sm:right-3 sm:top-3 sm:gap-2 sm:px-3 sm:text-[10px]"
                  >
                    <Camera size={12} />
                    Change Cover
                  </button>
                </div>

                {/* Profile Identity */}
                <div className="relative flex min-w-0 flex-col gap-3 px-3 pb-4 sm:flex-row sm:items-end sm:gap-4 sm:px-5">

                  {/* Avatar */}
                  <div className="relative mx-auto -mt-10 shrink-0 sm:mx-0 sm:-mt-12">
                    <div className="h-20 w-20 overflow-hidden rounded-2xl border-4 border-[#0f0f16] bg-[#1c192a] shadow-[0_0_25px_rgba(168,85,247,0.15)] sm:h-24 sm:w-24">
                      <img
                        src={ProfileBaseData.avatar}
                        alt="Profile picture"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <button
                      type="button"
                      aria-label="Change profile picture"
                      className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-lg border-2 border-[#0f0f16] bg-[#a855f7] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#9333ea] sm:-bottom-2 sm:-right-2 sm:h-8 sm:w-8 sm:rounded-xl"
                    >
                      <Camera size={13} />
                    </button>
                  </div>

                  {/* User Details */}
                  <div className="min-w-0 flex-1 pb-1 text-center sm:text-left">
                    <h3 className="truncate text-sm font-bold text-white sm:text-base">
                      {ProfileBaseData.name}
                    </h3>

                    <p className="mt-1 text-[11px] text-[#81778e] sm:text-xs">
                      @{ProfileBaseData.userName}
                    </p>
                  </div>

                  <div className="hidden items-center gap-1.5 pb-1 sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                    <span className="text-[10px] font-medium text-[#a1a1aa]">
                      Profile details
                    </span>
                  </div>
                </div>
              </div>

              {/* Basic Information */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#a855f7] shadow-[0_0_8px_rgba(168,85,247,0.5)]" />

                  <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d4d4dc] sm:text-xs sm:tracking-wider">
                    Basic Information
                  </h3>
                </div>

                <div className="grid min-w-0 grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">

                  {/* Full Name */}
                  <div className="min-w-0">
                    <label className={labelClass}>Full Name</label>

                    <input
                      name="name"
                      type="text"
                      defaultValue={ProfileBaseData.name}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </div>

                  {/* Username */}
                  <div className="min-w-0">
                    <label className={labelClass}>Username</label>

                    <input
                      name="userName"
                      type="text"
                      defaultValue={ProfileBaseData.userName}
                      placeholder="@username"
                      className={inputClass}
                    />
                  </div>

                  {/* Job Title */}
                  <div className="min-w-0">
                    <label className={`${labelClass} flex items-center gap-2`}>
                      <BriefcaseBusiness size={13} className="text-[#a855f7]" />
                      Job Title
                    </label>

                    <input
                      name="jobTitle"
                      type="text"
                      defaultValue={ProfileBaseData.jobTitle}
                      placeholder="Enter your job title"
                      className={inputClass}
                    />
                  </div>

                  {/* Department */}
                  <div className="min-w-0">
                    <label className={`${labelClass} flex items-center gap-2`}>
                      <Building2 size={13} className="text-[#a855f7]" />
                      Department
                    </label>

                    <input
                      name="department"
                      type="text"
                      defaultValue={mockAbout.department}
                      placeholder="Enter your department"
                      className={inputClass}
                    />
                  </div>

                  {/* Education */}
                  <div className="min-w-0">
                    <label className={`${labelClass} flex items-center gap-2`}>
                      <GraduationCap size={14} className="text-[#a855f7]" />
                      Education
                    </label>

                    <input
                      name="education"
                      type="text"
                      defaultValue={mockAbout.education}
                      placeholder="Enter your education"
                      className={inputClass}
                    />
                  </div>

                  {/* Location */}
                  <div className="min-w-0">
                    <label className={`${labelClass} flex items-center gap-2`}>
                      <MapPin size={13} className="text-[#a855f7]" />
                      Location
                    </label>

                    <input
                      name="location"
                      type="text"
                      defaultValue={mockAbout.location}
                      placeholder="City, Country"
                      className={inputClass}
                    />
                  </div>

                  {/* Experience */}
                  <div className="min-w-0 sm:col-span-2">
                    <label className={`${labelClass} flex items-center gap-2`}>
                      <TrendingUp size={13} className="text-[#a855f7]" />
                      Experience Level
                    </label>

                    <select
                      name="experienceLevel"
                      defaultValue={mockAbout.experienceLevel}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="student">Student</option>
                      <option value="beginner">Beginner</option>
                      <option value="junior">Junior</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="senior">Senior</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#a855f7] shadow-[0_0_8px_rgba(168,85,247,0.5)]" />

                  <h3 className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d4d4dc] sm:text-xs sm:tracking-wider">
                    About
                  </h3>
                </div>

                <textarea
                  name="bio"
                  rows={4}
                  defaultValue={ProfileBaseData.bio}
                  placeholder="Tell people a little about yourself..."
                  className="box-border w-full min-w-0 resize-none rounded-lg border border-[#30263d] bg-[#0f0f16] px-3 py-2.5 text-xs leading-6 text-white outline-none transition-all duration-300 placeholder:text-[#5f5968] hover:border-[#49305e] focus:border-[#a855f7]/60 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.08)] sm:rounded-xl sm:px-3.5 sm:py-3 sm:text-sm"
                />
              </div>

              {/* Form Footer */}
              <div className="mt-5 flex min-w-0 flex-col gap-3 border-t border-[#30263d] pt-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:pt-5">

                <p className="text-[10px] leading-5 text-[#6f6878] sm:max-w-xs">
                  Changes will be reflected on your public profile.
                </p>

                <button
                  type="submit"
                  className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#a855f7] to-[#7c3aed] px-4 py-2.5 text-xs font-bold text-white shadow-[0_8px_20px_rgba(168,85,247,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(168,85,247,0.28)] active:translate-y-0 sm:w-auto sm:rounded-xl sm:px-5 sm:py-3"
                >
                  <Save size={14} />
                  Save Changes
                </button>
              </div>
            </div>
          </section>
        </Form>
      </Formik>
    </div>
  );
}

export default Account;
