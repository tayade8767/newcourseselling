/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import Typewriter from "./Typewriter";

function Cards() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const cardRef = useRef(null);

  const content = [
    "Welcome to 100xdevs.",
    "This is an initiative by Harkirat Singh to personally mentor folks in the field of Programming.",
    "Harkirat strongly feels that today you are either a 1x engineer or a 100x engineer and nothing in the middle, and his hope is to take everyone in this community to be a 100x Engineer.",
    "Join him in his first course on Full Stack development with a heavy focus on Open source projects to learn programming practically."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsRotating(true), 500);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    cardRef.current.style.transform = 
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 
        'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`w-[750px] h-[500px] rounded-md bg-gradient-to-br from-purple-100 to-orange-100 p-8 relative overflow-hidden transition-transform duration-300 ease-out`}
      style={{
        transformStyle: 'preserve-3d',
        animation: isRotating ? 'initialRotation 1.5s ease-out forwards' : 'none'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cloud background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-30"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${20 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 10}s`,
              transform: 'translateZ(20px)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4" style={{ transform: 'translateZ(40px)' }}>
        {isVisible && content.map((text, index) => (
          <div key={index} className="text-purple-900">
            <Typewriter text={text} delay={50} startDelay={index * 1000} />
          </div>
        ))}
      </div>

      {/* Shadow effect */}
      <div 
        className="absolute inset-0 rounded-md"
        style={{
          transform: 'translateZ(-1px)',
          boxShadow: '0 0 30px rgba(0,0,0,0.15)'
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) translateZ(20px);
          }
          50% {
            transform: translateY(-20px) translateX(20px) translateZ(20px);
          }
        }

        @keyframes initialRotation {
          0% {
            transform: perspective(1000px) rotateX(30deg) rotateY(-30deg);
          }
          100% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Cards;