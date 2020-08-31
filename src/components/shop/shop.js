import React from 'react'
import { Route } from 'react-router-dom'


import CollectionsOverview from '../collections-overview/collections-overview'
import CategoryPage from '../pages/collection/collection'


const ShopPage = ({ match }) => {

    console.log(match)
    return (
        <div className="'shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
        </div>
    )
}


export default ShopPage