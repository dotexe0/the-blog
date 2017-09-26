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

export const FETCH_POST = 'fetch_post';
export function fetchPost(id) {
   const request = axios.get(`${BASE_URL}/posts/${id}/${API_KEY}`)

   return {
     type: FETCH_POST,
     payload: request
   }
}


export const DELETE_POST = 'delete_post';
export function deletePost(id, callback) {
  const request = axios.delete(`${BASE_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}
