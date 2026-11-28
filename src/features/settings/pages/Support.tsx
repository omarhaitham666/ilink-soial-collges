
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
    <div className="w-full min-w-0 space-y-4 sm:space-y-5">

      {/* Help Center */}
      <section className="group relative w-full min-w-0 overflow-hidden rounded-none border-0 bg-transparent shadow-none transition-all duration-300 sm:rounded-2xl sm:border sm:border-[#49305e] sm:bg-[#12111b] sm:shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:hover:border-[#79509c]">

        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#a855f7]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-[#7c3aed]/10 blur-3xl" />

        <div className="relative px-0 py-5 sm:p-7">

          <div className="mx-auto max-w-xl text-center">

            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-[#a855f7]/25 bg-[#a855f7]/10 text-[#c084fc] shadow-[0_0_25px_rgba(168,85,247,0.12)] transition-all duration-300 group-hover:scale-105 sm:h-12 sm:w-12 sm:rounded-2xl">
              <LifeBuoy size={20} className="sm:hidden" />
              <LifeBuoy size={22} className="hidden sm:block" />
            </div>

            <h2 className="mt-3 text-base font-bold text-white sm:mt-4 sm:text-xl">
              How can we help you?
            </h2>

            <p className="mx-auto mt-1.5 max-w-md text-[10px] leading-5 text-[#81778e] sm:mt-2 sm:text-xs">
              Search our help resources or find answers to common questions
              about your iLink account.
            </p>

            <div className="relative mt-4 sm:mt-5">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6f6878] transition-colors duration-300 group-focus-within:text-[#c084fc] sm:left-4 sm:size-4.25"
              />

              <input
                type="text"
                placeholder="Search for help..."
                className="box-border h-11 w-full min-w-0 rounded-xl border border-[#30263d] bg-[#12111b] py-2.5 pl-10 pr-3 text-xs text-white outline-none transition-all duration-300 placeholder:text-[#5f5968] hover:border-[#49305e] focus:border-[#a855f7]/60 focus:shadow-[0_0_0_3px_rgba(168,85,247,0.08)] sm:h-auto sm:bg-[#0f0f16] sm:py-3.5 sm:pl-11 sm:pr-4"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="group w-full min-w-0 overflow-hidden rounded-none border-0 border-b border-[#30263d] bg-transparent shadow-none transition-all duration-300 sm:rounded-2xl sm:border sm:bg-[#12111b] sm:shadow-[0_10px_35px_rgba(0,0,0,0.2)] sm:hover:border-[#49305e]">

        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-0 py-3.5 sm:px-5 sm:py-4">
          <div className="flex items-center gap-2.5 sm:gap-3">

            <div className="flex h-9 ms-2 w-9 shrink-0 items-center justify-center rounded-lg border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105 sm:h-10 sm:w-10 sm:rounded-xl">
              <HelpCircle size={17} />
            </div>

            <div className="min-w-0">
              <h2 className="text-xs font-bold text-white sm:text-base">
                Frequently Asked Questions
              </h2>

              <p className="mt-1 text-[10px] text-[#81778e] sm:text-xs">
                Quick answers to the most common questions.
              </p>
            </div>

          </div>
        </div>

        <div className="divide-y divide-[#30263d] px-0 sm:px-5">

          {/* FAQ 1 */}
          <details className="group/faq py-3.5 sm:py-4">
            <summary className="flex  cursor-pointer list-none items-center justify-between gap-3">

              <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                <div className="flex h-8 w-8 ms-2 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
                  <ShieldCheck size={15} />
                </div>

                <span className="min-w-0 text-[11px] font-semibold leading-5 text-[#f3f0ff] sm:text-xs">
                  How can I change my account password?
                </span>
              </div>

              <ChevronDown
                size={15}
                className="shrink-0 text-[#81778e] transition-transform duration-300 group-open/faq:rotate-180 sm:size-4"
              />
            </summary>

            <p className="mt-3 pl-10.5 text-[10px] leading-6 text-[#81778e] sm:pl-11 sm:text-[11px]">
              You can change your password from Privacy & Security inside
              your Settings. Choose Change Password and follow the required
              steps.
            </p>
          </details>

          {/* FAQ 2 */}
          <details className="group/faq py-3.5 sm:py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">

              <div className="flex ms-2 min-w-0 items-center gap-2.5 sm:gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
                  <MessageCircle size={15} />
                </div>

                <span className="min-w-0 text-[11px] font-semibold leading-5 text-[#f3f0ff] sm:text-xs">
                  How do I control who can see my profile?
                </span>
              </div>

              <ChevronDown
                size={15}
                className="shrink-0 text-[#81778e] transition-transform duration-300 group-open/faq:rotate-180 sm:size-4"
              />
            </summary>

            <p className="mt-3 pl-10.5 text-[10px] leading-6 text-[#81778e] sm:pl-11 sm:text-[11px]">
              Open Privacy & Security and use the Profile Privacy settings
              to control profile, posts, and followers visibility.
            </p>
          </details>

          {/* FAQ 3 */}
          <details className="group/faq py-3.5 sm:py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">

              <div className="flex min-w-0 ms-2 items-center gap-2.5 sm:gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
                  <Bell size={15} />
                </div>

                <span className="min-w-0 text-[11px] font-semibold leading-5 text-[#f3f0ff] sm:text-xs">
                  How can I manage notifications?
                </span>
              </div>

              <ChevronDown
                size={15}
                className="shrink-0 text-[#81778e] transition-transform duration-300 group-open/faq:rotate-180 sm:size-4"
              />
            </summary>

            <p className="mt-3 pl-10.5 text-[10px] leading-6 text-[#81778e] sm:pl-11 sm:text-[11px]">
              Go to Notifications in Settings to control activity,
              email, push notifications, and notification schedules.
            </p>
          </details>

          {/* FAQ 4 */}
          <details className="group/faq py-3.5 sm:py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">

              <div className="flex min-w-0 ms-2 items-center gap-2.5 sm:gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#a855f7]/10 text-[#c084fc]">
                  <Palette size={15} />
                </div>

                <span className="min-w-0 text-[11px] font-semibold leading-5 text-[#f3f0ff] sm:text-xs">
                  Can I customize the appearance of iLink?
                </span>
              </div>

              <ChevronDown
                size={15}
                className="shrink-0 text-[#81778e] transition-transform duration-300 group-open/faq:rotate-180 sm:size-4"
              />
            </summary>

            <p className="mt-3 pl-10.5 text-[10px] leading-6 text-[#81778e] sm:pl-11 sm:text-[11px]">
              Yes. The Appearance section lets you customize the theme,
              accent color, font size, animations, and interface preferences.
            </p>
          </details>

        </div>
      </section>

      {/* Contact Support + Report */}
      <div className="grid w-full min-w-0 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">

        {/* Contact Support */}
        <section className="group w-full min-w-0 overflow-hidden rounded-none border-0 border-b border-[#30263d] bg-transparent shadow-none transition-all duration-300 sm:rounded-2xl sm:border sm:bg-[#12111b] sm:shadow-[0_10px_35px_rgba(0,0,0,0.2)] sm:hover:border-[#49305e]">

          <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-0 py-3.5 sm:px-4 sm:py-4">
            <div className="flex items-center gap-2.5 sm:gap-3">

              <div className="flex h-9 w-9 ms-2 shrink-0 items-center justify-center rounded-lg border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105 sm:h-10 sm:w-10 sm:rounded-xl">
                <Mail size={17} />
              </div>

              <div className="min-w-0">
                <h2 className="text-xs font-bold text-white sm:text-sm">
                  Contact Support
                </h2>

                <p className="mt-1 text-[10px] text-[#81778e]">
                  Need personal assistance?
                </p>
              </div>

            </div>
          </div>

          <div className="px-0 py-3.5 sm:p-5">

            <p className="text-[10px] leading-5 text-[#81778e] sm:text-[11px]">
              Our support team can help you with account issues,
              security concerns, and technical problems.
            </p>

            <div className="mt-3 flex min-w-0 items-center gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-3 transition-colors duration-300 hover:border-[#49305e]">

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
              className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#a855f7] to-[#7c3aed] px-4 text-[11px] font-bold text-white shadow-[0_8px_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(168,85,247,0.25)] active:translate-y-0 sm:mt-4 sm:h-auto sm:rounded-xl sm:py-3 sm:text-xs"
            >
              <MessageCircle size={14} />
              Contact Support
            </button>

          </div>
        </section>

        {/* Report Problem */}
        <section className="group w-full min-w-0 overflow-hidden rounded-none border-0 border-b border-[#30263d] bg-transparent shadow-none transition-all duration-300 sm:rounded-2xl sm:border sm:bg-[#12111b] sm:shadow-[0_10px_35px_rgba(0,0,0,0.2)] sm:hover:border-[#49305e]">

          <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-0 py-3.5 sm:px-4 sm:py-4">
            <div className="flex items-center gap-2.5 sm:gap-3">

              <div className="flex ms-2 h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#f4b860]/20 bg-[#f4b860]/10 text-[#f4b860] transition-all duration-300 group-hover:scale-105 sm:h-10 sm:w-10 sm:rounded-xl">
                <Bug size={17} />
              </div>

              <div className="min-w-0">
                <h2 className="text-xs font-bold text-white sm:text-sm">
                  Report a Problem
                </h2>

                <p className="mt-1 text-[10px] text-[#81778e]">
                  Found something that isn't working?
                </p>
              </div>

            </div>
          </div>

          <div className="px-0 py-3.5 sm:p-5">

            <p className="text-[10px] leading-5 text-[#81778e] sm:text-[11px]">
              Help us improve iLink by reporting bugs or unexpected
              behavior you encounter.
            </p>

            <div className="mt-3 rounded-xl border border-[#f4b860]/15 bg-[#f4b860]/4 p-3 transition-colors duration-300 hover:border-[#f4b860]/25">

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
              className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-[#f4b860]/25 bg-[#f4b860]/6 px-4 text-[11px] font-bold text-[#f4b860] transition-all duration-300 hover:border-[#f4b860]/50 hover:bg-[#f4b860]/10 sm:mt-4 sm:h-auto sm:rounded-xl sm:py-3 sm:text-xs"
            >
              <Bug size={14} />
              Report a Problem
            </button>

          </div>
        </section>

      </div>

      {/* Resources */}
      <section className="group w-full min-w-0 overflow-hidden rounded-none border-0 border-b border-[#30263d] bg-transparent shadow-none transition-all duration-300 sm:rounded-2xl sm:border sm:bg-[#12111b] sm:shadow-[0_10px_35px_rgba(0,0,0,0.2)] sm:hover:border-[#49305e]">

        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-0 py-3.5 sm:px-5 sm:py-4">

          <div className="flex items-center gap-2.5 sm:gap-3">

            <div className="flex ms-2 h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105 sm:h-10 sm:w-10 sm:rounded-xl">
              <BookOpen size={17} />
            </div>

            <div className="min-w-0">
              <h2 className="text-xs font-bold text-white sm:text-base">
                Resources
              </h2>

              <p className="mt-1 text-[10px] text-[#81778e] sm:text-xs">
                Helpful information and important iLink resources.
              </p>
            </div>

          </div>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-2.5 py-3.5 sm:grid-cols-2 sm:gap-3 sm:p-5">

          <button
            type="button"
            className="group/resource flex min-w-0 items-center gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#49305e] hover:bg-[#1c192a] sm:p-4"
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
              className="shrink-0 text-[#6f6878] transition-all duration-300 group-hover/resource:translate-x-0.5 group-hover/resource:text-[#c084fc]"
            />
          </button>

          <button
            type="button"
            className="group/resource flex min-w-0 items-center gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#49305e] hover:bg-[#1c192a] sm:p-4"
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
              className="shrink-0 text-[#6f6878] transition-all duration-300 group-hover/resource:translate-x-0.5 group-hover/resource:text-[#c084fc]"
            />
          </button>

          <button
            type="button"
            className="group/resource flex min-w-0 items-center gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#49305e] hover:bg-[#1c192a] sm:p-4"
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
              className="shrink-0 text-[#6f6878] transition-all duration-300 group-hover/resource:translate-x-0.5 group-hover/resource:text-[#c084fc]"
            />
          </button>

          <button
            type="button"
            className="group/resource flex min-w-0 items-center gap-3 rounded-xl border border-[#30263d] bg-[#0f0f16] p-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#49305e] hover:bg-[#1c192a] sm:p-4"
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
              className="shrink-0 text-[#6f6878] transition-all duration-300 group-hover/resource:translate-x-0.5 group-hover/resource:text-[#c084fc]"
            />
          </button>

        </div>
      </section>

      {/* Version */}
      <div className="flex items-center justify-center gap-2 pb-3 pt-1 text-[9px] text-[#5f5968] sm:pb-2 sm:text-[10px]">
        <span>iLink Team</span>
        <span>•</span>
        <span>Version 1.0.0</span>
      </div>

    </div>
  );
}

export default Support;
