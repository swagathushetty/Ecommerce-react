import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'
import WithSpinner from '../with-spinner/with-spinner'
import CollectionsOverview from './collections-overview'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})


const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)
//connect(mapStateToProps)(WithSpinner(CollectionsOverview))

export default CollectionsOverviewContainer