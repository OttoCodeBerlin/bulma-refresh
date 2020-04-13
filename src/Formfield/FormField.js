import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './FormField.css'

export default class FormField extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container margin3">
        <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
        </div>
        <p className="help">{this.props.helptext}</p>
      </div>
      </div>
      
    )
  }
}
