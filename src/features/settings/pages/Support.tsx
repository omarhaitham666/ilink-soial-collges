import {
  HelpCircle,
  Search,
  ChevronDown,
  MessageCircle,
  Bug,
  BookOpen,
  ShieldCheck,
  FileText,
  ExternalLink,
  Mail,
  LifeBuoy,
  Bell,
  Palette,
} from "lucide-react";

function Support() {
  return (
    <div className="w-full min-w-0 space-y-5">

      {/* Help Center */}
      <section className="group relative overflow-hidden rounded-2xl border border-[#49305e] bg-[#12111b] shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-[#79509c]">

        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#a855f7]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-[#7c3aed]/10 blur-3xl" />

        <div className="relative p-5 sm:p-7">

          <div className="mx-auto max-w-xl text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#a855f7]/25 bg-[#a855f7]/10 text-[#c084fc] shadow-[0_0_25px_rgba(168,85,247,0.12)]">
              <LifeBuoy size={22} />
            </div>

            <h2 className="mt-4 text-lg font-bold text-white sm:text-xl">
              How can we help you?
            </h2>

            <p className="mx-auto mt-2 max-w-md text-[11px] leading-5 text-[#81778e] sm:text-xs">
              Search our help resources or find answers to common questions
              about your iLink account.
            </p>

            <div className="relative mt-5">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6f6878]"
              />

              <input
                type="text"
                placeholder="Search for help..."
                className="box-border w-full rounded-xl border border-[#30263d] bg-[#0f0f16] py-3.5 pl-11 pr-4 text-xs text-white outline-none transition-all duration-300 placeholder:text-[#5f5968] hover:border-[#49305e] focus:border-[#a855f7]/60 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.08)]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="group overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">

        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105">
              <HelpCircle size={19} />
            </div>

            <div>
              <h2 className="text-sm font-bold text-white sm:text-base">
                Frequently Asked Questions
              </h2>

              <p className="mt-1 text-[11px] text-[#81778e] sm:text-xs">
                Quick answers to the most common questions.
              </p>
            </div>

          </div>
        </div>

        <div className="divide-y divide-[#30263d] px-4 sm:px-5">

          {/* FAQ 1 */}
          <details className="group/faq py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
                  <ShieldCheck size={15} />
                </div>

                <span className="text-xs font-semibold text-[#f3f0ff]">
                  How can I change my account password?
                </span>
              </div>

              <ChevronDown
                size={16}
                className="shrink-0 text-[#81778e] transition-transform duration-300 group-open/faq:rotate-180"
              />
            </summary>

            <p className="mt-3 pl-11 text-[11px] leading-6 text-[#81778e]">
              You can change your password from Privacy & Security inside
              your Settings. Choose Change Password and follow the required
              steps.
            </p>
          </details>

          {/* FAQ 2 */}
          <details className="group/faq py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
                  <MessageCircle size={15} />
                </div>

                <span className="text-xs font-semibold text-[#f3f0ff]">
                  How do I control who can see my profile?
                </span>
              </div>

              <ChevronDown
                size={16}
                className="shrink-0 text-[#81778e] transition-transform duration-300 group-open/faq:rotate-180"
              />
            </summary>

            <p className="mt-3 pl-11 text-[11px] leading-6 text-[#81778e]">
              Open Privacy & Security and use the Profile Privacy settings
              to control profile, posts, and followers visibility.
            </p>
          </details>

          {/* FAQ 3 */}
          <details className="group/faq py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
                  <Bell size={15} />
                </div>

                <span className="text-xs font-semibold text-[#f3f0ff]">
                  How can I manage notifications?
                </span>
              </div>

              <ChevronDown
                size={16}
                className="shrink-0 text-[#81778e] transition-transform duration-300 group-open/faq:rotate-180"
              />
            </summary>

            <p className="mt-3 pl-11 text-[11px] leading-6 text-[#81778e]">
              Go to Notifications in Settings to control activity,
              email, push notifications, and notification schedules.
            </p>
          </details>

          {/* FAQ 4 */}
          <details className="group/faq py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
                  <Palette size={15} />
                </div>

                <span className="text-xs font-semibold text-[#f3f0ff]">
                  Can I customize the appearance of iLink?
                </span>
              </div>

              <ChevronDown
                size={16}
                className="shrink-0 text-[#81778e] transition-transform duration-300 group-open/faq:rotate-180"
              />
            </summary>

            <p className="mt-3 pl-11 text-[11px] leading-6 text-[#81778e]">
              Yes. The Appearance section lets you customize the theme,
              accent color, font size, animations, and interface preferences.
            </p>
          </details>

        </div>
      </section>

      {/* Contact Support + Report */}
      <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">

        {/* Contact Support */}
        <section className="group overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">

          <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105">
                <Mail size={18} />
              </div>

              <div>
                <h2 className="text-sm font-bold text-white">
                  Contact Support
                </h2>

                <p className="mt-1 text-[10px] text-[#81778e]">
                  Need personal assistance?
                </p>
              </div>

            </div>
          </div>

          <div className="p-4 sm:p-5">

            <p className="text-[11px] leading-5 text-[#81778e]">
              Our support team can help you with account issues,
              security concerns, and technical problems.
            </p>

            <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
                <Mail size={15} />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] text-[#6f6878]">
                  Support Email
                </p>

                <p className="mt-1 truncate text-xs font-semibold text-white">
                  support@ilink.com
                </p>
              </div>

            </div>

            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#a855f7] to-[#7c3aed] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(168,85,247,0.25)] active:translate-y-0"
            >
              <MessageCircle size={15} />
              Contact Support
            </button>

          </div>
        </section>

        {/* Report Problem */}
        <section className="group overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">

          <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#f4b860]/20 bg-[#f4b860]/10 text-[#f4b860] transition-all duration-300 group-hover:scale-105">
                <Bug size={18} />
              </div>

              <div>
                <h2 className="text-sm font-bold text-white">
                  Report a Problem
                </h2>

                <p className="mt-1 text-[10px] text-[#81778e]">
                  Found something that isn't working?
                </p>
              </div>

            </div>
          </div>

          <div className="p-4 sm:p-5">

            <p className="text-[11px] leading-5 text-[#81778e]">
              Help us improve iLink by reporting bugs or unexpected
              behavior you encounter.
            </p>

            <div className="mt-4 rounded-xl border border-[#f4b860]/15 bg-[#f4b860]/4 p-3">

              <div className="flex items-start gap-2">
                <Bug size={14} className="mt-0.5 shrink-0 text-[#f4b860]" />

                <p className="text-[10px] leading-5 text-[#81778e]">
                  Please include enough details for our team to reproduce
                  the problem.
                </p>
              </div>

            </div>

            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#f4b860]/25 bg-[#f4b860]/6 px-4 py-3 text-xs font-bold text-[#f4b860] transition-all duration-300 hover:border-[#f4b860]/50 hover:bg-[#f4b860]/10"
            >
              <Bug size={15} />
              Report a Problem
            </button>

          </div>
        </section>

      </div>

      {/* Resources */}
      <section className="group overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">

        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4 sm:px-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105">
              <BookOpen size={19} />
            </div>

            <div>
              <h2 className="text-sm font-bold text-white sm:text-base">
                Resources
              </h2>

              <p className="mt-1 text-[11px] text-[#81778e] sm:text-xs">
                Helpful information and important iLink resources.
              </p>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-5">

          <button
            type="button"
            className="group/resource flex items-center gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#49305e] hover:bg-[#1c192a]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
              <BookOpen size={16} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-bold text-white">
                Help Center
              </h3>
              <p className="mt-1 text-[10px] text-[#81778e]">
                Browse all help articles.
              </p>
            </div>

            <ExternalLink
              size={14}
              className="shrink-0 text-[#6f6878] transition-colors group-hover/resource:text-[#c084fc]"
            />
          </button>

          <button
            type="button"
            className="group/resource flex items-center gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#49305e] hover:bg-[#1c192a]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
              <FileText size={16} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-bold text-white">
                Terms of Service
              </h3>
              <p className="mt-1 text-[10px] text-[#81778e]">
                Read the terms and conditions.
              </p>
            </div>

            <ExternalLink
              size={14}
              className="shrink-0 text-[#6f6878] transition-colors group-hover/resource:text-[#c084fc]"
            />
          </button>

          <button
            type="button"
            className="group/resource flex items-center gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#49305e] hover:bg-[#1c192a]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
              <ShieldCheck size={16} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-bold text-white">
                Privacy Policy
              </h3>
              <p className="mt-1 text-[10px] text-[#81778e]">
                Learn how your data is handled.
              </p>
            </div>

            <ExternalLink
              size={14}
              className="shrink-0 text-[#6f6878] transition-colors group-hover/resource:text-[#c084fc]"
            />
          </button>

          <button
            type="button"
            className="group/resource flex items-center gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#49305e] hover:bg-[#1c192a]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
              <HelpCircle size={16} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-bold text-white">
                Community Guidelines
              </h3>
              <p className="mt-1 text-[10px] text-[#81778e]">
                Learn about community standards.
              </p>
            </div>

            <ExternalLink
              size={14}
              className="shrink-0 text-[#6f6878] transition-colors group-hover/resource:text-[#c084fc]"
            />
          </button>

        </div>
      </section>

      {/* Version */}
      <div className="flex items-center justify-center gap-2 pb-2 text-[10px] text-[#5f5968]">
        <span>iLink Team</span>
        <span>•</span>
        <span>Version 1.0.0</span>
      </div>

    </div>
  );
}

export default Support;