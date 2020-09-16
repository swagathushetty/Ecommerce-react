import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'


import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles.jsx'
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/cart-dropdown'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'


const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer >
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/">
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>
                        :
                        <OptionLink className="option" to="/signin">Signin</OptionLink>

                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropDown />
            }

        </HeaderContainer>
    )
}


//createStructuredSelector will directly pass the state 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
