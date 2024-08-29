import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import UseEffect from  './useEffect.jsx'
import DataFetching from './DataFetching.jsx'
import ContextAPI from './ContextAPI.jsx'
import React_Router_DOM from './React_Router_DOM.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseEffect /> */}
    {/* <DataFetching /> */}
    {/* <ContextAPI /> */}

    <BrowserRouter>
      <React_Router_DOM />
    </BrowserRouter>

  </StrictMode>,
)
