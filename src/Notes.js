import React from 'react'

const Notes = ({ notes }) => {
  return (
    <ul style={{ position: 'relative', top: '90px' }}>
      {notes.map(note => (
        <li key={note.id}>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  )
}

export default Notes
