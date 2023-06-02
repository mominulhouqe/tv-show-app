import React from 'react';

const BookNow = () => {
    // Retrieve the stored data from local storage
    const showDetails = JSON.parse(localStorage.getItem('showDetails'));
    return (
        <div>



            <div>
                <h2>Booking Details</h2>
                <p>Show Name: {showDetails.name}</p>
                <p>Summary: {showDetails.summary}</p>
                {/* Display other details as needed */}
            </div>
        </div>
    );
};

export default BookNow;