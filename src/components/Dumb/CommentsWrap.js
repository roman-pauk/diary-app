import React from 'react'
import { connect } from 'react-redux'

import AddComentForm from '../Smart/AddComentForm/AddComentForm'
import CommentsList from './CommentsList/CommentsList'

function CommentsWrap({ active_index, items_length }) {
    const cmt_num = active_index === null ? '' : ` #${active_index + 1}`
    return (
        <div className="CommentsWrap">
            <div className="Card Card--comments">
                <div className="Card__title">Comments{cmt_num}</div>
                {!items_length &&
                    <div className="alert alert-info" role="alert">
                        Please, create items to see and add comments!
                    </div>
                }
                <CommentsList />
                <AddComentForm />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    active_index: state.items.activeItemIndex,
    items_length: state.items.items.length,
})

export default connect(mapStateToProps)(CommentsWrap)
