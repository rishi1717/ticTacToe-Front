import React from "react"

const ThemeContext = React.createContext()

export const ThemeContextProvider = ThemeContext.Provider
export const ThemeContextConsumer = ThemeContext.Consumer

export default ThemeContext
