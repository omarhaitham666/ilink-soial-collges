import { useState } from "react";
import { ProfileBaseData } from "../data/profileData";

function ProfileHeader() {
  const [avatarError, setAvatarError] = useState(false);
  const [coverError, setCoverError] = useState(false);

  const defaultAvatar =
    "https://placehold.co/400x400/1c192a/1c192a";

  const defaultCover =
    "https://placehold.co/1200x400/1c192a/1c192a";

  const avatarSrc =
    !avatarError && ProfileBaseData.avatar
      ? ProfileBaseData.avatar
      : defaultAvatar;

  const coverSrc =
    !coverError && ProfileBaseData.coverImage
      ? ProfileBaseData.coverImage
      : defaultCover;

  const isOnline = true;

  return (
    <section
      className="
        group/header relative isolate overflow-hidden
        -mx-4 w-[calc(100%+2rem)]
        bg-[#12111b]
        motion-safe:animate-[fadeIn_.7s_ease-out_both]

        sm:mx-0 sm:w-full
        sm:rounded-2xl
        sm:border sm:border-[#30263d]
        sm:shadow-[0_12px_40px_rgba(0,0,0,0.25)]
        sm:transition-all sm:duration-500
        sm:hover:border-[#6b438d]/70
        sm:hover:shadow-[0_16px_55px_rgba(168,85,247,0.12)]
      "
    >
      {/* Cover Image */}
      <div className="group/cover relative h-32 overflow-hidden sm:h-44 lg:h-48 xl:h-52">
        <img
          src={coverSrc}
          alt="Profile cover"
          onError={() => setCoverError(true)}
          className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover/cover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#12111b] via-[#09090f]/35 to-black/10" />

        <div className="absolute inset-0 bg-linear-to-r from-[#09090f]/30 via-transparent to-[#a855f7]/10" />

        <div className="absolute bottom-0 left-0 h-1 w-20 bg-linear-to-r from-[#a855f7] to-transparent opacity-70 transition-all duration-500 group-hover/header:w-40 sm:w-24" />
      </div>

      {/* Main Content */}
      <div className="relative px-4 pb-5 sm:px-7 sm:pb-6 lg:px-8">

       {/* Avatar & Actions */}
<div className="flex items-end justify-between gap-3 sm:flex-row sm:items-end sm:justify-between">

  {/* Avatar */}
  <div className="group/avatar relative z-10 -mt-11 w-fit shrink-0 sm:-mt-16">

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
      className={`absolute bottom-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full border-[3px] border-[#12111b] sm:bottom-3 sm:right-3 ${
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
  <div className="mb-1 flex items-center gap-2 sm:mb-0 sm:gap-2.5">

    <button
      type="button"
      className="group/edit inline-flex items-center justify-center gap-1.5 rounded-lg bg-linear-to-r from-[#9333ea] via-[#a855f7] to-[#c084fc] px-3 py-2 text-xs font-semibold text-white shadow-[0_5px_20px_rgba(168,85,247,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.4)] active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c084fc] sm:rounded-xl sm:px-5 sm:py-2.5 sm:text-sm"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.5 3.5 4 4M4 20l4.5-1 11-11a2.12 2.12 0 0 1-3-3l-11 11L4 20Z"
        />
      </svg>

      Edit
    </button>

    <button
      type="button"
      className="group/share inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#30263d] bg-[#1c192a] px-3 py-2 text-xs font-semibold text-[#f5f3ff] transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/70 hover:bg-[#252033] hover:shadow-[0_8px_25px_rgba(168,85,247,0.12)] active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c084fc] sm:rounded-xl sm:px-5 sm:py-2.5 sm:text-sm"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16V4m0 0L7 9m5-5 5 5M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
        />
      </svg>

      Share
    </button>

  </div>

</div>

        {/* User Information */}
        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">

          <div className="min-w-0 flex-1 space-y-2.5">

            {/* Name & Username */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 sm:gap-x-3">

              <h1 className="min-w-0 text-2xl font-extrabold tracking-tight text-[#f5f3ff] transition-colors duration-300 hover:text-[#c084fc] sm:text-3xl">
                {ProfileBaseData.name}
              </h1>

              <span className="max-w-full truncate rounded-lg border border-[#30263d] bg-[#1c192a] px-2.5 py-1 text-xs font-medium text-[#a1a1aa] transition-all duration-300 hover:border-[#6b438d] hover:text-[#c084fc] sm:px-3 sm:text-sm">
                @{ProfileBaseData.userName}
              </span>

            </div>

            {/* Job Title */}
            {ProfileBaseData.jobTitle && (
              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a855f7] shadow-[0_0_10px_rgba(168,85,247,0.7)]" />

                <p className="text-sm font-bold tracking-wide text-[#c084fc]">
                  {ProfileBaseData.jobTitle}
                </p>

              </div>
            )}

            {/* Bio */}
            {ProfileBaseData.bio && (
              <p className="max-w-3xl text-[13px] leading-5 text-[#a1a1aa] sm:text-sm sm:leading-6 md:text-base md:leading-7">
                {ProfileBaseData.bio}
              </p>
            )}

          </div>

          {/* Connections Card */}
          <div className="group/connections flex w-full shrink-0 items-center gap-3 rounded-2xl border border-[#30263d] bg-linear-to-br from-[#1c192a] to-[#12111b] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/60 hover:shadow-[0_10px_30px_rgba(168,85,247,0.12)] sm:w-fit">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/15 text-[#c084fc] transition-all duration-300 group-hover/connections:rotate-6 group-hover/connections:scale-110 group-hover/connections:bg-[#a855f7]/25">

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