import { OPEN_SESSION_MODAL, CLOSE_SESSION_MODAL } from "../actions/modal_actions";

const initialState = {
    modal: "",
    data: ""
};

const modalSessionReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = state;

    switch (action.type) {
        case OPEN_SESSION_MODAL:
            return Object.assign({}, state, {
                modal: action.modal,
                data: action.data
            });
        case CLOSE_SESSION_MODAL:
            nextState = "";
            return nextState;
        default:
            return state;
    }
};

export default modalSessionReducer;
