
import {
  MessageCircle,
  Heart,
  Share2,
  MoreHorizontal,
  Image as ImageIcon,
  Newspaper,
  Sparkles,
} from "lucide-react";

import { mockPosts, ProfileBaseData } from "../data/profileData";

function Posts() {
  const cardStyle =
    "overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_8px_30px_rgba(0,0,0,0.16)] transition-all duration-300 hover:border-[#6b438d] hover:shadow-[0_12px_35px_rgba(168,85,247,0.08)]";

  return (
    <section className="mt-6 space-y-5 motion-safe:animate-[fadeIn_.6s_ease-out_both]">

      {/* Posts Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Newspaper size={20} className="text-[#c084fc]" />
            <h2 className="text-lg font-semibold text-[#f5f3ff]">
              My Posts
            </h2>
            <span className="rounded-full border border-[#a855f7]/20 bg-[#a855f7]/10 px-2.5 py-0.5 text-xs font-semibold text-[#c084fc]">
              {mockPosts.length}
            </span>
          </div>

          <p className="mt-1 text-sm text-[#a1a1aa]">
            Explore your thoughts, updates and shared moments
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-xl border border-[#30263d] bg-[#1c192a] px-3 py-2 text-xs font-medium text-[#a1a1aa]">
          <Sparkles size={15} className="text-[#c084fc]" />
          Your activity
        </div>
      </div>

      {/* Posts List */}
      {mockPosts.length > 0 ? (
        <div className="space-y-5">
          {mockPosts.map((post, index) => (
            <article
              key={index}
              className={`${cardStyle} group motion-safe:animate-[fadeIn_.5s_ease-out_both]`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Post Header */}
              <div className="flex items-center justify-between p-5 sm:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#a855f7]/30 bg-[#1c192a] text-[#c084fc]">
                    <img src={ProfileBaseData.avatar} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-[#f5f3ff]">
                      Mohamed Farouk
                    </h3>
                    <p className="mt-0.5 text-xs text-[#71717a]">
                      @mohamed · Recent post
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="More post options"
                  className="rounded-xl p-2 text-[#71717a] transition-all duration-300 hover:bg-[#a855f7]/10 hover:text-[#c084fc]"
                >
                  <MoreHorizontal size={21} />
                </button>
              </div>

              {/* Post Content */}
              <div className="px-5 pb-4 sm:px-6">
                <p className="whitespace-pre-line text-sm leading-7 text-[#d4d4dc] sm:text-base">
                  {post.content}
                </p>
              </div>

              {/* Post Image */}
              {post.img && (
                <div className="relative mx-4 mb-4 overflow-hidden rounded-xl border border-[#30263d] sm:mx-6">
                  <img
                    src={post.img}
                    alt="Post attachment"
                    className="max-h-120 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Post Actions */}
              <div className="mx-5 flex items-center justify-between border-t border-[#30263d] py-3 sm:mx-6">
                <div className="flex items-center gap-1 sm:gap-3">
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-[#a1a1aa] transition-all duration-300 hover:bg-[#f47791]/10 hover:text-[#f47791] sm:text-sm"
                  >
                    <Heart size={17} />
                    Like
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-[#a1a1aa] transition-all duration-300 hover:bg-[#a855f7]/10 hover:text-[#c084fc] sm:text-sm"
                  >
                    <MessageCircle size={17} />
                    Comment
                  </button>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-[#a1a1aa] transition-all duration-300 hover:bg-[#a855f7]/10 hover:text-[#c084fc] sm:text-sm"
                >
                  <Share2 size={17} />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className={`${cardStyle} flex flex-col items-center justify-center px-5 py-16 text-center`}>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc]">
            <ImageIcon size={28} />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-[#f5f3ff]">
            No posts yet
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-[#a1a1aa]">
            Your shared thoughts and moments will appear here once you publish your first post.
          </p>
        </div>
      )}
    </section>
  );
}

export default Posts;
