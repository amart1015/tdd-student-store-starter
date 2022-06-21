import * as React from "react"
import "./Searchbar.css"

export default function SearchBar(props) {
  return (
    <form class="searchClass" id="searchClass">
        <div id="textbox">
          <input type="text" placeholder="Search" onChange={props.handleOnSearchChange}/>
        </div>
    </form>
  )
}
