
import { useState } from "react";
import { ProfileBaseData } from "../data/profileData";

function ProfileHeader() {
  const [avatarError, setAvatarError] = useState(false);
  const [coverError, setCoverError] = useState(false);

  const defaultAvatar =
    "https://placehold.co/400x400/1c192a/1c192a";

  const defaultCover =
    "https://placehold.co/1200x400/1c192a/1c192a";

  const avatarSrc = !avatarError && ProfileBaseData.avatar ? 
  ProfileBaseData.avatar : defaultAvatar

  const coverSrc =
    !coverError && ProfileBaseData.coverImage
      ? ProfileBaseData.coverImage
      : defaultCover;

  const isOnline = true;

  return (
    <section className="group/header relative isolate w-full min-w-0 overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-[#6b438d]/70 hover:shadow-[0_16px_55px_rgba(168,85,247,0.12)] motion-safe:animate-[fadeIn_.7s_ease-out_both]">

      {/* Cover Image */}
      <div className="group/cover relative h-36 overflow-hidden sm:h-44 lg:h-48 xl:h-52">

        <img
          src={coverSrc}
          alt="Profile cover"
          onError={() => setCoverError(true)}
          className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover/cover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#12111b] via-[#09090f]/35 to-black/10" />

        <div className="absolute inset-0 bg-linear-to-r from-[#09090f]/30 via-transparent to-[#a855f7]/10" />

        <div className="absolute bottom-0 left-0 h-1 w-24 bg-linear-to-r from-[#a855f7] to-transparent opacity-70 transition-all duration-500 group-hover/header:w-40" />

      </div>

      {/* Main Content */}
      <div className="relative px-5 pb-5 sm:px-7 sm:pb-6 lg:px-8">

        {/* Avatar & Actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          {/* Avatar */}
          <div className="group/avatar relative z-10 -mt-12 w-fit shrink-0 sm:-mt-16">

            <div className="rounded-full border-4 border-[#12111b] bg-linear-to-br from-[#a855f7] to-[#30263d] p-0.75 shadow-[0_8px_30px_rgba(168,85,247,0.18)] transition-all duration-500 group-hover/avatar:scale-105 group-hover/avatar:shadow-[0_10px_35px_rgba(168,85,247,0.35)]">

              <img
                src={avatarSrc}
                alt={`${ProfileBaseData.name}'s profile`}
                onError={() => setAvatarError(true)}
                className="h-24 w-24 rounded-full border-2 border-[#12111b] object-cover sm:h-28 sm:w-28 lg:h-34 lg:w-34"
              />

            </div>

            {/* Online Indicator */}
            <span
              className={`absolute bottom-2 right-2 flex h-4 w-4 items-center justify-center rounded-full border-[3px] border-[#12111b] sm:bottom-3 sm:right-3 ${
                isOnline
                  ? "bg-[#36c99a] shadow-[0_0_12px_rgba(54,201,154,0.5)]"
                  : "bg-[#71717a]"
              }`}
              aria-label={isOnline ? "Online" : "Offline"}
              title={isOnline ? "Online" : "Offline"}
            >
              {isOnline && (
                <span
                  aria-hidden="true"
                  className="absolute h-full w-full animate-ping rounded-full bg-[#36c99a] opacity-40"
                />
              )}
            </span>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:pb-1">

            <button
              type="button"
              className="group/edit inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#9333ea] via-[#a855f7] to-[#c084fc] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_5px_20px_rgba(168,85,247,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.4)] active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c084fc]"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover/edit:-rotate-12 group-hover/edit:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.5 3.5 4 4M4 20l4.5-1 11-11a2.12 2.12 0 0 0-3-3l-11 11L4 20Z"
                />
              </svg>

              Edit Profile

            </button>

            <button
              type="button"
              className="group/share inline-flex items-center justify-center gap-2 rounded-xl border border-[#30263d] bg-[#1c192a] px-5 py-2.5 text-sm font-semibold text-[#f5f3ff] transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/70 hover:bg-[#252033] hover:shadow-[0_8px_25px_rgba(168,85,247,0.12)] active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c084fc]"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover/share:-translate-y-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16V4m0 0L7 9m5-5 5 5M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
                />
              </svg>

              Share Profile

            </button>

          </div>

        </div>

        {/* User Information */}
        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">

          <div className="min-w-0 flex-1 space-y-2.5">

            {/* Name & Username */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">

              <h1 className="text-2xl font-extrabold tracking-tight text-[#f5f3ff] transition-colors duration-300 hover:text-[#c084fc] sm:text-3xl">
                {ProfileBaseData.name}
              </h1>

              <span className="rounded-lg border border-[#30263d] bg-[#1c192a] px-3 py-1 text-xs font-medium text-[#a1a1aa] transition-all duration-300 hover:border-[#6b438d] hover:text-[#c084fc] sm:text-sm">
                @{ProfileBaseData.userName}
              </span>

            </div>

            {/* Job Title */}
            {ProfileBaseData.jobTitle && (
              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7] shadow-[0_0_10px_rgba(168,85,247,0.7)]" />

                <p className="text-sm font-bold tracking-wide text-[#c084fc]">
                  {ProfileBaseData.jobTitle}
                </p>

              </div>
            )}

            {/* Bio */}
            {ProfileBaseData.bio && (
              <p className="max-w-3xl text-sm leading-6 text-[#a1a1aa] sm:text-base sm:leading-7">
                {ProfileBaseData.bio}
              </p>
            )}

          </div>

          {/* Connections Card */}
          <div className="group/connections flex w-fit shrink-0 items-center gap-3 rounded-2xl border border-[#30263d] bg-linear-to-br from-[#1c192a] to-[#12111b] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/60 hover:shadow-[0_10px_30px_rgba(168,85,247,0.12)]">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#a855f7]/15 text-[#c084fc] transition-all duration-300 group-hover/connections:rotate-6 group-hover/connections:scale-110 group-hover/connections:bg-[#a855f7]/25">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M14 3.13a4 4 0 0 1 0 7.75M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                />
              </svg>

            </div>

            <div className="space-y-0.5">

              <p className="text-xl font-extrabold tabular-nums text-[#f5f3ff] transition-colors duration-300 group-hover/connections:text-[#c084fc]">
                {ProfileBaseData.connectionsCount}
              </p>

              <p className="text-xs font-medium text-[#a1a1aa]">
                Connections
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProfileHeader;
