import axios from 'axios'

// const API_ENDPOINT = 'http://172.18.29.136:3001/api/notes'
// const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
const API_ENDPOINT = 'https://pg-notesapp-backend.herokuapp.com/api/notes'

export const getAllNotes = () => {
  return axios.get(API_ENDPOINT).then((response) => {
    const { data } = response
    return data
  })
}

export const createNote = ({ content }) => {
  return axios
    .post(API_ENDPOINT, {
      content,
    })
    .then((response) => {
      const { data } = response
      return data
    })
}

export const deleteNote = (id) => {
  return axios.delete(`${API_ENDPOINT}/${id}`)
  .then((response) => {
    const { data } = response
    return data
  })
}

export const updateNote = ({ important, id }) => {
  // console.log(important, id)
  return axios
    .put(`${API_ENDPOINT}/${id}`, {
      important,
    })
    .then((response) => {
      const { data } = response
      return data
    })
}
