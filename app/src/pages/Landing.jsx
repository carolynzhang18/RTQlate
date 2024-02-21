import React from 'react';
import { Link } from 'react-router-dom';
import Feature from '../components/Feature';

const Landing = () => {
  const gradientCircleBlue = {
    background: '#416FCC',
    filter: 'blur(150px)',
    width: '700px',
    height: '700px',
    transform: 'rotate(0.05deg)',
    flexShrink: 0,
    borderRadius: '316.616px',
    marginTop: '-10%',
    marginLeft: '-20%',
    position: 'absolute',
    zIndex: -1,
    animation: 'rotate 12s linear infinite',
    opacity: 1,
    backgroundSize: '200% 200%',
    transformOrigin: '65% 45% 0',
    animation: 'rotate 15s linear infinite',
  };
  const gradientCircleYellow = {
    background: '#F9ED6D',
    filter: 'blur(100px)',
    width: '700px',
    height: '700px',
    transform: 'rotate(-0.11deg)',
    flexShrink: 0,
    borderRadius: '316.616px',
    marginTop: '-12%',
    marginLeft: '25%',
    position: 'absolute',
    zIndex: -1,
    animation: 'rotate 12s linear infinite',
    opacity: 1,
    backgroundSize: '200% 200%',
    transformOrigin: '65% 45% 0',
  };
  const gradientCircleOrange = {
    background: '#F3B64E',
    filter: 'blur(100px)',
    width: '600px',
    height: '600px',
    transform: 'rotate(-0.11deg)',
    flexShrink: 0,
    borderRadius: '316.616px',
    marginTop: '-15%',
    marginLeft: '50%',
    position: 'absolute',
    zIndex: -1,
    animation: 'rotate 17s linear infinite',
    opacity: 1,
    backgroundSize: '200% 200%',
    transformOrigin: '65% 45% 0',
  };

  return (
    <div className="px-10 pt-56 text-black/90">
      <div style={gradientCircleBlue} />
      <div style={gradientCircleYellow} />
      <div style={gradientCircleOrange} />
      <div className="w-[60%]">
        <h1 className="font-regular text-7xl leading-tight text-black/90">
          <span className="">Elevate</span> {" "}
           your speech with {" "}
          <span className="italic emphasis
            text-8xl py-6 bg-gradient-to-r from-blue-800 via-blue-600 to-pink-500 bg-clip-text text-transparent" style={{fontWeight:'600'}}>
            RTQlate
          </span>
        </h1>
        <p className="pb-14 text-black/90">
          Master the art of speech with RTQlate. 
          From pitch-perfect presentations to flawless interviews, 
          empower yourself to achieve professional victories with every word.
        </p>
      </div>
      <Link to="/setup" className="bg-white text-black p-4 px-6 rounded-full border-0
                                  border-black hover:bg-black hover:text-white">
        Try Now
      </Link>
      <Feature />
      <div className="text-4xl mt-40 flex justify-end">
        Articulate with confidence &nbsp;
        <span className="italic">
          <Link to="/signin" className="hover:underline">
            today.
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Landing;
