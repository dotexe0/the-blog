import axios from 'axios';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=IMTHEONEWHOKNOCKS'

export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts() {
    const request = axios.get(`${BASE_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export const CREATE_POST = 'create_post';

export function createPost(values, callback) {
  const request = axios.post(`${BASE_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}
