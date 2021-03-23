import React from 'react'

// const Notes = ({ notes }) => {
//   return (
//     <ul style={{ position: 'relative', top: '90px' }}>
//       {notes.map(note => (
//         <Note key={note.id} note={note}/>
//       ))}
//     </ul>
//   )
// }

const Note = ({ note, toggleImportance, handleDelete }) => {
  const label = note.important ? 'make not important' : 'make important'

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Note
