import React from "react";
import "./modal.scss";

const Modal = (props) => {
    
    if (!props.modal){
        return null
    }


    const carouselModal = (
        <div className="carousel-modal" onClick={e => e.stopPropagation()}>
          Testing Modal 
        </div>
    );


    return (
    
        <div className="modal-backdrop" onClick={this.props.closeModal}>
            {carouselModal}
        </div>

    );


}


export default Modal;