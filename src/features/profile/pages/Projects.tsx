
import {
  FolderKanban,
  ExternalLink,
  CalendarDays,
  Sparkles,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

import { mockPortfolio } from "../data/profileData";

function Projects() {
  const cardStyle =
    "group overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_8px_30px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#6b438d] hover:shadow-[0_15px_40px_rgba(168,85,247,0.10)]";

  return (
    <section className="mt-6 space-y-6 motion-safe:animate-[fadeIn_.6s_ease-out_both]">

      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <FolderKanban size={21} className="text-[#c084fc]" />
            <h2 className="text-lg font-semibold text-[#f5f3ff]">
              Projects & Portfolio
            </h2>

            <span className="rounded-full border border-[#a855f7]/20 bg-[#a855f7]/10 px-2.5 py-0.5 text-xs font-semibold text-[#c084fc]">
              {mockPortfolio.length}
            </span>
          </div>

          <p className="mt-1 text-sm text-[#a1a1aa]">
            Showcasing your creative work and development projects
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-xl border border-[#30263d] bg-[#1c192a] px-3 py-2 text-xs font-medium text-[#a1a1aa]">
          <Sparkles size={15} className="text-[#c084fc]" />
          Featured Work
        </div>
      </div>

      {/* Projects Grid */}
      {mockPortfolio.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">
          {mockPortfolio.map((project, index) => (
            <article
              key={index}
              className={`${cardStyle} motion-safe:animate-[fadeIn_.5s_ease-out_both]`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Project Image */}
              <div className="group/image relative aspect-video overflow-hidden bg-[#1c192a]">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title || "Project preview"}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[#71717a]">
                    <Layers3 size={40} />
                  </div>
                )}

                <div className="absolute inset-0 bg-linear-to-t from-[#09090f]/80 via-transparent to-transparent opacity-80" />

                {project.category && (
                  <span className="absolute left-4 top-4 rounded-lg border border-white/10 bg-[#09090f]/75 px-3 py-1.5 text-xs font-semibold text-[#e9d5ff] shadow-lg backdrop-blur-md">
                    {project.category}
                  </span>
                )}

                {project.calendar && (
                  <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#09090f]/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    <CalendarDays size={13} />
                    {project.calendar}
                  </span>
                )}
              </div>

              {/* Project Details */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug text-[#f5f3ff] transition-colors duration-300 group-hover:text-[#c084fc]">
                    {project.title || "Untitled Project"}
                  </h3>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#a855f7]/20">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <p className="mt-3 min-h-14 text-sm leading-7 text-[#a1a1aa]">
                  {project.description || "No project description available."}
                </p>

                {/* Tools */}
                {project.tools && project.tools.length > 0 && (
                  <div className="mt-5 border-t border-[#30263d] pt-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Layers3 size={15} className="text-[#c084fc]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#71717a]">
                        Technologies & Tools
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="cursor-default rounded-lg border border-[#30263d] bg-[#1c192a] px-3 py-1.5 text-xs font-medium text-[#c4b5fd] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a855f7]/50 hover:bg-[#a855f7]/10 hover:text-[#e9d5ff]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Link */}
                {project.link && (
                  <div className="mt-5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-3 text-sm font-semibold text-[#c084fc] transition-all duration-300 hover:border-[#a855f7] hover:bg-[#a855f7] hover:text-white"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[#30263d] bg-[#12111b] px-5 py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc]">
            <FolderKanban size={28} />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-[#f5f3ff]">
            No projects yet
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-[#a1a1aa]">
            Your portfolio projects will appear here when you add your first project.
          </p>
        </div>
      )}
    </section>
  );
}

export default Projects;
