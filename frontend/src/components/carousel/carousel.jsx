import React from 'react';
import { useState, useCallback, useEffect} from 'react';
import "./styles.css";

function Carousel(props) {


    const [counter, setCounter] = useState(2);


    useEffect(() => {

      //0 second photo
      //1 third photo
      //2 1st photo  
      //3 2nd photo
      //4 3rd photo
      //5 1st photo


      const carouselSlide = document.querySelector(".carousel-slide")
      const carouselImages = document.querySelectorAll(".img");
      let size = carouselImages[0].clientWidth + 5;
      carouselSlide.style.transition = "transform 0.75s ease-in-out"
      if(counter === -1){
        carouselSlide.style.transform = "translateX(" + ((-size * 3)) + "px)";
        setCounter(2);


      } else if(counter > 4){

        carouselSlide.style.transform = "translateX(" + ((-size * 3)) + "px)";
        setCounter(2);


      } else {
        carouselSlide.style.transform = "translateX(" + ((-size * counter)) + "px)";

      }

  


    
      
    });



    function handleBefore(e){

      e.preventDefault();
    
      setCounter(counter - 1)


      
    }


    function handleNext(e) {


        e.preventDefault();
        setCounter(counter + 1)

 
    }




    let photos
    if (props.photos.length === 1) {
      photos = props.photos.concat(props.photos).concat(props.photos)
    } else if (props.photos.length > 0) {
      photos = props.photos;
    } else {
      photos = [
        "https://studypal-dev.s3-us-west-1.amazonaws.com/no-imgs.png",
        "https://studypal-dev.s3-us-west-1.amazonaws.com/no-imgs.png",
        "https://studypal-dev.s3-us-west-1.amazonaws.com/no-imgs.png",
      ];
    }
    

    const testPhotos = [
        "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/FmXn6cYO1Mm03UNO5cbOqw/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/HZVDyYaghwPl2kVbvHuHjA/o.jpg"
    ]

    const buttons = (
      <div className="container">
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
    </div>
      
    )

    return (
      <div className="carousel">
        <div className="carousel-container">
          <div className="pointers">
            <div className="prev-button">
              <button onClick={(e) => handleBefore(e)} id="prev">
                &#10094;
              </button>
            </div>
            <div className="next-button">
              <button onClick={(e) => handleNext(e)} id="next">
                &#10095;
              </button>
            </div>
          </div>

          
          <div className="carousel-slide">
            {photos.map((url, i) => (
              <img key={i} className="img" src={url} />
            ))}

            {photos.map((url, i) => (
              <img key={i} className="img" src={url} />
            ))}

            {photos.map((url, i) => (
              <img key={i} className="img" src={url} />
            ))}
          </div>

       
          
        </div>
      
 

          
          
      </div>
    );



}


export default Carousel;