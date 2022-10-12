import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contactName,
  setContactName,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (contactName === '') {
      alert("Please select a contact!");
    } else {
      handleSubmit(e);
    }
  };
  
  const contactChange = (e) => {
    let contactValue = e.target.value;
    
    if(contactValue === '0') {
      setContactName('');
    } else {
      setContactName(contactValue);
    }
  }

  return (
    <div className="contactForm">
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Appointment"
          />
        </label>
        <br />
        <label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <br />
        <ContactPicker
          contacts={contacts && contacts.map(a => a.name)}
          name={'contacts'}
          onChange={contactChange}
        />
        <br />
        <input type="submit" value="Add Appointment" />
      </form>
    </div>
  );
};
