import { useState } from "react";
import ContactList from "./contact-list";
import EditContact from "./edit-contact";

export default function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const [selectedContact, setSelectedContact] = useState(initialContacts[0]);

  function handleSave(updatedData) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  function onSelectId(id) {
    const selectedContact = contacts.find((c) => c.id === id);
    setSelectedId(id);
    setSelectedContact(selectedContact);
  }

  function onChange(id, key) {
    const selectedContact = contacts.map((c) => c.id === id);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={(id) => onSelectId(id)}
      />
      <hr />
      <EditContact
        savedContact={selectedContact}
        onSave={handleSave}
        name={selectedContact.name}
        email={selectedContact.email}
      />
    </div>
  );
}

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
