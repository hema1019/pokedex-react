import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokeIdPage.css'

const PokeIdPage = () => {


 const { id } = useParams()

 const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
 const [ pokemon, getSinglePokemon ] = useFetch(url)

 useEffect(() => {
  getSinglePokemon()
 }, [id])

 const firstType = pokemon?.types[0].type.name


  return (
    <article className={`pokeid ${firstType}-border`}>
      <hr className="pokeid__redhr"/>
      <hr className="pokeid__blackhr"/>
      <img className="pokeid__img1" src="./images/Pokedex.png" alt="" />
      <div className="upper__page">
        <div className="pokeid__back-image">
          <header className={`pokeid__header ${firstType}-gradient`}>
            <img className="pokeid__img" src={pokemon?.sprites.other['official-artwork'].front_default} 
            alt=""
            />
          </header>
        </div>
        <br />
        <div className="pokeid__main-info">
          <h2 className={`pokeid__number ${firstType}-color`}># {pokemon?.id}</h2>
          <h1 className={`pokeid__name ${firstType}-color`}>{pokemon?.name}</h1>
          <p className="pokeid__1st-titles">Weight <span className="pokeid__1st-values" >{pokemon?.weight}</span></p>
          <p className="pokeid__1st-titles">Height <span className="pokeid__1st-values">{pokemon?.height}</span></p>
        </div>
        <section className="pokeid__2nd-info">
          <div className="pokeid__typeinfo">
            <h2 className="pokeid__2nd-titles">Type:</h2>
            <ul>
              {
                pokemon?.types.map(typeinfo => (
                  <li className="pokeid__2nd-values" key={typeinfo.type.url}>{typeinfo.type.name}</li>
                ))
              }
            </ul>
          </div>
          <div className="pokeid__abilityinfo">
            <h2 className="pokeid__2nd-titles">Abilities:</h2>
            <ul>
              {
                pokemon?.abilities.map(abilityinfo => (
                  <li className="pokeid__2nd-values" key={abilityinfo.ability.url}>{abilityinfo.ability.name}</li>
                ))
              }
            </ul>
          </div>
        </section>
        <br />
        <div className="pokeid__stats">
          <h2 className="pokeid__stats-maintitle">Stats</h2>
          <p className="pokeid__stats-titles">HP <span>{pokemon?.stats[0].base_stat} / 150</span></p>
          <hr className="hp__hr"/>
          <p className="pokeid__stats-titles">Attack <span className="pokeid__stats-values">{pokemon?.stats[1].base_stat} / 150</span></p>
          <hr className="attack__hr"/>
          <p className="pokeid__stats-titles">Defense <span className="pokeid__stats-values">{pokemon?.stats[4].base_stat} / 150</span></p>
          <hr className="defense__hr"/>
          <p className="pokeid__stats-titles">Speed <span className="pokeid__stats-values">{pokemon?.stats[5].base_stat} / 150</span></p>
          <hr className="speed__hr"/>
        </div>
        <br />
      </div>
      <div className="pokeid__movements">
        <h2 className="pokeid__movements-title">Movements</h2>
          <ul className="pokeid__movements-list">
            {
            pokemon?.moves.map(moveInfo => (
              <li className="pokeid__movements-name" key={moveInfo.move.url}>{moveInfo.move.name}</li>
            ))
            }
          </ul>
      </div>
    </article>
  )
}

export default PokeIdPage