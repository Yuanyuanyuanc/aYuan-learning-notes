import { createStore, combineReducers } from 'redux'
import stateReducer from 'src/reducers'
import { stepReducer, totalReducer, showReducer } from 'src/reducers/step'

const reducers = combineReducers({
  show: showReducer,
  state: stateReducer,
  step: stepReducer,
  total: totalReducer,
})

export default createStore(reducers)