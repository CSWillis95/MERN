import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// import everything from the actions as an api

import * as api from '../api/index.js';

// Action Creators
// Functions that return actions, just an object with a type and payload

// redux thunk allows second arrow function

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
         console.log(error.message);
    }  
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post) //api request to server and sending post

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
    
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
         await api.deletePost(id);
        dispatch({ type: DELETE, payload: id})
        
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        
        const { data } = await api.likePost(id);
    
        dispatch({ type: 'LIKE', payload: data });

    } catch (error) {
        console.log(error)
    }
}

export const DislikePost = (id) => async (dispatch) => {
    try {
        
        const { data } = await api.DislikePost(id);
    
        dispatch({ type: 'DISLIKE', payload: data });

    } catch (error) {
        console.log(error)
    }
}