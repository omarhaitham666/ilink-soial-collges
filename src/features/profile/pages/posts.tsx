
import {
  MessageCircle,
  Heart,
  Share2,
  MoreHorizontal,
  Image as ImageIcon,
  Newspaper,
  Sparkles,
  Globe2,
  Bookmark,
 
} from "lucide-react";

import { mockPosts, ProfileBaseData } from "../data/profileData";

function Posts() {
  const iconButton =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[#85808f] transition-all duration-300 hover:bg-[#a855f7]/10 hover:text-[#c084fc]";

  return (
    <section className="mt-6 w-full min-w-0 space-y-7 motion-safe:animate-[fadeIn_.6s_ease-out_both]">

      {/* Page Heading */}
      <div className="relative overflow-hidden border-b border-[#30263d] pb-6">
        <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-[#a855f7]/[0.07] blur-[65px]" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc]">
                <Newspaper size={16} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a1a1aa]">
                Personal Journal
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-[#f5f3ff] sm:text-3xl">
                My Posts
              </h2>

              <span className="rounded-full border border-[#a855f7]/25 bg-[#a855f7]/10 px-3 py-1 text-xs font-semibold tabular-nums text-[#c084fc]">
                {mockPosts.length} posts
              </span>
            </div>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#918b9b]">
              A collection of thoughts, experiences, and moments worth sharing.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-[#30263d] bg-[#12111b] px-3.5 py-2">
            <Sparkles size={14} className="text-[#c084fc]" />
            <span className="text-xs font-medium text-[#b5b0bf]">
              Your activity
            </span>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      {mockPosts.length > 0 ? (
        <div className="w-full min-w-0 space-y-6">
          {mockPosts.map((post, index) => (
            <article
              key={index}
              className="group relative w-full min-w-0 overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_8px_30px_rgba(0,0,0,0.14)] transition-all duration-500 hover:border-[#6b438d]/80 hover:shadow-[0_14px_40px_rgba(168,85,247,0.07)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top Accent */}
              <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-[#a855f7]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Post Header */}
              <div className="flex items-center justify-between gap-3 px-4 pb-4 pt-5 sm:px-6 sm:pt-6">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative shrink-0">
                    <div className="h-11 w-11 overflow-hidden rounded-full border border-[#a855f7]/40 bg-[#1c192a] p-0.5 sm:h-12 sm:w-12">
                      <img
                        src={ProfileBaseData.avatar}
                        alt="Mohamed Farouk"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>

                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#12111b] bg-emerald-400" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="truncate text-sm font-semibold text-[#f5f3ff]">
                        Mohamed Farouk
                      </h3>

                      <span className="hidden rounded-md bg-[#a855f7]/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#c084fc] sm:inline-flex">
                        Author
                      </span>
                    </div>

                    <div className="mt-1 flex items-center gap-1.5 text-[11px] text-[#777281]">
                      <span>@mohamed</span>
                      <span className="h-0.5 w-0.5 rounded-full bg-[#625c6c]" />
                      <span>Recent post</span>
                      <span className="h-0.5 w-0.5 rounded-full bg-[#625c6c]" />
                      <Globe2 size={11} />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="More post options"
                  className={iconButton}
                >
                  <MoreHorizontal size={21} />
                </button>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="whitespace-pre-line text-[13px] leading-7 text-[#d4d4dc] sm:text-sm sm:leading-8">
                  {post.content}
                </p>
              </div>

              {/* Post Image */}
              {post.img && (
                <div className="relative mx-3 mb-4 overflow-hidden rounded-xl border border-[#30263d] bg-[#09090f] sm:mx-5 sm:mb-5">
                  <img
                    src={post.img}
                    alt="Post attachment"
                    loading="lazy"
                    className="max-h-130 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/20 to-transparent" />

                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/40 px-2.5 py-1.5 text-[10px] font-medium text-white/80 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                    <ImageIcon size={12} />
                    Attachment
                  </div>
                </div>
              )}

              {/* Post Footer */}
              <div className="mx-4 flex items-center justify-between border-t border-[#30263d] py-3 sm:mx-6">
                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    type="button"
                    className="group/like flex items-center gap-2 rounded-xl px-2.5 py-2 text-xs font-medium text-[#9993a3] transition-all duration-300 hover:bg-[#f47791]/10 hover:text-[#f47791] sm:px-3.5 sm:text-sm"
                  >
                    <Heart
                      size={17}
                      className="transition-transform duration-300 group-hover/like:scale-125 group-hover/like:fill-[#f47791]"
                    />
                    <span>Like</span>
                  </button>

                  <button
                    type="button"
                    className="group/comment flex items-center gap-2 rounded-xl px-2.5 py-2 text-xs font-medium text-[#9993a3] transition-all duration-300 hover:bg-[#a855f7]/10 hover:text-[#c084fc] sm:px-3.5 sm:text-sm"
                  >
                    <MessageCircle
                      size={17}
                      className="transition-transform duration-300 group-hover/comment:-translate-y-0.5"
                    />
                    <span>Comment</span>
                  </button>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="Save post"
                    className={iconButton}
                  >
                    <Bookmark size={17} />
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-xl px-2.5 py-2 text-xs font-medium text-[#9993a3] transition-all duration-300 hover:bg-[#a855f7]/10 hover:text-[#c084fc] sm:px-3.5 sm:text-sm"
                  >
                    <Share2 size={17} />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="relative flex min-h-80 flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-[#49345e] bg-linear-to-b from-[#1c192a]/70 to-[#12111b] px-5 py-16 text-center">
          <div className="pointer-events-none absolute -top-16 h-40 w-40 rounded-full bg-[#a855f7]/10 blur-[65px]" />

          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#a855f7]/25 bg-[#a855f7]/10 text-[#c084fc] shadow-[0_0_35px_rgba(168,85,247,0.12)]">
            <ImageIcon size={27} strokeWidth={1.6} />
          </div>

          <span className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#a855f7]">
            Your story starts here
          </span>

          <h3 className="mt-2 text-xl font-semibold text-[#f5f3ff]">
            Nothing shared yet
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-7 text-[#918b9b]">
            Your thoughts, experiences, and shared moments will find their home here.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#c084fc]">
            <Sparkles size={14} />
            <span>Every great story begins with a first post</span>
          </div>
        </div>
      )}

      {/* Feed Ending */}
      {mockPosts.length > 0 && (
        <div className="flex items-center justify-center gap-3 py-3 text-[#625c6c]">
          <span className="h-px w-10 bg-[#30263d]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
            End of your posts
          </span>
          <span className="h-px w-10 bg-[#30263d]" />
        </div>
      )}
    </section>
  );
}

export default Posts;
