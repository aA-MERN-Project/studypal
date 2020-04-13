import React from 'react';
import Carousel from './carousel';
import "./styles.css";

class CarouselTest extends React.Component {

    render() {

        const photos = [
            "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/FmXn6cYO1Mm03UNO5cbOqw/o.jpg",
            "https://s3-media4.fl.yelpcdn.com/bphoto/HZVDyYaghwPl2kVbvHuHjA/o.jpg"
        ]

        const items = ['one', 'two', 'three', 'four', 'five']

        const setting = {
            dragSpeed: 1.25,
            itemWidth: 400,
            itemHeight: 300,
            itemSideOffsets: 30,
        }

        const itemStyle = {
            width: `${setting.itemWidth}px`,
            height: `${setting.itemHeight}px`,
            margin: `0px ${setting.itemSideOffsets}px`
        }

        return (
            <div className='container'>
                <h1>Drag the carousel along the x-axies...</h1>
                <Carousel _data={items} {...setting}>
                    {
                        items.map((i, _i) => (
                            <div
                                key={_i}
                                className='item'
                                style={{ ...itemStyle }}>


                                <p>{i}</p>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        )
    }
}

export default CarouselTest