import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import CoolButton from '../Coolbutton/CoolButton'
import Navbar from '../Navbar/Navbar'
import FormField from '../Formfield/FormField'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="Please enter name" helptext="e.g. John Doe" />
        <FormField label="Email" type="email" placeholder="Please enter email" helptext="e.g. johndoe@me.com" />
        <FormField
          label="Password"
          type="password"
          placeholder="Please enter password"
          helptext="Your password should contain minimum 6 characters."
        />
        <CoolButton className="margin3">Submit</CoolButton>
      </div>
    )
  }
}
