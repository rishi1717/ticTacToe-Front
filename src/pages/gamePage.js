import React from 'react'
import GameBox from '../components/GameBox'
import GameCard from '../components/GameCard'
import UserNavBar from '../components/navbar'

function GamePage() {
  return (
    <div>
        <UserNavBar />
        <GameCard />
        <GameBox />
    </div>
  )
}

export default GamePage