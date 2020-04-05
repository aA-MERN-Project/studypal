import React from 'react';
import { useState, useCallback} from 'react';
import { set } from 'mongoose';

function Carousel(props) {

    const [isDown, setDown] = useState(false);
    const [startX, setX] = useState(null);
    const [transLeftOffset, setLeftOffset] = useState(null);
    const [dragSpeed, setDrag] = useState(props.dragSpeed)
    const [cref, setCref] = useState(React.createRef())


    //Helper

    function giveMeIntValOf(el) {
        // extracting 20 from translateX(20px) and converting it to integer with parsInt
        return parseInt(el.replace('translateX(', '').replace('px)', ''), 10)
    } 

    // const handleSnap = useCallBack(
    //     () =>
    // )

    
    function handleSnap() {
        const {_data, itemWidth, itemSideOffsets} = props;
        debugger
        const carousel = cref.current;

        

        // reset carousel
        setDown(false);

        debugger
        carousel.classList.remove('active');

        //Threshold
        // getting transvalue

        debugger
        const tempThresholdOffset = giveMeIntValOf(carousel.firstChild.style.transform)
        const end = _data.length * (itemWidth + (2 * itemSideOffsets)) - 30 - carousel.offsetWidth
        
        if (tempThresholdOffset < 0 || tempThresholdOffset > end) {
            setDown(false);
            carousel.firstChild.style.cssText = `
        transform: translateX(${ tempThresholdOffset < 0 ? 0 : end}px);
        transition: transform 0.5s cubic-bezier(.25,.72,.51,.96);
      `;
        }




    }


    function handleMouseDown(event) {
        debugger
        const carousel = cref.current;
        event.persist()
        debugger
        carousel.classList.add('active');
        debugger
        const _startX = event.pageX - carousel.offsetLeft;
        const _transLeftOffset = giveMeIntValOf(carousel.firstChild.style.transform)
        
        setDown(true);
        setX(_startX);
        setLeftOffset(_transLeftOffset);

        //Reset transition

        debugger

        const x = event.pageX - carousel.offsetLeft;
        const walk = (x- startX) * dragSpeed;
        debugger
        carousel.firstChild.style.cssText = `
        transform: translateX(${transLeftOffset + walk}px);
        transition: transform 0.0s ease-in-out;
      `;

      debugger


    }


    // mouse Leave
    function handleMouseLeave(e) {
        debugger
        handleSnap()
    }


    // mouse Up
    function handleMouseUp(e){
        handleSnap();
    }


    // mouse Move
    function handleMouseMove (e){
        const carousel = cref.current
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - carousel.offsetLeft
        const walk = (x - startX) * dragSpeed
        carousel.firstChild.style.transform = `translateX(${transLeftOffset + walk}px)`;
    }


    const {
        _data,
        itemWidth,
        itemHeight,
        itemSideOffsets
    } = props


    const cWrapperStyle = {
        width: `${_data.length * (itemWidth + (2 * itemSideOffsets))}px`,
        height: `${itemHeight}px`
    }
    
    return (
        <div
            className='carousel'
            ref={cref}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}>
            <div
                className='cWrapper'
                style={{
                    ...cWrapperStyle,
                    transform: 'translateX(0px)'
                }}>
                {props.children}
            </div>
        </div>
    );

}


export default Carousel;