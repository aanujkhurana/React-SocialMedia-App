import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from './container/Home'
import Login from './components/Login'

import { GoogleOAuthProvider } from '@react-oauth/google';

import { fetchUser } from './utils/fetchUser';

const googleApiKey = import.meta.env.VITE_GOOGLE_API_TOKEN

function app() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = fetchUser();
        if (!user) {
            navigate('/login');
        }
    }, [])


    return (
        <GoogleOAuthProvider clientId={googleApiKey} >
            <Routes>
                <Route path="Login" element={<Login />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </GoogleOAuthProvider>
    )
}

export default app