import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import MenuItem from '../menu-item/menu-itemComponent'

import './directoryComponent.styles.scss';

const Directory = ({ sections }) => {

    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherSectionprops }) => {
                    return <MenuItem key={id} {...otherSectionprops} />
                })
            }
        </div>
    )

}




const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory)