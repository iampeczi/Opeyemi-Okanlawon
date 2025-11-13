import React, { useEffect, useState } from "react";

const Loading = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
      setTimeout(() => {
        onComplete();
      }, 2500);

    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background text-primary flex flex-col items-center justify-center">
      <div className="mb-4 text-3xl font-bold">
        {text}<span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[250px] h-0.5 bg-secondary rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-background shadow-[0_0_15px_#3b82f6] animate-loading-bar "></div>
      </div>
    </div>
  );
};

export default Loading;

