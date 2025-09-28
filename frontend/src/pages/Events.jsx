import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetch";

const Events = () => {
  const [searchValue, setSearchValue] = useState(""); // controlled input
  const [filterData, setFilterData] = useState([]);

  // ✅ Fetch events from API
  const { data, loading, error } = useFetch(
    "https://meet-up-4sk3.vercel.app/events"
  );
  const events = data?.events || [];

  // ✅ Initialize filterData when API data loads
  useEffect(() => {
    setFilterData(events);
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

  // ✅ Dropdown filter handler
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

      <main className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>All Events</h1>

          {/* Event type filter */}
          <select className="form-select w-auto" onChange={changeHandle}>
            <option value="All">All</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        {/* Event cards */}
        <div className="row g-4">
          {(filterData.length > 0 ? filterData : events).map((event) => (
            <div className="col-12 col-md-4" key={event._id}>
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <span className="badge bg-primary position-absolute top-0 start-0 m-2">
                    {event.type}
                  </span>
                </div>

                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    <Link
                      to={`/events/${event._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {event.title}
                    </Link>
                  </h5>
                  <p className="text-muted mb-1">
                    {event.date} • {event.startTime}
                  </p>
                  <p className="mb-0">{event.hostedBy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filterData.length === 0 && (
          <p className="text-center mt-5">No events found.</p>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Events;
