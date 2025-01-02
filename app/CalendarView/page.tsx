'use client';
import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarView = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Email with Company A',
      start: new Date(2023, 11, 20),
      end: new Date(2023, 11, 20),
      type: 'Email',
    },
    {
      id: 2,
      title: 'Call with Company B',
      start: new Date(2023, 11, 30),
      end: new Date(2023, 11, 30),
      type: 'Phone Call',
    },
    {
      id: 3,
      title: 'LinkedIn Post for Company A',
      start: new Date(2023, 11, 25),
      end: new Date(2023, 11, 25),
      type: 'LinkedIn Post',
    },
  ]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Enter Title');
    const type = window.prompt('Enter Communication Type');
    if (title && type) {
      const newEvent = { id: events.length + 1, title, start, end, type };
      setEvents([...events, newEvent]);
    }
  };

  const handleSelectEvent = (event) => {
    const updatedTitle = window.prompt('Edit Title', event.title);
    const updatedType = window.prompt('Edit Communication Type', event.type);
    if (updatedTitle && updatedType) {
      const updatedEvents = events.map((e) =>
        e.id === event.id ? { ...e, title: updatedTitle, type: updatedType } : e
      );
      setEvents(updatedEvents);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Calendar View</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          style={{ height: 500 }}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
        />
      </div>
    </div>
  );
};

export default CalendarView;
