import * as React from "react"
import "./ProductCard.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import { useParams } from "react-router-dom";
export default function ProductsCard({store, searchValue, handleAddItemToCart, description}) {
const [amount, setAmount] = React.useState(0);
let productId = useParams().productId;
  return (
      <div className="product" id="product" key={store.id}>
        <Link to={"/products/" + store.id}>
        <img src={store.image} alt="{props.description}" />
        </Link>
        
        <p><b>{store.name}</b></p>
        <div className="buttons">
          <button className="add" onClick={() => {
            setAmount(amount + 1);
            handleAddItemToCart(productId)
          }
            }>
            <i className="material-icons">add</i>
          </button>
          <button className="remove" onClick={() => setAmount(amount - 1)}>
            <i className="material-icons">remove</i>
          </button>
          <div>
            <p>{amount!=0 && amount>0 && amount}</p>
          </div>
        </div>
        <span className="quantity"><span className="amt"></span></span>
        <p>${store.price}</p>
        {description ? <div className="desc">
                    <p className="product-description">{store.description}</p>
                </div> : null}
      
      </div>
  )
}
