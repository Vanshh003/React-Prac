import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UseEffect from  './useEffect.jsx'
import DataFetching from './DataFetching.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseEffect /> */}
    <DataFetching />
  </StrictMode>,
)
