import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import MasonryLayout from './MasoryLayout.jsx';
import Spinner from './Spinner';
import { feedQuery, searchQuery } from '../utils/data.js';

const Feed = () => {

  const [Loading, setLoading] = useState(false)

  const [pins, setPins] = useState();

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
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
  }, [categoryId]);

  if (Loading) return <Spinner message="We're adding pins to your feed...." />
  if (!pins?.length) return <h2>No Pins Available!</h2>
  return (
    <div>
      {pins && (<MasonryLayout pins={pins} />)}
    </div>
  )
}

export default Feed