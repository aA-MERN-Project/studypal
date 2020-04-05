import { connect } from "react-redux";
import Modal from "./modal";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  debugger;
  return {
    
    modal: state.modal.modal,
    data: state.modal.data

  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
