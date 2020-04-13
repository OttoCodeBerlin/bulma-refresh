import React from 'react'
import 'bulma/css/bulma.css'
import CoolButton from '../Coolbutton/CoolButton'

export default function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <CoolButton isSmall isDanger className="is-rounded">
                Button 1
              </CoolButton>
              <CoolButton isSmall isSuccess>
                Button 2
              </CoolButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
