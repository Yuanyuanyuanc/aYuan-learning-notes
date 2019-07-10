import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { decrement, increment } from '../actions'
import Counter from '../components/Counter'
import { StoreState } from '../types'



// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: StoreState): { value: number } => ({
  value: state.state
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)