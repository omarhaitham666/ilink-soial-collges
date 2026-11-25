import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import FeedPage from '../features/feed/FeedPage'
import SuggestionsPage from '../features/suggestions/SuggestionsPage'
import ProfilePage from '../features/profile/ProfilePage'
import SettingsPage from '../features/settings/SettingsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/feed" replace /> },
      { path: 'feed', element: <FeedPage /> },
      { path: 'suggestions', element: <SuggestionsPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: '*', element: <h1>الصفحة غير موجودة</h1> },
    ],
  },
])