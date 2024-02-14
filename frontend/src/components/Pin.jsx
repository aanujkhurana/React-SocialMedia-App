import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { fetchUser } from '../utils/fetchUser';

import { urlFor, client } from '../client';

const Pin = ({ pin: { postedBy, image, _id, destination, save, userId } }) => {

    const [PostHovered, setPostHovered] = useState(false);

    const user = fetchUser();
    const navigate = useNavigate();

    const alreadySaved = !!(save?.filter((item) => item.userId === user._id))?.length;

    const savePin = (id) => {
        if(!alreadySaved){
            client
                .patch(id)
                .setIfMissing({ save: [] })
                .insert ('after', 'save[-1]', [
                    {
                        _key: uuidv4(),
                        userId: user.sub,
                        postedBy: {
                            _type: 'postedBy',
                            _ref: user.sub
                        }
                    }
                ])
                .commit()
                .then(() => {
                    window.location.reload();
                });
        }
    }

    const deletePin = (id) => {
        client
            .delete(id)
            .then(() => {
                window.location.reload();
            });
    }

    return (
        <div className='m-2'>
            <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            onClick={() => navigate(`/pin/${_id}`)}
            className='relative cursor-zoom-in w-auto hover:shadow-lg rouded-lg overflow-hidden transition-all duration-500 ease-in-out'
            >
                <img 
                className='rounded-lg w-full h-auto'
                src={urlFor(image).width(250).url()} alt="pin" />
                {PostHovered && (
                    <div
                    className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50'
                    style={{ height: '100%' }}
                    >
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-2'>
                                <a href={`${image?.asset?.url}?dl=`}
                                download
                                onClick={(e) => e.stopPropagation()}
                                className='bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none'
                                >
                                    <MdDownloadForOffline />
                                </a>
                            </div>
                            {alreadySaved ? (
                                <button
                                type='button'
                                className='bg-red-900 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none'
                                >
                                    { save?.length } Saved
                                </button>
                            ):(
                                <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    savePin(_id);
                                
                                }}
                                type='button'
                                className='bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none'
                                >
                                    { save?.length } Save
                                </button>
                            )}
                        </div>
                        <div className='flex justify-between items-center gap-2 w-full'>
                                {destination && (
                                    <a
                                    href='{destination}'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='bg-white flex items-center g-2 text-black font-bold p-2 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md'
                                    >
                                        <BsFillArrowUpRightCircleFill className='mr-1'/> 
                                        {destination.slice(11,28)}
                                    </a>
                                )}
                                {userId === user._id && (
                                    <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deletePin(_id);
                                    }}
                                    type='button'
                                    className='bg-white text-black font-bold p-2 pl-4 pr-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md'
                                    >
                                        <AiTwotoneDelete />
                                    </button>
                                )}
                        </div>
                    </div>
                )}
            </div>
            <Link
            to={`/user-profile/${postedBy?._id}`}
            className='flex gap-2 mt-2 items-center'
            >
                <img
                src={postedBy?.image}
                alt='user-pic'
                className='w-8 h-8 rounded-full object-cover'
                />
                <p className='font-medium capitalize'>{postedBy?.userName}</p>
            </Link>
        </div>
    )
}

export default Pin