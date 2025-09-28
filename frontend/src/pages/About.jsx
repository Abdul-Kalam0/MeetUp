import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="container py-5">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Meetup Events</h1>
          <p className="text-muted fs-5">
            Discover, connect, and grow through exciting online and offline
            events.
          </p>
        </div>

        {/* Who We Are */}
        <div className="row mb-5">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=60"
              alt="Meetup Community"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h3 className="fw-bold">Who We Are</h3>
              <p className="text-muted">
                Meetup Events is a community-driven platform that brings people
                together through engaging{" "}
                <b>tech talks, workshops, seminars, and networking sessions</b>.
                Whether you’re a student, professional, or enthusiast, our
                events provide a space to learn, collaborate, and share
                knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="row mb-5">
          <div className="col-md-6 d-flex align-items-center order-md-2">
            <div>
              <h3 className="fw-bold">What We Offer</h3>
              <ul className="text-muted">
                <li>📅 Curated online & offline events across industries</li>
                <li>🎤 Opportunities to interact with experts & mentors</li>
                <li>🤝 A platform to build lasting professional networks</li>
                <li>🚀 Skill-building workshops and hackathons</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60"
              alt="Events"
              className="img-fluid rounded-3 shadow"
            />
          </div>
        </div>

        {/* Join Us */}
        <div className="text-center py-5 bg-light rounded-3 shadow-sm">
          <h2 className="fw-bold">Join Our Community</h2>
          <p className="text-muted">
            Explore events, learn new skills, and connect with like-minded
            people.
          </p>
          <Link to="/events" className="btn btn-dark px-4 py-2 mt-3">
            Browse Events
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
