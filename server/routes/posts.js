import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost, DislikePost } from '../controllers/posts.js';

const router = express.Router();

// http://localhost:4000/posts
 
router.get('/', getPosts);
// router.get('/:id', getPost)
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)
router.patch('/:id/DislikePost', DislikePost)

export default router;