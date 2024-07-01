import React from 'react'
import Quiz from './pages/Quiz/Quiz'
import Home from './pages/Home/home'

type GameStatus = "iniciar" | "jogando" | "terminado"

export const App: React.FC = () => {
  const [gameStatus, setGameStatus] = React.useState<GameStatus>('iniciar')

  function startGame() {
    setGameStatus('jogando')
  }
  return gameStatus === 'jogando' ? <Quiz /> : gameStatus === 'iniciar' ? <Home startGameFunction={() => startGame()} /> : <div></div>
}