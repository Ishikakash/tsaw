
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Avatar = ({ position }) => {
  const props = useSpring({
    to: { left: `${position[1]}%`, top: `${position[0]}%` },
    config: { duration: 30000 }, 
  });

  return <animated.div className="avatar" style={props} />;
};

export default Avatar;
