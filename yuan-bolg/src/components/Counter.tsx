import * as React from 'react'

interface Props {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void
}

class Counter extends React.PureComponent<Props> {
  public render() {
    const { value, onIncrement, onDecrement } = this.props

    return (
      <p>
        Clicked: { value } times
        <br />
        <br />
        <button onClick={ onIncrement } style={{ marginRight: 20 }}> + </button>
        <button onClick={ onDecrement }> - </button>
      </p>
    )
  }
}

export default Counter