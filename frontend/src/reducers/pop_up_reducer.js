import { OPEN_POP_UP, CLOSE_POP_UP } from '../actions/pop_up_actions'

const popUpReducer = (state=null, action) => {
    Object.freeze(state);
    switch(action.type) {
        case OPEN_POP_UP:
            return action.open
        case CLOSE_POP_UP: 
            return null
        default: 
            return null
    }
}

export default popUpReducer