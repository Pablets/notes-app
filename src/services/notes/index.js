import axios from 'axios'

// const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
const API_ENDPOINT = 'https://pg-notesapp-backend.herokuapp.com/api/notes'

export const getAllNotes = () => {
  return axios.get(API_ENDPOINT).then(response => {
    const { data } = response
    return data
  })
}

export const createNote = ({ title, body }) => {
  return axios
    .post('https://pg-notesapp-backend.herokuapp.com/api/notes', {
      title,
      content: body,
    })
    .then(response => {
      const { data } = response
      return data
    })
}
