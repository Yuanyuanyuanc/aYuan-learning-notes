import * as React from 'react'

interface Props {
  step: number;
  total: number;
  show?: boolean;
  // color?: string;
  // number?: number;
  onAddStep: () => void;
  onRemoveStep: () => void;
  onAddTotal: () => void;
  onRemoveTotal: () => void;
  onSwitchShow: () => void;
}

export default class ProgressBar extends React.PureComponent<Props> {
  public render() {

    const {
      step,
      total,
      show = true,
      // color = 'black',
      // number = 0,
      onAddStep,
      onRemoveStep,
      onAddTotal,
      onRemoveTotal,
      onSwitchShow
    } = this.props

    return (
      <div className="progress">
        <div className="progress-step">
          <button onClick={ onRemoveStep } style={{ marginRight: 20 }}> - </button>
          <button onClick={ onAddStep }> + </button>
          step: { step }
        </div>

        <div className="progress-total">
          <button onClick={ onRemoveTotal } style={{ marginRight: 20 }}> - </button>
          <button onClick={ onAddTotal }> + </button>
          total: { total }
        </div>

        <div className="progress-show">
          <button onClick={ onSwitchShow }> change </button>
          showInfo: { show ? '显示' : '隐藏' }
        </div>

        <div className="progress-color">
          <button> change </button>
          {/* color: { color } */}
        </div>

        <div className="progress-bar">
          {/* <p> { number }% </p> */}
        </div>
      </div>
    )
  }
}