import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionLoaded } from '../../../redux/shop/shop.selector'
import WithSpinner from '../../with-spinner/with-spinner'
import CollectionPage from './collection'


const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer