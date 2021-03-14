import React, { useState } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    setNotes(prevNotes => prevNotes.concat(noteToAddToState))
    setNewNote('')
  }
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>Filtrar</button>
      <ul>
        {notesToShow.map((note) => (
          <li key={note.id}>
            {note.content}
            <ul>
              <li>{note.date}</li>
              <li
                style={
                  note.important
                    ? { backgroundColor: 'tomato' }
                    : { backgroundColor: 'gray' }
                }
              >
                {note.important ? 'important' : 'normal'}
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <form onSubmit={handleClick}>
        <input value={newNote} type='text' onChange={handleChange} />
        <button type='submit'>Crear nota</button>
      </form>
    </div>
  )
}

export default App
