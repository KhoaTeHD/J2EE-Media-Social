import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (email, password, profile_name) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
    profile_name,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
        email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        sessionStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
    sessionStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;