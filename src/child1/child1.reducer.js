
const initState = {
    num: 0
}

const child1Reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const num = state.num + 1;
            return { ...state, num }
    }

    return state;
}

export default child1Reducer;