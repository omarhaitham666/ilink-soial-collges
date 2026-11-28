
import {
  FolderKanban,
  ExternalLink,
  CalendarDays,
  Sparkles,
  Layers3,
  ArrowUpRight,
  Code2,
  Globe2,
} from "lucide-react";

import { mockPortfolio } from "../data/profileData";

function Projects() {
  return (
    <section className="mt-6 w-full min-w-0 space-y-7 motion-safe:animate-[fadeIn_.6s_ease-out_both]">

      {/* Portfolio Header */}
      <div className="relative overflow-hidden border-b border-[#30263d] pb-6">
        <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[#a855f7]/[0.07] blur-[70px]" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc]">
                <FolderKanban size={16} />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a1a1aa]">
                Creative Showcase
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-[#f5f3ff] sm:text-3xl">
                Projects & Portfolio
              </h2>

              <span className="rounded-full border border-[#a855f7]/25 bg-[#a855f7]/10 px-3 py-1 text-xs font-semibold tabular-nums text-[#c084fc]">
                {mockPortfolio.length} projects
              </span>
            </div>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#918b9b]">
              A selection of ideas, experiments, and projects brought to life.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-[#30263d] bg-[#12111b] px-3.5 py-2">
            <Sparkles size={14} className="text-[#c084fc]" />
            <span className="text-xs font-medium text-[#b5b0bf]">
              Featured Work
            </span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {mockPortfolio.length > 0 ? (
        <div className="grid w-full min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:gap-6">
          {mockPortfolio.map((project, index) => (
            <article
              key={index}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] transition-all duration-500 hover:-translate-y-1 hover:border-[#76509a]/80 hover:shadow-[0_18px_45px_rgba(0,0,0,0.24)] motion-safe:animate-[fadeIn_.5s_ease-out_both]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Preview */}
              <div className="group/image relative aspect-video overflow-hidden bg-[#1c192a]">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title || "Project preview"}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.06]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-linear-to-br from-[#1c192a] to-[#09090f] text-[#a855f7]/50">
                    <Code2 size={44} strokeWidth={1.3} />
                  </div>
                )}

                <div className="absolute inset-0 bg-linear-to-t from-[#09090f]/75 via-transparent to-[#09090f]/10 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Preview Top */}
                <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                  {project.category ? (
                    <span className="rounded-lg border border-white/10 bg-[#09090f]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#e9d5ff] shadow-lg backdrop-blur-md">
                      {project.category}
                    </span>
                  ) : (
                    <span />
                  )}

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#09090f]/60 text-white/80 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                {/* Preview Bottom */}
                {project.calendar && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[11px] font-medium text-white/80">
                    <CalendarDays size={13} className="text-[#c084fc]" />
                    {project.calendar}
                  </div>
                )}
              </div>

              {/* Project Information */}
              <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8c6bad]">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 wrap-break text-lg font-bold leading-snug text-[#f5f3ff] transition-colors duration-300 group-hover:text-[#c084fc] sm:text-xl">
                      {project.title || "Untitled Project"}
                    </h3>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title || "project"}`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#30263d] bg-[#1c192a] text-[#a1a1aa] transition-all duration-300 hover:border-[#a855f7]/50 hover:bg-[#a855f7]/10 hover:text-[#c084fc]"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>

                <p className="mt-3 text-[13px] leading-7 text-[#9993a3] sm:text-sm">
                  {project.description || "No project description available."}
                </p>

                {/* Technologies */}
                {project.tools && project.tools.length > 0 && (
                  <div className="mt-5 border-t border-[#30263d] pt-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Layers3 size={14} className="text-[#c084fc]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#777281]">
                        Built With
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg border border-[#30263d] bg-[#1c192a]/80 px-2.5 py-1.5 text-[10px] font-medium text-[#c4b5fd] transition-all duration-300 hover:border-[#a855f7]/40 hover:bg-[#a855f7]/10 hover:text-[#e9d5ff] sm:text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Footer */}
                <div className="flex items-center justify-between gap-3 border-t border-[#30263d] pt-4 mt-5">
                  <div className="flex items-center gap-2 text-[10px] font-medium text-[#777281]">
                    <Globe2 size={13} />
                    <span>Portfolio Project</span>
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-xs font-semibold text-[#c084fc] transition-colors duration-300 hover:text-[#e9d5ff]"
                    >
                      View Project
                      <ExternalLink
                        size={14}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-[#625c6c]">
                      Preview unavailable
                    </span>
                  )}
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
            <FolderKanban size={27} strokeWidth={1.6} />
          </div>

          <span className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#a855f7]">
            Your journey starts here
          </span>

          <h3 className="mt-2 text-xl font-semibold text-[#f5f3ff]">
            No projects yet
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-7 text-[#918b9b]">
            Your portfolio projects will appear here when you add your first project.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#c084fc]">
            <Sparkles size={14} />
            <span>Every great product starts with an idea</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
