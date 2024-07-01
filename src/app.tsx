import React from 'react'
import Quiz from './pages/Quiz/Quiz'
import Home from './pages/Home/home'

export const App: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = React.useState(false)

  function startGame() {
    setIsGameStarted(true)
  }

  return(
    <>
      {
        isGameStarted ? <Quiz /> : <Home startGameFunction={() => startGame()} />
      }
    </>
  )
}