import React, { Component } from 'react'
import styles from './index.css'

export class Stripe extends Component {
  render() {
    let style = {}
    style.backgroundColor = this.props.color
    style.height = Math.random() * 50 // relative to how many additions there were in the commit? what other kind of data cam be used from the github API?

    return (
      <div className={styles.stripe} style={style}></div>
    )
  }
}