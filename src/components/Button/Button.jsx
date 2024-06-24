const Button = ({ type = "", className, color, text, onClick }) => {
  <button type={type} className={className} color={color} onClick={onClick}>
    {text}
  </button>;
};

export default Button;
