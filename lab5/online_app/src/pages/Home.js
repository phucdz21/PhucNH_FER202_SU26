import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const slides = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.jpg'];
const menuIcons = Array.from({ length: 6 }, (_, i) =>
  `/images/menu-0${i + 1}.jpg`
);

function Home() {
  return (
    <div>
      <Carousel>
        {slides.map((src, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={src} alt={`slide-${i}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="home-menu-icons">
        {menuIcons.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`menu-${i}`}
            className="menu-icon"
            style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }}
          />
        ))}
      </div>

      <h4 className="text-danger text-start mt-3 ms-2">This is Home Page</h4>

      <div className="text-center mt-4 mb-4">
        <Link to="/news" className="btn btn-outline-primary me-2">Xem tin tức</Link>
        <Link to="/quizzes" className="btn btn-outline-success">Làm Quiz</Link>
      </div>
    </div>
  );
}

export default Home;