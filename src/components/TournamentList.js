import React from 'react'

function TournamentList({ tournaments }) {
  return (
    <>
        Tournament List
        {tournaments.map((tournament) => (<>hey</>))}
    </>
  )
}

export default TournamentList