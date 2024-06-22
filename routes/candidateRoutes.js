// routes/candidateRoutes.js

const express = require('express');
const router = express.Router();
const { createCandidate, getAllCandidates } = require('../controllers/candidateController');

// Route to create a new candidate
router.post('/candidates', createCandidate);

// Route to get all candidates
router.get('/candidates', getAllCandidates);

module.exports = router;
