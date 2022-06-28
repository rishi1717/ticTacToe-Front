import React from "react"

const LevelContext = React.createContext()

export const LevelProvider = LevelContext.Provider
export const LevelConsumer = LevelContext.Consumer

export default LevelContext
