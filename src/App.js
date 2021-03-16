import React, { useState } from "react";
import Form from "./Form";
import Notes from "./Notes";

const App = (props) => {
	const [notes, setNotes] = useState(props.notes);
	const [newNote, setNewNote] = useState("");
	const [showAll, setShowAll] = useState(true);
	const handleChange = (event) => {
		setNewNote(event.target.value);
	};

	const handleClick = (event) => {
		event.preventDefault();
		const noteToAddToState = {
			id: notes.length + 1,
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
		};
		setNotes((prevNotes) => prevNotes.concat(noteToAddToState));
		setNewNote("");
	};
	const notesToShow = showAll
		? notes
		: notes.filter((note) => note.important === true);

	return (
		<div>
			<h1>Notes</h1>
			<button onClick={() => setShowAll(!showAll)}>Filtrar</button>
			<Notes notesToShow={notesToShow} />
			<Form
				handleClick={handleClick}
				newNote={newNote}
				handleChange={handleChange}
			/>
		</div>
	);
};

export default App;
