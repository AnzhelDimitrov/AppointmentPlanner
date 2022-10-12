import React from "react";

export const ContactPicker = ({name, contacts, onChange}) => {
  return (
    <div>
      <label>
        <select name={name} onChange={onChange}>
          <option selected='selected' value={0}>Select contact</option>
          {contacts && contacts.map((contact) => (
            <option value={contact}>
              {contact}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
