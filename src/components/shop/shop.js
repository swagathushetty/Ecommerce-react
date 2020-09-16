import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestore, convertCollectionSnapShotToMap } from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions'
import withSpinner from '../with-spinner/with-spinner'

import CollectionsOverview from '../collections-overview/collections-overview'
import CollectionPage from '../pages/collection/collection'


const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    }
    unsubscribeFromAuth = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')



        collectionRef.get().then(
            snapshot => {
                const collectionsMap = convertCollectionSnapShotToMap(snapshot)
                updateCollections(collectionsMap)
                this.setState({ loading: false })
            }
        )

    }

    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className="'shop-page">
                <Route
                    exact path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
                />
            </div>
        )

    }

}


const mapDispatchToProps = dispatch => {
    return {
        updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
    }
}


export default connect(null, mapDispatchToProps)(ShopPage)