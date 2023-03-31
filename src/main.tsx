import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeChangeProvider } from './context/ThemeChangeContext'
import './index.css'
import { ApiProvider } from './context/apiContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeChangeProvider>
    {/* <ApiProvider> */}
      <App />
      {/* </ApiProvider> */}
    </ThemeChangeProvider>
  </React.StrictMode>,
)
