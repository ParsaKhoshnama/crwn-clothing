import React, { useEffect } from 'react'
import './collection-item.styles.scss'
import CustumButton from '../custom-button/custom-button.component'

import { connect } from 'react-redux'

import {addItem} from '../../redux/cart/cart.actions'

const CollectionItem=({item,addItem})=>{

    const {id ,imageUrl , name , price } = item
    
    return(
        <div className='collection-item'>
            <div className='image'
            style={{backgroundImage:`url("${imageUrl}")`}}>
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustumButton inverted onClick = {()=>{
                addItem(item)
                
            }}>Add to cart</CustumButton>
        </div>
    )

   
}

const mapDispatchToProps = dispatch =>({

    addItem: item => dispatch(addItem(item))
})

export default connect(null , mapDispatchToProps)(CollectionItem)