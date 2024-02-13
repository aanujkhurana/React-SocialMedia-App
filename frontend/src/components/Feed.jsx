import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import MasonryLayout from './MasoryLayout.jsx';
import Spinner from './Spinner';
import { feedQuery, searchQuery } from '../utils/data.js';

const Feed = () => {

  const [Loading, setLoading] = useState(false)
  
  const [pins, setPins] = useState();
  
  const { categoryID }  = useParams();
  
  useEffect(() => {
    setLoading(true);
    if(categoryID) {
      const query = searchQuery(categoryID);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
    else {
      client.fetch(feedQuery)
      .then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryID]);
  
  if (Loading) return <Spinner message="We're adding new {Items} to your feed...."/>
  return (
    <div>
      {pins && (<MasonryLayout pins={pins} />)}
    </div>
  )
}

export default Feed