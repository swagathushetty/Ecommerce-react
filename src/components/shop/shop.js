import React from 'react'
import SHOP_DATA from './shopData'
import CollectionPreview from '../../components/collection-preview/collection-preview'

class ShopPage extends React.Component {
    constructor(props){
        super(props)
         
         this.state = {
             collections: SHOP_DATA //[{ id,title,routeName,items:[{},{}] },{}...]
         }
    }

    render() {
        const { collections }=this.state
        return (
            <div className="'shop-page">
                 {
                     collections.map(({id,...otherCollectionProps})=>{
                         return <CollectionPreview key={id} {...otherCollectionProps} />
                     })
                 }
            </div>
        )
    }
    }


    export default ShopPage

  

  
