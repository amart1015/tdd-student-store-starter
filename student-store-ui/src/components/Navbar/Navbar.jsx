import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" />
      <div class="navbarItems">
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Buy</p>
      </div>
    </nav>
  )
}
