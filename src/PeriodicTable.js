import React, { useRef, useEffect, useState, createRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { useIntl } from "react-intl";
import "./main.css";
import JavaIcon from "./java.svg";
import AndroidIcon from "./icons/android.png";
import SeleniumIcon from "./icons/selenium.svg";
import EPKBPMNIcon from "./icons/EPKBPMN.png";
import git2 from "./icons/git2.png";
import language from "./icons/language.png";
import linux from "./icons/linux.png";
import office2 from "./icons/office2.png";
import python from "./icons/python.png";
import R from "./icons/R.png";
import ReactIcon from "./icons/React-icon.svg";
import sap from "./icons/sap.png";
import scrapy from "./icons2/scrappy.png";
import sql from "./icons/SQL.png";
import unity from "./icons/unity.png";

import aws from "./icons2/aws.png";
import d3 from "./icons2/d3.png";
import docker from "./icons2/docker.png";
import firebase from "./icons2/firebase2.png";
import ganache from "./icons2/ganache.svg";
import hobbys from "./icons2/hobbys.svg";
import javaee from "./icons2/javaee.png";
import js from "./icons2/js.png";
import metamask from "./icons2/metamask.png";
import mui from "./icons2/mui.svg";
import nginx from "./icons2/nginx.png";
import wildfly from "./icons2/wildfly.svg";
import apiplatform from "./icons2/apiplatform.svg";
import pandas from "./icons2/pandas2.png";
import pm from "./icons2/pm.png"; //--> price2
import quarkus from "./icons2/quarkus.png";
import reactnative from "./icons/React-icon.svg";
import remix from "./icons2/remix.png";
import solidity from "./icons2/solidity.png";
import spring from "./icons2/spring.png";
import symfony from "./icons2/symfony.png";
import tailwind from "./icons2/tailwind.png";
import Three from "./icons2/Three.png";
import truffle from "./icons2/truffle.svg";
import typescript from "./icons2/typescript.png";
import cleancode from "./icons2/clean-code.png";
import styled from "styled-components";

//google analytics
// paypal sdk - stripe
/// law --> dsgvo, ozg, urhg,

import { FormattedMessage } from "react-intl";
import { LinearToneMapping } from "three";

const LangButton = styled.button`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const textboxStyle = `
position: absolute;
width: 800px;
height: 400px;
background-color: rgba(0, 127, 127, 0.5);
color: white;
font-size: 24px;
text-align: center;
padding: 10px;
border-radius: 10px;
transform: translate(-50%, -50%);
left: 50%;
top: 50%;
`;

const table = [ { icon: JavaIcon }, "Spring Boot", "7/10", 1, 1, { icon: cleancode }, "Clean Code", "9/10", 1, 1, { icon: AndroidIcon }, "Android", "5/10", 1, 1, { icon: SeleniumIcon }, "Selenium", "8/10", 0, 1, { icon: EPKBPMNIcon }, "EPKBPMN", "9/10", 0, 1, { icon: git2 }, "Git", "8/10", 0, 1, { icon: language }, "Language", "10/10", 0, 0, { icon: linux }, "Linux", "7/10", 0, 1, { icon: office2 }, "Office", "8/10", 0, 0, { icon: python }, "Python", "9/10", 1, 1, { icon: R }, "R", "7/10", 1, 1, { icon: ReactIcon }, "React", "8/10", 1, 1, { icon: sap }, "SAP", "6/10", 0, 0, { icon: scrapy }, "Scrapy", "8/10", 1, 1, { icon: sql }, "SQL", "9/10", 1, 1, { icon: unity }, "Unity", "6/10", 1, 0, { icon: apiplatform }, "API Platform", "8/10", 2, 2, { icon: quarkus }, "Quarkus", "9/10", 3, 3, { icon: aws }, "AWS", "5/10", 1, 1, { icon: d3 }, "D3.js", "7/10", 1, 1, { icon: docker }, "Docker", "6/10", 1, 1, { icon: firebase }, "Firebase", "7/10", 1, 1, { icon: ganache }, "Ganache", "6/10", 1, 1, { icon: hobbys }, "Hobbies", "10/10", 5, 5, { icon: javaee }, "Java EE", "7/10", 2, 2, { icon: js }, "JavaScript", "9/10", 5, 5, { icon: metamask }, "MetaMask", "6/10", 1, 1, { icon: mui }, "Material UI", "8/10", 2, 2, { icon: nginx }, "NGINX", "6/10", 1, 1, { icon: wildfly }, "WildFly", "7/10", 1, 1, { icon: pandas }, "Pandas", "6/10", 1, 1, { icon: pm }, "PhpMyAdmin", "6/10", 1, 1, { icon: reactnative }, "React Native", "8/10", 2, 2, { icon: remix }, "Remix", "6/10", 1, 1, { icon: solidity }, "Solidity", "6/10", 1, 1, { icon: spring }, "Spring", "8/10", 2, 2, { icon: symfony }, "Symfony", "7/10", 1, 1, { icon: tailwind }, "Tailwind CSS", "7/10", 1, 1, { icon: Three }, "Three.js", "7/10", 1, 1, { icon: truffle }, "Truffle", "6/10", 1, 1, { icon: typescript }, "TypeScript", "8/10", 2, 2, ];

export const Table = ({ locale, selectLang }) => {
  const containerRef = useRef(null);
  const intl = useIntl();
  const elementRef = useRef(null);
  const elementRefs = useRef([]);

  /*   const handleClick = (e) => {

    console.log(e.target.outerHTML); //--> <img src="/static/media/java.3c5854fce4aa30ad19d569c45d5ce874.svg">
    const imageSrc = e.target.src; // get image source
    const fileName = imageSrc.split('/').pop(); // get the file name
    const imageName = fileName.split('.')[0]; // get the first part of the file name
    console.log(imageName); // "java"

    window.open(`https://www.google.com/search?q=${imageName}`, "_blank");
    
  }; */

  let camera, scene, renderer;


  const objects = [];
  const targets = { table: [], sphere: [], helix: [], grid: [], pyramid: [], fractalTree: [], circle: [], };





  const render = () => {
    renderer.render(scene, camera);
  };

  const transform = (targets, duration) => {
    TWEEN.removeAll();

    for (let i = 0; i < objects.length; i++) {
      const object = objects[i];
      const target = targets[i];

      new TWEEN.Tween(object.position)
        .to({ ...target.position }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

      new TWEEN.Tween(object.rotation)
        .to({ ...target.rotation }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
    }

    new TWEEN.Tween(this)
      .to({}, duration * 2)
      .onUpdate(render)
      .start();
  };

  useEffect(() => {



    const init = () => { camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );

      camera.position.z = 3000;
      scene = new THREE.Scene();

      renderer = initRenderer(renderer);
      containerRef.current.appendChild(renderer.domElement);


      const controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 200;
      controls.maxDistance = 6000;
      controls.enableZoom = false;

      createWelcomeText(intl, scene);


 


for (let i = 1; i < 10; i++) {
  const x = i * 3000;
  createText(intl, scene, x, x, x, "app.welcome");
  goBackToMain(intl, scene, x, x, x, render);
  prevOrNextButton(intl, scene, x,x,x, render, "Prev");
  prevOrNextButton(intl, scene, x,x,x, render, "Next");

}
      createImage(scene);
      initTable(elementRef, scene, objects, targets, elementRefs);
      elementClickListener(elementRefs, scene, render);

      const vector = new THREE.Vector3();


      /* Different Forms */
      createSphere(objects, vector, targets);
      createHelix(objects, vector, targets);
      createCircle(objects, targets);
      createGrid(objects, targets);
      createTable(objects, vector, targets);

      // renderer
      diableControllsOnElementHover(elementRefs, controls);
      createNavbarButtons(transform, targets);

      /* Init Formtransition */
      transform(targets.pyramid, 5000);

      window.addEventListener("resize", onWindowResize);
    };

    const onWindowResize = () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); render(); };

    const animate = () => {
      requestAnimationFrame(animate);
      TWEEN.update();

      render();
    };

    const render = () => { renderer.render(scene, camera); };
    init();
    animate();
  }, [locale]);

  return (
    <div ref={containerRef} >
      <div style={{  display: "flex", justifyContent: "space-between", backgroundColor:"black"}} className="buttons" >
        <div style={{ display: "flex", justifyContent: "flex-start"}} >
          <button id="table" onClick={() => transform(targets.pyramid, 2000)}>
            Table
          </button>
          <button id="sphere" onClick={() => transform(targets.sphere, 2000)}>
            Sphere
          </button>
          <button id="helix" onClick={() => transform(targets.helix, 2000)}>
            Helix
          </button>
          <button id="grid" onClick={() => transform(targets.grid, 2000)}>
            Grid
          </button>
          <button id="circle" onClick={() => transform(targets.circle, 2000)}>
            Circle
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }} >
          <button value={(locale = "en-US")} onClick={selectLang}>
            🇺🇸
          </button>
          <button value={(locale = "de-DE")} onClick={selectLang}>
            🇩🇪
          </button>
          <button value={(locale = "es-MX")} onClick={selectLang}>
            🇪🇸
          </button>
          <button value={(locale = "ru-RU")} onClick={selectLang}>
            🇷🇺
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;


