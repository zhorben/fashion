import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const makeStore = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  )
}