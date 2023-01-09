import {Post} from "@/api/apiroutes";
import User_service from "@/services/user_service";

// const user = JSON.parse(localStorage.getItem('userData')) || null;

const user = User_service.getUser();

const initialState = user
    ? {status: {loggedIn: true}, user}
    : {status: {loggedIn: false}, user: null};

export const authenticate = {
    namespaced: true,
    state: initialState,
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        refreshToken(state, accessToken) {
            state.status.loggedIn = true;
            state.user = {...state.user, access_token: accessToken};
        }
    },
    getters: {
        isAuthenticated(state) {
            return !!state.status.loggedIn;
        },
    },
    actions: {
        login({commit}, data) {
            return Post.getToken(data).then(value => {
                    commit('loginSuccess', value.data);
                    User_service.setUser(value.data);
                    return Promise.resolve(value.data);
                }, (error) => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            )
        },
        async logout({commit}) {
            User_service.removeUser();
            commit('logout');
        },
        refreshToken({commit}, accessToken) {
            commit('refreshToken', accessToken);
        }
    },
};

