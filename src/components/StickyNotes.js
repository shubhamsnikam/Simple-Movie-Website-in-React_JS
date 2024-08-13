import React, { useState } from 'react';
import './StickyNotes.css';

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim() === '') return;
    const newNote = {
      id: Date.now(),
      text: noteText,
    };
    setNotes([...notes, newNote]);
    setNoteText('');
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="sticky-notes-container" id='reviews'>
      <h1>Reviews</h1>
      <div className="add-note">
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Type your review here..."
        />
        <button onClick={handleAddNote}>Add Reviews</button>
      </div>
      <div className="notes-grid">
        {notes.map(note => (
          <div key={note.id} className="note">
            <p>{note.text}</p>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyNotes;
