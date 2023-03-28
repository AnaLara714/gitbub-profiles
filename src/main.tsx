import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeChangeProvider } from './context/ThemeChangeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeChangeProvider>
      <App />
    </ThemeChangeProvider>
  </React.StrictMode>,
)
