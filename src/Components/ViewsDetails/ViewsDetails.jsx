import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ViewsDetails = ({ show }) => {
  const { id, name, image, rating, summary } = show;
  const [showFullSummary, setShowFullSummary] = useState(false);

  const toggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  const handleWatchNow = () => {
    // Save the component data to localStorage
    localStorage.setItem('showDetails', JSON.stringify(show));
  };

  return (
    <div>
      <Row xs={1} md={4} className="g-4 mb-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={image.medium} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="text-muted">
                  {showFullSummary ? summary : summary.slice(0, 150) + '...'}
                  {summary.length > 150 && (
                    <a className="btn btn-link" onClick={toggleSummary}>
                      {showFullSummary ? 'Show Less' : 'See More'}
                    </a>
                  )}
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Rating: {rating.average}</small>
                </Card.Text>
                <Link to={`/watch`}>
                  <Button variant="primary" onClick={handleWatchNow}>
                    Watch Now
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ViewsDetails;
