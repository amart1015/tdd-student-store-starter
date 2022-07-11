import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Receipt from "../Receipt/Receipt";
import { useEffect, useState } from "react";

export default function Sidebar(shoppingCart, store) {
    let subtotal = 0
    let tax = 0
    let grandTotal = 0
    let name
    let email
    const sidebarCollapsed=localStorage.getItem('sidebar-collapsed');
    const [isExpanded, setIsExpanded] = React.useState(sidebarCollapsed ? true : false);
    const [checkedout, setCheckedout] = React.useState(false);


    const handleToggler = () => {
      if(isExpanded){
        setIsExpanded(false);
        return;
      }
      setIsExpanded(true);
    }

    const submitButton = () => {
      setCheckedout(true);
      return;
    }
    
    
    const getShoppingCartItems = () => {
      console.log(shoppingCart.store);
      console.log(shoppingCart.shoppingCart);

        shoppingCart.shoppingCart.map((idx) => {
          let Product = shoppingCart.store.find(product => product.id === idx.itemId).price * idx.quantity;
  
          if ((idx.quantity > 0) && (Product !== undefined)) {
            return <ShoppingCartItem key={idx.itemId} item={Product} quantity={idx.quantity} />
          }
        })
    }

    const calculateTotals = () => {
      subtotal = 0;
      shoppingCart.shoppingCart.map((idx) => {
        subtotal += shoppingCart.store.find(product => product.id === idx.id).price * idx.quantity;
      })
      tax = subtotal * .0875;
      grandTotal = subtotal + tax;
    }
    calculateTotals();

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
      </table>
      }

      {!isExpanded?
      null:
      shoppingCart.shoppingCart.map((idx) => {
        let Product = shoppingCart.store.find(product => product.id === idx.id);
        console.log(Product);
        return <ShoppingCart key={idx.itemId} item={Product} quantity={idx.quantity} />
      })
      }

    {!isExpanded?
      null:
    <div class="receipt">
    <div class="receipt-subtotal"><span class="label">Subtotal</span><span></span><span></span><span class="center subtotal">${subtotal.toFixed(2)}</span></div>
    <div class="receipt-taxes"><span class="label">Taxes and Fees</span><span></span><span></span><span class="center">${tax.toFixed(2)}</span></div>
    <div class="receipt-total"><span class="label">Total</span><span></span><span></span><span class="center total-price">${grandTotal.toFixed(2)}</span></div>
    </div>
      }

        {!isExpanded?
        null:
        <h3 className="">Payment Info <span className="button"><i className="material-icons md-48">monetization_on</i></span></h3>}

        {!isExpanded?
        null:
        <div className="input-field">
          <label className="label">Name</label>
          <div className="control ">
          <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value={name}/>
            </div></div>
        }

        {!isExpanded?
        null:
        <div className="input-field"><label className="label">Email</label><div className="control"><input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value={email} onChange={(evt) => {
          console.log(evt.target.value);
          email=evt.target.value;
}}/></div></div>}
        {!isExpanded?
        null:
        <button className="button checkout-button" value="Submit" onClick={submitButton}>Checkout</button>
        }

        {isExpanded &&
        <div className="checkout-success"><h3>Checkout Info <span className="icon button"><i className="material-icons md-48">fact_check</i></span></h3><div className="content"></div></div>}

        {isExpanded && !checkedout &&
        <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the
        order, it will be delivered to your dorm room.</p>}

        {isExpanded && checkedout &&
        <p>Showing receipt for:</p>}

        {isExpanded && checkedout &&
        shoppingCart.shoppingCart.map((idx) => {
          let Product = shoppingCart.store.find(product => product.id === idx.id);
          console.log(Product);
          return <Receipt key={idx.itemId} item={Product} quantity={idx.quantity} />
        })
        }

        {isExpanded && checkedout &&
        <ul className="purchase">
        <li>Before taxes, the subtotal was ${subtotal.toFixed(2)}</li>
        <li>After taxes and fees were applied, the total comes out to ${grandTotal.toFixed(2)}.</li>
        </ul>
        }
    </section>
  )
}
