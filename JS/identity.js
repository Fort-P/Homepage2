import GoTrue from './../node_modules/gotrue-js/index.d.ts';

// Instantiate the GoTrue auth client with an optional configuration

auth = new GoTrue({
  APIUrl: 'https://homepage2.netlify.app/.netlify/identity',
  audience: '',
  setCookie: false,
});