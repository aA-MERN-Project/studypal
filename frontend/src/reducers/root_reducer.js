import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import loadingReducer from './loading_reducer';
import modalReducer from './modal_reducer';
import popUpReducer from './pop_up_reducer';
import modalSessionReducer from './session_modal_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
  loading: loadingReducer,
  modal: modalReducer,
  sessionModal: modalSessionReducer,
  popUp: popUpReducer
});

export default RootReducer;
