import { toast } from "react-toastify";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { useInput } from "../../hooks/useInput";
import {
  emailIsValid,
  isNotEmpty,
  isPasswordValid,
} from "../../utils/validators";
import classes from "./auth.module.css";
import { apiRegisterMethod } from "../../http-request/auth-request";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    value: lastnameValue,
    handleInputBlur: handleLastnameBlur,
    hasError: lastnameHasError,
    handleInputChange: handleLastnameChange,
    didEdit: lastnameFieldIsEdited,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: firstnameValue,
    handleInputBlur: handleFirstnameBlur,
    hasError: firstnameHasError,
    handleInputChange: handleFirstnameChange,
    didEdit: firstnameFieldIsEdited,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    didEdit: emailFieldIsEdited,
  } = useInput("", (value) => isNotEmpty(value) && emailIsValid(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
    didEdit: passwordFieldIsEdited,
  } = useInput("", (value) => isPasswordValid(value));
  const {
    value: confirmPasswordValue,
    handleInputChange: handleConfirmPasswordChange,
    handleInputBlur: handleConfirmPasswordBlur,
    hasError: confirmPasswordHasError,
    didEdit: confirmPasswordFieldIsEdited,
  } = useInput("", (value) => isPasswordValid(value));

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  //Méthode pour soumettre le formulaire

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const dataToSend = {
      lastname: lastnameValue,
      firstname: firstnameValue,
      email: emailValue,
      password: passwordValue,
      confirm_password: confirmPasswordValue,
    };

    if (passwordValue !== confirmPasswordValue) {
      toast.error("Les mots de passe ne correspondent pas.");
      setIsSubmitting(false);
      return;
    }

    const result = await toast.promise(apiRegisterMethod(dataToSend), {
      pending: "Création de compte en cours.... Patienter",
    });

    setIsSubmitting(false);
    if (result.statusCode === 201) {
      toast.success(result.message);
      navigate("/login");
    }

    if (result.statusCode === 422) {
      toast.error(result.message);
    }
  };

  return (
    <div className={`${classes.centerContent} ${classes.marginTop}`}>
      <div className={classes.authBox}>
        <h4 className={classes.formTitle}>Inscription utilisateurs</h4>

        <div className={classes.formGroup}>
          <label>Nom</label>
          <Input
            className="inputDefault p-0"
            value={lastnameValue}
            onChange={handleLastnameChange}
            onBlur={handleLastnameBlur}
            error={lastnameHasError}
            isEdited={lastnameFieldIsEdited}
          />
        </div>
        <div className={classes.formGroup}>
          <label>Prenom</label>
          <Input
            className="inputDefault p-0"
            value={firstnameValue}
            onChange={handleFirstnameChange}
            onBlur={handleFirstnameBlur}
            error={firstnameHasError}
            isEdited={firstnameFieldIsEdited}
          />
        </div>
        <div className={classes.formGroup}>
          <label>Email</label>
          <Input
            className="inputDefault p-0"
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailHasError}
            isEdited={emailFieldIsEdited}
          />
        </div>
        <div className={classes.formGroup}>
          <label>Mot de passe </label>
          <Input
            type="password"
            className="inputDefault p-0"
            value={passwordValue}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            error={passwordHasError}
            isEdited={passwordFieldIsEdited}
          />
        </div>
        <div className={classes.formGroup}>
          <label>Mot de passe de confirmation</label>
          <Input
            type="password"
            className="inputDefault p-0"
            value={confirmPasswordValue}
            onChange={handleConfirmPasswordChange}
            onBlur={handleConfirmPasswordBlur}
            error={confirmPasswordHasError}
            isEdited={confirmPasswordFieldIsEdited}
          />
        </div>

        <Button
          custom_class="w-100 cursor-pointer p-0"
          disabled={
            passwordHasError ||
            emailHasError ||
            confirmPasswordHasError ||
            firstnameHasError ||
            lastnameHasError ||
            isSubmitting
          }
          onClick={handleSubmit}
        >
          {isSubmitting ? "Opération en cours" : "Créer mon compte"}
        </Button>
      </div>
    </div>
  );
};

export default Register;
