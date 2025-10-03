import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    hostedBy: {
      type: String,
      required: true,
    },
    details: {
      type: String,
    },
    dressCode: {
      type: String,
    },
    ageRestriction: {
      type: Number,
    },
    priceInRupees: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    // ✅ Modified speakers schema: now stores name + image
    speakers: [
      {
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          default: "", // optional
        },
      },
    ],
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
