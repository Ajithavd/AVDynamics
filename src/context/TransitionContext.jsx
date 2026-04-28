import { createContext, useContext, useReducer, useRef, useCallback } from 'react'

const TransitionContext = createContext(null)

const PHASES = ['idle', 'covering', 'covered', 'revealing', 'landing', 'done']

function reducer(state, action) {
  switch (action.type) {
    case 'START':
      return { ...state, phase: 'covering', payload: action.payload, heroRect: null }
    case 'ADVANCE':
      return { ...state, phase: action.phase }
    case 'SET_HERO_RECT':
      return { ...state, heroRect: action.rect }
    case 'RESET':
      return { phase: 'idle', payload: null, heroRect: null }
    default:
      return state
  }
}

const initial = { phase: 'idle', payload: null, heroRect: null }

export function TransitionProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial)
  // navigateFn stored in ref so WorkTransition can call it without stale closure
  const navigateFnRef = useRef(null)

  const startTransition = useCallback((work, figureElement, navigateFn) => {
    if (!figureElement) return
    const srcRect = figureElement.getBoundingClientRect()
    navigateFnRef.current = navigateFn
    document.body.style.overflow = 'hidden'
    dispatch({
      type: 'START',
      payload: { work, srcRect, imageSrc: work.image },
    })
  }, [])

  const registerHero = useCallback((imgElement) => {
    if (!imgElement) return
    // Use requestAnimationFrame so layout is settled after React paints WorkDetail
    requestAnimationFrame(() => {
      const rect = imgElement.getBoundingClientRect()
      dispatch({ type: 'SET_HERO_RECT', rect })
    })
  }, [])

  const advancePhase = useCallback((phase) => {
    dispatch({ type: 'ADVANCE', phase })
  }, [])

  const callNavigate = useCallback(() => {
    const fn = navigateFnRef.current
    navigateFnRef.current = null
    fn?.()
  }, [])

  const reset = useCallback(() => {
    document.body.style.overflow = ''
    dispatch({ type: 'RESET' })
  }, [])

  return (
    <TransitionContext.Provider
      value={{
        phase: state.phase,
        payload: state.payload,
        heroRect: state.heroRect,
        startTransition,
        registerHero,
        advancePhase,
        callNavigate,
        reset,
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const ctx = useContext(TransitionContext)
  if (!ctx) throw new Error('useTransition must be used inside TransitionProvider')
  return ctx
}
