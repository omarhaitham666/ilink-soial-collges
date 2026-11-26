import { Settings2, Sparkles } from "lucide-react"

function SettingsHeader(){

return <>



<div className="group relative isolate mb-6 overflow-hidden rounded-2xl border border-[#49305e]/80 bg-[#12111b] shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition-[border-color,box-shadow,transform] duration-500 ease-out hover:-translate-y-0.5 hover:border-[#8054a5] hover:shadow-[0_18px_45px_rgba(0,0,0,0.35),0_0_25px_rgba(168,85,247,0.09)] motion-reduce:transform-none">

  {/* Background */}
  <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-[#28163c] via-[#191426] to-[#12111b]" />

  {/* Ambient Glow */}
  <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-72 w-72 rounded-full bg-[#a855f7]/10 blur-[90px] transition-all duration-700 ease-out group-hover:translate-x-4.5 group-hover:translate-y-3 group-hover:scale-125 group-hover:bg-[#a855f7]/20" />

  {/* Moving Light */}
  <div className="pointer-events-none absolute inset-y-0 -left-1/2 -z-10 w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/[0.035] to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[300%]" />

  <div className="relative flex items-center justify-between gap-4 px-5 py-6 sm:px-7 sm:py-7">

    {/* Text */}
    <div className="min-w-0">

      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#a855f7]/25 bg-[#a855f7]/10 px-3 py-1 transition-all duration-300 group-hover:border-[#c084fc]/40 group-hover:bg-[#a855f7]/15">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c084fc]/60 motion-reduce:animate-none" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c084fc]" />
        </span>

        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8b4fe] transition-colors duration-300 group-hover:text-white">
          Personal Workspace
        </span>
      </div>

      <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        Welcome to your{" "}
        <span className="bg-linear-to-r from-[#c084fc] via-[#a855f7] to-[#818cf8] bg-clip-text text-transparent">
          Settings.
        </span>
      </h1>

      <p className="mt-2 max-w-xl text-xs leading-6 text-[#aaa1b8] transition-colors duration-300 group-hover:text-[#c4b5d0] sm:text-sm">
        Manage your account and personalize your iLink experience.
      </p>
    </div>

    {/* Visual */}
    <div className="relative mr-2 hidden shrink-0 sm:flex">

      <div className="absolute inset-0 scale-125 rounded-full bg-[#a855f7]/15 opacity-60 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

      <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-[#c084fc]/25 bg-linear-to-br from-[#a855f7]/25 to-[#7c3aed]/10 text-[#e9d5ff] shadow-[0_0_25px_rgba(168,85,247,0.12)] transition-[border-color,background-color,box-shadow] duration-500 group-hover:border-[#c084fc]/50 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]">

        <div className="absolute inset-0 -translate-y-full bg-linear-to-b from-white/12 to-transparent transition-transform duration-700 ease-out group-hover:translate-y-0" />

        <Settings2
          size={30}
          strokeWidth={1.5}
          className="relative transition-transform duration-700 ease-in-out group-hover:rotate-45"
        />
      </div>

      <Sparkles
        size={15}
        className="absolute -right-2 -top-2 text-[#c084fc] transition-all duration-500 group-hover:rotate-45 group-hover:scale-125 group-hover:text-white"
      />
    </div>

  </div>

  {/* Bottom Accent */}
  <div className="absolute bottom-0 left-8 h-0.5px w-24 origin-left rounded-full bg-linear-to-r from-[#a855f7] to-[#c084fc] transition-all duration-500 group-hover:w-40 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
</div>



</>

}

export default SettingsHeader