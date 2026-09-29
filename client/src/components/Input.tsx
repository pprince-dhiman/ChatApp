import type React from "react";

interface InputProps {
  placeholder: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
