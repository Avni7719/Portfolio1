import React, { useState, useEffect } from 'react';

import myPhoto from '../assets/myPhoto.jpg';

const Hero = ({ data }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const roles = [
    'Java Enthusiast',
    'Front-End Developer',
    'AIML Learner',
    'Open to Work & Opportunities',
    'AI Agent Developer',
    'Cloud Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-blue-900 to-black">
      {/* Animated Background Particles */}
{[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side: Introduction */}
          <div className="text-left space-y-6">
            <h2 className="text-5xl lg:text-6xl neon-heading leading-tight">
              {["H","e","l","l","o",","," ","I","'","m"," ","A","v","n","i"," ","G","u","p","t","a"].map((letter, index) => (
                <span key={index} className="animate-bouncy-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                  {letter}
                </span>
              ))}
            </h2>

            {/* Rotating Text Carousel */}
            <div className="h-16 flex items-center">
              <div className={`text-2xl lg:text-3xl font-semibold text-blue-300 transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                {roles[currentRole]}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 text-lg text-gray-300 max-w-lg">
              <p>Passionate about AI Agents and AIML. Highly interested in Cloud Development and innovative tech solutions.</p>
            </div>

            {/* Download Resume Button */}
              <a
                href="/Resume_avni.pdf"
                download="Resume_avni.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
              >
                <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L12 21l5.5-5.5m-5.5 5.5V7" />
                </svg>
                Download Resume
              </a>
          </div>

          {/* Right Side: Portrait Image */}
          <div className="flex justify-center lg:justify-end">
              <div className="relative group w-72 h-96 sm:w-80 sm:h-[28rem] md:w-96 md:h-[32rem] flex-shrink-0 max-w-md mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-2xl p-2 shadow-2xl group-hover:shadow-glow transition-all duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={myPhoto}
                      alt="Avni Gupta"
                      className="w-full h-full object-cover rounded-lg shadow-2xl group-hover:scale-[1.02] transition-all duration-500"
                    />
                  </div>
                </div>
                {/* Stable Glowing Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-cyan-400/20 to-blue-500/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
