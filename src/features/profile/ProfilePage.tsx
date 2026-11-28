import { Outlet } from "react-router-dom";
import ProfileHeader from "./components/profileHeader";
import ProfileTabs from "./components/ProfileTabs";

export default function ProfilePage() {
  return (
    <div >
      <div>
        <ProfileHeader />
      </div>

      <div className="il-profile-sections relative z-0 mt-3">
        <ProfileTabs />
      </div>

      <div className="il-profile-content relative z-0">
        <Outlet />
      </div>
    </div>
  );
}