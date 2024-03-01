//Methode 1: Se connecter a l'API de création de compte et lui envoyer les données
const API_URL = "http://localhost:8080/";

export const apiRegisterMethod = async (data) => {
  try {
    const response = await fetch(`${API_URL}auth/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.log(error);
    throw new Error("Erreur serveur");
  }
};

export const apiLoginMethod = async (data) => {
  try {
    const response = await fetch(`${API_URL}auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Erreur de connexion du serveur");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Impossible de se connecter au serveur");
  }
};
