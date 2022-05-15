import { useState, useEffect } from 'react';
import axios from 'axios';

import PokemonList from './components/PokemonList.component';
import SearchBox from './components/SearchBox/SearchBox.component';

import './App.styles.scss';

const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const [filteredPokemon, setFilteredPokemon] = useState(pokemon);
  const [searchBox, setSearchBox] = useState('');


  useEffect(() => {
    setLoading(true)
    axios.get(currentPageUrl).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPreviousPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => [p.name, p.url]))
    })
  }, [currentPageUrl]);

  useEffect(() => {
    const newFilteredPokemon = pokemon.filter((p) => {
      return p[0].includes(searchBox);
    })
    setFilteredPokemon(newFilteredPokemon)
  }, [pokemon, searchBox])

  const onSearchChange = (event) => {
    const searchBoxString = event.target.value;
    setSearchBox(searchBoxString)
    console.log(searchBoxString)
  }

  {
    return (
      loading ? "Loading" : 
        <div className='mainContainer'>

          <div className='inputContainer'>

            <SearchBox 
              type={"text"}
              placeholder={"Search for a pokemon..."}
              onChangeHandler={onSearchChange}
            />

          </div>

          <div className='cardListContainer'>

              <PokemonList pokemon={filteredPokemon} />

          </div>

        </div>
    )
  }


  
    
}

export default App;
