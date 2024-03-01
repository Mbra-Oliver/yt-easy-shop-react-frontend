import React, { useState } from "react";
import classes from "./auth.module.css";
import Input from "./../../components/UI/Input";
import Button from "./../../components/UI/Button";
import { useInput } from "../../hooks/useInput";
import {
  emailIsValid,
  isNotEmpty,
  isPasswordValid,
} from "../../utils/validators";
import { toast } from "react-toastify";
import { apiLoginMethod } from "../../http-request/auth-request";
import { redirect, useNavigate } from "react-router-dom";

export default function Login() {
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      setIsSubmitting(true);

      const dataToSend = {
        email: emailValue,
        password: passwordValue,
      };

      const result = await toast.promise(apiLoginMethod(dataToSend), {
        pending: "Connexion à votre compte en cours...",
      });

      if (result.statusCode === 200) {
        toast.success(result.message);
        localStorage.setItem("TOKEN_YT_EASY_SHOP", result.token);

        return redirect("/");
      }

      if (result.statusCode === 401) {
        toast.error(result.message);
        setIsSubmitting(false);
      }
    } catch (error) {
      toast.error(error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={classes.centerContent}>
      <div className={classes.authBox}>
        <h4 className={classes.formTitle}>
          Connexion a votre compte utilisateur
        </h4>

        <div className={classes.formGroup}>
          <label>Email</label>
          <Input
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailHasError}
            type="email"
            placeholder="Entrer votre email"
            className="inputDefault p-0"
            isEdited={emailFieldIsEdited}
          />
        </div>

        <div className={classes.formGroup}>
          <label>Mot de passe</label>
          <Input
            value={passwordValue}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            error={passwordHasError}
            type="password"
            placeholder="******"
            className="inputDefault p-0"
            isEdited={passwordFieldIsEdited}
          />
        </div>

        <Button
          custom_class="w-100 cursor-pointer p-0"
          disabled={passwordHasError || emailHasError || isSubmitting}
          onClick={handleLogin}
        >
          {isSubmitting ? "Connexion en cours..." : "Me connecter"}
        </Button>
      </div>
    </div>
  );
}
