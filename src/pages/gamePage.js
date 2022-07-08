import React from 'react'
import GameBoard from '../components/GameBoard'
import GameCard from '../components/GameCard'
import UserNavBar from '../components/navbar'

function GamePage() {
  return (
    <div>
        <UserNavBar />
        <GameCard />
        <GameBoard />
    </div>
  )
}

export default GamePage