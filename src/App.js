import React, {useState, useEffect} from 'react';

import Header from './components/Header'
import News from './components/News'
import './styles/main.scss'
function App() {

  const API_KEY = 'd3d7e74664464977ab98305c4528119b'

  const [category, setCategory] = useState('')
  const [news, setNews] = useState([])

  
  useEffect(() => {
    const requestToAPI = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${API_KEY}`
      const response = await fetch(url)
      const responseAsJSON = await response.json()
      setNews(responseAsJSON.articles)
    }
    requestToAPI()
  },[category])
  return (
    <> 
      <Header setCategory={setCategory}/>
      
      {(
        news.length === 0
        ?
          <h1>Cargando...</h1>
        : 
          <News news={news}/>
      )}
      
    </>

  );
}

export default App;
