import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addComment } from '../../../actions/items'
import './AddComentForm.css'

class AddComentForm extends Component {
    state = {
        comment: ''
    }
    onTypeComment = ({ target }) => {
        this.setState({ comment: target.value })
    }
    handleKeyDown = ev => {
        if (ev.keyCode === 13 && ev.ctrlKey) {
            this.onAddComment()
        }
    }
    onAddComment = () => {
        const { comment } = this.state
        if (!comment || this.props.active_index === null) {
            return
        }
        this.setState({ comment: '' })
        this.props.addComment(this.props.active_index, comment)
    }
    render() {
        if (this.props.active_index === null) {
            return null
        }
        return (
            <div className="commentsForm">
                <div className="commentsForm__avatar" />
                <div className="form-group">
                    <textarea
                        value={this.state.comment}
                        onChange={this.onTypeComment}
                        onKeyDown={this.handleKeyDown}
                        className="form-control"
                        rows="3" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    active_index: state.items.activeItemIndex
})

export default connect(mapStateToProps, { addComment })(AddComentForm)
