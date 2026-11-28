import {
  LayoutDashboard,
  UserRound,
  MessageSquare,
  FolderKanban,
  Target,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function ProfileTabs() {
  const tabs = [
    {
      name: "Overview",
      path: "/profile/overview",
      icon: LayoutDashboard,
      end: true,
    },
    {
      name: "About",
      path: "/profile/about",
      icon: UserRound,
    },
    {
      name: "Posts",
      path: "/profile/posts",
      icon: MessageSquare,
    },
    {
      name: "Projects",
      path: "/profile/projects",
      icon: FolderKanban,
    },
    {
      name: "Goals",
      path: "/profile/goals",
      icon: Target,
    },
  ];

  return (
    <nav
      aria-label="Profile navigation"
      className="
        relative mt-3 w-full min-w-0
        border-b border-[#30263d]
        bg-transparent
      "
    >
      <div
        className="
          flex w-full items-center
          gap-1 overflow-x-auto
          px-1 py-1.5
          scrollbar-none

          sm:gap-4
          sm:px-1 sm:py-2
        "
      >
        {tabs.map(({ name, path, icon: Icon, end }) => (
          <NavLink
            key={name}
            to={path}
            end={end}
            className={({ isActive }) =>
              `
                group/tab relative
                flex shrink-0 items-center justify-center
                gap-1.5 rounded-lg
                px-3 py-2.5
                text-xs
                transition-all duration-300

                sm:gap-2
                sm:rounded-xl
                sm:px-5 sm:py-3
                sm:text-sm

                ${
                  isActive
                    ? `
                      bg-[#a855f7]/10
                      font-semibold text-[#c084fc]
                    `
                    : `
                      font-medium text-[#a1a1aa]
                      hover:bg-[#1c192a]
                      hover:text-[#c084fc]
                    `
                }
              `
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={16}
                  strokeWidth={isActive ? 2 : 1.8}
                  className="
                    shrink-0
                    transition-transform duration-300
                    group-hover/tab:scale-110
                    sm:h-4.5 sm:w-4.5
                  "
                />

                <span>{name}</span>

                {/* Active Indicator */}
                <span
                  className={`
                    absolute bottom-0
                    left-3 right-3
                    h-0.5 rounded-full
                    bg-[#a855f7]
                    transition-all duration-300

                    sm:left-5 sm:right-5

                    ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }
                  `}
                />

                {/* Active Glow */}
                <span
                  className={`
                    pointer-events-none absolute inset-x-2
                    bottom-0 h-4
                    bg-[#a855f7]/10
                    blur-md
                    transition-opacity duration-300

                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0"
                    }
                  `}
                />
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default ProfileTabs;