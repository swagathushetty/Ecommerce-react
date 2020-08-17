import React from 'react'

import CollectionItem from '../collection-item/collection-item'
import './preview-collection.scss'



//
//title- string
//items - [{id,name,imageUrl,price},{},{}]
const collectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, index) => index < 4)
                        .map((item) => {
                            return <CollectionItem key={item.id} item={item} />
                        })
                }
            </div>
        </div>
    )

}


export default collectionPreview