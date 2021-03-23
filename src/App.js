import React, { useState, useEffect } from 'react'
import Form from './Form'
import Note from './Note'
// import Notes from './Note'
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  useEffect(() => {
    getAllNotes().then((notes) => {
      setNotes(notes)
    })
  }, [])

  const handleClick = (event) => {
    event.preventDefault()
    const noteToAddToState = {
      content: newNote,
    }

    createNote(noteToAddToState).then((notes) => {
      setNotes((prevNotes) => prevNotes.concat(notes))
    })

    setNewNote('')
  }

  const toggleImportanceOf = (id) => {
    const getNoteById = notes.findIndex((note) => note.id === id)
    const isImportant = notes[getNoteById].important

    const noteToUpdate = {
      important: !isImportant,
      id: id,
    }

    updateNote(noteToUpdate).then((notes) => {
      setNotes(notes)
    })
  }

  const handleDelete = (id) => {
    notes.filter((note) => note.id !== id)
    deleteNote(id).then((notes) => {
      setNotes(notes)
    })

    console.log(notes)
  }

  return (
    <div>
      <Form
        handleClick={handleClick}
        newNote={newNote}
        handleChange={handleChange}
      />
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          toggleImportance={() => {
            toggleImportanceOf(note.id)
          }}
          handleDelete={() => handleDelete(note.id)}
        />
      ))}
    </div>
  )
}

export default App
