interface ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children = "버튼" }) => {
  return <button type="button">{children}</button>;
};

export default Button;
