import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import FeedPage from '../features/feed/FeedPage'
import SuggestionsPage from '../features/suggestions/SuggestionsPage'
import ProfilePage from '../features/profile/ProfilePage'
import SettingsPage from '../features/settings/SettingsPage'
import About from '../features/profile/pages/About'
import Posts from '../features/profile/pages/posts'
import Projects from '../features/profile/pages/Projects'
import Goals from '../features/profile/pages/Goals'
import OverView from '../features/profile/pages/Overview'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/feed" replace /> },
      { path: 'feed', element: <FeedPage /> },
      { path: 'suggestions', element: <SuggestionsPage />},
      { path: 'profile', element: <ProfilePage />  , 
        children:[
        { index: true, element: <Navigate to="overview" replace /> },
        { path: 'overview', element: <OverView /> },
          { path: 'about', element: <About /> },
          { path: 'posts', element: <Posts /> },
          { path: 'projects', element: <Projects /> },
          { path: 'goals', element: <Goals /> }
      ] },
      { path: 'settings', element: <SettingsPage /> },
      { path: '*', element: <h1>الصفحة غير موجودة</h1> },
    ],
  },
])