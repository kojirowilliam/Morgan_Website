import React from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber'
import { Box, Sky, OrbitControls, Center } from '@react-three/drei'
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import myFont from "../../fonts/Sansita.json";
import morganImage from "../../morgan.jpg";
import morganImage1 from "../../morgan1.jpg";
import "./index.css";

extend({ TextGeometry });

const deg2rad = (degrees) => degrees * (Math.PI / 180);

function Text() {
  useThree(({ camera }) => {
    camera.rotation.set(deg2rad(30), 0, 0);
  });

  const font = new FontLoader().parse(myFont);
  return (
    <mesh position={[-15, -1, 0]}>
      <textGeometry
        args={["Happy Birthday Morgan!!!", { font, size: 2, height: 0.1 }]}
      />
      
      <meshLambertMaterial attach="material" color={"gold"} />
    </mesh>
  );
}

const Home = () => {
return (
	<div class="wrapper">
		<div id = "header">
			<img src ={morganImage1} alt="Picture of Morgan1" id="morgan1"/>
			<div id="canvas">
				<Canvas>
				<color args={['#333']} attach="background" />
				<OrbitControls />
				<ambientLight />
				<spotLight />
				<Text/>
				</Canvas>
			</div>
			<img src ={morganImage} alt="Picture of Morgan2" id="morgan2"/>
		</div>
		<div id="message">
			<p1><strong>Dear Morgan,</strong></p1>
			<br/>
			<p1>&emsp; Happy birthday Morgan! You’re literally my best friend and someone who I can’t imagine my life without. I admire your persistence for things you're passionate for and how kind you are to your friends. We’ve had a lot of good memories over the past 4 years from the first day we met during cross country to just a few months ago when we climbed Mt. Baldy. But now that you’re 18, you’ll go off to a great college, become more independent, and be somewhere that I can no longer bike to during the weekends. But I’m not saying that to make you feel sad, but to celebrate how far you’ve come and to show you how much of an impact you’ve had in my life. Over the last few years, you’ve become my best friend. And that’s no easy feat. I’m someone who pushes people away when they’re not in a good mood and was physically violent, especially when we first met. But you’ve helped me change. Your persistence and genuine good nature helped me learn how to become a better friend. Although there were definitely times I was worried about your future, I’m confident that you’ll be fine and have a positive impact on the world.</p1>
		</div>
	</div>
);
};

export default Home;
