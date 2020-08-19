import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'


import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/cart-dropdown'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'


const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/">
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                        :
                        <Link className="option" to="/signin">Signin</Link>

                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropDown />
            }

        </div>
    )
}


//createStructuredSelector will directly pass the state 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
