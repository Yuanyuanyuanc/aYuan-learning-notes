import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { addStep, removeStep, addTotal, removeTotal, switchShow, changeColor } from '../actions/progress'
import ProgressBar from '../components/ProgressBar'
import { StoreProgress } from '../types'



// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: StoreProgress): StoreProgress => {
  console.log('state: ', state)
  return ({
    color: state.color,
    show: state.show,
    step: state.step,
    total: state.total
  })
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
  onAddStep: () => dispatch(addStep()),
  onAddTotal: () => dispatch(addTotal()),
  onChangeColor: (color: string) => dispatch(changeColor(color)),
  onRemoveStep: () => dispatch(removeStep()),
  onRemoveTotal: () => dispatch(removeTotal()),
  onSwitchShow: () => dispatch(switchShow())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)