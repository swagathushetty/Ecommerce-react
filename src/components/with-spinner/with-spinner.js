import React from 'react'
import {SpinnerOverlay,SpinnerContainer} from './with-spinner.styles.jsx'

const withSpinner=WrappedComponent=>{
  return ({isLoading,...otherProps})=>{
    return isLoading ? (
      <SpinnerOverlay>
         <SpinnerContainer />
      </SpinnerOverlay>
    ):
    <WrappedComponent {...otherProps} />
  }
}

export default withSpinner