import React from 'react';
import Typical from 'react-typical';

const Typewriter = ({ text, typingSpeed = 1000, loop = 1 }) => {
  // Generate the steps array dynamically based on the input text
  const generateSteps = () => {
    const steps = [];
    let accumulatedText = '';
    for (const char of text) {
      accumulatedText += char; // Build the string progressively
      steps.push(accumulatedText, typingSpeed); // Add the current string and delay
    }
    return steps;
  };

  return (
    <div className=" text-[#e3ca85]">
      <h2 className=" inline-block ">
        <Typical steps={generateSteps()} loop={loop} wrapper="span" />
      </h2>
    </div>
  );
};

export default Typewriter;
