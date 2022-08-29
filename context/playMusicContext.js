import { createContext, useReducer, useContext } from "react"

const PlayMusicContext = createContext()

const PLAY_MUSIC = "PLAY_MUSIC" 

const inictialsState = {
  play: false,
  type: "",
  id: ""
}

const reducer = (state, action) => {
  switch (action.type) {
    case PLAY_MUSIC:
      return {...state, ...action.payload}
    default:
      throw new Error(`Unknown action: ${action.type}`)
  } 
}

export const PlayMusicProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, inictialsState)

  const setPlayMusic = (type, id, play) => {
    dispatch({type: PLAY_MUSIC, payload: {type, id, play}})
  }

  return (
    <PlayMusicContext.Provider value={{
      setPlayMusic, 
      state
    }}>
      {children}
    </PlayMusicContext.Provider>
  )
}

export const usePlayMusicContext = () => useContext(PlayMusicContext)
