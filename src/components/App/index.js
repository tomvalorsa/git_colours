import React from 'react'
import styles from './index.css'
import classnames from 'classnames'

import { Toggle } from 'Toggle'
import { Stripe } from 'Stripe'

export class App extends React.Component {
  static defaultProps = {
    visTypes: ['Stripes', 'Squares']
  }

  state = {
    visType: 'Stripes'
  }

  setVisType(visType){
    this.setState({visType})
  }

  getSquares() {
    let { commits } = this.props
    let squares = []

    commits.forEach((commit, i) => {
      let color = `#${commit.sha.substring(0, 6)}`
      squares.push(<div key={i} className={styles.square} style={{backgroundColor: color}}></div>)
    })

    return squares
  }

  getStripes() {
    let { commits } = this.props
    let stripes = []

    commits.forEach((commit, i) => {
      let color = `#${commit.sha.substring(0, 6)}`
      stripes.push(<Stripe key={i} color={color} />)
    })

    return stripes
  }

  render() {
    let typeRef = {
      'Stripes': ::this.getStripes,
      'Squares': ::this.getSquares
    }
    let vis = typeRef[this.state.visType]

    return (
      <div className={styles.container}>
        <div className={styles.topRight}>
          <Toggle visTypes={this.props.visTypes} setVisType={::this.setVisType} />
        </div>
        {vis()}
      </div>
    )
  }
}

