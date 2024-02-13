import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import Pin from './Pin'


const MasoryLayout = ({ pins }) => {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
            <Masonry className="flex animate-slide-fwd">
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