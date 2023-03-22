import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, DISLIKE } from '../constants/actionTypes';

// reducers are a function 
// state has to = to something, it will be post since we are in a post reducer

export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload)
        case UPDATE:
        case LIKE:
        case DISLIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case FETCH_ALL:
            return action.payload; // actual post
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}