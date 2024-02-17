import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Home from './container/Home'
import Login from './components/Login'

import { GoogleOAuthProvider } from '@react-oauth/google';

import { fetchUser } from './utils/fetchUser';
import { useEffect } from 'react'

function app() {
    const navigate = useNavigate();

    useEffect(() => {
        const user = fetchUser();
        if (!user) {
            navigate('/login');
        }
    }, [])


    return (
        <GoogleOAuthProvider clientId='215360589423-fghv07s51jvji74m4uka7o1n424llo80.apps.googleusercontent.com'>
            <Routes>
                <Route path="Login" element={<Login />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </GoogleOAuthProvider>
    )
}

export default app