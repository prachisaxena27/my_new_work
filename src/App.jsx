import { React, useRef, useState } from 'react'
import mySong from "./assets/audio/instrumental.mp3"
import musicIcon from "./assets/pics/music.png"
import Haldi from "./assets/pics/Haldi.jpeg"
import Our_Pic from "./assets/pics/Our_Pic.jpg"
// import sizzu from "./assets/pics/sizzu.jpg"
//  import flowers from "./assets/pics/falling_petals.gif"
// import hearts from "./assets/pics/falling_hearts1.jpg"




const App = () => {



  const trackRef = useRef(null);

  const scrollLeft = () => {
    trackRef.current.scrollLeft -= 300; // kitna slide karna hai
  };

  const scrollRight = () => {
    trackRef.current.scrollLeft += 300;
  };


  const [isPlaying, setIsPlaying]=useState(false)
  const audioRef= useRef(null);

  const handleMusicToggle= ()=> {
    if(isPlaying){
      audioRef.current.pause();
    }
    else{
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const Submit= ()=>
  {
    alert("Congratulations, You have successfully RSVPed.")
  }

  return (



    <>
    
          <title> Wedding Site </title>
        


          {/* <div className="ani"> */}



          <div className='container'>




      

        <img className='msc' src={musicIcon} alt="music" onClick={handleMusicToggle} style={{cursor: "pointer"}} />


      

      <audio ref={audioRef} loop>
          
          <source src={mySong} type='mpeg/audio' />
          <source src={mySong} type="audio/ogg" />
  Your browser does not support the audio element.
          
        </audio> 
        

        <div className='hsthg'> <p> #AAstreaming_Forever </p> 

        

            <nav id='home'>
              
              <div className='navbar'>

              
              
              

              <a href="#hero"> Home </a>
              <a href="#story"> Our Story </a>
              <a href="#events"> Events </a>
              <a href="#gallery"> Gallery </a>
              <a href="#rsvp"> RSVP </a>

              </div>
            </nav>
            </div>

            <section id='hero'>

              <div className='hero_con'>

              
               <h1> Aditya Jain & Ankita Jain </h1>

               <div className='hero_img'>

               

                  <img src={Our_Pic} alt="" />

                  </div>


              <p> hello, this is our website... </p>





              </div>


            </section>

            <section id='story'>
              <div className='story_con'>
                <span> <img src="" alt="Our Pic" height={400} width={400} /> </span>
                <span> 2</span>
              </div>

            </section>

            <section id='events'>

              <div className='events_con'>

                <h1> Events </h1>

                <div className="events_gal">

                  

                <img src={Haldi} alt="Image loading..." height={400} width={360} />
                <img src={Haldi} alt="Image loading..." height={400} width={360} />
                <img src={Haldi} alt="Image loading..." height={400} width={360} />
                <img src={Haldi} alt="Image loading..." height={400} width={360} />
              </div>
              </div>

            </section>

            <section id='gallery'>

              <div className="gallery1_con">

                

              <div className="carousel">

        <h1> Memories </h1>

      {/* Left Arrow */}
      <button className="arrow left" onClick={scrollLeft}>
        <img src="https://cdn-icons-png.freepik.com/512/271/271220.png" alt="" height={50} />
      </button>

      {/* Track */}
      <div className="carousel-track" ref={trackRef}>
      <img src="https://static.vecteezy.com/system/resources/previews/012/002/539/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg" alt="Image loading..." height={500} />
      <img src="https://static.vecteezy.com/system/resources/previews/012/002/539/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg" alt="Image loading..." height={500} />
      <img src="https://static.vecteezy.com/system/resources/previews/012/002/539/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg" alt="Image loading..." height={500}  />
      <img src="https://static.vecteezy.com/system/resources/previews/012/002/539/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg" alt="Image loading..." height={500} />
      <img src="https://static.vecteezy.com/system/resources/previews/012/002/539/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg" alt="Image loading..." height={500} />
      <img src="https://static.vecteezy.com/system/resources/previews/012/002/539/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg" alt="Image loading..." height={500} />
      </div>

      {/* Right Arrow */}
      <button className="arrow right" onClick={scrollRight}>
        <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" height={50} />
      </button>
    </div>
    </div>

            </section>

            <section id='rsvp'>

              <div className='rsvp_con'>

                
                
                <h1> We can't wait to celebrate with you  </h1>

                <br />

                <p> Please RSVP below: </p>

                <span className='rsvp_span'> 

                <label htmlFor="n1"> Full Name: </label>
                <input type="text" name="full_name" id="fullName" placeholder='Enter your full name' /> 

                </span>

                <span className='rsvp_span'>

                <label htmlFor="n2"> E-mail: </label>
                <input type="email" placeholder='Enter your e-mail' />

                </span>

                <span className='rad'>

                  <label htmlFor="n3"> Will you attend? </label>
                  
                  <input type="radio" name="choice" id="option1"/> <label htmlFor="option1"> Yes </label>
                  <input type="radio" name="choice" id="option2"/> <label htmlFor="option2"> No </label> 
                </span>

                <span className='rsvp_span'>

                  <label htmlFor="n4"> Number of Guests </label>
                  <input type="text" name="guests" id="guests" placeholder='Enter number of Guests'/>


                </span>

                <div className='rsvp_btn1'>

                <button className='rsvp_btn'> RSVP Now </button>

                </div>
                

              </div>

            </section>

            <section>

              <div className='footer'>

                <p>
                  Footer
                </p>

                <a href="#home"> <img src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/up-arrow-icon.png" alt="" height={30} /> </a>

              </div>

            </section>

          </div>
          {/* </div> */}
          {/* </div> */}

        
    </>
  )
}

export default App