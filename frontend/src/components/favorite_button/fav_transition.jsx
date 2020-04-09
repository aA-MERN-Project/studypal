import React from 'react';
import "./sliding.scss";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";




class FavTransition extends React.Component {

    constructor(props){

        super(props);

        this.state = {
          favState: <div key={3}></div>,
        };

    }

    componentDidMount(){
        this.setState({ favState: <div key={3}></div> });
    }

    componentDidUpdate(prevProps){
        const favorite = (
          <div id="favorited" key={1}>
            <div>
              <i class="fas fa-check"></i> Favorited
            </div>
          </div>
        );

        const unfavorite = (
          <div id="unfavorite" key={2}>
            <div>Removed from favorites</div>
          </div>
        );

        if (prevProps.isFavorite !== this.props.isFavorite ){
            let newState = this.props.isFavorite ? favorite : unfavorite;
            this.setState({favState: newState})
        }

    }

    

    render(){
        

        return (
          <div>
            <ReactCSSTransitionGroup
              transitionName="spicy"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              {this.state.favState}
            </ReactCSSTransitionGroup>
          </div>
        );

    }

}

export default FavTransition;