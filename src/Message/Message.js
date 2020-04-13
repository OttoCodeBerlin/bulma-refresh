import React from 'react'
import 'bulma/css/bulma.css'

export default class message extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <article class="message">
          <div class="message-header">
            <p>{this.props.title}</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            {this.props.children}
          </div>
        </article>
      </div>
    )
  }
}