function initRenderer(renderer) {
  renderer = new CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.backgroundColor = "black";
  renderer.domElement.style.overflow = "hidden";
  return renderer;
}

function diableControllsOnElementHover(elementRefs, controls) {
  elementRefs.current.forEach(({ symbol, object }) => {
    object.element.addEventListener("click", () => {
      controls.enabled = true;
    });

    object.element.addEventListener("mouseenter", () => {
      controls.enabled = false;
    });

    object.element.addEventListener("mouseleave", () => {
      controls.enabled = true;
    });
  });
}

function createNavbarButtons(transform, targets) {
  const buttonTable = document.getElementById("table");
  buttonTable.addEventListener("click", () => {
    transform(targets.table, 2000);
  });

  const buttonSphere = document.getElementById("sphere");
  buttonSphere.addEventListener("click", () => {
    transform(targets.sphere, 2000);
  });

  const buttonHelix = document.getElementById("helix");
  buttonHelix.addEventListener("click", () => {
    transform(targets.helix, 2000);
  });

  const buttonGrid = document.getElementById("grid");
  buttonGrid.addEventListener("click", () => {
    transform(targets.grid, 2000);
  });




}

function createTable(objects, vector, targets) {
  for (let i = 0, l = objects.length; i < l; i++) {
    const rows = 5; // number of rows in the pyramid
    const cols = 13; // number of columns in the pyramid
    const row = Math.floor(i / cols); // current row
    const col = i % cols; // current column
    const x = (col - cols / 2 + 0.5) * 200; // x position based on column
    let y = (rows - row) * 180; // y position based on row
    let z = 0; // z position

    const object = new THREE.Object3D();
    y = y - 800;
    z = z + 1200;
    object.position.set(x, y, z);

    vector.copy(object.position).multiplyScalar(2);

    object.lookAt(vector);

    targets.pyramid.push(object);
  }
}

