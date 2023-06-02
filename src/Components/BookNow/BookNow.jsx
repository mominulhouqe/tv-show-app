import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from '../Home/Menu';

const BookNow = () => {
  const [showDetails, setShowDetails] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    setShowDetails(cart);
  }, []);

  if (showDetails.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container">
        <Menu />
        {showDetails.map((item) => (
          <Card className="show-details-card container mx-auto" key={item.id}>
            <Card.Header className="show-details-header">Featured</Card.Header>
            <Card.Body className="show-details-content">
              <div className="row">
                <div className=" d-flex text-center align-items-center justify-content-center">
                  <Card.Img
                    className="img-fluid show-details-image"
                    variant="right"
                    src={item.image?.medium}
                    alt={item.name}
                  />
                </div>
                <div className="">
                  <Card.Title className="show-details-title">
                    {item.name ? `Movie Name: ${item.name}` : 'Movie Name Not Available'}
                  </Card.Title>
                  <Card.Text className="show-details-summary">Summary: {item.summary}</Card.Text>
                  <div className="show-details-details">
                    <div className="show-details-details-item">
                      <span className="show-details-details-label">Genres:</span> {item.genres?.join(', ')}
                    </div>
                    <div className="show-details-details-item">
                      <span className="show-details-details-label">Language:</span> {item.language}
                    </div>
                    <div className="show-details-details-item">
                      <span className="show-details-details-label">Network:</span>{' '}
                      {item.network?.name || 'Not Available'}
                    </div>
                    <div className="show-details-details-item">
                      <span className="show-details-details-label">Premiered:</span> {item.premiered}
                    </div>
                    <div className="show-details-details-item">
                      <span className="show-details-details-label">Status:</span> {item.status}
                    </div>
                    <div className="show-details-details-item">
                      <span className="show-details-details-label">Rating:</span>{' '}
                      {item.rating?.average || 'Not Available'}
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookNow;
