
import React from 'react';

class Cafe extends React.Component {
  constructor(props) {
    super(props);
  }

  selectRandomCafe(cafe_array) {
    return cafe_array[Math.floor(Math.random() * cafe_array.length)];
  }

  render() {
    if (!this.props.cafes === []) return null;
    const { cafes } = this.props;


    let randomCafe = this.selectRandomCafe(cafes)
    if (!randomCafe) return null;

    return (
    
        <div>
            HELLO
            <br/>
                {randomCafe.name}
        </div>
    
    
    )


  }


}


export default Cafe;