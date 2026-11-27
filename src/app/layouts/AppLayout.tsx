import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import MobileNav from '../components/MobileNav'
import './app-shell.css'

export default function AppLayout() {
  return (
    <div className="app-shell" dir="ltr">
      <Sidebar />

      <div className="shell-workspace">
        <TopNav />
        <MobileNav />

        <main className="shell-page">
          <Outlet />
        </main>
      </div>
    </div>
  )
}