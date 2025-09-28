import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = ({ searchValue, setSearchValue, searchEvents }) => {
  // ✅ Handle search input and propagate to parent
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value); // Update local search input state
    searchEvents(value); // Call parent handler to filter events
  };

  return (
    <header className="bg-light border-bottom">
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo + Navbar */}
        <div className="d-flex justify-content-between align-items-center">
          <h3
            className="fw-bold"
            style={{ color: "#f64060", fontFamily: "cursive" }}
          >
            Meetup
          </h3>

          <nav className="navbar">
            <ul className="nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" style={{ color: "black" }}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/events"
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={{ color: "black" }}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="input-group" style={{ maxWidth: "300px" }}>
          <span className="input-group-text bg-white border-end-0">
            <FaSearch size={14} className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search by title or type"
            value={searchValue} // ✅ Controlled input
            onChange={handleSearch} // ✅ Calls parent search handler
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
