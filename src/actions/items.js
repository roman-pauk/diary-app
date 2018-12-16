
export const ADD_ITEM  = 'ADD_ITEM'
export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const DELETE_ITEM  = 'DELETE_ITEM'
export const delItem = item_id => ({
    type: DELETE_ITEM,
    payload: item_id
})

export const SELECT_ITEM  = 'SELECT_ITEM'
export const selectItem = key => ({
    type: SELECT_ITEM,
    payload: key
})

export const ADD_COMMENT  = 'ADD_COMMENT'
export const addComment = (item_ind, comment) => ({
    type: ADD_COMMENT,
    payload: {
        item_ind,
        comment: {
            comment
        }
    }
})
