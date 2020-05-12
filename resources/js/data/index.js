initialState = {
    auth: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "authenticate": return {...state, auth: true}
        default: return state
    }
}