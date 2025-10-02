import { React, useEffect, useRef, useState } from 'react'
import mySong from "./assets/audio/instrumental.mp3"
import musicIcon from "./assets/pics/music.png"
import Haldi from "./assets/pics/Haldi.jpeg"
import Our_Pic from "./assets/pics/Our_Pic.jpg"
// import sizzu from "./assets/pics/sizzu.jpg"
//  import flowers from "./assets/pics/falling_petals.gif"
// import hearts from "./assets/pics/falling_hearts1.jpg"




const App = () => {

  useEffect(()=>{
    const createFalling = () =>{
      const element = document.createElement("div");

      const isHeart = Math.random() > 0.5;
      element.classList.add(isHeart ? "heart" : "petal");

      element.style.left = Math.random() * 100 + "vw";
      element.style.animationDuration = 3 + Math.random() * 2 + "s";

      document.body.appendChild(element);

      setTimeout(()=> {
        element.remove();
      }, 10000);
    };

    const interval = setInterval(createFalling, 100);
    setTimeout(()=> clearInterval(interval), 20000);
  },[]);
  const [leftarrow, setleftarrow]=useState(false);
  const [rightarrow, setrightarrow]= useState(true);
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef(null);

  const scrollLeft = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
    setrightarrow(true);
    trackRef.current.scrollLeft -= 260; // kitna slide karna hai

    if(newIndex == 0)
    {
      setleftarrow(false);
    }
  };

  const scrollRight = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    setleftarrow(true);
    trackRef.current.scrollLeft += 260;

    if(newIndex == lastIndex)
    {
      setrightarrow(false);
    }
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
        

        <div className='hsthg'> 
          
          
          <p> #AAstreaming_forever </p> 
          

        

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
              </div>


            </section>
            
            <img className='linebreak' src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-5-golden-stars-and-straight-lines-image_1263119.jpg" alt="" />

            <section id='story'>
              <div className='story_con'>

                <h1> Our Story </h1>
                <span> <img src={Haldi} alt="Our Pic" height={400} width={400} /> </span>
                <span> 
                  <p> Amidst all the chaos and hustle, my heart found its forever 💕 </p>

                     <p> Before we fell in love, we fell into endless brainstorming sessions, case studies, and problem-solving marathons. Somewhere between product roadmaps and late-night debates, we discovered the best idea we’d ever co-create — US❣️ </p>

                     <p> We are getting married on December 2nd, 2025! </p>
                     <p> So block your calendars and get ready for a day full of love, laughter, and dance floors on fire. 💃🕺</p>


                      <p> #AAstreaming_forever </p>
                </span>
              </div>

            </section>

            <img className='linebreak' src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-5-golden-stars-and-straight-lines-image_1263119.jpg" alt="" />

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

            <img className='linebreak' src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-5-golden-stars-and-straight-lines-image_1263119.jpg" alt="" />

            <section id='gallery'>

              <div className="gallery1_con">

                

              <div className="carousel">

        <h1> Memories </h1>

      {/* Left Arrow */}

      {leftarrow &&
      <button className="arrow left" onClick={scrollLeft}>
        <img src="https://cdn-icons-png.freepik.com/512/271/271220.png" alt="" height={50} />
      </button> }

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
      {rightarrow && <button className="arrow right" onClick={scrollRight}>
        <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" height={50} />
      </button> }
    </div>
    </div>

            </section>

            <img className='linebreak' src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-5-golden-stars-and-straight-lines-image_1263119.jpg" alt="" />

            <section id='rsvp'>

              <div className='rsvp_con'>

                
                
                <h1> We can't wait to celebrate with you  </h1>

                <br />

                <p> Please RSVP below: </p>

                <span className='rsvp_span'> 

                <label htmlFor="n1"> Full Name: </label>
                <input type="text" name="full_name" id="fullName" placeholder='Enter your full name' required/> 

                </span>

                <span className='rsvp_span'>

                <label htmlFor="n2"> E-mail: </label>
                <input type="email" placeholder='Enter your e-mail' required/>

                </span>

                <span className='rad'>

                  <label htmlFor="n3"> Will you attend? </label>
                  
                  <input type="radio" name="choice" id="option1"/> <label htmlFor="option1" required> Yes </label>
                  <input type="radio" name="choice" id="option2"/> <label htmlFor="option2"> No </label> 
                </span>

                <span className='rsvp_span'>

                  <label htmlFor="n4"> Number of Guests: </label>
                  <input type="text" name="guests" id="guests" placeholder='Enter number of Guests' required="yes"/>


                </span>

                <span className='rsvp_span'>

                  <label htmlFor="n5"> Any Message for us?  </label>
                  <textarea name="message" id="message" cols="30" rows="10" maxLength={1000} placeholder='Your Message'></textarea>
                </span>

                <div className='rsvp_btn1'>

                <button className='rsvp_btn' onClick={Submit}> RSVP Now </button>

                </div>
                

              </div>



            </section>

            <img className='linebreak' src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-5-golden-stars-and-straight-lines-image_1263119.jpg" alt="" />

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