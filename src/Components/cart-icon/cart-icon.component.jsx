import React from "react";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({toggleCartHidden , itemCount}) =>{
  
    return (

     <div className="cart-icon" onClick={toggleCartHidden}>

        <ShoppingIcon className="shopping-icon"/>

        <span className="item-count">{itemCount}</span>

     </div>
    )
}


const mapStateToProps = ({cart:{cartItems}}) =>({

    itemCount : cartItems.reduce((accumalatedQuantity , cartItem) => accumalatedQuantity + cartItem.quantity
    ,0)

})

const mapDipatchToProps = dispatch =>({
    toggleCartHidden :() => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps , mapDipatchToProps)(CartIcon)