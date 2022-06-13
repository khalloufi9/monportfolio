import React from 'react'
import './Home.css'
import foto from '../foto.jpg'
const Home = () => {
  return (
    <div className="container-fluid">
        <div className='row '>
        <div class="col-4" >
        <img className='image-profile' src={foto}/>
        </div>
        <div class="col-8 " >
        <span>Hi, My name is Khalloufi Oumaima</span>
        <p className='introduction'>I'am a <h4 style={{color:"darkblue",fontFamily:"sans-serif"}}>Fullstack Web developer</h4>   located in Bizerte, Tunisia. with one years of experience developping websites and web applications using javaScript technologies.
            I have a license degree in management computing from the ISG of tunisia
        </p>
        </div>

        {/*my social*/}
        <div className='item-social'>
        <div class="col align-self-center"  >
        <span style={{marginLeft:"40px"}}>My Social</span>
        </div>
        </div>
        <div className='row '>
        <div class="col-3">
        <a href="facebook.com">
        <img src="https://portfolio-achtrick.vercel.app/icons/facebook.webp"></img>
     
        </a>
        </div>
        <div class="col-3">
        <a href="facebook.com">
        <img src="	https://portfolio-achtrick.vercel.app/icons/instagram.webp"></img>
        </a>
        </div>
        <div class="col-3">
        <a href="facebook.com">
        <img src="https://portfolio-achtrick.vercel.app/icons/github.webp"></img>
        </a>
        </div>
        <div class="col-3">
        <a href="facebook.com">
        <img src="https://portfolio-achtrick.vercel.app/icons/linkedin.webp"></img>
        </a>
        </div>
        </div>
    </div>
    </div>

  )
}

export default Home