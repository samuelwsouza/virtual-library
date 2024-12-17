import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='284830206493-gell2k48nvct84vmfgqb47urv3r6hje5.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
)
