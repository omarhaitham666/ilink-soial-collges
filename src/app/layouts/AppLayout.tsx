import { NavLink, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div dir="rtl" className="mx-auto max-w-3xl px-4 py-6">
      <nav aria-label="التنقل الرئيسي" className="mb-6 flex gap-4">
        <NavLink to="/feed">المنشورات</NavLink>
        <NavLink to="/suggestions">الاقتراحات</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  )
}