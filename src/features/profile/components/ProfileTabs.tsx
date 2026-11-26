
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
    { name: "Overview", path: "/profile/overview", icon: LayoutDashboard, end: true },
    { name: "About", path: "/profile/about", icon: UserRound },
    { name: "Posts", path: "/profile/posts", icon: MessageSquare },
    { name: "Projects", path: "/profile/projects", icon: FolderKanban },
    { name: "Goals", path: "/profile/goals", icon: Target },
  ];

  return (
    <nav
      aria-label="Profile navigation"
      className="relative mt-3 w-full min-w-0 border-b border-[#30263d] bg-transparent"
    >
      <div className="flex w-full items-center gap-2 overflow-x-auto px-1 py-2 scrollbar-none sm:gap-4">

        {tabs.map(({ name, path, icon: Icon, end }) => (
          <NavLink
            key={name}
            to={path}
            end={end}
            className={({ isActive }) =>
              `group/tab relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm transition-all duration-300 sm:px-5
              ${
                isActive
                  ? "bg-[#a855f7]/10 font-semibold text-[#c084fc]"
                  : "font-medium text-[#a1a1aa] hover:bg-[#1c192a] hover:text-[#c084fc]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={18}
                  strokeWidth={isActive ? 2 : 1.8}
                  className="transition-transform duration-300 group-hover/tab:scale-110"
                />

                <span>{name}</span>

                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#a855f7] transition-all duration-300 sm:left-5 sm:right-5 ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
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
