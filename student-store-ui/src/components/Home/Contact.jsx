import * as React from "react"
import "./Contact.css"

export default function Contact() {
  return (
    <div className="Contact">
      <div className="contactTitle">
        <h2>Contact Us</h2>
      </div>
      <div className="contactSection" id="contactSection">
        <div id="contactInfo">
            <p>Email: code@path.org</p>
            <p>1-800-CODEPATH</p>
            <p>Address: 123 Fake Street, San Francisco, CA</p>
        </div>
        <div id="contactPicture">
            <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
