const Input = ({ isEdited, error, ...props }) => {
  return (
    <>
      <input {...props} />
      {error && isEdited && (
        <span className="control-error-text">
          La valeur saisie est incorrecte.
        </span>
      )}
    </>
  );
};
export default Input;
