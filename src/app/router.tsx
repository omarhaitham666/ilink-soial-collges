import MorePage from '../features/navigation/MorePage'
import AccountSearchPage from '../features/search/AccountSearchPage'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import AppLayout from './layouts/AppLayout'

import LoginPage from '../features/auth/LoginPage'
import RegisterPage from '../features/auth/RegisterPage'

import FeedPage from '../features/feed/FeedPage'
import SuggestionsPage from '../features/suggestions/SuggestionsPage'

import ProfilePage from '../features/profile/ProfilePage'
import Overview from '../features/profile/pages/Overview'
import About from '../features/profile/pages/About'
import Posts from '../features/profile/pages/posts'
import Projects from '../features/profile/pages/Projects'
import Goals from '../features/profile/pages/Goals'

import SettingsPage from '../features/settings/SettingsPage'
import SettingsIndex from '../features/settings/pages/SettingsIndex'
import Account from '../features/settings/pages/Account'
import Privacy from '../features/settings/pages/Privacy'
import Notifications from '../features/settings/pages/Notifications'
import Appearance from '../features/settings/pages/Appearance'
import Support from '../features/settings/pages/Support'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: 'feed', element: <FeedPage /> },
      { path: 'more', element: <MorePage /> },
      { path: 'search', element: <AccountSearchPage /> },
      { path: 'suggestions', element: <SuggestionsPage /> },

      {
        path: 'profile',
        element: <ProfilePage />,
        children: [
          { index: true, element: <Navigate to="overview" replace /> },
          { path: 'overview', element: <Overview /> },
          { path: 'about', element: <About /> },
          { path: 'posts', element: <Posts /> },
          { path: 'projects', element: <Projects /> },
          { path: 'goals', element: <Goals /> },
        ],
      },

      {
        path: 'settings',
        element: <SettingsPage />,
        children: [
          { index: true, element: <SettingsIndex /> },
          { path: 'account', element: <Account /> },
          { path: 'privacy-security', element: <Privacy /> },
          { path: 'notifications', element: <Notifications /> },
          { path: 'appearance', element: <Appearance /> },
          { path: 'help-support', element: <Support /> },
        ],
      },

      { path: '*', element: <h1>الصفحة غير موجودة</h1> },
    ],
  },
])