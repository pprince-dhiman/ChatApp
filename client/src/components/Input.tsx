import type React from "react";

interface InputProps {
  placeholder: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  min?: number;
}

const Input = ({ placeholder, value, onChange, min }: InputProps) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
      />
    </div>
  );
};

export default Input;
