import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import FeedPage from '../features/feed/FeedPage'
import SuggestionsPage from '../features/suggestions/SuggestionsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/feed" replace /> },
      { path: 'feed', element: <FeedPage /> },
      { path: 'suggestions', element: <SuggestionsPage /> },
      { path: '*', element: <h1>الصفحة غير موجودة</h1> },
    ],
  },
])