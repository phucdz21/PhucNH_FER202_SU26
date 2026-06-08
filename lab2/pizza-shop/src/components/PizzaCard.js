function PizzaCard(props) {
  const { name, price, originalPrice, image, badge } = props;

  return (
    <div className="card h-100 border-0 pizza-card shadow-sm position-relative">
      
      {/* Badge (SALE/NEW) */}
      {badge && (
        <span className="badge-custom-yellow position-absolute">
          {badge}
        </span>
      )}

      <img
        src={image}
        alt={name}
        className="card-img-top pizza-card-img"
      />

      <div className="card-body text-center d-flex flex-column justify-content-between p-3">
        
        <div>
          <h5 className="card-title text-start text-dark fw-bold mb-3">{name}</h5>
          
          <div className="price-container text-start mb-3">
            {originalPrice ? (
              <>
                <span className="text-muted text-decoration-line-through me-2">${originalPrice.toFixed(2)}</span>
                <span className="price-sale-active">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-muted">${price.toFixed(2)}</span>
            )}
          </div>
        </div>

        <button className="btn btn-buy-dark w-100 py-2">
          Buy
        </button>

      </div>

    </div>
  );
}

export default PizzaCard;