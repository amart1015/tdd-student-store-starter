import * as React from "react"
import "./ProductsGrid.css"

export default function ProductsGrid({store}) {
  return (
    <div className="products-grid" id="products-grid">
      {store.map((store, idx) => (
      <div className="product" id="product" key={store.id}>
        <img src={store.image} alt="{props.description}" />
        <p><b>{store.name}</b></p>
        <p>${store.price.toFixed(2)}</p>
      </div>
      ))}
    </div>
  )
}
