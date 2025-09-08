import React from "react";
import banner from '../../assets/banner.jpg'
import bannerMobile from '../../assets/banner_mobile.jpg'
import './Banner.css'

 export default function Banner() {
         const isMobile = window.innerWidth <= 768;
        return (
           <section className='secao_capa' style={{backgroundImage: `url(${isMobile ? bannerMobile : banner})`, }}>
            <div className='texto'>
               <h2>Preview</h2>
               <h1>VERÃO</h1>
               <button className='btn'>Comprar agora</button>
            </div>
           </section>
                
           
           
        )
    }