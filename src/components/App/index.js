import React from 'react'
import styles from './index.css'
import classnames from 'classnames'

export class App extends React.Component {
  getSquares() {
    let { commits } = this.props
    let squares = []

    commits.forEach((commit, i) => {
      let color = `#${commit}`
      squares.push(<div key={i} className={styles.square} style={{backgroundColor: color}}></div>)
    })

    return squares
  }

  render() {
    return (
      <div className={styles.container}>
        {this.getSquares()}
      </div>
    )
  }
}

