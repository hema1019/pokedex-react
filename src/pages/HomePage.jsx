import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'

const HomePage = () => {


  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className="homepage">
      <img className="homepage__img" src="./images/Pokedex.png" alt="" />
      <h2 className="homepage__trainer">Hi trainer!</h2>
      <p className="homepage__text">To start with the app, give me your name 😎</p>
      <form className="homepage__form" onSubmit={handleSubmit}>
        <input className="homepage__input" id="inputTrainer" placeholder=" Name..." ref={inputTrainer} type="text" />
        <button className="homepage__btn">Gotta catch'em all!</button>
      </form>
      <footer className="homepage__footer">
        <hr className="footer__red__hr"/>
        <hr className="footer__black__hr"/>
      </footer>
    </div>
  )
}

export default HomePage