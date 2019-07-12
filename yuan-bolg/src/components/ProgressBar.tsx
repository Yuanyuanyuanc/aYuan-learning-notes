import * as React from 'react'

import '../scss/ProgressBar.min.css';

interface Props {
  step?: number;
  total?: number;
  show?: boolean;
  color?: string;
  onAddStep: () => void;
  onRemoveStep: () => void;
  onAddTotal: () => void;
  onRemoveTotal: () => void;
  onSwitchShow: () => void;
  onChangeColor: (color: string) => void;
}

export default class ProgressBar extends React.PureComponent<Props> {

  // rgb随机色
  public randomColor = () => Math.floor(Math.random() * 255)
  public randomRGBColor = () => `rgb(${this.randomColor()},${this.randomColor()},${this.randomColor()})`

  

  public render() {

    const {
      step = 5,
      total = 10,
      show = true,
      color = 'black',
      onAddStep,
      onRemoveStep,
      onAddTotal,
      onRemoveTotal,
      onSwitchShow,
      onChangeColor
    } = this.props

    // 比例
    const width = Math.floor(step / total * 100)

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

        <div className="progress-color" style={{ color }}>
          <button onClick={ () => onChangeColor(this.randomRGBColor()) }> change </button>
          color: { color }
        </div>

        <br/>

        <div className="progress-bar" >
          <div className="progress-bar-position" style={{
            width: width * 2,
            backgroundColor: color
          }} />
        </div>

        { show && <p className="progress-number"> { width }% </p> }
      </div>
    )
  }
}