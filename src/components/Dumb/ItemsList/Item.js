import React from 'react'
import classNames from 'classnames'

function Item({ name, comments_count, isActive, onDelete, onSelectItem }) {
    return (
        <li className={classNames('itemsList__item', {
            'active': isActive
        })}>
            <div onClick={onSelectItem} className="itemsList__name">
                <span className="name">{name}</span>
                <span className="badge badge-info">{comments_count}</span>
            </div>
            <div>
                <button 
                    type="button"
                    onClick={onDelete}
                    className="btn btn-outline-danger">Delete</button>
            </div>
        </li>
    )
}

export default Item
