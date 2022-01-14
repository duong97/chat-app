import React , { useState, useEffect }from "react";
import {useAuth} from '../util/use-auth'
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Login from '../page/Login'
import Register from '../page/Register'
import ListUserActive from "../component/ListUserActive";

let getListUserActive = async (token) => {
    if(token){
        return fetch(process.env.REACT_APP_API_URL + '/users/active', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token:token})
        })
        .then(data => data.json())
    }
    return []
}

export default function Body() {
    const auth = useAuth()
    const [listUser, setListUser] = useState([])

    useEffect(async () => {
        let token = auth.user ? auth.user.token : undefined
        getListUserActive(token).then(users => {
            setListUser(users)
        })
    }, [auth]);

    return (
        <BrowserRouter>
            <Route path="/login">
                {auth.user ? <Redirect to={"/"}/> : <Login/>}
            </Route>
            <Route path="/register">
                {auth.user ? <Redirect to={"/"}/> : <Register/>}
            </Route>
            <Route path="/" exact>
                <ListUserActive listUser={listUser}/>
                <h1>Umsilabum</h1>
            </Route>
        </BrowserRouter>
    );
}
