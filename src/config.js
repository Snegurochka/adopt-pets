// Configuration for petfinder API
// Read more about the API here: https://www.petfinder.com/developers/v2/docs/

const API_URL = 'https://api.petfinder.com/v2/';
const API_KEY = process.env.REACT_APP_API_KEY;
const API_S_KEY= process.env.REACT_APP_API_S_KEY;

const API_BD_URL = 'https://adopt-me-48d2e-default-rtdb.europe-west1.firebasedatabase.app/';

export {
    API_URL,
    API_KEY,
    API_S_KEY,
    API_BD_URL
};