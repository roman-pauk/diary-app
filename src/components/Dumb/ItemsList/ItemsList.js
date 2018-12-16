import React, { Component } from 'react'
import { connect } from 'react-redux'

import Item from './Item'
import { delItem, selectItem } from '../../../actions/items'
import './ItemsList.css'

class ItemsList extends Component {
    onSelectItem = ind => {
        if (ind === this.props.activeItemIndex) {
            return
        }
        this.props.selectItem(ind)
    }
    render() {
        const { items, activeItemIndex, delItem } = this.props
        return (
            <ul className="itemsList">
                {items.map((el, ind) => (
                    <Item
                        key={el.id}
                        name={el.name}
                        isActive={ind === activeItemIndex}
                        onSelectItem={() => this.onSelectItem(ind)}
                        onDelete={() => delItem(el.id)}
                        comments_count={el.comments.length}
                    />
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    activeItemIndex: state.items.activeItemIndex,
    items: state.items.items,
})

export default connect(mapStateToProps, { delItem, selectItem })(ItemsList)
