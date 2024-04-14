import React from 'react'
import { LinkedIn } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import "../components/styles/Home.css";
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const text = "A software engineer with passion for learning and creating.";
  const speed = 50; // Adjust typing speed (in milliseconds)

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);



  return (
    <div className='home'>
     <div className="about">
      <div className='heading'>
      <h2>Hi,I'm <span>Ashna</span></h2></div>
      <div className='prompt'>
      <p id="typewriter-text">{displayText}</p>
      


     <Link to="https://www.linkedin.com/in/ashna-joseph-1253951a5" target="_blank" rel="noopener noreferrer">
      <LinkedIn /> 
     </Link>

      
       <a href='mailto:ashnajoseph7907@gmail.com'><Email/></a>
       <GitHub/>
     </div>
     <div className='resume'>
     <a href="https://drive.google.com/file/d/1JUwZLJrp4sZcmOJKoA5DAiVrVnC1ouKq/view?usp=drive_link.pdf" target="_blank" rel="noopener noreferrer">
  <button>View Resume</button>
</a>
     </div>
     </div>
     <div className="skills">
      {/* <h1>Languages and Skills</h1> */}
      {/* <ol className='list'></ol>
      <li className='item'>Web Development</li>
      <li className='item'>Javascript</li>
      <li className='item'>Html and CSS</li>
      <li className='item'>Java</li>
      <li className='item'>Python</li>
      <li className='item'>React</li> */}
      <h1>My Skills</h1>
       <div class="skillcontainer">
    
    <div class="skillbar learning" data-skill="NodeJS"></div>
    <div class="skillbar basic" data-skill="SQL"></div>
    <div class="skillbar intermediate" data-skill="React.Js"></div>
    <div class="skillbar intermediate" data-skill="JAVA"></div>
    <div class="skillbar advanced" data-skill="Python"></div>
    <div class="skillbar advanced" data-skill="JavaScript"></div>
    <div class="skillbar expert" data-skill="HTML & CSS"></div> 
  </div>

      

     </div>

    </div>
   
  )
}

export default Home
