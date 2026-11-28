import {
  ShieldCheck,
  Eye,
  Users,
  MessageCircle,
  Lock,
  Activity,
  LockKeyhole,
  KeyRound,
  Smartphone,
  Monitor,
  Clock3,
  ShieldAlert,
  LogOut,
  CircleCheck,
} from "lucide-react";

function Privacy() {
  return (
    <div className="w-full min-w-0 space-y-4 sm:space-y-5">
      {/* Profile Privacy */}
      <section className="group w-full min-w-0 overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">
        {/* Header */}
        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-3 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="ms-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#a855f7]/20">
              <ShieldCheck size={19} />
            </div>

            <div className="min-w-0">
              <h2 className="text-sm font-bold text-white sm:text-base">
                Profile Privacy
              </h2>
              <p className="mt-1 text-[11px] leading-5 text-[#81778e] sm:text-xs">
                Control who can see your profile and personal activity.
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-[#30263d] px-3 sm:px-5">
          {/* Profile Visibility */}
          <div className="flex min-w-0 flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-5">
            <div className="flex min-w-0 items-start gap-3">
              <div className="ms-1 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc]">
                <Eye size={17} />
              </div>

              <div className="min-w-0">
                <h3 className="text-xs font-bold text-[#f3f0ff]">
                  Profile Visibility
                </h3>
                <p className="mt-1 text-[11px] leading-5 text-[#81778e]">
                  Choose who can view your profile information.
                </p>
              </div>
            </div>

            <select
              defaultValue="public"
              className="w-full min-w-0 cursor-pointer rounded-xl border border-[#30263d] bg-[#0f0f16] px-3 py-2.5 text-xs text-white outline-none transition-all duration-300 hover:border-[#79509c] focus:border-[#a855f7] sm:w-40 sm:shrink-0"
            >
              <option value="public">Everyone</option>
              <option value="followers">Followers Only</option>
              <option value="private">Only Me</option>
            </select>
          </div>

          {/* Posts Visibility */}
          <div className="flex min-w-0 flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-5">
            <div className="flex min-w-0 items-start gap-3">
              <div className="ms-1 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc]">
                <MessageCircle size={17} />
              </div>

              <div className="min-w-0">
                <h3 className="text-xs font-bold text-[#f3f0ff]">
                  Posts Visibility
                </h3>
                <p className="mt-1 text-[11px] leading-5 text-[#81778e]">
                  Decide who can see your posts and updates.
                </p>
              </div>
            </div>

            <select
              defaultValue="public"
              className="w-full min-w-0 cursor-pointer rounded-xl border border-[#30263d] bg-[#0f0f16] px-3 py-2.5 text-xs text-white outline-none transition-all duration-300 hover:border-[#79509c] focus:border-[#a855f7] sm:w-40 sm:shrink-0"
            >
              <option value="public">Everyone</option>
              <option value="followers">Followers Only</option>
              <option value="private">Only Me</option>
            </select>
          </div>

          {/* Followers List */}
          <div className="flex min-w-0 flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-5">
            <div className="flex min-w-0 items-start gap-3">
              <div className="ms-1 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc]">
                <Users size={17} />
              </div>

              <div className="min-w-0">
                <h3 className="text-xs font-bold text-[#f3f0ff]">
                  Followers List
                </h3>
                <p className="mt-1 text-[11px] leading-5 text-[#81778e]">
                  Control who can see your followers and following list.
                </p>
              </div>
            </div>

            <select
              defaultValue="everyone"
              className="w-full min-w-0 cursor-pointer rounded-xl border border-[#30263d] bg-[#0f0f16] px-3 py-2.5 text-xs text-white outline-none transition-all duration-300 hover:border-[#79509c] focus:border-[#a855f7] sm:w-40 sm:shrink-0"
            >
              <option value="everyone">Everyone</option>
              <option value="followers">Followers Only</option>
              <option value="only-me">Only Me</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#30263d] bg-[#0f0f16]/60 px-3 py-3 sm:px-5">
          <div className="flex items-start gap-2">
            <Lock size={13} className="ms-1 mt-0.5 shrink-0 text-[#a855f7]" />
            <p className="text-[10px] leading-5 text-[#81778e]">
              Your privacy settings help you control your experience on iLink.
            </p>
          </div>
        </div>
      </section>

      {/* Activity & Visibility */}
      <section className="group w-full min-w-0 overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">
        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-3 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="ms-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105">
              <Activity size={19} />
            </div>

            <div className="min-w-0">
              <h2 className="text-sm font-bold text-white sm:text-base">
                Activity & Visibility
              </h2>
              <p className="mt-1 text-[11px] leading-5 text-[#81778e] sm:text-xs">
                Manage your online presence and activity visibility.
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-[#30263d] px-3 sm:px-5">
          {/* Online Status */}
          <div className="flex min-w-0 flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5">
            <div className="flex min-w-0 items-start gap-3">
              <div className="ms-1 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#36c99a]/10 text-[#36c99a]">
                <Eye size={17} />
              </div>

              <div className="min-w-0">
                <h3 className="text-xs font-bold text-[#f3f0ff]">
                  Online Status
                </h3>
                <p className="mt-1 text-[11px] leading-5 text-[#81778e]">
                  Let others know when you're currently active.
                </p>
              </div>
            </div>

            <label className="relative inline-flex w-fit cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors duration-300 peer-checked:bg-[#a855f7] peer-focus-visible:ring-2 peer-focus-visible:ring-[#a855f7]/40 after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform after:duration-300 peer-checked:after:translate-x-5" />
            </label>
          </div>

          {/* Last Seen */}
          <div className="flex min-w-0 flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5">
            <div className="flex min-w-0 items-start gap-3">
              <div className="ms-1 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc]">
                <Clock3 size={17} />
              </div>

              <div className="min-w-0">
                <h3 className="text-xs font-bold text-[#f3f0ff]">
                  Last Seen
                </h3>
                <p className="mt-1 text-[11px] leading-5 text-[#81778e]">
                  Control who can see when you were last active.
                </p>
              </div>
            </div>

            <select
              defaultValue="everyone"
              className="w-full min-w-0 cursor-pointer rounded-xl border border-[#30263d] bg-[#0f0f16] px-3 py-2.5 text-xs text-white outline-none transition-all hover:border-[#79509c] focus:border-[#a855f7] sm:w-40 sm:shrink-0"
            >
              <option value="everyone">Everyone</option>
              <option value="followers">Followers Only</option>
              <option value="nobody">Nobody</option>
            </select>
          </div>
        </div>
      </section>

      {/* Password & Security */}
      <section className="group w-full min-w-0 overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">
        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-3 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="ms-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105">
              <LockKeyhole size={19} />
            </div>

            <div className="min-w-0">
              <h2 className="text-sm font-bold text-white sm:text-base">
                Password & Security
              </h2>
              <p className="mt-1 text-[11px] leading-5 text-[#81778e] sm:text-xs">
                Keep your account secure and protected.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 p-3 sm:space-y-4 sm:p-5">
          {/* Password */}
          <div className="flex min-w-0 flex-col gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4">
            <div className="flex min-w-0 items-start gap-3">
              <div className="ms-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc]">
                <KeyRound size={17} />
              </div>

              <div className="min-w-0">
                <h3 className="text-xs font-bold text-[#f3f0ff]">
                  Password
                </h3>
                <p className="mt-1 text-[11px] leading-5 text-[#81778e]">
                  Last changed: Not available
                </p>
                <p className="mt-1 text-[10px] leading-5 text-[#6f6878]">
                  Keep your password updated regularly.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="w-full shrink-0 rounded-xl border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-2.5 text-xs font-bold text-[#c084fc] transition-all duration-300 hover:border-[#a855f7]/60 hover:bg-[#a855f7]/20 sm:w-auto"
            >
              Change Password
            </button>
          </div>

          {/* Two Factor */}
          <div className="flex min-w-0 flex-col gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4">
            <div className="flex min-w-0 items-start gap-3">
              <div className="ms-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#36c99a]/10 text-[#36c99a]">
                <ShieldAlert size={17} />
              </div>

              <div className="min-w-0">
                <h3 className="text-xs font-bold text-[#f3f0ff]">
                  Two-Factor Authentication
                </h3>
                <p className="mt-1 text-[11px] leading-5 text-[#81778e]">
                  Add an extra layer of protection to your account.
                </p>
                <span className="mt-2 inline-flex rounded-full border border-[#f4b860]/20 bg-[#f4b860]/10 px-2.5 py-1 text-[9px] font-semibold text-[#f4b860]">
                  Not Enabled
                </span>
              </div>
            </div>

            <button
              type="button"
              className="w-full shrink-0 rounded-xl bg-linear-to-r from-[#a855f7] to-[#7c3aed] px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(168,85,247,0.2)] sm:w-auto"
            >
              Enable 2FA
            </button>
          </div>
        </div>
      </section>

      {/* Active Sessions */}
      <section className="group w-full min-w-0 overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">
        <div className="flex min-w-0 flex-col gap-3 border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="ms-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105">
              <Smartphone size={19} />
            </div>

            <div className="min-w-0">
              <h2 className="text-sm font-bold text-white sm:text-base">
                Active Sessions
              </h2>
              <p className="mt-1 text-[11px] leading-5 text-[#81778e] sm:text-xs">
                Manage devices where you're currently signed in.
              </p>
            </div>
          </div>

          <span className="ms-1 w-fit rounded-full border border-[#36c99a]/20 bg-[#36c99a]/10 px-3 py-1 text-[10px] font-semibold text-[#36c99a]">
            2 Sessions
          </span>
        </div>

        <div className="space-y-3 p-3 sm:p-5">
          {/* Current Device */}
          <div className="flex min-w-0 flex-col gap-3 rounded-xl border border-[#a855f7]/25 bg-[#a855f7]/5 p-3 sm:flex-row sm:items-center sm:p-4">
            <div className="ms-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#30263d] bg-[#1c192a] text-[#c084fc]">
              <Monitor size={20} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xs font-bold text-white">Windows PC</h3>
                <span className="rounded-full bg-[#36c99a]/10 px-2 py-1 text-[9px] font-bold text-[#36c99a]">
                  This Device
                </span>
              </div>

              <p className="mt-1 wrap-break-word text-[10px] leading-5 text-[#81778e]">
                Chrome Browser · Alexandria, Egypt
              </p>
              <p className="mt-1 text-[10px] text-[#6f6878]">
                Current session
              </p>
            </div>

            <span className="ms-1 inline-flex w-fit items-center gap-1.5 text-[10px] font-semibold text-[#36c99a]">
              <CircleCheck size={13} /> Active Now
            </span>
          </div>

          {/* Other Device */}
          <div className="flex min-w-0 flex-col gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-3 sm:flex-row sm:items-center sm:p-4">
            <div className="ms-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#30263d] bg-[#1c192a] text-[#a1a1aa]">
              <Smartphone size={20} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-bold text-white">Mobile Device</h3>
              <p className="mt-1 wrap-break-word text-[10px] leading-5 text-[#81778e]">
                Mobile Browser · Unknown Location
              </p>
              <p className="mt-1 text-[10px] text-[#6f6878]">
                Last active: Recently
              </p>
            </div>

            <button
              type="button"
              className="ms-1 inline-flex w-fit items-center justify-center gap-2 rounded-lg border border-[#f47791]/20 bg-[#f47791]/6 px-3 py-2 text-[10px] font-semibold text-[#f47791] transition-all hover:border-[#f47791]/40 hover:bg-[#f47791]/10"
            >
              <LogOut size={13} /> Revoke
            </button>
          </div>

          <div className="flex justify-end border-t border-[#30263d] pt-4">
            <button
              type="button"
              className="text-start text-[11px] font-semibold text-[#f47791] transition-colors hover:text-[#ff9aab]"
            >
              Sign Out All Other Sessions
            </button>
          </div>
        </div>
      </section>

      {/* Blocked Users */}
      <section className="group w-full min-w-0 overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">
        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-3 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="ms-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#f47791]/20 bg-[#f47791]/10 text-[#f47791] transition-all duration-300 group-hover:scale-105">
              <ShieldAlert size={19} />
            </div>

            <div className="min-w-0">
              <h2 className="text-sm font-bold text-white sm:text-base">
                Blocked Users
              </h2>
              <p className="mt-1 text-[11px] leading-5 text-[#81778e] sm:text-xs">
                Manage people you have blocked on iLink.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3 p-3 sm:p-5">
          {/* Blocked User 1 */}
          <div className="flex min-w-0 items-center gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-3 transition-all duration-300 hover:border-[#49305e]">
            <div className="ms-1 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#1c192a]">
              <div className="flex h-full w-full items-center justify-center text-sm font-bold text-[#c084fc]">
                JD
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-xs font-bold text-white">
                John Doe
              </h3>
              <p className="mt-1 truncate text-[10px] text-[#81778e]">
                @johndoe
              </p>
            </div>

            <button
              type="button"
              className="ms-1 shrink-0 rounded-lg border border-[#30263d] px-3 py-2 text-[10px] font-semibold text-[#a1a1aa] transition-all hover:border-[#a855f7]/40 hover:bg-[#a855f7]/10 hover:text-[#c084fc]"
            >
              Unblock
            </button>
          </div>

          {/* Blocked User 2 */}
          <div className="flex min-w-0 items-center gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-3 transition-all duration-300 hover:border-[#49305e]">
            <div className="ms-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1c192a] text-sm font-bold text-[#c084fc]">
              AM
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-xs font-bold text-white">
                Alex Morgan
              </h3>
              <p className="mt-1 truncate text-[10px] text-[#81778e]">
                @alexmorgan
              </p>
            </div>

            <button
              type="button"
              className="ms-1 shrink-0 rounded-lg border border-[#30263d] px-3 py-2 text-[10px] font-semibold text-[#a1a1aa] transition-all hover:border-[#a855f7]/40 hover:bg-[#a855f7]/10 hover:text-[#c084fc]"
            >
              Unblock
            </button>
          </div>

          <div className="flex min-w-0 items-center justify-between gap-3 border-t border-[#30263d] pt-4">
            <p className="text-[10px] text-[#6f6878]">
              2 blocked accounts
            </p>
            <button
              type="button"
              className="shrink-0 text-[10px] font-semibold text-[#c084fc] transition-colors hover:text-white"
            >
              View All
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;