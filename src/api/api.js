import axios from "axios";

// Конастанта для axios 
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "35557668-ba87-4d21-9aab-0f8398592d05"
    }
});

// для UsersContainer ( урок 63 ПС 1.0)
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userID)  {
        return instance.post(
            `https://social-network.samuraijs.com/api/1.0/follow/${userID}`)
    },
    unfollow(userID)  {
       return  instance.delete
       (`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)
    }
}

// для HeaderContainer самостоятельно
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then((response) => {
                return response.data;
            });
    }
}

// для ProfileContainer самостоятельно
export const profileAPI = {
    getProfileUserId(userId) {
        return instance.get(`profile/${userId}`).then((response) => {
                return response.data;
            });
    }
}


