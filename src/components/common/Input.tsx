import React from "react";
interface LayoutProps {
  placeholder: string;
  id: string;
  name: string;
  type: string;
}
const Input: React.FC<LayoutProps> = ({ placeholder, id, name, type }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        className="w-full outline-none remove-arrow bg-transparent font-Manrope"
      />
    </>
  );
};

export default Input;
