function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-custom py-3">
      <div className="container">

        <a
          className="navbar-brand brand-serif"
          href="/"
        >
          Pizza House
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#pizzaNavbar"
          aria-controls="pizzaNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="pizzaNavbar">
          <ul className="navbar-nav me-auto ms-lg-5 ms-md-4 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white-50 px-3 hover-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50 px-3 hover-white" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50 px-3 hover-white" href="/">
                Contact
              </a>
            </li>
          </ul>

          <form className="d-flex navbar-search-group" role="search">
            <input
              className="form-control search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-search-red" type="submit">
              <i className="fa-solid fa-magnifying-glass text-white"></i>
            </button>
          </form>
        </div>

      </div>
    </nav>
  );
}

export default Header;