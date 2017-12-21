const initialState = {
    value: ''
}

export const childReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'CHANGE': return {
            value: action.value
        }
    }

    return state;
}
