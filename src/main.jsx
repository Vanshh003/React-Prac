import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseEffect from  './useEffect.jsx'
import DataFetching from './DataFetching.jsx'
import ContextAPI from './ContextAPI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseEffect /> */}
    {/* <DataFetching /> */}
    <ContextAPI />
  </StrictMode>,
)
