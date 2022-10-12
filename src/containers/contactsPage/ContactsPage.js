import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = ({addContact, contacts}) => {
  const [name, setName] =  useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      name: name,
      phone: phone,
      email: email,
    };
    if (!duplicateName) {
      addContact(contact)
    } else {
      alert('The contact name already exists!')
    }  
    setName('');
    setPhone('');
    setEmail('');
  };

  useEffect(() => {
    const duplicateRecord = contacts.filter(x => x.name === name); 
    if (duplicateRecord && duplicateRecord.length > 0) {
      setDuplicateName(true);
    } else {
      setDuplicateName(false);
    }
  });

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          data={contacts} />
      </section>
    </div>
  );
};
