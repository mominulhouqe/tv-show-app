import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './showDetails.css';

const ShowDetails = () => {
  const showDetails = JSON.parse(localStorage.getItem('showDetails'));

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
    <div className="container show-details-container">
      <Card className="show-details-card">
        <Card.Header className="show-details-header">Featured</Card.Header>
        <Card.Body className="show-details-content">
          <div className="row ">
            <div className="col-md-4 d-flex text-center align-items-center justify-content-center">
              <Card.Img
                className="img-fluid show-details-image"
                variant="right"
                src={image?.medium}
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
                  <span className="show-details-details-label">Network:</span> {network?.name || 'Not Available'}
                </div>
                <div className="show-details-details-item">
                  <span className="show-details-details-label">Premiered:</span> {premiered}
                </div>
                <div className="show-details-details-item">
                  <span className="show-details-details-label">Status:</span> {status}
                </div>
                <div className="show-details-details-item">
                  <span className="show-details-details-label">Rating:</span> {rating?.average || 'Not Available'}
                </div>
              </div>
              <Button className="show-details-button" variant="primary">
                Book Now
              </Button>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default ShowDetails;
