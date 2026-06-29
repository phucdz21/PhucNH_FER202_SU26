import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import { newLists } from '../data/newsData';

function NewsDetail() {
  const { id } = useParams();
  const newsItem = newLists.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <Container className="my-5 text-center">
        <h3 className="text-danger">News Not Found</h3>
        <Link to="/news">
          <Button variant="primary" className="mt-3">Back to News</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="my-4" style={{ maxWidth: '800px' }}>
      <Card className="shadow-sm">
        <Card.Img variant="top" src={`/${newsItem.images}`} alt={newsItem.title} style={{ maxHeight: '450px', objectFit: 'cover' }} />
        <Card.Body className="p-4">
          <Card.Title className="h3 mb-3">{newsItem.title}</Card.Title>
          <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444' }}>
            {newsItem.description}
          </Card.Text>
          <div className="mt-4">
            <Link to="/news">
              <Button variant="outline-primary">Back to News</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NewsDetail;
