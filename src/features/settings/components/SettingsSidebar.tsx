
import {
  UserRound,
  ShieldCheck,
  Bell,
  Palette,
  LifeBuoy,

  Settings,
  ChevronRight,
  Sparkles,
  Zap,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function SettingsSidebar() {
  const settingsLinks = [
    {
      title: "Account",
      description: "Manage your personal information",
      path: "/settings/account",
      icon: UserRound,
    },
    {
      title: "Privacy & Security",
      description: "Control privacy and protection",
      path: "/settings/privacy-security",
      icon: ShieldCheck,
    },
    {
      title: "Notifications",
      description: "Manage your notifications",
      path: "/settings/notifications",
      icon: Bell,
    },
    {
      title: "Appearance",
      description: "Customize your experience",
      path: "/settings/appearance",
      icon: Palette,
    },
    {
      title: "Help & Support",
      description: "We're here to help you",
      path: "/settings/help-support",
      icon: LifeBuoy,
    },
    {
  title: "Log Out",
  description: "Sign out of your iLink account",
  path: "/login",
  icon: LogOut,
  logout: true,
  danger:true
},
  ];

  return (
    <aside className="group/sidebar  relative h-fit w-full shrink-0 overflow-hidden rounded-2xl border border-[#49305e] bg-[#12111b] shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-[#79509c] hover:shadow-[0_15px_45px_rgba(168,85,247,0.10)] lg:sticky lg:top-24 lg:w-80 hidden lg:block ">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#a855f7]/10 blur-[75px] transition-all duration-700 group-hover/sidebar:bg-[#a855f7]/20" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#7c3aed]/10 blur-[70px] transition-all duration-700 group-hover/sidebar:bg-[#7c3aed]/20" />

      {/* Header */}
      <div className="relative overflow-hidden border-b border-[#30263d] bg-linear-to-br from-[#28163c] via-[#1b1428] to-[#12111b] p-5">
        <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full border border-[#c084fc]/10 transition-transform duration-700 group-hover/sidebar:scale-125" />

        <div className="pointer-events-none absolute -right-3 -top-5 h-24 w-24 rounded-full border border-[#c084fc]/10 transition-transform duration-700 group-hover/sidebar:scale-125" />

        <div className="relative flex items-center gap-3">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#c084fc]/30 bg-linear-to-br from-[#a855f7]/30 to-[#7c3aed]/10 text-[#e9d5ff] shadow-[0_0_25px_rgba(168,85,247,0.18)] transition-all duration-500 group-hover/sidebar:rotate-6 group-hover/sidebar:scale-110 group-hover/sidebar:shadow-[0_0_30px_rgba(168,85,247,0.35)]">
            <Settings
              size={23}
              className="transition-transform duration-700 group-hover/sidebar:rotate-90"
            />

            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#211532] bg-[#c084fc]">
              <Sparkles size={8} className="text-[#211532]" />
            </span>
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-tight text-white">
              Settings
            </h2>

            <p className="mt-1 text-xs text-[#c4b5fd]">
              Personalize your iLink experience
            </p>
          </div>
        </div>

        <div className="relative mt-5 flex items-center gap-2">
          <span className="h-1 w-8 rounded-full bg-[#c084fc]" />
          <span className="h-1 w-2 rounded-full bg-[#a855f7]/50" />
          <span className="h-1 w-1 rounded-full bg-[#a855f7]/30" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative space-y-2 p-3 sm:p-4">
        <div className="mb-4 flex items-center justify-between px-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b7b9c]">
            Preferences
          </p>

          <span className="rounded-md border border-[#49305e] bg-[#a855f7]/10 px-2 py-1 text-[9px] font-semibold tracking-wider text-[#c084fc]">
            MENU
          </span>
        </div>

        {settingsLinks.map(
          ({ title, description, path, icon: Icon, danger }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `group/item relative flex items-center gap-3 overflow-hidden rounded-xl border px-3 py-3 transition-all duration-300 ease-out ${
                  isActive
                    ? danger
                      ? "border-[#f47791]/30 bg-linear-to-r from-[#f47791]/15 to-[#f47791]/5 shadow-[0_5px_20px_rgba(244,119,145,0.08)]"
                      : "border-[#a855f7]/30 bg-linear-to-r from-[#a855f7]/20 via-[#a855f7]/10 to-transparent shadow-[0_5px_22px_rgba(168,85,247,0.10)]"
                    : danger
                      ? "border-transparent hover:border-[#f47791]/20 hover:bg-[#f47791]/6"
                      : "border-transparent hover:border-[#49305e] hover:bg-[#1c192a] hover:shadow-[0_5px_20px_rgba(168,85,247,0.06)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Active Indicator */}
                  {isActive && (
                    <span
                      className={`absolute bottom-2 left-0 top-2 w-0.75 rounded-r-full ${
                        danger ? "bg-[#f47791]" : "bg-[#c084fc]"
                      }`}
                    />
                  )}

                  {/* Hover Glow */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/[0.035] to-transparent transition-transform duration-700 group-hover/item:translate-x-full" />

                  {/* Icon */}
                  <div
                    className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive
                        ? danger
                          ? "bg-[#f47791]/15 text-[#f47791] shadow-[0_0_18px_rgba(244,119,145,0.12)]"
                          : "bg-[#a855f7]/20 text-[#e9d5ff] shadow-[0_0_20px_rgba(168,85,247,0.18)]"
                        : danger
                          ? "bg-[#1c192a] text-[#a1a1aa] group-hover/item:bg-[#f47791]/10 group-hover/item:text-[#f47791]"
                          : "bg-[#1c192a] text-[#a1a1aa] group-hover/item:scale-110 group-hover/item:bg-[#a855f7]/15 group-hover/item:text-[#c084fc]"
                    }`}
                  >
                    <Icon
                      size={19}
                      strokeWidth={isActive ? 2.3 : 1.8}
                      className="transition-transform duration-300 group-hover/item:scale-110"
                    />
                  </div>

                  {/* Text */}
                  <div className="relative min-w-0 flex-1">
                    <p
                      className={`truncate text-[13px] font-semibold transition-colors duration-300 ${
                        isActive
                          ? danger
                            ? "text-[#f47791]"
                            : "text-[#e9d5ff]"
                          : "text-[#d4d4dc] group-hover/item:text-white"
                      }`}
                    >
                      {title}
                    </p>

                    <p className="mt-1 truncate text-[10px] text-[#81778e] transition-colors duration-300 group-hover/item:text-[#a1a1aa]">
                      {description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight
                    size={17}
                    className={`relative shrink-0 transition-all duration-300 ${
                      isActive
                        ? danger
                          ? "translate-x-0 text-[#f47791] opacity-100"
                          : "translate-x-0 text-[#c084fc] opacity-100"
                        : "-translate-x-2 text-[#71717a] opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                    }`}
                  />

                  {/* Active Dot */}
                  {isActive && (
                    <span
                      className={`absolute right-3 top-2 h-1.5 w-1.5 animate-pulse rounded-full ${
                        danger ? "bg-[#f47791]" : "bg-[#c084fc]"
                      }`}
                    />
                  )}
                </>
              )}
            </NavLink>
          )
        )}
      </nav>

      {/* Bottom Card */}
      <div className="relative mx-4 mb-4 overflow-hidden rounded-xl border border-[#49305e] bg-linear-to-br from-[#211532] to-[#171321] p-4 transition-all duration-300 hover:border-[#79509c] hover:shadow-[0_0_25px_rgba(168,85,247,0.08)]">
        <div className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-[#a855f7]/10 blur-2xl" />

        <div className="relative flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#a855f7]/15 text-[#c084fc]">
            <Zap size={16} />
          </div>

          <div>
            <p className="text-xs font-semibold text-[#e9d5ff]">
              Your Space, Your Rules
            </p>

            <p className="mt-1 text-[10px] text-[#a1a1aa]">
              Make iLink feel like yours.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SettingsSidebar;
