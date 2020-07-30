import React from 'react';

import aliens from '../assets/aliens.png';
import king from '../assets/king.png';
import fam from '../assets/fam.png';


const Home = () => (
    <div id="home">
    <section id="intro" className="secColor flex-row-center">
      <div className="left fifty">
        <h1>Do you want to hear the music of the future?</h1>
        <h3>
          We only serve the best alien records in our online super mega wow
          store. <br></br>You've been warned.
        </h3>
      </div>
      <div className="right fifty">
        <img src={aliens} alt="img" />
      </div>
    </section>
    <section id="monkey" className="thirdColor flex-row-center">
      <div className="left fifty">
        <img src={king} alt="img" />
      </div>
      <div className="right fifty">
        <h1>Will you stop feeding your huge music addiction tiny bananas?</h1>
        <h3>
          King Kong did not satisfy his musical urge by eating small bananas.
          He destroyed the whole city. Classic toxic masculinity...
        </h3>
      </div>
    </section>
    <section id="intro" className="fifthColor flex-row-center">
      <div className="left fifty">
        <h1>Bring your family with you!!</h1>
        <h3>
          Well, is your family music addicted as well? Don't worry, we offer a
          family plan to serve your needs. Think of it as a family rehab
          programm.
        </h3>
      </div>
      <div className="right fifty">
        <img src={fam} alt="img" />
      </div>
    </section>
  </div>
);

export default Home;