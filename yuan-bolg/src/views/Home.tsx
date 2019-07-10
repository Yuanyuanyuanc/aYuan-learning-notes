import * as React from 'react'

import Header from '../views/Header'

import '../scss/home.scss'

class Home extends React.Component {
  public render() {
    return (
      <div className="home">
        <Header name="header" />
      </div>
    )
  }
}

export default Home