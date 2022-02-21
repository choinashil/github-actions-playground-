interface ButtonProps {
  children: string;
  color: "red" | "blue";
}

const Button: React.FC<ButtonProps> = ({ children, color }) => {
  return (
    <button type="button" style={{ backgroundColor: `${color}` }}>
      {children}
    </button>
  );
};

export default Button;
