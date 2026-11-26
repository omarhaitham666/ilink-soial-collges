
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
    <section className="space-y-6 mt-8 ms-5">

      {/* Section Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              Community Ideas
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Explore{" "}
            <span className="bg-linear-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Suggestions
            </span>
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
            Discover ideas, share your thoughts, and help shape the future of
            our platform.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-xl border border-[#30263d] bg-[#12111b] px-4 py-2.5 sm:self-auto">
          <Lightbulb size={16} className="text-purple-400" />

          <span className="text-sm font-semibold text-white">
            {suggestionsMock.length}
          </span>

          <span className="text-xs text-zinc-400">
            Ideas submitted
          </span>
        </div>
      </div>

      {/* Suggestions Feed */}
      {suggestionsMock.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {suggestionsMock.map((card) => (
            <article
              key={card.id}
              className="group relative isolate overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_15px_45px_rgba(168,85,247,0.10)] sm:p-6"
            >
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-40 w-40 rounded-full bg-purple-600/10 blur-[70px] transition-all duration-700 group-hover:bg-purple-500/20" />

              {/* Card Top */}
              <div className="mb-5 flex items-start justify-between gap-3">

                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300">
                  <Tag size={12} />
                  {card.category}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <Clock3 size={13} />
                  {card.createdAt}
                </div>
              </div>

              {/* Card Content */}
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-purple-300">
                  {card.title}
                </h3>

                <p className="line-clamp-3 text-sm leading-7 text-zinc-400">
                  {card.description}
                </p>
              </div>

              {/* Divider */}
              <div className="mb-5 h-px bg-linear-to-r from-transparent via-[#30263d] to-transparent" />

              {/* Author */}
              <div className="mb-5 flex items-center gap-3">
                <img
                  src={card.author.avatar}
                  alt={card.author.name}
                  className="h-10 w-10 rounded-full border border-purple-500/30 object-cover transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                />

                <div>
                  <p className="text-sm font-semibold text-zinc-200">
                    {card.author.name}
                  </p>

                  <p className="mt-0.5 text-xs text-zinc-500">
                    Community Member
                  </p>
                </div>
              </div>

              {/* Card Actions */}
              <div className="flex items-center justify-between gap-3">

                <button
                  type="button"
                  aria-label="Vote for this suggestion"
                  className="group/vote flex items-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/10 px-4 py-2.5 text-sm font-semibold text-purple-300 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/20 hover:text-purple-200"
                >
                  <ArrowBigUp
                    size={18}
                    className="transition-transform duration-300 group-hover/vote:-translate-y-1"
                  />

                  <span>{card.votes}</span>

                  <span className="text-xs font-medium text-purple-300/70">
                    Votes
                  </span>
                </button>

                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    aria-label="Discuss suggestion"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#30263d] bg-[#1c192a] text-zinc-400 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300"
                  >
                    <MessageSquare size={17} />
                  </button>

                  <button
                    type="button"
                    aria-label="Share suggestion"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#30263d] bg-[#1c192a] text-zinc-400 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300"
                  >
                    <Share2 size={17} />
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
        <div className="relative isolate overflow-hidden rounded-3xl border border-dashed border-purple-500/30 bg-[#12111b] px-6 py-16 text-center">

          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:radial-linear(#a855f7_1px,transparent_1px)] background-size:[22px_22px]" />

          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-purple-600/10 blur-[70px] suggestion-pulse" />

          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-fuchsia-600/10 blur-[70px] suggestion-pulse" />

          <div className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center">

            <div className="absolute inset-0 rounded-3xl border border-purple-500/20 suggestion-spin" />

            <div className="absolute inset-2 rounded-2xl border border-fuchsia-500/20 suggestion-spin-reverse" />

            <div className="suggestion-float flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-300 shadow-[0_0_35px_rgba(168,85,247,0.15)]">
              <Lightbulb size={30} />
            </div>

            <Sparkles
              size={17}
              className="absolute -right-1 -top-1 text-fuchsia-400 suggestion-pulse"
            />

          </div>

          <h3 className="mb-3 text-xl font-bold text-white">
            No Suggestions Yet
          </h3>

          <p className="mx-auto mb-7 max-w-md text-sm leading-7 text-zinc-400">
            Every great improvement starts with an idea. Be the first to share
            your thoughts and inspire the community.
          </p>

          <div className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-sm font-semibold text-purple-300">
            <MessageSquarePlus size={17} />
            Waiting for your first idea
          </div>

        </div>
      )}

    </section>
  );
}

export default SuggestionsFeed;
