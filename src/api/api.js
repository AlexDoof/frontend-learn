import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "35557668-ba87-4d21-9aab-0f8398592d05"
    }
});

export const usersAPI  = {
    getUsers (currentPage =1, pageSize = 10)  {
        return instance
          .get(`users?page=${currentPage}&count=${pageSize}`)
          .then (response => {
              return response.data;
          })
      }
}


