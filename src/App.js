import React, { useState, useEffect } from 'react'
import Form from './Form'
import Notes from './Notes'
import { createNote, getAllNotes } from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const handleChange = event => {
    setNewNote(event.target.value)
  }

  useEffect(() => {
    getAllNotes().then(notes => {
      setNotes(notes)
    })
  }, [])

  const handleClick = event => {
    event.preventDefault()
    const noteToAddToState = {
      title: newNote,
      body: newNote,
    }

    createNote(noteToAddToState).then(notes => {
      setNotes(prevNotes => prevNotes.concat(notes))
    })

    // setNotes((prevNotes) => prevNotes.concat(noteToAddToState));

    setNewNote('')
  }

  return (
    <div>
      <Form
        handleClick={handleClick}
        newNote={newNote}
        handleChange={handleChange}
      />
      <Notes notes={notes} />
    </div>
  )
}

export default App
