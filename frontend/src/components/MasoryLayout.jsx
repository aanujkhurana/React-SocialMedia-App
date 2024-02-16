import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Pin from './Pin'


const MasoryLayout = ({ pins }) => {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 200: 1, 350: 2, 900: 3, 1200: 4, 1600: 5 }}
        >
            <Masonry className="flex animate-slide-fwd" gutter="10px">
                {pins?.map((pin) => (
                    <div key={pin._id} className="w-max">
                        <Pin pin={pin} />
                    </div>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default MasoryLayout