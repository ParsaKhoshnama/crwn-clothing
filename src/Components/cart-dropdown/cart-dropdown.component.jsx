import React from "react";

import CustumButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss'

const CartDropdown = ()=>{
    return(
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustumButton>GO TO CHECKOUT</CustumButton>
    </div>
    )
}

export default CartDropdown

