import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [];

const Home = () => {
  const [allEvents, setAllEvents] = useState(events);
  const [start, setStart] = useState("");
  const [title, setTitle] = useState("");
  const [finish, setFinish] = useState("");

  const handleAddEvent = () => {
    const newEvent = { title: title, start: start, end: finish };
    if (title === "" || start === "" || finish === "") {
      alert("Lütfen boşlukları doldurunuz");
    } else if (start >= finish) {
      alert("Bitiş terihi başlangıç tarihinden erken olamaz");
    } else {
      setAllEvents([...allEvents, newEvent]);
    }
  };

  return (
    <div className="Home">
      <h1>Calendar</h1>
      <h2>Yeni Etkinlikleri Ekle</h2>
      <div>
        <input
          type="text"
          label="Etkinlik Ekle"
          placeholder="Etkinlik Ekle "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label id="password">Başlangıç Tarihi:</label>
        <input
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <label id="password">Bitiş Tarihi:</label>
        <input
          type="date"
          value={finish}
          onChange={(e) => setFinish(e.target.value)}
        />

        <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Ekle
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

export default Home;
