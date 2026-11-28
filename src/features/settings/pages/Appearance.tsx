import {
  Palette,
  Sun,
  Moon,
  Monitor,
  Check,
  Sparkles,
  Type,
  LayoutGrid,
  Image,
  Zap,
  RotateCcw,
} from "lucide-react";

function Appearance() {
  return (
    <div className="w-full min-w-0 space-y-5">
      {/* Theme Customization */}
      <section className="group overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">
        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="ms-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc] transition-all duration-300 group-hover:scale-105">
              <Palette size={19} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white sm:text-base">
                Theme Customization
              </h2>
              <p className="mt-1 text-[11px] text-[#81778e] sm:text-xs">
                Choose the appearance that feels right for you.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <h3 className="mb-4 text-xs font-bold text-[#f3f0ff]">
            Interface Theme
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Dark */}
            <label className="group/theme relative cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="dark"
                defaultChecked
                className="peer sr-only"
              />

              <div className="overflow-hidden rounded-xl border-2 border-[#30263d] bg-[#0f0f16] transition-all duration-300 hover:-translate-y-1 hover:border-[#79509c] peer-checked:border-[#a855f7] peer-checked:shadow-[0_0_20px_rgba(168,85,247,0.12)]">
                <div className="h-28 bg-[#09090f] p-3">
                  <div className="flex h-full gap-2">
                    <div className="w-1/4 rounded-md bg-[#1c192a]" />
                    <div className="flex-1 space-y-2 rounded-md bg-[#12111b] p-2">
                      <div className="h-2 w-2/3 rounded bg-[#a855f7]" />
                      <div className="h-2 w-full rounded bg-[#30263d]" />
                      <div className="h-2 w-4/5 rounded bg-[#30263d]" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3">
                  <div className="ms-1 flex items-center gap-2">
                    <Moon size={14} className="text-[#c084fc]" />
                    <span className="text-xs font-bold text-white">Dark</span>
                  </div>

                  <div className="ms-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#a855f7] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <Check size={12} />
                  </div>
                </div>
              </div>
            </label>

            {/* Light */}
            <label className="group/theme relative cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="light"
                className="peer sr-only"
              />

              <div className="overflow-hidden rounded-xl border-2 border-[#30263d] bg-[#0f0f16] transition-all duration-300 hover:-translate-y-1 hover:border-[#79509c] peer-checked:border-[#a855f7]">
                <div className="h-28 bg-[#f1f0f5] p-3">
                  <div className="flex h-full gap-2">
                    <div className="w-1/4 rounded-md bg-[#dedbe8]" />
                    <div className="flex-1 space-y-2 rounded-md bg-white p-2">
                      <div className="h-2 w-2/3 rounded bg-[#a855f7]" />
                      <div className="h-2 w-full rounded bg-[#e5e1eb]" />
                      <div className="h-2 w-4/5 rounded bg-[#e5e1eb]" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3">
                  <div className="ms-1 flex items-center gap-2">
                    <Sun size={14} className="text-[#f4b860]" />
                    <span className="text-xs font-bold text-white">Light</span>
                  </div>

                  <div className="ms-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#a855f7] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <Check size={12} />
                  </div>
                </div>
              </div>
            </label>

            {/* System */}
            <label className="group/theme relative cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="system"
                className="peer sr-only"
              />

              <div className="overflow-hidden rounded-xl border-2 border-[#30263d] bg-[#0f0f16] transition-all duration-300 hover:-translate-y-1 hover:border-[#79509c] peer-checked:border-[#a855f7]">
                <div className="flex h-28 items-center justify-center bg-[#171520]">
                  <div className="flex h-16 w-24 overflow-hidden rounded-lg border border-[#49305e] shadow-lg">
                    <div className="w-1/2 bg-[#09090f]" />
                    <div className="w-1/2 bg-[#f1f0f5]" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3">
                  <div className="ms-1 flex items-center gap-2">
                    <Monitor size={14} className="text-[#c084fc]" />
                    <span className="text-xs font-bold text-white">
                      System
                    </span>
                  </div>

                  <div className="ms-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#a855f7] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <Check size={12} />
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </section>

      {/* Accent Color */}
      <section className="group overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">
        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="ms-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc]">
              <Sparkles size={19} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white sm:text-base">
                Accent Color
              </h2>
              <p className="mt-1 text-[11px] text-[#81778e] sm:text-xs">
                Personalize the primary color of your interface.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Purple", color: "#a855f7" },
              { name: "Blue", color: "#3b82f6" },
              { name: "Emerald", color: "#10b981" },
              { name: "Rose", color: "#f43f5e" },
              { name: "Orange", color: "#f97316" },
              { name: "Amber", color: "#eab308" },
            ].map((item, index) => (
              <label
                key={item.name}
                className="group/color flex cursor-pointer flex-col items-center gap-2"
              >
                <input
                  type="radio"
                  name="accent-color"
                  value={item.color}
                  defaultChecked={index === 0}
                  className="peer sr-only"
                />

                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-transparent shadow-lg transition-all duration-300 group-hover/color:scale-110 peer-checked:scale-110 peer-checked:border-white peer-checked:ring-2 peer-checked:ring-[#a855f7]/50"
                  style={{ backgroundColor: item.color }}
                >
                  <Check size={17} className="text-white opacity-0 peer-checked:opacity-100" />
                </span>

                <span className="text-[10px] font-medium text-[#81778e] transition-colors group-hover/color:text-white">
                  {item.name}
                </span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* Display Preferences */}
      <section className="group overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">
        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="ms-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc]">
              <Type size={19} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white sm:text-base">
                Display Preferences
              </h2>
              <p className="mt-1 text-[11px] text-[#81778e] sm:text-xs">
                Adjust the way content appears on your screen.
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-[#30263d] px-4 sm:px-5">
          <div className="py-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xs font-bold text-[#f3f0ff]">Font Size</h3>
                <p className="mt-1 text-[11px] text-[#81778e]">
                  Choose your preferred text size.
                </p>
              </div>

              <span className="rounded-lg border border-[#a855f7]/20 bg-[#a855f7]/10 px-3 py-1.5 text-[10px] font-bold text-[#c084fc]">
                Medium
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="3"
              defaultValue="2"
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[#30263d] accent-[#a855f7]"
            />

            <div className="mt-2 flex justify-between text-[10px] text-[#6f6878]">
              <span>Small</span>
              <span>Medium</span>
              <span>Large</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xs font-bold text-[#f3f0ff]">
                Compact Mode
              </h3>
              <p className="mt-1 text-[11px] text-[#81778e]">
                Reduce spacing to display more content.
              </p>
            </div>

            <label className="relative inline-flex w-fit cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors peer-checked:bg-[#a855f7] after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-5" />
            </label>
          </div>

          <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xs font-bold text-[#f3f0ff]">
                Reduce Animations
              </h3>
              <p className="mt-1 text-[11px] text-[#81778e]">
                Minimize motion effects across the interface.
              </p>
            </div>

            <label className="relative inline-flex w-fit cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors peer-checked:bg-[#a855f7] after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-5" />
            </label>
          </div>
        </div>
      </section>

      {/* Layout & Interface */}
      <section className="group overflow-hidden rounded-2xl border border-[#30263d] bg-[#12111b] shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#49305e]">
        <div className="border-b border-[#30263d] bg-linear-to-r from-[#1c192a] to-[#12111b] px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="ms-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#a855f7]/20 bg-[#a855f7]/10 text-[#c084fc]">
              <LayoutGrid size={19} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white sm:text-base">
                Layout & Interface
              </h2>
              <p className="mt-1 text-[11px] text-[#81778e] sm:text-xs">
                Customize your content and browsing experience.
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-[#30263d] px-4 sm:px-5">
          <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="ms-1 flex items-center gap-3">
              <Image size={17} className="text-[#c084fc]" />
              <div>
                <h3 className="text-xs font-bold text-[#f3f0ff]">
                  Show Cover Images
                </h3>
                <p className="mt-1 text-[11px] text-[#81778e]">
                  Display images and previews in content cards.
                </p>
              </div>
            </div>

            <label className="relative inline-flex w-fit cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors peer-checked:bg-[#a855f7] after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-5" />
            </label>
          </div>

          <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="ms-1 flex items-center gap-3">
              <Zap size={17} className="text-[#c084fc]" />
              <div>
                <h3 className="text-xs font-bold text-[#f3f0ff]">
                  Smooth Animations
                </h3>
                <p className="mt-1 text-[11px] text-[#81778e]">
                  Enable transitions and interactive motion effects.
                </p>
              </div>
            </div>

            <label className="relative inline-flex w-fit cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-[#30263d] transition-colors peer-checked:bg-[#a855f7] after:absolute after:left-0.75 after:top-0.75 after:h-4.5 after:w-4.5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:after:translate-x-5" />
            </label>
          </div>
        </div>
      </section>

      {/* Reset Appearance */}
      <div className="flex flex-col gap-3 rounded-2xl border border-[#30263d] bg-[#12111b] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div>
          <h3 className="text-xs font-bold text-white">Reset Appearance</h3>
          <p className="mt-1 text-[11px] text-[#81778e]">
            Restore all appearance settings to their defaults.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#f47791]/25 bg-[#f47791]/6 px-4 py-2.5 text-xs font-semibold text-[#f47791] transition-all duration-300 hover:border-[#f47791]/50 hover:bg-[#f47791]/10"
        >
          <div className="ms-1">
            <RotateCcw size={14} />
          </div>
          Reset to Default
        </button>
      </div>
    </div>
  );
}

export default Appearance;