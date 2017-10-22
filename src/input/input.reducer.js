const initialState = {
    num: undefined
}

const inputReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET': return {
            ...state,
            num: action.value
        }

        case 'VALIDATE': 
            return {
                ...state,
                msg: action.msg
            }

        default: return state;
    }
}

export default inputReducer;