import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'

import { addItem } from '../../../actions/items'

import './AddItemsForm.css'

class AddItemsForm extends Component {
    state = {
        name: ''
    }
    onTypeName = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }
    handleKeyDown = ev => {
        if (ev.keyCode === 13 && ev.ctrlKey) {
            this.onAddItem()
        }
    }
    onAddItem = () => {
        const { name } = this.state
        if (!name) {
            return
        }
        this.setState({ name: '' })
        this.props.addItem({
            id: uuid(),
            name,
            comments: [],
        })
    }
    render() {
        return (
            <div className="d-flex addItemsForm">
                <div className="form-group">
                    <input 
                        type="text"
                        name="name" 
                        className="form-control" 
                        placeholder="Type name here..."
                        value={this.state.name}
                        onChange={this.onTypeName}
                        onKeyDown={this.handleKeyDown}
                    />
                </div>
                <div>
                    <button onClick={this.onAddItem} type="button" className="btn btn-info">Add new</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { addItem })(AddItemsForm)
