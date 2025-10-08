import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import ContextStore from './ContextApi/ContextStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextStore>
    <App />
    <Home />
    </ContextStore>
  </StrictMode>,
)
