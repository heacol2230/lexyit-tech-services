import React from 'react';

const Audio: React.FC = () => {
  return (
    <audio id="backgroundMusic" className="audio-player" autoPlay loop>
      <source src="http://localhost:3000/public/Youve-Got-A-Friend-In-Me.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default Audio;
