import { Outlet } from "react-router-dom";
import SettingsSidebar from "./components/SettingsSidebar";
import SettingsHeader from "./components/SettingsHeader";

const SettingsPage = () => {
  return (
    <div className="w-full min-w-0 space-y-6">
      <SettingsHeader />

      <div className="relative flex min-w-0 flex-col items-stretch gap-5 lg:flex-row lg:items-start">
        <div className="w-full shrink-0 lg:sticky lg:top-6 lg:w-80">
          <SettingsSidebar />
        </div>

        <main className="w-full min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;