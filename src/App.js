import { useState, useEffect } from 'react';
import axios from 'axios';

import PokemonList from './components/PokemonList.component';

import './App.styles.scss';

const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true)
    axios.get(currentPageUrl).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPreviousPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => [p.name, p.url]))
    })
  }, [currentPageUrl]);

  if (loading) return "Loading..."


  return (
      <div className='mainContainer'>
        <div className='inputContainer'>
          <input type="text" placeholder='Search for a pokemon...' />
        </div>
        <div className='cardListContainer'>
            <PokemonList pokemon={pokemon} />
        </div>
      </div>
    )
    
}

export default App;
