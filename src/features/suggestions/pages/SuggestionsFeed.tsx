
import {
  Lightbulb,
  MessageSquarePlus,
  Sparkles,
  ArrowBigUp,
  MessageSquare,
  Share2,
  Clock3,
  Tag,
} from "lucide-react";

import { suggestionsMock } from "../mockData";

function SuggestionsFeed() {
  return (
    <section className="mt-6 w-full lg:ms-1 min-w-0 space-y-5 sm:mt-8 sm:ms-5 sm:space-y-6">

      {/* Section Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">

        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-400 sm:text-xs sm:tracking-[0.2em]">
              Community Ideas
            </span>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl">
            Explore{" "}
            <span className="bg-linear-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Suggestions
            </span>
          </h2>

          <p className="mt-1.5 max-w-xl text-xs leading-5 text-zinc-400 sm:mt-2 sm:text-sm sm:leading-relaxed">
            Discover ideas, share your thoughts, and help shape the future of
            our platform.
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-lg border border-[#30263d] bg-[#12111b] px-3 py-2 sm:self-auto sm:rounded-xl sm:px-4 sm:py-2.5">
          <Lightbulb size={15} className="text-purple-400 sm:size-4" />

          <span className="text-xs font-semibold text-white sm:text-sm">
            {suggestionsMock.length}
          </span>

          <span className="text-[10px] text-zinc-400 sm:text-xs">
            Ideas submitted
          </span>
        </div>
      </div>

      {/* Suggestions Feed */}
      {suggestionsMock.length > 0 ? (
        <div className="grid w-full min-w-0 grid-cols-1  gap-3 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">

          {suggestionsMock.map((card) => (
            <article
              key={card.id}
              className="group relative isolate w-full min-w-0 overflow-hidden rounded-xl border border-[#30263d] bg-[#12111b] p-3.5 transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_15px_45px_rgba(168,85,247,0.10)] sm:rounded-2xl sm:p-6"
            >
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-40 w-40 rounded-full bg-purple-600/10 blur-[70px] transition-all duration-700 group-hover:bg-purple-500/20" />

              {/* Card Top */}
              <div className="mb-4 flex items-start justify-between gap-2.5 sm:mb-5 sm:gap-3">

                <span className="inline-flex max-w-[65%] items-center gap-1 rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[10px] font-medium text-purple-300 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs">
                  <Tag size={11} className="shrink-0 sm:size-3" />
                  <span className="truncate">{card.category}</span>
                </span>

                <div className="flex shrink-0 items-center gap-1 text-[10px] text-zinc-500 sm:gap-1.5 sm:text-xs">
                  <Clock3 size={12} />
                  {card.createdAt}
                </div>
              </div>

              {/* Card Content */}
              <div className="mb-4 sm:mb-6">
                <h3 className="mb-2 text-base font-bold leading-snug text-white transition-colors duration-300 group-hover:text-purple-300 sm:mb-3 sm:text-lg">
                  {card.title}
                </h3>

                <p className="line-clamp-3 text-xs leading-6 text-zinc-400 sm:text-sm sm:leading-7">
                  {card.description}
                </p>
              </div>

              {/* Divider */}
              <div className="mb-4 h-px bg-linear-to-r from-transparent via-[#30263d] to-transparent sm:mb-5" />

              {/* Author */}
              <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
                <img
                  src={card.author.avatar}
                  alt={card.author.name}
                  className="h-9 w-9 shrink-0 rounded-full border border-purple-500/30 object-cover transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] sm:h-10 sm:w-10"
                />

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-zinc-200 sm:text-sm">
                    {card.author.name}
                  </p>

                  <p className="mt-0.5 text-[10px] text-zinc-500 sm:text-xs">
                    Community Member
                  </p>
                </div>
              </div>

              {/* Card Actions */}
              <div className="flex items-center justify-between gap-2">

                <button
                  type="button"
                  aria-label="Vote for this suggestion"
                  className="group/vote flex items-center gap-1.5 rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-2 text-xs font-semibold text-purple-300 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/20 hover:text-purple-200 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  <ArrowBigUp
                    size={16}
                    className="transition-transform duration-300 group-hover/vote:-translate-y-1 sm:size-4.5"
                  />

                  <span>{card.votes}</span>

                  <span className="text-[10px] font-medium text-purple-300/70 sm:text-xs">
                    Votes
                  </span>
                </button>

                <div className="flex items-center gap-1.5 sm:gap-2">

                  <button
                    type="button"
                    aria-label="Discuss suggestion"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#30263d] bg-[#1c192a] text-zinc-400 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300 sm:h-10 sm:w-10 sm:rounded-xl"
                  >
                    <MessageSquare size={15} className="sm:size-4.25" />
                  </button>

                  <button
                    type="button"
                    aria-label="Share suggestion"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#30263d] bg-[#1c192a] text-zinc-400 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300 sm:h-10 sm:w-10 sm:rounded-xl"
                  >
                    <Share2 size={15} className="sm:size-4.25" />
                  </button>

                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-purple-500 to-fuchsia-400 transition-all duration-500 group-hover:w-full" />

            </article>
          ))}

        </div>
      ) : (

        /* Empty State */
        <div className="relative isolate w-full overflow-hidden rounded-xl border border-dashed border-purple-500/30 bg-[#12111b] px-4 py-10 text-center sm:rounded-3xl sm:px-6 sm:py-16">

          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:radial-linear(#a855f7_1px,transparent_1px)] background-size:[22px_22px]" />

          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-purple-600/10 blur-[70px] suggestion-pulse" />

          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-fuchsia-600/10 blur-[70px] suggestion-pulse" />

          <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center sm:mb-7 sm:h-24 sm:w-24">

            <div className="absolute inset-0 rounded-3xl border border-purple-500/20 suggestion-spin" />

            <div className="absolute inset-2 rounded-2xl border border-fuchsia-500/20 suggestion-spin-reverse" />

            <div className="suggestion-float flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-300 shadow-[0_0_35px_rgba(168,85,247,0.15)] sm:h-16 sm:w-16">
              <Lightbulb size={26} className="sm:size-7.5" />
            </div>

            <Sparkles
              size={15}
              className="absolute -right-1 -top-1 text-fuchsia-400 suggestion-pulse sm:size-4.25"
            />

          </div>

          <h3 className="mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl">
            No Suggestions Yet
          </h3>

          <p className="mx-auto mb-5 max-w-md text-xs leading-6 text-zinc-400 sm:mb-7 sm:text-sm sm:leading-7">
            Every great improvement starts with an idea. Be the first to share
            your thoughts and inspire the community.
          </p>

          <div className="inline-flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/10 px-3.5 py-2.5 text-xs font-semibold text-purple-300 sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm">
            <MessageSquarePlus size={15} className="sm:size-4.25" />
            Waiting for your first idea
          </div>

        </div>
      )}

    </section>
  );
}

export default SuggestionsFeed;
