import "./button.css";

const Button = ({ press, disabled = false, children }) => {
  return (
    <button onClick={press} disabled={disabled} className="buttonShit">
      {children}
    </button>
  );
};

export default Button;
