import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouteProvider from './prodivers/RouteProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteProvider />
  </StrictMode>,
)
