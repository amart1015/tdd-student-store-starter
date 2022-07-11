import * as React from "react"
import { useEffect, useState } from "react";
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" />
      <div className="navbarItems">
          <p><a href="/#Home">Home</a></p>
          <p><a href="/#About">About Us</a></p>
          <p><a href="/#Contact">Contact Us</a></p>
          <p><a href="/#Buy">Buy</a></p>
      </div>
    </nav>
  )
}
