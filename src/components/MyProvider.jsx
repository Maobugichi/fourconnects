import { useState,createContext } from "react";

const GameContext = createContext(true)

const MyProvider = ({children}) => {

  const [isCpu, setCpu] = useState(false)
 
  return(
    <GameContext.Provider value={{isCpu, setCpu}}>
        {children}
    </GameContext.Provider>
  )
}

export default MyProvider
export {GameContext}