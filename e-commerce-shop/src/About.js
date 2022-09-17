import { useState } from "react";
import { slides } from "./slides";
import "./App.css";

function About() {
    const [images, setImages] = useState(0);
    const {id,image} = slides[images];

    

    const previousImage = () =>{
        setImages((image =>{
            images--;
            if(images < 0){
                return slides.length -1
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
       
        <p>Massimo Dutti was founded in 1985 and was acquired by Inditex in 1991. It now has over 643 stores in more than 78 markets and an online presence in 215 markets. </p>
        <p> The brand was originally aimed at men's fashion. Starting in 1995, women’s fashion was launched in all its dimensions: from the most urban lines to the more casual. Massimo Dutti has consolidated at all levels as a group with national and international growth and has reached over10,000 employees today.</p>
        
        <p>Since September 2006, Massimo Dutti has been fully designing and marketing the following lines: Women: Womenswear, Accessories, Fragrances for Men: Menswear, Accessories, Personal Tailoring, Fragrances.</p>
<div className="container main">
    <img src={image} alt="fashion"/>
    </div>
        {/* <button onClick={previousImage}>❮</button>
        <button onClick={nextImage}>❯</button> */}

        <div className="sliderStyles">
            <div className="leftArrowStyles">
            <button onClick={previousImage}>❮</button>
            </div>
            <div className="rightArrowStyles">
            <button onClick={nextImage}>❯</button>
            </div>
            <div className="slideStyles"></div>
        </div>
        
        </div>

    )
}

export default About;