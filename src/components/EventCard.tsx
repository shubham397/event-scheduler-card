import React from "react";
import "./eventCard.css";

interface EventCardProps {
  title: string;
  date: string; // ISO format
  time: string; // e.g., "14:00"
  location: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
}) => {
  const eventDateTime = new Date(`${date}T${time}`);
  const now = new Date();

  let status = "Upcoming";
  if (eventDateTime.getTime() < now.getTime()) {
    status = "Ended";
  } else if (
    eventDateTime.getTime() <= now.getTime() + 60 * 60 * 1000 &&
    eventDateTime.getTime() >= now.getTime() - 15 * 60 * 1000
  ) {
    status = "Live";
  }

  return (
    <div className={`event-card ${status.toLowerCase()}`}>
      <div className="event-header">
        <h3>{title}</h3>
        <span className={`status ${status.toLowerCase()}`}>{status}</span>
      </div>
      <div className="event-info">
        <p>
          <strong>Date:</strong> {new Date(date).toLocaleDateString()}
        </p>
        <p>
          <strong>Time:</strong> {time}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
      </div>
      {status === "Upcoming" && <button className="action-btn">Join</button>}
      {status === "Ended" && (
        <button className="action-btn" disabled>
          Ended
        </button>
      )}
      {status === "Live" && (
        <button className="action-btn live">Join Now</button>
      )}
    </div>
  );
};

export default EventCard;
