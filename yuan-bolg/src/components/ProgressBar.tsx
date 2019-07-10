import * as React from 'react'

interface Props {
  step: number;
  total: number;
  show?: boolean;
  color?: string;
  number1?: number;
  onAddStep: () => void;
  onRemoveStep: () => void;
  onAddTotal: () => void;
  onRemoveTotal: () => void;
  onSwitchShow: () => void;
  onChangeColor: (color: string) => void;
  onChangeNumber: (number1: number) => void;
}

export default class ProgressBar extends React.PureComponent<Props> {

  // rgb随机色
  public randomColor = () => Math.floor(Math.random() * 255)
  public randomRGBColor = () => `rgb(${this.randomColor()},${this.randomColor()},${this.randomColor()})`

  

  public render() {

    const {
      step,
      total,
      show = true,
      color = 'black',
      number1 = 0,
      onAddStep,
      onRemoveStep,
      onAddTotal,
      onRemoveTotal,
      onSwitchShow,
      onChangeColor,
      onChangeNumber
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

        <div className="progress-color" style={{ color: this.randomRGBColor() }}>
          <button onClick={ () => onChangeColor(this.randomRGBColor()) }> change </button>
          color: { color }
        </div>

        <div className="progress-bar" onClick={ () => onChangeNumber(20) }>
          <p> { number1 }% </p>
        </div>
      </div>
    )
  }
}