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
import { Formik , Form } from "formik";

function Account() {

const initialValues = {
name:'',
userName:'',
department:'',
jobTitle:'',
education:'',
location:'',
bio:'',
}

const handleSubmit = (values: typeof initialValues) => {
console.log(values);


}

  return (
    <div className="w-full min-w-0">
     
<Formik initialValues={initialValues} onSubmit={handleSubmit}>
   <Form className="w-full min-w-0 space-y-5">
        {/* Profile Header */}
        <section className="group w-full min-w-0 overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">
          <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4 sm:px-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#a855f7]/20">
                <UserRound size={19} />
              </div>

              <div className="min-w-0">
                <h2 className="text-sm font-bold text-white sm:text-base">
                  Profile Information
                </h2>

                <p className="mt-1 text-[11px] leading-5 text-[#81778e] sm:text-xs">
                  Manage your personal and professional profile information.
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0 p-4 sm:p-5">
            {/* Cover + Avatar */}
            <div className="mb-6 overflow-hidden rounded-xl border border-[#30263d] bg-[#0f0f16]">
              <div className="group/cover relative h-32 w-full overflow-hidden sm:h-40">
                <img
                  src={ProfileBaseData.coverImage}
                  alt="Profile cover"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover/cover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#0f0f16]/80 via-transparent to-black/10" />

                <button
                  type="button"
                  className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#c084fc]/50 hover:bg-[#a855f7]/30"
                >
                  <Camera size={13} />
                  Change Cover
                </button>
              </div>

              <div className="relative flex min-w-0 flex-col gap-4 px-4 pb-4 sm:flex-row sm:items-end sm:px-5">
                <div className="relative mx-auto -mt-12 shrink-0 sm:mx-0">
                  <div className="h-24 w-24 overflow-hidden rounded-2xl border-4 border-[#0f0f16] bg-[#1c192a] shadow-[0_0_25px_rgba(168,85,247,0.15)]">
                    <img
                      src={ProfileBaseData.avatar}
                      alt="Profile picture"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <button
                    type="button"
                    aria-label="Change profile picture"
                    className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-xl border-2 border-[#0f0f16] bg-[#a855f7] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#9333ea]"
                  >
                    <Camera size={14} />
                  </button>
                </div>

                <div className="min-w-0 flex-1 pb-1 text-center sm:text-left">
                  <h3 className="text-sm font-bold text-white">
                    {ProfileBaseData.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#81778e]">
                    @{ProfileBaseData.userName}
                  </p>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#d4d4dc]">
                  Basic Information
                </h3>
              </div>

              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Full Name */}
                <div className="min-w-0">
                  <label className="mb-2 block text-xs font-semibold text-[#d4d4dc]">
                    Full Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    defaultValue={ProfileBaseData.name}
                    placeholder="Enter your full name"
                    className="box-border w-full min-w-0 rounded-xl border border-[#30263d] bg-[#0f0f16] px-3.5 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#5f5968] hover:border-[#49305e] focus:border-[#a855f7]/60 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.08)]"
                  />
                </div>

                {/* Username */}
                <div className="min-w-0">
                  <label className="mb-2 block text-xs font-semibold text-[#d4d4dc]">
                    Username
                  </label>

                  <input
                    name="userName"
                    type="text"
                    defaultValue={ProfileBaseData.userName}
                    placeholder="@username"
                    className="box-border w-full min-w-0 rounded-xl border border-[#30263d] bg-[#0f0f16] px-3.5 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#5f5968] hover:border-[#49305e] focus:border-[#a855f7]/60 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.08)]"
                  />
                </div>

                {/* Job Title */}
                <div className="min-w-0">
                  <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#d4d4dc]">
                    <BriefcaseBusiness
                      size={14}
                      className="text-[#a855f7]"
                    />
                    Job Title
                  </label>

                  <input
                    name="jobTitle"
                    type="text"
                    defaultValue={ProfileBaseData.jobTitle}
                    placeholder="Enter your job title"
                    className="box-border w-full min-w-0 rounded-xl border border-[#30263d] bg-[#0f0f16] px-3.5 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#5f5968] hover:border-[#49305e] focus:border-[#a855f7]/60 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.08)]"
                  />
                </div>

                {/* Department */}
                <div className="min-w-0">
                  <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#d4d4dc]">
                    <Building2 size={14} className="text-[#a855f7]" />
                    Department
                  </label>

                  <input
                    name="department"
                    type="text"
                    defaultValue={mockAbout.department}
                    placeholder="Enter your department"
                    className="box-border w-full min-w-0 rounded-xl border border-[#30263d] bg-[#0f0f16] px-3.5 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#5f5968] hover:border-[#49305e] focus:border-[#a855f7]/60 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.08)]"
                  />
                </div>

                {/* Education */}
                <div className="min-w-0">
                  <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#d4d4dc]">
                    <GraduationCap
                      size={14}
                      className="text-[#a855f7]"
                    />
                    Education
                  </label>

                  <input
                    name="education"
                    type="text"
                    defaultValue={mockAbout.education}
                    placeholder="Enter your education"
                    className="box-border w-full min-w-0 rounded-xl border border-[#30263d] bg-[#0f0f16] px-3.5 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#5f5968] hover:border-[#49305e] focus:border-[#a855f7]/60 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.08)]"
                  />
                </div>

                {/* Location */}
                <div className="min-w-0">
                  <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#d4d4dc]">
                    <MapPin size={14} className="text-[#a855f7]" />
                    Location
                  </label>

                  <input
                    name="location"
                    type="text"
                    defaultValue={mockAbout.location}
                    placeholder="City, Country"
                    className="box-border w-full min-w-0 rounded-xl border border-[#30263d] bg-[#0f0f16] px-3.5 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#5f5968] hover:border-[#49305e] focus:border-[#a855f7]/60 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.08)]"
                  />
                </div>

                {/* Experience */}
                <div className="min-w-0 sm:col-span-2">
                  <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#d4d4dc]">
                    <TrendingUp size={14} className="text-[#a855f7]" />
                    Experience Level
                  </label>

                  <select
                    name="experienceLevel"
                    defaultValue={mockAbout.experienceLevel}
                    className="box-border w-full min-w-0 cursor-pointer rounded-xl border border-[#30263d] bg-[#0f0f16] px-3.5 py-3 text-sm text-white outline-none transition-all duration-300 hover:border-[#49305e] focus:border-[#a855f7]/60 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.08)]"
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
                <div className="h-1.5 w-1.5 rounded-full bg-[#a855f7]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#d4d4dc]">
                  About
                </h3>
              </div>

              <textarea
                name="bio"
                rows={4}
                defaultValue={ProfileBaseData.bio}
                placeholder="Tell people a little about yourself..."
                className="box-border w-full min-w-0 resize-none rounded-xl border border-[#30263d] bg-[#0f0f16] px-3.5 py-3 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-[#5f5968] hover:border-[#49305e] focus:border-[#a855f7]/60 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.08)]"
              />
            </div>

            {/* Form Footer */}
            <div className="mt-6 flex min-w-0 flex-col gap-3 border-t border-[#30263d] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] leading-5 text-[#6f6878]">
                Changes will be reflected on your public profile.
              </p>

              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#a855f7] to-[#7c3aed] px-5 py-3 text-xs font-bold text-white shadow-[0_8px_20px_rgba(168,85,247,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(168,85,247,0.28)] active:translate-y-0"
              >
                <Save size={15} />
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