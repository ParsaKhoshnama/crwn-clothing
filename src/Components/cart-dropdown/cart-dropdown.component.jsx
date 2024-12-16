import React from "react";

import CustumButton from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.styles.scss'
import { connect } from "react-redux"

import {selectCartItems} from '../../redux/cart/cart.selectors'

const CartDropdown = ({cartItems})=>{
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustumButton>GO TO CHECKOUT</CustumButton>
    </div>
    )
}

const mapStateTpProps = state =>({
    cartItems : selectCartItems(state)
})
export default connect(mapStateTpProps)(CartDropdown)
