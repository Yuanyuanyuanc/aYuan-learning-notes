import * as React from 'react'

import { getExclamationMarks } from '../utils'

import '../scss/hello.scss'

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class Hello extends React.Component<Props, object> {
  public render() {
    const { name, enthusiasmLevel = 1 } = this.props

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiasmLevel. :D')
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    )
  }
}

export default Hello