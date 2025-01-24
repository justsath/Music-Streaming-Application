import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Homepage = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('/api/songs/trending').then(response => {
      setSongs(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Trending Songs</h1>
      <ul>
        {songs.map(song => (
          <li key={song.id}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
