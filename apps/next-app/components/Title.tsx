interface TitleProps {
  children: string;
  color: "red" | "blue" | "green";
}

const Title: React.FC<TitleProps> = ({ children, color }) => {
  return <h1 style={{ color: `${color}` }}>{children}</h1>;
};

export default Title;
