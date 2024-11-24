import React from "react";

// Define the props interface
interface ButtonProps {
  text: string;
  onClick?: () => void; // Function type for onClick
  bgColor: string; // Tailwind CSS background color class
  width: string; // Tailwind CSS width class
  className?: string; // Optional additional classes
}

// Functional component definition with props typing
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  bgColor,
  width,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 ${bgColor} ${width} text-white rounded-lg ${className}`}
      style={{ background: bgColor, width: width }}
    >
      {text}
    </button>
  );
};

export default Button;
