import React, { useState } from "react";
import { events } from "../../static/bannerData";

const Events = () => {
  const [activeTab, setActiveTab] = useState("promotional");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventData =
    activeTab === "promotional"
      ? events[0].promotionalEvents
      : events[0].upcomingEvents;

  return (
    <React.Fragment>
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 text-lg font-semibold rounded-t-lg ${
              activeTab === "promotional"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("promotional")}
          >
            Promotional Events
          </button>
          <button
            className={`px-6 py-2 text-lg font-semibold rounded-t-lg ml-2 ${
              activeTab === "upcoming"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Events
          </button>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventData.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Event Image */}
              <img
                src={event.images[0]}
                alt={event.title}
                className="w-full h-52 object-cover"
              />

              {/* Event Details */}
              <div className="p-5">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600">
                  {event.date} - {event.location}
                </p>
                <p className="mt-2 text-gray-700 text-sm">
                  {event.description}
                </p>

                {/* View Images Button */}
                <button
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
                  onClick={() => setSelectedEvent(event)}
                >
                  View Images
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-[90%] md:w-[60%] lg:w-[50%] max-h-[80vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="text-xl font-bold">
                  {selectedEvent.title} - Images
                </h3>
                <button
                  className="text-gray-600 hover:text-red-500 text-2xl"
                  onClick={() => setSelectedEvent(null)}
                >
                  &times;
                </button>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {selectedEvent.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Event ${index}`}
                    className="w-full h-40 object-cover rounded-lg shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Events;
