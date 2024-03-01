const Button = ({ children, ...props }) => {
  const disabled = props.disabled;
  return (
    <button
      {...props}
      className={`${props.custom_class} ${
        disabled && "disabled-button"
      }  defaultPrimaryBtn`}
    >
      {children}
    </button>
  );
};

export default Button;
