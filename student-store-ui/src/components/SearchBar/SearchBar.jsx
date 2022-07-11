import axios from "axios"
import * as React from "react"
import "./SearchBar.css"

export default function SearchBar({onSearchChange, searchValue, store, setProducts}) {
  // const handleCategories= async (category) => {
  //   const{data} = await axios.get('http://localhost:3001/store');
  //   console.log(data.products)
  //   if(category=="all"){
  //     //setProducts(data.products);
  //   }
  //   else{
  //     let filteredCategory=data.products.filter(item=>item.category==category)
  //     console.log(filteredCategory)
  //     //setProducts(filteredCategory)
  //   }

  const handleCategories= async(category) => {
  }
  return (
    <form className="searchClass" id="searchClass">
        <div className="content" id="textbox">
          <div className="row">
            <div className="search-bar">
              <input type="text" name="search" placeholder="Search" value={searchValue} onChange={(evt) => {
                        console.log(evt.target.value);
                        onSearchChange(evt);
                    }}/>
                <i className="material-icons">search</i>
                </div>
                <div className="links">
                </div></div>
                  <div className="row">
                      <ul className="category-menu" id="category-menu">
                        <li className="is-active"><button onClick={handleCategories("all")}>All Categories</button>
                        </li>
                        <li className=""><button onClick={handleCategories("clothing")}>Clothing</button></li>
                        <li className=""><button onClick={handleCategories("food")}>Food</button></li>
                        <li className=""><button onClick={handleCategories("accessories")}>Accessories</button></li>
                        <li className=""><button onClick={handleCategories("tech")}>Tech</button></li></ul>
                        </div></div>
    </form>
  )
}
