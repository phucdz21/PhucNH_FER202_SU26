import React from 'react';
import { Link } from 'react-router-dom';

function NewsItem({ news }) {
  return (
    <div className="card h-100 news-card">
      <img src={`/${news.images}`} className="card-img-top" alt={news.title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h6 className="card-title">{news.title}</h6>
          <p className="card-text">{news.description}</p>
        </div>
        <div className="mt-2">
          <Link to={`/news/${news.id}`} className="text-decoration-underline" style={{ fontSize: '0.85rem' }}>
            {news.title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;