import React from "react";

import CustumButton from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.styles.scss'
import { connect } from "react-redux"

import withRouter from "../withRouter/withRouter";

import { createStructuredSelector } from "reselect";
import {selectCartItems} from '../../redux/cart/cart.selectors'

import {toggleCartHidden} from '../../redux/cart/cart.actions.js'

const CartDropdown = ({cartItems,navigate,dispatch})=>{
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                : <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustumButton onClick={()=>{
            navigate('/checkout')
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustumButton>
    </div>
    )
}

const mapStateTpProps = createStructuredSelector({
    cartItems : selectCartItems
})
export default withRouter(connect(mapStateTpProps)(CartDropdown))
