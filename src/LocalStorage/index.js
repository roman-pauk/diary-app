export const getState = () => {
    try {
        const stateString = localStorage.getItem('diary_app')
        if (!stateString) {
            return undefined
        }
        return JSON.parse(stateString)
    } catch (err ) {
        console.log(err)
        return undefined
    }
}

export const saveState = state => {
    try {
        const stateString = JSON.stringify(state)
        localStorage.setItem('diary_app', stateString)
    } catch (err ) {
        console.log(err)
    }
}
