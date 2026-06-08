import './App.css';

import Header from './components/Header';
import PizzaCard from './components/PizzaCard';
import Footer from './components/Footer';


import menu1 from './assets/Images/menu1.jpg';
import menu2 from './assets/Images/menu2.jpg';
import menu3 from './assets/Images/menu3.jpg';
import menu4 from './assets/Images/menu4.jpg';


import pizza1 from './assets/Images/pizza1.jpg';
import pizza2 from './assets/Images/pizza2.jpg';
import pizza3 from './assets/Images/pizza3.jpg';
import pizza4 from './assets/Images/pizza4.jpg';
import pizza5 from './assets/Images/pizza5.jpg';

function App() {

  const pizzas = [
    {
      name: 'Margherita Pizza',
      price: 24.00,
      originalPrice: 40.00,
      image: menu1,
      badge: 'SALE'
    },
    {
      name: 'Mushroom Pizza',
      price: 25.00,
      originalPrice: null,
      image: menu2,
      badge: null
    },
    {
      name: 'Hawaiian Pizza',
      price: 30.00,
      originalPrice: null,
      image: menu3,
      badge: 'NEW'
    },
    {
      name: 'Pesto Pizza',
      price: 30.00,
      originalPrice: 50.00,
      image: menu4,
      badge: 'SALE'
    }
  ];

  return (
    <div className="app-container bg-dark-theme text-white">
      <Header />

   
      <div id="pizzaCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#pizzaCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#pizzaCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#pizzaCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#pizzaCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#pizzaCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-image-container" style={{ backgroundImage: `url(${pizza1})` }}>
              <div className="carousel-caption-overlay">
                <h2 className="brand-serif text-white display-4">Neapolitan Pizza</h2>
                <p className="lead text-white-50">If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-container" style={{ backgroundImage: `url(${pizza2})` }}>
              <div className="carousel-caption-overlay">
                <h2 className="brand-serif text-white display-4">Pepperoni Pizza</h2>
                <p className="lead text-white-50">Savor the classic taste of pepperoni with rich mozzarella cheese and fresh sauce.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-container" style={{ backgroundImage: `url(${pizza3})` }}>
              <div className="carousel-caption-overlay">
                <h2 className="brand-serif text-white display-4">Cheese Pizza</h2>
                <p className="lead text-white-50">A delightful blend of multiple cheese varieties melted to golden perfection.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-container" style={{ backgroundImage: `url(${pizza4})` }}>
              <div className="carousel-caption-overlay">
                <h2 className="brand-serif text-white display-4">Vegetarian Pizza</h2>
                <p className="lead text-white-50">Loaded with crisp bell peppers, onions, olives, and fresh tomatoes.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-container" style={{ backgroundImage: `url(${pizza5})` }}>
              <div className="carousel-caption-overlay">
                <h2 className="brand-serif text-white display-4">Seafood Pizza</h2>
                <p className="lead text-white-50">Premium quality prawns, squid, and herbs to give you a fresh sea breeze flavor.</p>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#pizzaCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container py-5">
        
        {/* Our Menu Title */}
        <div className="row mb-4">
          <div className="col">
            <h2 className="brand-serif section-title text-start text-white mb-4">Our Menu</h2>
          </div>
        </div>

        {/* Pizza Menu Cards Grid */}
        <div className="row">
          {pizzas.map((pizza, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <PizzaCard
                name={pizza.name}
                price={pizza.price}
                originalPrice={pizza.originalPrice}
                image={pizza.image}
                badge={pizza.badge}
              />
            </div>
          ))}
        </div>

        {/* Book Your Table Form */}
        <div className="book-table-section mt-5 pt-4 text-center">
          <h2 className="brand-serif form-section-title text-white mb-4">Book Your Table</h2>
          
          <form className="booking-form mx-auto">
            <div className="row g-3 mb-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control booking-input"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  type="email"
                  className="form-control booking-input"
                  placeholder="Your Email *"
                  required
                />
              </div>
              <div className="col-md-4">
                <select className="form-select booking-input text-muted" defaultValue="" required>
                  <option value="" disabled hidden>Select a Service</option>
                  <option value="dine-in">Dine In</option>
                  <option value="takeaway">Takeaway</option>
                  <option value="delivery">Home Delivery</option>
                </select>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <textarea
                  className="form-control booking-textarea"
                  placeholder="Please write your comment"
                  rows="6"
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col text-start">
                <button className="btn btn-send-message py-2 px-4 fw-semibold" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default App;