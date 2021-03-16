import React from "react";

const Notes = ({notesToShow}) => {
	return (
		<ul>
			{notesToShow.map((note) => (
				<li key={note.id}>
					{note.content}
					<ul>
						<li>{note.date}</li>
						<li
							style={
								note.important
									? { backgroundColor: "tomato" }
									: { backgroundColor: "gray" }
							}>
							{note.important ? "important" : "normal"}
						</li>
					</ul>
				</li>
			))}
		</ul>
	);
};

export default Notes;
