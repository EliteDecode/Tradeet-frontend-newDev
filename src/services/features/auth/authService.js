import axios from "axios";
const API_URL = "https://lock-your-land-be.onrender.com/LYL/users/";
//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  return response.data;
};

//logout

const logout = async () => {
  localStorage.removeItem("Tradeet_user");
};

//login

const login = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);

  if (response.data) {
    localStorage.setItem("Tradeet_user", JSON.stringify(response.data));
  }
  return response.data;
};

//update

const authService = {
  register,
  logout,
  login,
};

export default authService;
