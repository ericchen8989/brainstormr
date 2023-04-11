const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://brainstormr.pcscorp.dev'
    : 'http://localhost:3000';

export default baseUrl;
