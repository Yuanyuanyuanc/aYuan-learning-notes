import * as React from 'react'

import Hello from '../components/Hello'
import CounterCon from '../container/CounterCon'
import ProgressBarCon from '../container/ProgressBarCon'

import '../scss/Header.scss'

interface Props {
  name: string
}

class Header extends React.Component<Props, object> {
  public render() {
    const { name } = this.props

    return (
      <div className="header">
        { name }
        <Hello name="TypeScript" enthusiasmLevel={10} />
        <CounterCon />
        <ProgressBarCon />
      </div>
    )
  }
}

export default Header