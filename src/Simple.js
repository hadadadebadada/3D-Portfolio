import React, { useRef, useEffect, createRef } from "react";
import * as THREE from "three";

import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";

import "./main.css";
import JavaIcon from "./java.svg";

const table = [ 

"He", "Helium", "4.002602", 18, 1, 
"Li", "Lithium", "6.941", 1, 2, 
"Se", "Selenium", "78.96", 16, 4,
      'Be', 'Beryllium', '9.012182', 2, 2,
    'B', 'Boron', '10.811', 13, 2,
    'C', 'Carbon', '12.0107', 14, 2,

];


export const Simple = () => {
  const containerRef = useRef(null);



  let camera, scene, renderer;
  let controls;


  const targets = {
    table: [],
    sphere: [],
    helix: [],
    grid: [],
    pyramid: [],
    fractalTree: [],
    torusKnot: [],
  };

  const elementRef= useRef(null);


  const elementRefs  = useRef([]);

  


  const handleClick = (e) => {

    console.log(e.target.outerHTML); // current element from symbol
    
  };


  const objects = [];

  useEffect(() => {
    console.log("start")
    const init = () => {
      camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );

      camera.position.z = 3000;
      scene = new THREE.Scene();


      
      renderer = new CSS3DRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.backgroundColor = "black";
      containerRef.current.appendChild(renderer.domElement);


         const textField = document.createElement("input");
    textField.setAttribute("type", "text");
    textField.setAttribute("placeholder", "Click me");
    textField.style.position = "absolute";
    textField.style.top = "50%";
    textField.style.left = "50%";
    textField.style.transform = "translate(-50%, -50%)";
    textField.addEventListener("click", () => {
      console.log("Clicked");
    });
    containerRef.current.appendChild(textField);


      
      // create table
      for (let i = 0; i < table.length; i += 5) {
        const element = document.createElement("div");
        element.className = "element";
        element.style.backgroundColor = `rgba(0, 127, 127, ${
          Math.random() * 0.5 + 0.25
        })`;
      
        const number = document.createElement("div");
        number.className = "number";
        number.textContent = i / 5 + 1;
        element.appendChild(number);
      
        const symbol = document.createElement("div");
        symbol.className = "symbol";
   
          symbol.textContent = table[i];


        element.appendChild(symbol);



      //  elementRef.current.appendChild(symbol);


        const details = document.createElement("div");
        details.className = "details";
        details.innerHTML = `${table[i + 1]}<br>${table[i + 2]}`;
        element.appendChild(details);
      
        const object = new CSS3DObject(element);
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
       
        scene.add(object);
      
        objects.push(object);


      
        targets.table.push(object);
        elementRefs.current.push({ symbol: symbol, object: object });
    

      }
  


      elementRefs.current.forEach(({ symbol, object }) => {
        object.element.addEventListener("click", () => {
          console.log(symbol.textContent + " was clicked!");
        });
      });



    
      // controls
/* 
      controls = new TrackballControls(camera, renderer.domElement);
      controls.minDistance = 500;
      controls.maxDistance = 6000; */
      window.addEventListener("resize", onWindowResize);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    };

    const animate = () => {
      requestAnimationFrame(animate);
      TWEEN.update();
  /*     controls.update(); */
      render();
    };

    const render = () => {
      renderer.render(scene, camera);
    };


    init();
    animate();
  }, []);


  
  




  return (
    <div ref={containerRef}>
      
      <button onClick={handleClick}> CLICK</button>
        
    </div>
  );
};

export default Simple;
