import React from 'react'
import { connect } from 'react-redux'

import './CommentsList.css'

function CommentsList({ comments }) {
    return (
        <ul className="commentsList">
            {comments.map((cm, ind) => (
                <li key={`comment-${ind}`} className="commentsList__item">
                    <div className="commentsList__avatar" />
                    <p>{cm.comment}</p>
                </li>
            ))}
        </ul>
    )
}

const mapStateToProps = state => {
    const ind = state.items.activeItemIndex
    const item = ind === null ? null : state.items.items[ind]
    return {
        comments: item ? item.comments : []
    }
}

export default connect(mapStateToProps)(CommentsList)
