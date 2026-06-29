import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { newLists } from '../data/newsData';
import NewsItem from '../components/NewsItem';

function News() {
  return (
    <div>
      <h3 className="text-danger text-start ms-2 mt-3 mb-4">News Category</h3>
      <Container className="my-4">
        <Row className="g-4">
          {newLists.map((news) => (
            <Col key={news.id} sm={6} lg={3}>
              <NewsItem news={news} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default News;