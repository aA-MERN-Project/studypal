import { connect } from "react-redux";
import Modal from "./modal";
import { closeModal } from "../../actions/modal_actions";
import { updateFavorites } from "../../actions/session_actions";
import { fetchCurrCafe } from "../../actions/cafe_actions"
 
const mapStateToProps = state => {
   debugger
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
    updateFavorites: (id, data) => dispatch(updateFavorites(id,data)),
    fetchCurrCafe: id => dispatch(fetchCurrCafe(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
