import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Assign from './assign.tsx'
import Tips from './hook/tips.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Tips/>
  </React.StrictMode>,
)
