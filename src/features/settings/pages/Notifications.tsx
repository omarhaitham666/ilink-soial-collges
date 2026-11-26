import {
  Bell,
  MessageCircle,
  Heart,
  UserPlus,
  AtSign,
  Mail,
  Smartphone,
  Clock3,
  Moon,
  Megaphone,
  ShieldCheck,
} from "lucide-react";


function Notifications() {
  return (
    <div className="w-full min-w-0 space-y-5">

      {/* Notification Preferences */}
      <section className="group w-full overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">

        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105">
              <Bell size={19} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white sm:text-base">Notification Preferences</h2>
              <p className="mt-1 text-[11px] text-[#81778e] sm:text-xs">
                Choose which activities you want to be notified about.
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-[#30263d] px-4 sm:px-5">

          {[
            {
              icon: Heart,
              title: "Likes & Reactions",
              description: "When someone likes or reacts to your posts.",
              checked: true,
            },
            {
              icon: MessageCircle,
              title: "Comments & Replies",
              description: "When someone comments on or replies to your posts.",
              checked: true,
            },
            {
              icon: UserPlus,
              title: "New Followers",
              description: "When someone starts following your profile.",
              checked: true,
            },
            {
              icon: AtSign,
              title: "Mentions & Tags",
              description: "When someone mentions or tags you.",
              checked: true,
            },
            {
              icon: MessageCircle,
              title: "Direct Messages",
              description: "When you receive a new private message.",
              checked: true,
            },
            {
              icon: Megaphone,
              title: "Product Updates",
              description: "News, features, and important iLink announcements.",
              checked: false,
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col gap-3 py-4 transition-colors duration-300 hover:bg-white/1.5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc]">
                    <Icon size={17} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-[#f3f0ff]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[10px] leading-5 text-[#81778e]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <label className="relative inline-flex w-fit cursor-pointer items-center">
                  <input
                    type="checkbox"
                    defaultChecked={item.checked}
                    className="peer sr-only"
                  />
                  <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors duration-300 peer-checked:bg-[#a855f7] peer-focus-visible:ring-2 peer-focus-visible:ring-[#a855f7]/40 after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform after:duration-300 peer-checked:after:translate-x-5" />
                </label>
              </div>
            );
          })}

        </div>
      </section>


      {/* Email Notifications */}
      <section className="group w-full overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">

        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105">
              <Mail size={19} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white sm:text-base">Email Notifications</h2>
              <p className="mt-1 text-[11px] text-[#81778e] sm:text-xs">
                Manage the notifications delivered to your email.
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-[#30263d] px-4 sm:px-5">

          <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xs font-bold text-[#f3f0ff]">Email Notifications</h3>
              <p className="mt-1 text-[11px] text-[#81778e]">
                Receive important account notifications via email.
              </p>
            </div>
            <label className="relative inline-flex w-fit cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors duration-300 peer-checked:bg-[#a855f7] after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform after:duration-300 peer-checked:after:translate-x-5" />
            </label>
          </div>

          <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xs font-bold text-[#f3f0ff]">Weekly Digest</h3>
              <p className="mt-1 text-[11px] text-[#81778e]">
                Get a weekly summary of your account activity.
              </p>
            </div>
            <label className="relative inline-flex w-fit cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors duration-300 peer-checked:bg-[#a855f7] after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform after:duration-300 peer-checked:after:translate-x-5" />
            </label>
          </div>

          <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xs font-bold text-[#f3f0ff]">Security Alerts</h3>
              <p className="mt-1 text-[11px] text-[#81778e]">
                Receive alerts about suspicious account activity.
              </p>
              <span className="mt-2 inline-flex rounded-full border border-[#36c99a]/20 bg-[#36c99a]/10 px-2.5 py-1 text-[9px] font-semibold text-[#36c99a]">
                Recommended
              </span>
            </div>
            <label className="relative inline-flex w-fit cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors duration-300 peer-checked:bg-[#a855f7] after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform after:duration-300 peer-checked:after:translate-x-5" />
            </label>
          </div>

        </div>
      </section>


      {/* Push Notifications */}
      <section className="group w-full overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">

        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105">
              <Smartphone size={19} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white sm:text-base">Push Notifications</h2>
              <p className="mt-1 text-[11px] text-[#81778e] sm:text-xs">
                Control notifications sent to your devices.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 p-4 sm:p-5">

          <div className="flex flex-col gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xs font-bold text-[#f3f0ff]">Browser Notifications</h3>
              <p className="mt-1 text-[11px] leading-5 text-[#81778e]">
                Show notifications while using iLink in your browser.
              </p>
            </div>
            <label className="relative inline-flex w-fit cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors duration-300 peer-checked:bg-[#a855f7] after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform after:duration-300 peer-checked:after:translate-x-5" />
            </label>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xs font-bold text-[#f3f0ff]">Sound</h3>
              <p className="mt-1 text-[11px] leading-5 text-[#81778e]">
                Play a sound when a new notification arrives.
              </p>
            </div>
            <label className="relative inline-flex w-fit cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors duration-300 peer-checked:bg-[#a855f7] after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform after:duration-300 peer-checked:after:translate-x-5" />
            </label>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xs font-bold text-[#f3f0ff]">Notification Preview</h3>
              <p className="mt-1 text-[11px] leading-5 text-[#81778e]">
                Show message previews in notification popups.
              </p>
            </div>
            <label className="relative inline-flex w-fit cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors duration-300 peer-checked:bg-[#a855f7] after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform after:duration-300 peer-checked:after:translate-x-5" />
            </label>
          </div>

        </div>
      </section>


      {/* Notification Schedule */}
      <section className="group w-full overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">

        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105">
              <Clock3 size={19} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white sm:text-base">Notification Schedule</h2>
              <p className="mt-1 text-[11px] text-[#81778e] sm:text-xs">
                Choose when you want to receive notifications.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5 p-4 sm:p-5">

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc]">
              <Moon size={17} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-bold text-[#f3f0ff]">Do Not Disturb</h3>
              <p className="mt-1 text-[11px] leading-5 text-[#81778e]">
                Temporarily silence non-essential notifications.
              </p>
              <label className="relative mt-3 inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors duration-300 peer-checked:bg-[#a855f7] after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform after:duration-300 peer-checked:after:translate-x-5" />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-[#30263d] pt-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#d4d4dc]">
                <Clock3 size={14} className="text-[#c084fc]" />
                Start Time
              </label>
              <input
                type="time"
                defaultValue="22:00"
                className="box-border w-full rounded-xl border border-[#30263d] bg-[#0f0f16] px-3 py-3 text-sm text-white outline-none transition-all hover:border-[#79509c] focus:border-[#a855f7]"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#d4d4dc]">
                <Clock3 size={14} className="text-[#c084fc]" />
                End Time
              </label>
              <input
                type="time"
                defaultValue="08:00"
                className="box-border w-full rounded-xl border border-[#30263d] bg-[#0f0f16] px-3 py-3 text-sm text-white outline-none transition-all hover:border-[#79509c] focus:border-[#a855f7]"
              />
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-xl border border-[#a855f7]/15 bg-[#a855f7]/5 p-3">
            <ShieldCheck size={15} className="mt-0.5 shrink-0 text-[#c084fc]" />
            <p className="text-[10px] leading-5 text-[#81778e]">
              Important security alerts may still be delivered while Do Not Disturb is enabled.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Notifications;
