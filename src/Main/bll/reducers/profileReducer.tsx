type InitialStateType = typeof initialState;

const initialState = {};

const profileReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        default: return state
    }
};

//type ActionType = typeof action

export default profileReducer