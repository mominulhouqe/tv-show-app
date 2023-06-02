import React, { useState, useEffect } from 'react';

import ViewsDetails from '../ViewsDetails/ViewsDetails';

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
    <div>
      <h2>Show List</h2>
      <div className='row'>
        {shows.map((show) => <ViewsDetails 
        key={show.show.id}
        show={show.show}
        ></ViewsDetails> )}
      </div>
{/* 

 <li key={show.show.id}>
            <img src={show.show.image.medium} alt="" />
            <h3>{show.show.name}</h3>
            <p>{show.show.summary}</p>
            <button onClick={() => handleItemClick(show)}>View Details</button>
          </li>
*/}


      


    </div>
  );
};

export default ShowList;
