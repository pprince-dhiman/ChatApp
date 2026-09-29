interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;