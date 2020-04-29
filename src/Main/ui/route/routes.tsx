import React from 'react';
import {Route} from "react-router-dom";
import Profile from "../../../Features/auth/profile/profile";
import Login from "../../../Features/auth/login/login";
import Recovery from "../../../Features/auth/recovery/recovery";
import PasswordManaging from "../../../Features/auth/passwordManaging/passwordManaging";
import Registration from "../../../Features/auth/registration/registration";

const Routes = () => {
    return (
        <>
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/authorisation' render={() => <Login/>}/>
            <Route path='/recovery' render={() => <Recovery/>}/>
            <Route path='/new-password' render={() => <PasswordManaging/>}/>
            <Route path='/registration' render={() => <Registration/>}/>
        </>
    )
}

export default Routes