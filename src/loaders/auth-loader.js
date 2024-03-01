import { redirect } from "react-router-dom";

function getToken() {
  const token = localStorage.getItem("TOKEN_YT_EASY_SHOP");

  if (!token) {
    return null;
  }

  return token;
}

export function checkUserAuthLoader() {
  const token = getToken();
  if (token) {
    return redirect("/");
  }

  return null;
}

export function tokenLoader() {
  return getToken();
}
