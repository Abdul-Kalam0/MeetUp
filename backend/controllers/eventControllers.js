import mongoose from "mongoose";
import EventModel from "../models/eventModel.js";

const createEvent = async (req, res) => {
  const {
    title,
    type,
    startTime,
    endTime,
    hostedBy,
    priceInRupees,
    address,
    speakers,
  } = req.body;

  try {
    if (
      !title ||
      !type ||
      !startTime ||
      !endTime ||
      !hostedBy ||
      !priceInRupees ||
      !address ||
      !speakers
    )
      return res
        .status(400)
        .json({ success: false, message: "Enter valid data" });
    const newEvent = await EventModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event: newEvent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await EventModel.find();
    console.log(events);
    if (!events)
      return res
        .status(404)
        .json({ success: false, message: "Events do not exist" });
    res.status(200).json({
      success: true,
      message: "Events fetched successfully",
      events: events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getEventById = async (req, res) => {
  const { eventId } = req.params;

  // ✅ Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid event ID" });
  }

  try {
    const event = await EventModel.findById(eventId);
    if (!event)
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });

    res.status(200).json({
      success: true,
      message: "Event fetched successfully",
      event,
    });
  } catch (error) {
    console.error(error); // ✅ Log error to see exact problem
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export { createEvent, getAllEvents, getEventById };
