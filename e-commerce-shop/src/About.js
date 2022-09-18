import { useState } from "react";
import { slides } from "./slides";
import "./App.css";

function About() {
    const [images, setImages] = useState(0);
    const {image} = slides[images];
    

    const previousImage = () =>{
        setImages((image =>{
            images--;
            if(images < 0){
                return slides.length - 1
            }
            return images
        }))
    }

    const nextImage = () => {
        setImages((images =>{
            images++
            if(images > slides.length - 1){
                images = 0;
            }
            return images
        }))
    }
    return (
        <div>
        <div className="container">
            <h1>HISTORY OF THE BRAND</h1>
        </div>

        
    <div className="container main">
    <img src={image} alt="fashion"/>
    </div>
        <button onClick={previousImage}>❮</button>
        <button onClick={nextImage}>❯</button> 

        <div className="sliderStyles">
            <div className="leftArrowStyles">
            <button className="previous" onClick={previousImage}>❮</button>
            </div>
            <div className="rightArrowStyles">
            <button className="next" onClick={nextImage}>❯</button>
            </div>
            <div className="slideStyles"></div>
        </div> 
        
        </div>

    )
}

export default About;