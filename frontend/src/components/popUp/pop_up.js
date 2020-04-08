import React from 'react'
import './pop_up.css'

const PopUp = (props) => {
    if(props.popUp) {

        return (
          <div>
            <div className="pop-up-div">Added to favorite cafes!</div>
            <div onClick={props.closePopUp}>X</div>
          </div>
        );
    }

    return null
}

export default PopUp