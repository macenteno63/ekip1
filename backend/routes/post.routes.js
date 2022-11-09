const router = require('express').Router();
const postController = require('../controllers/post.controller');
const multer = require("multer");
const upload = multer();

// Avoir tous les messages
router.get('/', postController.readPost);

// Poster un message
router.post('/', upload.single("file"), postController.createPost);

// Update d'un post
router.put('/:id', postController.updatePost);

// Supprimer un post
router.delete('/:id', postController.deletePost);

router.patch('/like-post/:id', postController.likePost);
router.patch('/unlike-post/:id', postController.unlikePost);

// comments
router.patch('/comment-post/:id', postController.commentPost);
router.patch('/edit-comment-post/:id', postController.editCommentPost);
router.patch('/delete-comment-post/:id', postController.deleteCommentPost);

module.exports = router;