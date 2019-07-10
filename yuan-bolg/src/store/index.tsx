import { createStore, combineReducers } from 'redux'
import stateReducer from 'src/reducers'
import { stepReducer, totalReducer } from 'src/reducers/step'

const reducers = combineReducers({
  state: stateReducer,
  step: stepReducer,
  total: totalReducer
})

export default createStore(reducers)