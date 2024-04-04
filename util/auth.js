import axios from "axios";

const API_KEY = "AIzaSyCCLZGKdr5-AM_qFzW1j1-HmAV9FOsivt4";

export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
};

export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};

export const login = async (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
