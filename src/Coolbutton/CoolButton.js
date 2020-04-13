import React, { Component } from 'react'
import 'bulma/css/bulma.css'

export default class CoolButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let classList
    this.props.className === undefined ? classList = 'button '
    : classList = 'button ' + this.props.className
    if (this.props.isSmall) classList += ' is-small'
    if (this.props.isDanger) classList += ' is-danger'
    if (this.props.isSuccess) classList += ' is-success'
    return <button className={classList}>{this.props.children}</button>
  }
}
