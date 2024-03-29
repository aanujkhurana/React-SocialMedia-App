import React, { useState, useEffect } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { useParams, useNavigate } from 'react-router-dom'
import { googleLogout } from '@react-oauth/google';

import { userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../utils/data'
import { client } from '../client'
import Spinner from './Spinner'
import MasoryLayout from './MasoryLayout'

const activeBtnStyles = 'bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none';
const inactiveBtnStyles = 'bg-primary mr-4 text-black font-bold p-2 rounded-full w-20 outline-none';


const UserProfile = () => {

    const [user, setUser] = useState(null);
    const [pins, setPins] = useState(null);
    const [text, setText] = useState("created");
    const [activeBtn, setActiveBtn] = useState("created");

    const navigate = useNavigate();
    const { userId } = useParams();

    const randomImage = "https://source.unsplash.com/1600x900/?nature,travel,food,architecture,animals,landscape,space,art,sky,beach,flowers"

    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    const logout = () => {
        googleLogout();
        localStorage.clear();
        navigate('/login');
    }

    useEffect(() => {
        const query = userQuery(userId);
        client.fetch(query).then((res) => {
            setUser(res[0]);
        });
    }, [userId]);

    useEffect(() => {
        if (text === 'created') {
            const createdPinsQuery = userCreatedPinsQuery(userId);
            client.fetch(createdPinsQuery).then((data) => {
                setPins(data);
            });
        } else {
            const savedPinsQuery = userSavedPinsQuery(userId);
            client.fetch(savedPinsQuery).then((data) => {
                setPins(data);
            });
        }
    }, [text, userId]);

    // useEffect(() => {
    //     window.location.reload(); // Reload the page whenever text changes
    // }, [text]);

    if (!userId) {
        return <Spinner message="Loading Profile....." />
    }

    return (
        <div className="relative pb-2 h-full justify-center items-center">
            <div className="flex flex-col pb-5">
                <div className="relative flex flex-col mb-7">
                    <div className="flex flex-col justify-center items-center">
                        <img
                            src={randomImage}
                            className="w-full h-370 2xl:h-510 shadow-lg object-cover"
                            alt="BannerPicture"
                        />
                        <img
                            className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover"
                            src={user?.image}
                            alt="user-pic"
                        />
                        <h1 className="font-bold text-3xl text-center mt-3 capitalize">
                            {user?.userName}
                        </h1>
                        <div className="absolute top-0 z-1 right-0 p-2">
                            {userId === User.sub && (
                                <button
                                    type="button"
                                    className=" bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
                                    onClick={() => logout()}
                                >
                                    <AiOutlineLogout color="red" fontSize={21} />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="text-center mb-7">
                        <button
                            type="button"
                            onClick={(e) => {
                                setText(e.target.textContent);
                                setActiveBtn('created');
                                window.location.reload();
                            }}
                            className={`${activeBtn === 'created' ? activeBtnStyles : inactiveBtnStyles}`}
                        >
                            Created
                        </button>
                        <button
                            type="button"
                            onClick={(e) => {
                                setText(e.target.textContent);
                                setActiveBtn('saved');
                            }}
                            className={`${activeBtn === 'saved' ? activeBtnStyles : inactiveBtnStyles}`}
                        >
                            Saved
                        </button>
                    </div>

                    <div className="px-2">
                        <MasoryLayout pins={pins} />
                    </div>

                    {pins?.length === 0 && (
                        <div className="flex justify-center font-bold items-center w-full text-1xl mt-2">
                            No Pins Found!
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserProfile