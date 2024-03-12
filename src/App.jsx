import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Articles from './components/Articles/Articles'
import {Routes,Route} from 'react-router-dom' 
import SingleArticle from './components/SingleArticle/SingleArticle'

function App() {
  const [article,setArticle]=useState([])


  return (
    <>
    <Header />
  <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/articles' element={<Articles article={article} setArticle={setArticle}/>}/>
     <Route path={`/articles/:article_id`} element={<SingleArticle article={article}/>}/>
     </Routes>
   
    
   
    </>
  )
}

export default App
