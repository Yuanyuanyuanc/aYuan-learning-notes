import { createStore, combineReducers } from 'redux'
import stateReducer from 'src/reducers'
import { stepReducer, totalReducer, showReducer, colorReducer, numberReducer } from 'src/reducers/step'

const reducers = combineReducers({
  color: colorReducer,
  number1: numberReducer,
  show: showReducer,
  state: stateReducer,
  step: stepReducer,
  total: totalReducer
})

export default createStore(reducers)