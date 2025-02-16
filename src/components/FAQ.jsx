/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="bg-[#2d2d2d] px-5 md:px-10 py-2  md:py-5 my-2 w-[auto] md:w-[75vw] m-auto rounded-sm transition-transform duration-500 hover:bg-[#424242] ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full items-center md:text-2xl font-medium transition-transform duration-500 "
      >
        {question}
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
        <svg  xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" width="48" height="48" color="#ffffff" fill="none">
                        <path d="M12 4V20" stroke="currentColor"  />
                        <path d="M4 12H20" stroke="currentColor"  />
                    </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="text-[10px] md:text-xl mt-2">{answer}</p>
      </div>

    </div>
  );
};

export default FAQ;