import React, { useState, useEffect } from 'react';

import ViewsDetails from '../ViewsDetails/ViewsDetails';
import Menu from '../Home/Menu';

const ShowList = ({ onItemClick }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res => res.json())
      .then(data => setShows(data));
  }, []);

  const handleItemClick = (show) => {
    localStorage.setItem('selectedShow', JSON.stringify(show));
    onItemClick();
  };

  return (
    <div className='container'>
      
      <h2 className='text-center my-3 p-5 fw-bold bg-light '>Movies Category</h2>
      <div className='row'>
        {shows.map((show) => <ViewsDetails 
        key={show.show.id}
        show={show.show}
        ></ViewsDetails> )}
      </div>


      


    </div>
  );
};

export default ShowList;
