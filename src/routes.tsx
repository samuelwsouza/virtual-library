import { createBrowserRouter } from 'react-router'
import { NotFound } from './pages/404'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Explore } from './pages/app/explore/explore'
import { Home } from './pages/app/home/home'
import { Profile } from './pages/app/profile/profile'
import { SignIn } from './pages/auth/sign-in'
// import { Error } from './pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/profile', element: <Profile /> },
      { path: '/explore', element: <Explore /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
