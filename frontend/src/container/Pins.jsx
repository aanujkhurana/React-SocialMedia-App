import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import { CreatePin, Feed, Navbar, PinDetail, Search, } from '../components';

const Pins = ({user}) => {

  const [searchTerms, setSearchTerms] = useState('')
  
  return (
    <div className='px-2 md:px-5'>
      <div className='bg-grey-50'>
        <Navbar searchTerms={searchTerms} setSearchTerms={setSearchTerms} user={user} />
      </div>
      <div className='h-full'>
        <Routes>
          <Route path="/" element={<Feed/>}></Route>
          <Route path="/category/:categoryId" element={<Feed/>}></Route>
          <Route path="/pin-detail/:pinId" element={<PinDetail user={user}/>}></Route>
          <Route path="/create-pin" element={<CreatePin user={user}/>}></Route>
          <Route path="/search" element={<Search searchTerms={searchTerms} setSearchTerms={setSearchTerms}/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default Pins