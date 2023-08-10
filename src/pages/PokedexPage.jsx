import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'


const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')

  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=600'
  const [ pokemons, getAllPokemons, getPokemonsByType ] = useFetch(url)

  useEffect(() => {
    if (selectValue === 'allPokemons') {
      getAllPokemons()
    } else {
      getPokemonsByType(selectValue)
    }
  }, [selectValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
    setSelectValue('allPokemons')
  }

  const cbFilter = poke => poke.name.includes(inputValue)

  return (
    <div>
      <header>
        <hr className="header__red__hr"/>
        <hr className="header__black__hr"/>
        <img className="header__img" src="./images/Pokedex.png" alt="" />
      </header>
      <div className="header__text-container">
        <p className="header__text"><span className="header__welcome">Welcome {trainer}</span>, here you could find your favorite pokemon.</p>
        <form className="header__form" onSubmit={handleSubmit}>
          <input className="header__input" ref={inputSearch} type="text" placeholder="Look for a pokemon"/>
          <button className="header__btn">Search</button>
        </form>
        <div className="header__select">
        <SelectType setSelectValue={setSelectValue} />
        </div>
      </div>
      <div className="cards">
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard 
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage