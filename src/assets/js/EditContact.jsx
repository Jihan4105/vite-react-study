import { useState } from 'react';

export default function EditContact({ initialContacts, selectedContent, onSave }) {
  const [name, setName] = useState(selectedContent.name);
  const [email, setEmail] = useState(selectedContent.email);
  return (
    <section>
      <label>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{' '}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <button onClick={() => {
        const updatedData = {
          id: selectedContent.id,
          name: name,
          email: email
        };
        onSave(updatedData);
      }}>
        Save
      </button>
      <button onClick={() => {
        setName(selectedContent.name);
        setEmail(selectedContent.email);
      }}>
        Reset
      </button>
    </section>
  );
}
