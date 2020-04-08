import { connect } from "react-redux";
import Modal from "./modal";
import { closeModal, openModal } from "../../actions/modal_actions";
import { updateFavorites } from "../../actions/session_actions";
import { fetchCurrCafe } from "../../actions/cafe_actions"

import { openPopUp } from '../../actions/pop_up_actions' 

const mapStateToProps = state => {
  return {
    user: state.session.user,
    favorites: state.session.favorites,
    modal: state.modal.modal,
    data: state.modal.data,
    yelpCafe: state.entities.yelpCafe,
    currCafe: state.entities.currCafe,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (type, data) => dispatch(openModal(type,data)),
    updateFavorites: (id, data) => dispatch(updateFavorites(id,data)),
    fetchCurrCafe: id => dispatch(fetchCurrCafe(id)),
    openPopUp: () => dispatch(openPopUp())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
