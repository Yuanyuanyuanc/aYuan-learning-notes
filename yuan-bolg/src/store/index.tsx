import { createStore, combineReducers } from 'redux'
import stateReducer from 'src/reducers'
import { stepReducer, totalReducer, showReducer, colorReducer } from 'src/reducers/step'

const reducers = combineReducers({
  color: colorReducer,
  show: showReducer,
  state: stateReducer,
  step: stepReducer,
  total: totalReducer
})

export default createStore(reducers)