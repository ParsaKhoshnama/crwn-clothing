import React from 'react';
import SHOP_DATA from '../ShopPage/shop.data'
import CollectionPreview from '../../Components/collection-preview/collection-preview.component.jsx'

class ShopPage extends React.Component{
      constructor(props){
        super(props)
        this.state={
            collections:SHOP_DATA   
        }
      }
      render(){
        const {collections}=this.state
        return(
          <div className='shop-page'>
           {collections.map(({id,...otherCollectionsProps})=>(
            <CollectionPreview key={id}{...otherCollectionsProps}></CollectionPreview>
           ))
           }
          </div>
        )
      }
}

export default ShopPage