import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './showDetails.css';
import Menu from '../Home/Menu';
import { Link } from 'react-router-dom';

const ShowDetails = () => {
  const showDetails = JSON.parse(localStorage.getItem('showDetails'));

  if (!showDetails) {
    // Handle the case when showDetails is null
    return <div>Loading...</div>;
  }

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

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
  const handleBookNow = () => {
    const existingCart = localStorage.getItem('cart');
    let cart = [];
  
    if (existingCart) {
      cart = JSON.parse(existingCart);
    }
  
    const isItemAlreadyAdded = cart.some((item) => item.id === id);
  
    if (isItemAlreadyAdded) {
      toast.error('You have already added!');
      setIsButtonDisabled(true);
    } else {
      toast.success('Your movie was successfully added!');
      cart.push(showDetails);
      localStorage.setItem('cart', JSON.stringify(cart));
      setIsButtonDisabled(true);
    }
  };
  
  return (
    <div>
      <div className="container">
        <Menu />
        <Card className="show-details-card container mx-auto">
          <Card.Header className="show-details-header">Featured</Card.Header>
          <Card.Body className="show-details-content">
            <div className="row">
              <div className="col-md-4 d-flex text-center align-items-center justify-content-center">
                <Card.Img
                  className="img-fluid show-details-image"
                  variant="right"
                  src={image?.medium}
                  alt={name}
                />
              </div>
              <div className="col-md-8">
                <Card.Title className="show-details-title">
                  {name ? `Movie Name: ${name}` : 'Movie Name Not Available'}
                </Card.Title>
                <Card.Text className="show-details-summary">Summary: {summary}</Card.Text>
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
                <Button
                  className="show-details-button"
                  variant="primary"
                  onClick={() => handleBookNow(id)}
                  disabled={isButtonDisabled}
                >
                  {isButtonDisabled ? 'Booked' : 'Book Now'}
                </Button>

              </div>
            </div>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ShowDetails;
