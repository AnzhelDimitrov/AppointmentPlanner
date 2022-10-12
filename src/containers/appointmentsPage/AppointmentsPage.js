import React, {useState, useEffect} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, addAppointment, contacts}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [contactName, setContactName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let appointment = {
      title: title,
      date: date,
      time: time,
      contactName: contactName,
    };
    setTitle("");
    setContactName("");
    setDate("");
    setTime("");
    addAppointment(appointment);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          contactName={contactName}
          setContactName={setContactName}
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};
