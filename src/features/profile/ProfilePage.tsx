import { Outlet } from 'react-router-dom'
import ProfileHeader from './components/profileHeader'
import ProfileTabs from './components/ProfileTabs'

export default function ProfilePage() {
  return (
    <div className="il-profile-page">
      <div className="il-profile-header"><ProfileHeader /></div>
      <div className="il-profile-sections"><ProfileTabs /></div>
      <div className="il-profile-content"><Outlet /></div>
    </div>
  )
}