function createGrid(objects, targets) {
  for (var i = 0; i < objects.length; i++) {
    let object = new THREE.Object3D();
    object.position.x = (i % 4) * 400 - 400;
    object.position.y = -(Math.floor(i / 4) % 3) * 400 + 400;
    object.position.z = Math.floor(i / 16) * 1000 - 2000;
    targets.grid.push(object);
  }
}

function createCircle(objects, targets) {
  const circle = [];

  for (let i = 0, l = objects.length; i < l; i++) {
    const object = new THREE.Mesh(
      new THREE.TorusGeometry(100, 25, 16, 100),
      objects[i].material
    );

    const phi = (i / l) * Math.PI * 2;
    object.position.set(Math.cos(phi) * 800, 0, Math.sin(phi) * 800);
    object.rotation.set(Math.PI / 2, phi, 0);

    circle.push(object);
    targets.circle.push(object);
  }
}

function createHelix(objects, vector, targets) {
  const helix = [];
  for (let i = 0, l = objects.length; i < l; i++) {
    const theta = i * 0.175 + Math.PI;
    const y = -(i * 8) + 450;

    const object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    vector.x = object.position.x * 2;
    vector.y = object.position.y;
    vector.z = object.position.z * 2;

    object.lookAt(vector);

    helix.push(object);
    targets.helix.push(object);
  }
}

