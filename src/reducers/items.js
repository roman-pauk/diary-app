import * as item_act from '../actions/items'

const initialState = {
    items: [],
    activeItemIndex: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case item_act.ADD_ITEM:
            return {
                activeItemIndex: state.items.length,
                items: state.items.concat(action.payload),
            }
        case item_act.DELETE_ITEM:
            const items_ln = state.items.length
            return {
                activeItemIndex: items_ln < 2 ? null : 0,
                items: state.items.filter(el => el.id !== action.payload),
            } 
        case item_act.SELECT_ITEM:
            return {
                ...state,
                activeItemIndex: action.payload,
            }
        case item_act.ADD_COMMENT:
            return {
                ...state,
                items: state.items.map((el, ind) => {
                    if (ind === action.payload.item_ind) {
                        el.comments = el.comments.concat(action.payload.comment)
                    }
                    return el
                })
            }
        default:
            return state
    }
}
