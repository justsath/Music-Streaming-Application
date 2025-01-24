const express = require('express');
const router = express.Router();

const songs = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', fileUrl: '/music/song1.mp3' },
  { id: 2, title: 'Song 2', artist: 'Artist 2', fileUrl: '/music/song2.mp3' },
];

// Get trending songs
router.get('/trending', (req, res) => {
  res.json(songs);
});

module.exports = router;
