import React from 'react'

const Form = ({ handleClick, newNote, handleChange }) => {
  return (
    <div>
      <h1 style={{ paddingRight: '10px' }}>Notes</h1>
      <form onSubmit={handleClick}>
        <input value={newNote} type='text' onChange={handleChange} />
        <button type='submit'>Crear nota</button>
      </form>
    </div>
  )
}

export default Form



// style={{
// 	position: "fixed",
// 	top: "0px",
// 	left: "0",
// 	backgroundColor: "white",
// 	display: "flex",
// 	alignItems: "center",
// 	zIndex: "100",
// 	border: "1px solid gray",
// 	padding: "10px",
// }}