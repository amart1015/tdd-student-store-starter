import * as React from "react"
import "./Sidebar.css"
import { useEffect, useState } from "react";

export default function Sidebar() {
    const sidebarCollapsed=localStorage.getItem('sidebar-collapsed');
    const [isExpanded, setIsExpanded] = React.useState(sidebarCollapsed ? true : false);

    const handleToggler = () => {
      if(isExpanded){
        setIsExpanded(false);
        return;
      }
      setIsExpanded(true);
    }
  return (
    <section className={!isExpanded ? "sidebar" : "sidebarc"} id="sidebar">
      {!isExpanded? 
      <button className="toggle-button button closed" onClick={handleToggler}>
        <i className="material-icons md-48">arrow_forward</i>
      </button>:
      <button className="toggle-button button open" onClick={handleToggler}>
      <i className="material-icons md-48">arrow_backword</i>
      </button>}
      {!isExpanded?
      <div className= "other-icons" id="other-icons">
        <i className="material-icons md-48">add_shopping_cart</i>
        <i className="material-icons md-48">monetization_on</i>
        <i className="material-icons md-48">fact_check</i>
      </div>: 
      <h3 className="">Shopping Cart <span className="button"><i className="material-icons md-48">add_shopping_cart</i></span></h3>}

      {!isExpanded?
      null:
      <table className="header">
        <tr className="header-row">
          <th className="flex-2">Name</th>
          <th className="center">Quantity</th>
          <th className="center">Unit Price</th>
          <th className="center">Cost</th>
        </tr>
        <tr className="product-row">
          <th className="flex-2 cart-product-name">Rice Krispies</th>
          <th className="center cart-product-quantity">2</th>
          <th className="center cart-product-price">$0.99</th>
          <th className="center cart-product-subtotal">$1.98</th>
        </tr>
        <tr className="product-row">
          <th className="flex-2 cart-product-name">Cinnamon Rolls</th>
          <th className="center cart-product-quantity">5</th>
          <th className="center cart-product-price">$2.99</th>
          <th className="center cart-product-subtotal">$14.95</th>
        </tr>
        <tr className="product-row">
          <th className="flex-2 cart-product-name">Coconut Water</th>
          <th className="center cart-product-quantity">3</th>
          <th className="center cart-product-price">$3.25</th>
          <th className="center cart-product-subtotal">$9.75</th>
        </tr>
        </table>}

        {!isExpanded?
        null:
        <h3 className="">Payment Info <span className="button"><i className="material-icons md-48">monetization_on</i></span></h3>}

        {!isExpanded?
        null:
        <div className="input-field">
          <label className="label">Name</label>
          <div className="control ">
          <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value=""/>
            </div></div>
        }

        {!isExpanded?
        null:
        <div className="input-field"><label className="label">Email</label><div className="control"><input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value=""/></div></div>}
        {!isExpanded?
        null:
        <button className="button checkout-button">Checkout</button>}
        {!isExpanded? null:
        <div className="checkout-success"><h3>Checkout Info <span className="icon button"><i className="material-icons md-48">fact_check</i></span></h3><div className="content"><p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the
        order, it will be delivered to your dorm room.</p></div></div>}
    </section>
  )
}
