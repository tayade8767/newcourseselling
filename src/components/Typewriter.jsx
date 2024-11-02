import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, startDelay = 0 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setShouldStart(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!shouldStart) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, shouldStart]);

  return <span>{currentText}</span>;
};

export default Typewriter;