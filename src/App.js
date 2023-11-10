// App.js
import React, { useState, useEffect } from 'react';
import Map from './Map';
import Avatar from './Avatar';

const App = () => {
  const [avatarPosition, setAvatarPosition] = useState([28.7565, 77.756578]);
  const points = [
    [28.7565, 77.756578],
    [28.9565, 77.706578],
  ];

  useEffect(() => {
    const moveAvatar = () => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setAvatarPosition(points[currentIndex]);
        currentIndex = (currentIndex + 1) % points.length;
      }, 30000 / points.length);

      return () => clearInterval(interval);
    };

    moveAvatar();
  }, [points]);

  return (
    <div>
      <h1>Avatar Path Guidance</h1>
      <Map points={points} />
      <Avatar position={avatarPosition} />
    </div>
  );
};

export default App;
