import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.jsx";

const EventDetails = () => {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState(null);

  const { data, loading, error } = useFetch(
    `http://localhost:3000/events/${eventId}`
  );

  // ✅ Update state when data loads
  useEffect(() => {
    if (data?.event) setEventDetails(data.event);
  }, [data]);

  if (loading) return <p className="text-center mt-5">Loading event...</p>;
  if (error) return <p className="text-center mt-5 text-danger">{error}</p>;
  if (!eventDetails) return null; // ❌ Safeguard

  return (
    <>
      <Header />
      <main className="container my-4">
        <div className="d-flex gap-4 justify-content-between">
          {/* Left */}
          <div className="flex-grow-1">
            <h1>{eventDetails.title}</h1>
            <h5>Hosted By:</h5>
            <p>{eventDetails.hostedBy}</p>
            <img
              src={eventDetails.image}
              alt={eventDetails.title}
              className="img-fluid rounded mb-3"
            />
            <h4>Details</h4>
            <p>{eventDetails.details}</p>

            <h4>Additional Information:</h4>
            <p>
              <strong>Dress Code:</strong> {eventDetails.dressCode}
            </p>
            <p>
              <strong>Age Restriction:</strong> {eventDetails.ageRestriction}
            </p>
          </div>

          {/* Right */}
          <div style={{ minWidth: "250px" }}>
            <h4>Event Info</h4>
            <p>
              <strong>Start:</strong> {eventDetails.startTime}
            </p>
            <p>
              <strong>End:</strong> {eventDetails.endTime}
            </p>
            <p>
              <strong>Address:</strong> {eventDetails.address}
            </p>
            <p>
              <strong>Price:</strong> ₹{eventDetails.priceInRupees}
            </p>

            <h4>Speakers</h4>
            <p>{eventDetails.speakers.join(", ")}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventDetails;
