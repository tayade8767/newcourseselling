/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';

// function CardThumbnail() {
//   const [card, setCard] = useState(
//     'https://img.freepik.com/free-vector/back-end-development-concept-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-1064.jpg'
//   );
//   const [index, setIndex] = useState(0);
//   const images = [
//     "https://i.ytimg.com/vi/hwLI9UR6SHw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAZJZrGQooyXzO_LYQFErM01T3HbQ",
//     "https://img.freepik.com/premium-psd/psd-youtube-video-thumbnail-design-template-modern-professional-business-video_787236-767.jpg?semt=ais_hybrid",
//     "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); 

//     return () => clearInterval(interval); 
//   }, [images.length]);

//   useEffect(() => {
//     setCard(images[index]);
//   }, [index, images]);

//   return (
//     <div className="w-[1100px] h-[550px] rounded-lg border-2 border-indigo-600 overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
//       <img
//         src={card}
//         alt="Course Thumbnail"
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// }

// export default CardThumbnail;


import React, { useState, useEffect } from 'react';

function CardThumbnail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
    const images = [
    "https://i.ytimg.com/vi/hwLI9UR6SHw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAZJZrGQooyXzO_LYQFErM01T3HbQ",
    "https://img.freepik.com/premium-psd/psd-youtube-video-thumbnail-design-template-modern-professional-business-video_787236-767.jpg?semt=ais_hybrid",
    "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg"
  ];

 
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div 
      className="relative w-[1100px] h-[550px] [perspective:1000px] group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`
          relative w-full h-full 
          transition-all duration-700 ease-in-out
          [transform-style:preserve-3d]
          group-hover:[transform:rotateX(180deg)]
          hover:shadow-2xl
        `}
      >
       
        <div 
          className="absolute w-full h-full rounded-lg border-2 border-indigo-600 
          overflow-hidden shadow-lg [backface-visibility:hidden]
          transition-transform duration-700"
        >
          <img
            src={images[currentIndex]}
            alt="Course Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
        
        
        <div 
          className="absolute w-full h-full rounded-lg border-2 border-indigo-600 
          overflow-hidden shadow-lg [backface-visibility:hidden] [transform:rotateX(180deg)]
          transition-transform duration-700"
        >
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="Next Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300
              ${currentIndex === idx ? 'bg-indigo-600 w-4' : 'bg-indigo-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CardThumbnail;