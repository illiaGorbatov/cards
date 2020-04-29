type InitialStateType = typeof initialState;

const initialState = {};

const loginReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        default: return state
    }
};

//type ActionType = typeof action

export default loginReducer