import React from 'react'

import AddItemsForm from '../Smart/AddItemsForm/AddItemsForm'
import ItemsList from './ItemsList/ItemsList'

function ItemsWrap() {
    return (
        <div className="ItemsWrap">
            <div className="Card Card--items">
                <div className="Card__title">
                    Items
                </div>
                <AddItemsForm />
                <ItemsList />
            </div>
        </div>
    )
}

export default ItemsWrap
