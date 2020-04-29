import {applyMiddleware, combineReducers, createStore} from "redux";
import loginReducer from "./reducers/loginReducer";
import passwordManagingReducer from "./reducers/passwordManagingReducer";
import profileReducer from "./reducers/profileReducer";
import recoveryReducer from "./reducers/recoveryReducer";
import registrationReducer from "./reducers/registrationReducer";
import thunk from "redux-thunk";

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const rootReducer = combineReducers({
    login: loginReducer,
    passwordManaging: passwordManagingReducer,
    profile: profileReducer,
    recovery: recoveryReducer,
    registration: registrationReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;