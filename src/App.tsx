import EventCard from "./components/EventCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>📅 Upcoming Events</h2>

      <EventCard
        title="Design Sprint Workshop"
        date="2025-07-15"
        time="14:00"
        location="Zoom / Online"
      />

      <EventCard
        title="Monthly Product Review"
        date="2025-06-25"
        time="11:00"
        location="Conference Room B"
      />

      <EventCard
        title="Launch Day Webinar"
        date="2025-07-01"
        time="10:30"
        location="YouTube Live"
      />

      <EventCard
        title="Past UX Meetup"
        date="2025-06-01"
        time="18:00"
        location="TechHub Bengaluru"
      />
    </div>
  );
}
