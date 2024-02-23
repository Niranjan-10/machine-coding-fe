import { useState, useEffect, useRef } from "react";

export default function EditContact({ savedContact, onSave, name: fname, email: femail }) {
//   const name = useRef(null);
//   const email = useRef(null);
    // const [name, setName] = useState(fname);
    // const [email, setEmail] = useState(femail);
    const userData = useRef(savedContact)

  // useEffect(() => {
  //   setName(savedContact.name);
  //   setEmail(savedContact.email);
  // }, [savedContact]);

  return (
    <section>
      <label>
        Name: <input type="text" value={userData.current.name} onChange={(e) => null} />
      </label>
      <label>
        Email: <input type="email" value={userData.current.email} onChange={(e) => null} />
      </label>
      <button
        onClick={() => {
        //   const updatedData = {
        //     id: savedContact.id,
        //     name: name,
        //     email: email,
        //   };
        //   onSave(updatedData);
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          //   setName(savedContact.name);
          //   setEmail(savedContact.email);
        }}
      >
        Reset
      </button>
    </section>
  );
}
