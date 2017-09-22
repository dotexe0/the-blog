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
