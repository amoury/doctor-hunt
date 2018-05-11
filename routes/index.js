const express = require('express');
const router = express.Router();
const { homePage, singleDoc, addDoctor, createDoctor, upVote } = require('../controllers/homeController');

router.get('/', homePage);
router.get('/single', singleDoc);
router.get('/add-doctor', addDoctor);
router.post('/add-doctor', createDoctor);
router.get('/doctor/:id/upvote', upVote);

module.exports = router;
