import React from 'react';
import './memories.css';
import collage from './photo-collage.png';
  
const Memories = () => {
  return (
    <div class="wrapper">
      <div id="header1">
        <h1>I was going to skimp out on this, but I felt bad, so....</h1>
        <h2 id="subheading">I made this:</h2>
      </div>
      <div>
      <img src ={collage} alt="Picture of Morgan Collage" id="collage"/>
      </div>
      <div id="message1">
        <p1>We've had a of good memories, most of which aren't recorded in photos or videos because I like to live in the moment. But the few that are, I sometimes look back at and remember how much our relationship means to me. The history that we've had together messing around Geffen or Kenneth Hahn is what makes our friendship so valuable and what's made my life worth living. So thank you for all that and the many more memories that are to come.</p1>
      </div>
      
    </div>
  );
};
  
export default Memories;