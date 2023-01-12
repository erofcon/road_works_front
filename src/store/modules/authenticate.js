import {Post} from "@/api/apiroutes";
import User_service from "@/services/user_service";

const currentUser = User_service.getUser();

const initialState = currentUser
    ? {status: {loggedIn: true}, currentUser}
    : {status: {loggedIn: false}, currentUser: null};

export const authenticate = {
    namespaced: true,
    state: initialState,
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.currentUser = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.currentUser = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.currentUser = null;
        },
        refreshToken(state, accessToken) {
            state.status.loggedIn = true;
            state.currentUser = {...state.currentUser, access_token: accessToken};
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

