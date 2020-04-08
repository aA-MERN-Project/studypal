import React from 'react';
import { useState, useCallback} from 'react';
import "./styles.css";

function Carousel(props) {


    const [counter, setCounter] = useState(0);
    function handleBefore(e){
        e.preventDefault();
        const carouselSlide = document.querySelector(".carousel-slide")
        const carouselImages = document.querySelectorAll(".img");
        let size = carouselImages[0].clientWidth + 5;
        carouselSlide.style.transition = "transform 0.75s ease-in-out"


        setCounter(counter - 1)

        // debugger;
        setTimeout(
            () => {

                if (counter < 0) {
                    carouselSlide.style.transform = "translateX(" + ((-size * (photos.length - 1))) + "px)";
                    setCounter(photos.length - 1);
                }

                else {
                    carouselSlide.style.transform = "translateX(" + ((-size * counter)) + "px)";
                }
            }, 0 )

    }

    function handleNext(e){
        e.preventDefault();
        const carouselSlide = document.querySelector(".carousel-slide")
        const carouselImages = document.querySelectorAll(".img");
        let size = carouselImages[0].clientWidth + 5;
        carouselSlide.style.transition = "transform 0.75s ease-in-out"


        setCounter(counter + 1)


        setTimeout(
            () => {

                if (counter >= photos.length) {
                    carouselSlide.style.transform = "translateX(" + ((-size * (photos.length +1))) + "px)";
                    setCounter(0);
                }

                else {
                    carouselSlide.style.transform = "translateX(" + ((-size * counter)) + "px)";
                }
            }, 0)

    }


    let photos
    
    debugger
    if (props.photos.length > 0) {
      photos = props.photos
    } else {
      photos = ['https://studypal-dev.s3-us-west-1.amazonaws.com/no-imgs.png',
        'https://studypal-dev.s3-us-west-1.amazonaws.com/no-imgs.png',
        'https://studypal-dev.s3-us-west-1.amazonaws.com/no-imgs.png' ]
    }
    

    const testPhotos = [
        "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/FmXn6cYO1Mm03UNO5cbOqw/o.jpg",
        "https://s3-media4.fl.yelpcdn.com/bphoto/HZVDyYaghwPl2kVbvHuHjA/o.jpg"
    ]

    return (
      <div className="carousel">
        <div className="carousel-container">
          <div className="pointers">
            <div className="prev-button">
              <button onClick={handleBefore} id="prev">
                &#10094;
              </button>
            </div>
            <div className="next-button">
              <button onClick={handleNext} id="next">
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