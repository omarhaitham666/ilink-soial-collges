import { Outlet } from 'react-router-dom'
import SilkScene from '../../features/auth/components/SilkScene'
import '../../features/auth/auth.css'

export default function AuthLayout() {
  return (
    <main className="auth-shell" lang="en" dir="ltr">
      <SilkScene />

      <section className="auth-panel">
        <div className="auth-content">
          <header className="auth-brand">
            <span className="auth-wordmark">iLink</span>
            <p>The university social platform</p>
          </header>

          <Outlet />
        </div>
      </section>
    </main>
  )
}
