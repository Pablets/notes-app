import axios from 'axios'

// const baseUrl = '/api/login'
const baseUrl = 'http://localhost:3001/api/login'

const loginService = {
  login: async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    return data
  },
}

export default loginService
