import INITIAL_STATE from './initial_state';
import api from '@/store/api'

export const state = {
    //Snackbar messages
    show_message: false,

    modal_refs: [],

    //Dialog messages
    show_dialog: false,

    //Confirm messages
    show_confirm: false,
    confirm_callback: null,

    message: '',
    message_type: '',
    message_icon: '',

    show_drawer: window.innerWidth >= 991,

    current_date: new Date()
};

export const getters = {
    allowToNavigate (state) {
        return state.modal_refs.length == 0;
    }
};

export const mutations = {
    setMessage (state, message) {
        state.message = message.msg;
        state.message_type = message.type;
        state.message_icon = message.icon;
        state.show_message = true;
    },

    setDialogMessage (state, message) {
        state.message = message.msg;
        state.message_icon = message.icon;
        state.show_dialog = true;
    },

    setConfirm (state, message) {
        state.message = message.msg;
        state.message_icon = '';
        state.confirm_callback = message.callback;
        state.show_confirm = true;        
    },

    setConfirmState (state, status) {
        state.show_confirm = status;
    },

    toggleDrawer (state) {
        state.show_drawer = !state.show_drawer;
    },

    removeNextModalRef (state) {
        var last_modal = state.modal_refs.pop();
        last_modal.open = false;

        if(!state.modal_refs.length){
            document.getElementsByTagName('body')[0].className = "";
        }
    },

    addModalRef (state, modal) {
        modal.open = true;
        state.modal_refs.push(modal);
        document.getElementsByTagName('body')[0].className = "modal-mode";
    }
};

export const actions = {
    removeNextModalRef ({commit}) {
        commit('removeNextModalRef');
    },

    addModalRef({commit}, modal) {
        commit('addModalRef', modal);
    }
};
