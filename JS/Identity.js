import GoTrue from 'gotrue-js'

auth = new GoTrue({
  APIUrl: 'https://homepage2.netlify.app/.netlify/identity',
  audience: '',
  setCookie: false,
});