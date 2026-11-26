import { Outlet } from "react-router-dom";
import ProfileHeader from "./components/profileHeader";
import ProfileTabs from "./components/ProfileTabs";

const ProfilePage = () => {
  return (
   <>
    <ProfileHeader />
    <ProfileTabs />

<main>
  <Outlet />
</main>

    </>
  )
}

export default ProfilePage;