function initTable(elementRef, scene, objects, targets, elementRefs) {
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
    if (table[i].icon) {
      const img = document.createElement("img");
      img.src = table[i].icon;
      img.style.width = "100px";
      img.style.height = "100px";
      symbol.appendChild(img);
    } else {
      symbol.textContent = table[i];
    }
    symbol.ref = elementRef; // assign ref to symbol element
    element.appendChild(symbol);

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
}

function elementClickListener(elementRefs, scene, render) {
  elementRefs.current.forEach(({ symbol, object }) => {
    object.element.addEventListener("click", () => {
  


      //this displays a number
      console.log(symbol.previousElementSibling.textContent + " was clicked!");

      let id = symbol.previousElementSibling.textContent;

      console.log("id is: ", id)
      /* Switch for all cards */

            switch (id) {
        case "1":
          console.log("Card 1 was clicked!");
          goToCard(scene,render, -3000, -3000, -3000)
          // Add code to handle Card 1 click
          break;
        case "2":
          goToCard(scene,render, -6000, -6000, -6000)
          // Add code to handle Card 2 click
          break;
        // Add additional cases for other cards
        default:
          alert("Hier zu gibt es noch keine Informationen :)");
          goToCard(scene,render, -9000, -9000, -9000)
          // Add code to handle unknown card click
          break;
      }



 
    });
  });
}

function goToCard(scene, render, x,y,z){
  new TWEEN.Tween(scene.position)
  .to({ x: x, y: y, z: z }, 1000)
  .easing(TWEEN.Easing.Quadratic.InOut)
  .onUpdate(render)
  .start();
}

function createSphere(objects, vector, targets) {
  for (let i = 0, l = objects.length; i < l; i++) {
    const phi = Math.acos(-1 + (2 * i) / l);
    const theta = Math.sqrt(l * Math.PI) * phi;

    const object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    vector.copy(object.position).multiplyScalar(2);

    object.lookAt(vector);

    targets.sphere.push(object);
  }
}

function createWelcomeText(intl, scene) {
  const textElement = document.createElement("div");
  textElement.className = "textbox";

  const wrapper = document.createElement("div"); // create wrapper div
  wrapper.style.position = "relative"; // set position to relative


  const newMessageText = intl.formatMessage({ id: "app.welcome" });
  wrapper.innerHTML += newMessageText; // add text to wrapper

  textElement.appendChild(wrapper); // add wrapper to textElement

  const textObject = new CSS3DObject(textElement);
  textObject.position.set(-1000, 500, -900);
  textObject.scale.set(2, 2, 2);
  scene.add(textObject);

  const textboxElement = document.createElement("style");
  textboxElement.innerHTML = `.textbox { ${textboxStyle} }`;
  document.head.appendChild(textboxElement);
}

function createImage(scene) {
  const imageElement = document.createElement("img");
  imageElement.src =
    "https://images.unsplash.com/photo-1677032448705-92557fb54c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODY0NzI0MQ&ixlib=rb-4.0.3&q=80&w=1080";
  const containerElement = document.createElement("div");
  containerElement.style.position = "absolute"; // set position to absolute
  containerElement.style.width = "300px"; // set width to 300px
  containerElement.style.height = "300px"; // set height to 300px
  containerElement.style.top = "50px"; // set top position to 50px
  containerElement.style.left = "50px"; // set left position to 50px
  containerElement.appendChild(imageElement);

  const imageObject = new CSS3DObject(containerElement);
  imageObject.position.set(-4500, 2500, -5000);
  scene.add(imageObject);
}



