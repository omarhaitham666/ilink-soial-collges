import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  mode: 'login' | 'register'
}

export default function AuthForm({ mode }: Props) {
  const register = mode === 'register'
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    if (register && !String(data.get('name') ?? '').trim()) {
      setMessage('Please enter your full name.')
      return
    }

    if (register && data.get('password') !== data.get('confirmation')) {
      setMessage('Your passwords do not match.')
      return
    }

    // Replace this message with the real auth request when the API is ready.
    setMessage('The form is ready. Authentication will be connected next.')
  }

  return (
    <>
      <h1 className="auth-title">{register ? 'Create an account' : 'Welcome back'}</h1>

      <form
        className="auth-form" data-auth-mode={mode}
        onSubmit={handleSubmit}
        onChange={() => { if (message) setMessage('') }}
      >
        {register && (
          <label>
            Full name
            <input name="name" autoComplete="name" placeholder="Enter your full name" required />
          </label>
        )}

        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email address"
            required
          />
        </label>

        <div className="auth-field">
          <label htmlFor="auth-password">Password</label>
          <div className="auth-password">
            <input
              id="auth-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete={register ? 'new-password' : 'current-password'}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              onClick={() => setShowPassword(previous => !previous)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {register && (
          <label>
            Confirm password
            <input
              name="confirmation"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              placeholder="Confirm your password"
              required
            />
          </label>
        )}

        {message && <p className="auth-message" role="status">{message}</p>}

        <button className="auth-primary" type="submit">
          {register ? 'Create account' : 'Sign in'}
        </button>
      </form>

      <Link className="auth-secondary" to={register ? '/login' : '/register'}>
        {register ? 'Already have an account? Sign in' : 'Create an account'}
      </Link>
    </>
  )
}
