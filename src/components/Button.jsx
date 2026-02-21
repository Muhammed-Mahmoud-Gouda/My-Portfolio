import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  onClick,
  href,
  type = "button",
  className = "",
  disabled = false,
}) => {
  const buttonClass = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
