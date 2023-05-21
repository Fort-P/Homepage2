import GoTrue from 'gotrue-js'

// Instantiate the GoTrue auth client with an optional configuration

const auth = new GoTrue({
  APIUrl: 'https://homepage2.netlify.app/.netlify/identity',
  audience: '',
  setCookie: false,
});