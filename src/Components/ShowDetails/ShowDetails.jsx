import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './showDetails.css';

const ShowDetails = () => {
  const showDetails = JSON.parse(localStorage.getItem('showDetails'));

  const { id, name, image, rating, summary } = showDetails;

  return (
    <div className="container mx-auto">
      <Card className="mt-5">
        <Card.Header className="text-center">Featured</Card.Header>
        <Card.Body className="d-flex text-center align-items-center justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card.Img
                className="img-fluid show-image"
                variant="right"
                src={image.medium}
              />
            </div>
            <div className="col-md-8 my-lg-5">
              <Card.Title>Movies Name: {name}</Card.Title>
              <Card.Text>{summary}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default ShowDetails;
