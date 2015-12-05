import React, { Component } from 'react'
import styles from './index.css'

export class Toggle extends Component {
  getButtons() {
    let { visTypes, setVisType } = this.props
    let buttons = []

    visTypes.forEach(type => {
      let click = setVisType.bind(this, type)
      buttons.push(<div className={styles.button} onClick={click}>{type}</div>)
    })

    return buttons
  }

  render() {
    return (
      <div className={styles.container}>
        {this.getButtons()}
      </div>
    )
  }
}