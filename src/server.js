import axios from 'axios'

const withAuthentication = axios.create({
  baseURL: 'https://api.informativos.io',
  timeout: 180 * 1000
});

export default withAuthentication
