import { RouterProvider } from 'react-router/dom'
import { router } from './routes'

export function App() {
  return <RouterProvider router={router} />
}

// add:
//   helmet
//   toaster
//   queryclient
//   theme

// in general, { auth, tests, functionalits, change the appearence to something new (fading to pink, black) }
