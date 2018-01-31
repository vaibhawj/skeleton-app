const initalState = {
    profile: {
        name: '',
        phone: ''
    }
}

export const grandparentReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'UPDATE_PROFILE': 
            let currentProfile = state.profile;
            return {
                profile: {
                    ...currentProfile,
                    [action.fieldName]: action.value
                }
            }

        default: return state;
    }
    return state;
}