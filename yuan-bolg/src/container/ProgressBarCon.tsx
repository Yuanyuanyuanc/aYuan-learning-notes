import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { addStep, removeStep, addTotal, removeTotal } from '../actions/progress'
import ProgressBar from '../components/ProgressBar'
import { StoreProgress } from '../types'



// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: StoreProgress): StoreProgress => ({
  step: state.step,
  total: state.total
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddStep: () => dispatch(addStep()),
  onAddTotal: () => dispatch(addTotal()),
  onRemoveStep: () => dispatch(removeStep()),
  onRemoveTotal: () => dispatch(removeTotal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)