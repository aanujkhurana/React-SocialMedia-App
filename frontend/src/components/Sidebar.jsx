import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

import logo from "../assets/logo.png"

const isNotActiveStyle = "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-300 ease-in-out Capitalize"
const isActiveStyle = "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-300 ease-in-out Capitalize"

const Categories = [
    { name : 'Animals'},
    { name : 'Art'},
    { name : 'Design'},
    { name : 'DIY & Crafts'},
    { name : 'Education'},
    { name : 'Film, Music & Books'},
    {name : 'Food & Drink'},
    {name : 'Other'},
]


const sidebar = ({user, closeToggle}) => {
    
    const closeSidebar = () => {
        if(closeToggle) closeToggle(false);
    }

    return (
        <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 h-scrollbar'>
            <div className='flex flex-col'>
                <Link 
                to="/" className=' flex px-5 gap-2 my-6 pt-1 w-199 items-center'
                onClick={() => closeSidebar(false)}>
                    <img src={logo} alt="logo" className="w-full" />
                </Link>
                <div className='flex flex-col gap-5'>
                    <NavLink
                    to="/"
                    className={({ isActive })=> isActive ? isActiveStyle : isNotActiveStyle} 
                    onClick={closeSidebar}
                    >
                        <RiHomeFill fontSize={20} />
                        Home
                    </NavLink>
                    <h3 className='mt-2 px-5 text-base 2xl:text-xl'>Discover Categories</h3>
                    {Categories.slice(0, Categories.length - 1).map((category) => (
                        <NavLink
                        to={`/category/${category.name}`}
                        className={({ isActive })=> isActive ? isActiveStyle : isNotActiveStyle} 
                        onClick={closeSidebar}
                        key={category.name}
                        >
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {user && (
                <Link
                to={`/user-profile/${user._id}`}
                className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'
                onClick={closeSidebar}
                >
                    <img src={user.image} alt="user-pic" className="w-10 h-10 rounded-full " />
                    <p>{user.userName}</p>
                </Link>
            )}
        </div>
    )
}

export default sidebar