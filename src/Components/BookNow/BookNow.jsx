import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookNow = () => {
    // Retrieve the stored data from local storage
    const showDetails = JSON.parse(localStorage.getItem('showDetails'));
    console.log(showDetails);
    const {
        id,
        name,
        image,
        rating,
        summary,
        genres,
        language,
        network,
        premiered,
        status,
    } = showDetails;


    return (
        <div>

            <div>


                <div className="container my-5 show-details-container">
                    <div className="show-details-card">

                        <div className="show-details-content">
                            <div className="d-flex flex-wrap justify-content-center">
                                <div className=" ">
                                    <img
                                        className="img-fluid show-details-image"
                                        variant="top"
                                        src={image?.medium}
                                    />
                                </div>
                                <div className="my-2">
                                    <div className="show-details-title">
                                        {name ? `Movie Name: ${name}` : 'Movie Name Not Available'}
                                    </div>
                                    <div className="show-details-summary">Summary: {summary}</div>
                                    <div className="show-details-details">
                                        <div className="show-details-details-item">
                                            <span className="show-details-details-label">Genres:</span> {genres?.join(', ')}
                                        </div>
                                        <div className="show-details-details-item">
                                            <span className="show-details-details-label">Language:</span> {language}
                                        </div>
                                        <div className="show-details-details-item">
                                            <span className="show-details-details-label">Network:</span>{' '}
                                            {network?.name || 'Not Available'}
                                        </div>
                                        <div className="show-details-details-item">
                                            <span className="show-details-details-label">Premiered:</span> {premiered}
                                        </div>
                                        <div className="show-details-details-item">
                                            <span className="show-details-details-label">Status:</span> {status}
                                        </div>
                                        <div className="show-details-details-item">
                                            <span className="show-details-details-label">Rating:</span>{' '}
                                            {rating?.average || 'Not Available'}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>

            </div>
        </div>
    );
};

export default BookNow;