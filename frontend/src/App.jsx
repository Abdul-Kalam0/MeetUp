import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState([]);

  const { data, loading, error } = useFetch(
    "https://meet-up-4sk3.vercel.app/events"
  );
  const events = data?.events ?? []; // ✅ stable reference

  // ✅ Update filtered data only when events change
  useEffect(() => {
    if (events.length > 0) setFilterData(events);
  }, [events]);

  // ✅ Search handler
  const searchEvents = (value) => {
    setFilterData(
      events.filter(
        (e) =>
          e.title.toLowerCase().includes(value.toLowerCase()) ||
          e.type.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // ✅ Dropdown filter
  const changeHandle = (e) => {
    const { value } = e.target;
    if (value === "All") setFilterData(events);
    else setFilterData(events.filter((event) => event.type === value));
  };

  if (loading) return <p className="text-center mt-5">Loading events...</p>;
  if (error) return <p className="text-center mt-5 text-danger">{error}</p>;

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchEvents={searchEvents}
      />

      <main>
        <div className="bg-gray text-black">
          <div className="container">
            <div className="d-flex justify-content-between py-4 align-items-center">
              <h1>Meetup Events</h1>

              {/* Filter Dropdown */}
              <select className="form-select w-auto" onChange={changeHandle}>
                <option value="All">All</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

            {/* Event Cards */}
            <div className="row g-5">
              {filterData.map((event) => (
                <div className="col-12 col-md-4 mb-4" key={event._id}>
                  <div className="card border-0 h-100">
                    <div className="position-relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="card-img-top img-fluid rounded-2"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <span className="badge bg-light text-muted position-absolute top-0 start-0 m-2 py-2">
                        {event.type}
                      </span>
                    </div>
                    <div className="card-body">
                      <p className="card-text text-muted mb-1">
                        {event.date} • {event.startTime}
                      </p>
                      <h5 className="card-title fw-bold">
                        <Link
                          to={`/events/${event._id}`}
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          {event.title}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
