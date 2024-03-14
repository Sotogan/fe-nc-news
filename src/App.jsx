import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Articles from './components/Articles/Articles'
import {Routes,Route} from 'react-router-dom' 
import SingleArticle from './components/SingleArticle/SingleArticle'
import Comments from './components/Comments/Comments'
import Topics from './components/Topics/Topics'

function App() {



  return (
    <>
    <Header />
  <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/articles' element={<Articles />}/>
     <Route path={`/articles/:article_id/`} element={<SingleArticle />}/>
     <Route path={`/articles/:article_id/comments`} element={<Comments />}/>
     <Route path={`/articles/topics`} element={<Topics/>}/>
     </Routes>
   
    
   
    </>
  )
}

export default App
