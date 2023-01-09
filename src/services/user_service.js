class UserService {
    getLocalRefreshToken() {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            return user?.refresh_token;
        } catch (e) {
            return null;
        }
    }

    getLocalAccessToken() {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            return user?.access_token;
        } catch (e) {
            return null;
        }

    }

    getLocalUserName() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user?.username;
    }

    getUser() {
        try {
            return JSON.parse(localStorage.getItem('user'));
        } catch (e) {
            return null;
        }

    }

    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    removeUser() {
        localStorage.removeItem('user');
    }
}

export default new UserService();