function goBackToMain(intl, scene, x,y,z, render ) {
  const objectContent = document.createElement("button");
  objectContent.textContent = "Zum Anfang";

  // Create a CSS3DObject from the div element
  const object = new CSS3DObject(objectContent);

  x = x + 950;
  y = y + 200;
  // Set the object's position
  object.position.set(x, y,z);// set the position to the positon of the textElement
  object.scale.set(3, 3, 3);
  // Add the object to the scene
  scene.add(object);

  // Add a click event listener to the object's element
  object.element.addEventListener("click", () => {
    goBackToMainMenu(render, scene);
  });
}



function prevOrNextButton(intl, scene, x,y,z, render, prevOrNext ) {


  console.log("ASDsadsasa: ", prevOrNext)
  const objectContent = document.createElement("button");

  if(prevOrNext=="Next"){
    objectContent.textContent = ">";
    x = x + 1717;
  } else {
    x = x + 200;
    objectContent.textContent = "<";
  }
  //prev or next

  // Create a CSS3DObject from the div element
  const object = new CSS3DObject(objectContent);

  

  y = y + 200;
  // Set the object's position
  object.position.set(x, y,z);// set the position to the positon of the textElement
  object.scale.set(3, 3, 3);
  // Add the object to the scene
  scene.add(object);

  // Add a click event listener to the object's element
  object.element.addEventListener("click", () => {
   // goBackToMainMenu(render, scene);
   goPrevOrNext(render, scene, prevOrNext)
  // alert("prevOrNext")
  });
}



function createText(intl, scene, x,y,z, messageId) {
  const textElement = document.createElement("div");
  textElement.className = "textbox";

  const wrapper = document.createElement("div"); // create wrapper div
  wrapper.style.position = "relative"; // set position to relative




  /* ADD BUTTON HERE */

  const newMessageText = intl.formatMessage({ id: messageId });
  wrapper.innerHTML += newMessageText; // add text to wrapper

  textElement.appendChild(wrapper); // add wrapper to textElement

  const textObject = new CSS3DObject(textElement);
  textObject.position.set(x, y,z);
  textObject.scale.set(2, 2, 2);
  scene.add(textObject);

  const textboxElement = document.createElement("style");
  textboxElement.innerHTML = `.textbox { ${textboxStyle} }`;
  document.head.appendChild(textboxElement);
}


function goBackToMainMenu(render, scene){


  new TWEEN.Tween(scene.position)
.to({ x: 0, y: 0, z: 0 }, 1000)
.easing(TWEEN.Easing.Quadratic.InOut)
.onUpdate(render)
.start();
}

function goPrevOrNext(render, scene, prevOrNext){
  const currentPosition = scene.position.x;
  let newPosition;
  
  if (prevOrNext === 'Prev') {
    newPosition = currentPosition + 3000;
  } else {
    newPosition = currentPosition - 3000;
  }

  new TWEEN.Tween(scene.position)
    .to({ x: newPosition, y: newPosition, z: newPosition }, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(render)
    .start();
}

/* 


//3d pyramid??
      for (var i = 0; i < objects.length; i++) {
        var object = new THREE.Object3D();
        var layer = Math.floor((-1 + Math.sqrt(1 + 8 * i)) / 2) + 1;
        var row = i - (layer - 1) * (layer - 1 + 1) / 2;
        var halfSize = (layer - 1) * 200;
      
        object.position.x = ((row % layer) * 400) - halfSize;
        object.position.y = (-(layer - 1) * 400) + 800;
        object.position.z = ((layer - 1) * 1000) - (i * 100);
      
        targets.pyramid.push(object);
      } */

/*    
zylinder


for (let i = 0; i < objects.length; i++) {
        const object = new THREE.Object3D();
      
        const layer = Math.floor((-1 + Math.sqrt(1 + 8 * i)) / 2) + 1;
        const indexInLayer = i - (layer - 1) * (layer - 1) + 1;
      
        const radius = 400;
        const angle = (indexInLayer - 1) * (2 * Math.PI / layer);
      
        const x = radius * Math.cos(angle);
        const y = -(layer - 1) * 400;
        const z = radius * Math.sin(angle);
      
        object.position.set(x, y, z);
      
        targets.pyramid.push(object);
      } */
