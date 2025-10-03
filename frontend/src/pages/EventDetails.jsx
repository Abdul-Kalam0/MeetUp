import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.jsx";

const EventDetails = () => {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState(null);

  const { data, loading, error } = useFetch(
    `https://meet-up-4sk3.vercel.app/events/${eventId}`
  );

  useEffect(() => {
    if (data?.event) setEventDetails(data.event);
  }, [data]);

  if (loading) return <p className="text-center mt-5">Loading event...</p>;
  if (error) return <p className="text-center mt-5 text-danger">{error}</p>;
  if (!eventDetails) return null;

  const maxVisibleSpeakers = 2; // show only 2 images
  const extraSpeakers = eventDetails.speakers.length - maxVisibleSpeakers;

  return (
    <>
      <Header />
      <main className="container my-4">
        <div className="d-flex gap-4 flex-wrap">
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
              <strong>Age Restriction:</strong> {eventDetails.ageRestriction}+
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

            <h4>Speakers ({eventDetails.speakers.length})</h4>
            <div className="d-flex align-items-center gap-2">
              {eventDetails.speakers
                .slice(0, maxVisibleSpeakers)
                .map((speaker, idx) => (
                  <img
                    key={idx}
                    src={speaker.image}
                    alt={speaker.name}
                    title={speaker.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #fff",
                      boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                    }}
                  />
                ))}

              {extraSpeakers > 0 && (
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#6c757d",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                  }}
                  title={`+${extraSpeakers} more`}
                >
                  +{extraSpeakers}
                </div>
              )}
            </div>

            {/* Show names of all speakers */}
            <div className="mt-2">
              {eventDetails.speakers.map((speaker, idx) => (
                <p key={idx} className="mb-1">
                  {speaker.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventDetails;
