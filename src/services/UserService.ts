import axios, { AxiosResponse } from 'axios';

const url = `http://localhost:8080/users`;

interface User {
  email: string;
}

const login = (email: string, password: string): Promise<User> => {
  return axios
    .post<User>(url, { email, password })
    .then((response: AxiosResponse<User>) => {
      const userData: User = response.data;

      if (userData.email) {
        localStorage.setItem('userEmail', userData.email);
      }

      return userData;
    })
    .catch((error) => {
      console.error('Login failed:', error);
      throw error; 
    });
};

const register = (email:String, password:String, fullName:String) => {
  return axios
    .post<User>(url, { email, password, fullName })
    .then((response: AxiosResponse<User>) => {
      const userData: User = response.data;

      return userData;
    })
    .catch((error) => {
      console.error('Registration failed:', error);
      throw error; 
    });
};

const userService = {
  login,
  register,
};

export default userService;
