import INITIAL_STATE from './initial_state'
import menu_options from './menu_options'
import API from './api'
import security from "./router_security";

const TOKEN_REFRESH_INTERVAL = 30; //Interval in seconds
var timer = null;

export const state = {
    logged_user: null,
    user_menu_options: menu_options.MENU
};

export const getters = {

};

export const mutations = {
    setLoggedUser (state, user) {
        user.username = 'user_name'; //TODO get this from DB
        state.logged_user = user;
        localStorage.setItem('user', JSON.stringify(user));
    },

    setAccessToken (state, token) {
        var user = JSON.parse(localStorage.getItem('user'));
        user.access = token.access;
        state.logged_user = user;
        localStorage.setItem('user', JSON.stringify(user));         
    },

    setUserMenu (state, user_menu_options) {
        state.user_menu_options = user_menu_options;
    }
};

export const actions = {

    logoutUser ({commit}) {
        localStorage.removeItem('user');
        window.location = '/login';
        commit('setUser', null);
    }, 

    async refreshToken ({dispatch, commit}, refresh_token) {
        const response = await API.refreshToken({refresh: refresh_token}).catch(()=>{ });
        
        if(!response){
            dispatch('logoutUser');
            return;
        }

        commit('setAccessToken', response);
    },

    scheduleRefresh ({dispatch}) {
        timer = setInterval(() => {
            var user_data = JSON.parse(localStorage.getItem('user') || '{}');
            //Stop refresh token if user is not logged
            if(!user_data.refresh){
                clearInterval(timer);
                dispatch('logoutUser');
                return;
            }

            dispatch('refreshToken', user_data.refresh);
        }, TOKEN_REFRESH_INTERVAL * 1000);
    },
    
    async login ({commit, dispatch}, user) {
        const response = await API.login(user).catch(()=>{ });

        if(!response) 
            return Promise.reject(false);

        commit('setLoggedUser', response);
        dispatch('scheduleRefresh');
        return Promise.resolve(true);
    },

    async loadMenu ({commit, dispatch}) {
        const response = await API.loadMenu().catch(()=>{ });

        if(!response || !response.username) 
            return Promise.reject(false);

        commit('setUserMenu', security.getUserMenu(response));
        return Promise.resolve(true);
    },

    changePassword ({state}, user_data) {
        return API.changePassword(user_data);
    },

	loadInitialData (context) {
        var user = JSON.parse(localStorage.getItem('user'));

        if(user && user['access']){
            context.commit('setLoggedUser', user);
            context.dispatch('scheduleRefresh');
        }
    },    
};
