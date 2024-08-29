import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components2_react_router_dom/Home' 
import About from './components2_react_router_dom/About'
import Contact from './components2_react_router_dom/Contact'
import Header from './components2_react_router_dom/Header'



function React_Router_DOM() {

  return (
    <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
       
    </>
  )
}

export default React_Router_DOM
