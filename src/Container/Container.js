import React from 'react'
import 'bulma/css/bulma.css'
import Message from '../Message/Message'

export default function Container() {
  return (
    <div className="container margin3">
      <Message isInfo title="Hello World Bitches">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  )
}
