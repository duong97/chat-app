import React, {useState, useEffect, useContext, createContext} from 'react'

const authContext = createContext()

export function ProvideAuth({children}) {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}

function useProvideAuth() {
    const [user, setUser] = useState(null)

    const signin = (username, password) => {
        return fetch(process.env.REACT_APP_API_URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
            .then(response => response.json())
            .then(data => {
                setUser(data)
                localStorage.setItem('token', data.token)
            })
    }

    const signout = () => {
        setUser(false)
        localStorage.removeItem('token')
    }

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            setUser({token})
        }
    }, []);


    return {
        user,
        signin,
        signout
    }
}