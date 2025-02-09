import Calendar from "react-calendar";
import './Calender.css'; // Import the CSS file for custom styles

const CalendarComponent = ({ date, setDate }) => (
  <Calendar onChange={setDate} value={date} className="custom-calendar mb-4" />
);

export default CalendarComponent;
