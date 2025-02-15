/* eslint-disable react/prop-types */

function Button({
  children,
  bgColor = "bg-red-600",
  textColor = "text-white",
  className = "",
  onClick,
  ...props
}) {
  return (
    <button
      className={` rounded-full ${bgColor} ${textColor} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
