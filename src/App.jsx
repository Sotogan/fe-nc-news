import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Articles from './components/Articles/Articles'
import {Routes,Route} from 'react-router-dom' 

function App() {


  return (
    <>
    <Header />
  <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/articles' element={<Articles/>}/>
     </Routes>
   
    
   
    </>
  )
}

export default App
