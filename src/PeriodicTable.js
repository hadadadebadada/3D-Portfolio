import React, { useRef, useEffect, useState, createRef } from "react";
import * as THREE from "three";
import { initControls, initCSS3DRenderer, initWebGlRenderer, } from "./components/Initializer";
import { createTable, createGrid, createSphere, createHelix, createDoubleHelix, createCircle, createTest, createFractalTree, } from "./components/FormCreator";
import { createArrow, createWelcomeText, createText, createImage, } from "./components/HtmlElements";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { createPlanet } from "./components/LandingPageEarthAnimation";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";
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

import php from "./icons2/php.png"
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
import django from "./icons2/django.png";
import styled from "styled-components";

import jira from "./icons2/jira.png"
import confluence from "./icons2/jira2.png"
import jenkins from "./icons2/jenkins.png"
import ga from "./icons2/ga.png"
import matomo from "./icons2/matomo.png"
import paypal from "./icons2/paypal.png"
import stripe from "./icons2/stripe-icon.svg"
import law from "./icons2/law.png"


import androidObj from './landingpage/android.glb' 
import pythonObj from './landingpage/python.glb' 
import react from './landingpage/react.glb'
import java from './landingpage/java.glb'
import computer from './landingpage/computer.glb'


import earthTexture from './earth/01-3.jpg'
import earthBump from './earth/earthbump1k.jpg'
import earthSpec from './earth/earthspec1k.jpg'
import cloudMapTrans from './earth/earthcloudmaptrans.jpg'


// office-->VBA 
// jira/ conlfunece
//jenkins
//google analytics / matomo
// paypal sdk - stripe
/// law --> dsgvo, ozg, urhg, 

import { FormattedMessage } from "react-intl";

/* const LangButton = styled.button`
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
`; */

/* const textboxStyle = `
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
`; */

const table = [ { icon: JavaIcon }, "Java", "8/10", 1, 1, { icon: spring }, "Spring", "7/10", 2, 2, { icon: AndroidIcon }, "Android", "6/10", 1, 1, { icon: SeleniumIcon }, "Selenium", "8/10", 0, 1, { icon: javaee }, "Java EE", "6/10", 2, 2, { icon: quarkus }, "Quarkus", "3/10", 3, 3, { icon: js }, "JavaScript", "8/10", 5, 5, { icon: ReactIcon }, "React", "9/10", 1, 1, { icon: Three }, "Three.js", "7/10", 1, 1, { icon: mui }, "Material UI", "8/10", 2, 2, { icon: tailwind }, "Tailwind CSS", "7/10", 1, 1, { icon: d3 }, "D3.js", "3/10", 1, 1, { icon: typescript }, "TypeScript", "4/10", 2, 2, { icon: reactnative }, "React Native", "3/10", 2, 2, { icon: python }, "Python", "6/10", 1, 1,  { icon: scrapy }, "Scrapy", "8/10", 1, 1, {icon:django}, "Django", "5/10", 1,1, { icon: pandas }, "Pandas", "5/10", 1, 1, { icon: R }, "R", "6/10", 1, 1,  { icon: php }, "PHP", "6/10", 1, 1,{ icon: symfony }, "Symfony", "6/10", 1, 1, { icon: pm }, "PhpMyAdmin", "6/10", 1, 1, { icon: apiplatform }, "API Platform", "6/10", 2, 2, { icon: remix }, "Remix", "5/10", 1, 1, { icon: solidity }, "Solidity", "6/10", 1, 1,  { icon: truffle }, "Truffle", "7/10", 1, 1,  { icon: ganache }, "Ganache", "8/10", 1, 1, { icon: metamask }, "MetaMask", "10/10", 1, 1, { icon: EPKBPMNIcon }, "EPKBPMN", "9/10", 0, 1, { icon: git2 }, "Git", "8/10", 0, 1, { icon: language }, "Language", "10/10", 0, 0, { icon: linux }, "Linux", "7/10", 0, 1, { icon: office2 }, "Office", "9/10", 0, 0, { icon: sap }, "SAP", "3/10", 0, 0, { icon: sql }, "SQL/ PLSQL", "9/10", 1, 1, { icon: unity }, "Unity/ C#", "3/10", 1, 0,  { icon: aws }, "AWS", "7/10", 1, 1,  { icon: docker }, "Docker", "4/10", 1, 1, { icon: firebase }, "Firebase", "7/10", 1, 1,  { icon: hobbys }, "Hobbies", "10/10", 5, 5, { icon: nginx }, "NGINX", "7/10", 1, 1, { icon: wildfly }, "WildFly", "6/10", 1, 1,  { icon: cleancode }, "Clean Code", "9/10", 1, 1,
{ icon: jira }, "Jira", "7/10", 2, 2,
{ icon: confluence }, "Confluence", "8/10", 1, 1,
{ icon: jenkins }, "Jenkins", "6/10", 2, 2,
{ icon: ga }, "Google Analytics", "7/10", 1, 1,
{ icon: matomo }, "Matomo", "7/10", 2, 2,
{ icon: paypal }, "PayPal", "8/10", 1, 1,
{ icon: stripe }, "Stripe", "7/10", 2, 2,
{ icon: law }, "Law", "6/10", 1, 1

];

/* 
https://sbcode.net/react-three-fiber/stats/ */

export const Table = ({ locale, selectLang }) => {

  const containerRef = useRef(null);
  const intl = useIntl();
  const elementRef = useRef(null);
  const elementRefs = useRef([]);

  const arrowRef = useRef();

  const objects = [];

  const targets = { table: [], sphere: [], helix: [], grid: [], pyramid: [], fractalTree: [], circle: [], doubleHelix: [], test: [], };

  let camera, scene, renderer, cssRenderer;

  const meshState = useRef(null);
  const cloudyState = useRef(null);
  const testState = useRef(null);
  const rotateObj2State = useRef(null);
  const rotateObj3State = useRef(null);
  const rotateObj4State = useRef(null);
  const rotateObj7State = useRef(null);
  

  const render = () => {
    renderer.render(scene, camera);
    cssRenderer.render(scene, camera);
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

      new TWEEN.Tween(scene.position)
      .to({ x: 0, y: 0, z: -500 }, 1000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(render)
      .start();



  }
  

  useEffect(() => {
    const init = () => {


  


      camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );

      camera.position.z = 4000;
      scene = new THREE.Scene();

      cssRenderer = initCSS3DRenderer(cssRenderer);
      renderer = initWebGlRenderer(renderer);

      const controls = initControls(camera, cssRenderer);





      renderer.render(scene, camera);



/* TEST EARTH */


const planetObjects = createPlanet(scene, earthTexture, earthBump, earthSpec, cloudMapTrans, androidObj, computer, pythonObj, react, java);

// Access the returned variables from the planetObjects
let { mesh, cloudy, test, rotateObj2, rotateObj3, rotateObj4, rotateObj7 } = planetObjects;


      meshState.current = mesh;
      cloudyState.current = cloudy;
      testState.current = test;
      rotateObj2State.current = rotateObj2;
      rotateObj3State.current = rotateObj3;
      rotateObj4State.current = rotateObj4;
      rotateObj7State.current = rotateObj7;

      createWelcomeText(intl, scene);

   

      createArrow(scene, "up", -1000, 1000, intl, "app.toTopArrow", () => handleArrowClick("up"));
      createArrow(scene, "left", -1900, 500, intl, "app.toLeftArrow", () => handleArrowClick("left"));
      createArrow(scene, "right", -100, 500, intl, "app.toRightArrow", () => handleArrowClick("right"));
      createArrow(scene, "down", -1000, 0, intl, "app.toButtomArrow", () => handleArrowClick("down"));
      

 /*      function handleArrowClick() {
       
        new TWEEN.Tween(scene.position)
        .to({ x: 0, y: -3000, z: -3000 }, 1000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(render)
        .start();
      }
     */

      function handleArrowClick(direction) {
        let x = 0, y = 0, z = -3000;
      
        switch (direction) {
          case "up":
            y = -3000;
            break;
          case "left":
            x = 3000;
            break;
          case "right":
            x = -3000;
            break;
          case "down":
            y = 3000;
            break;
          case "top":
            z = -3000;
            break;
          default:
            break;
        }
      
        new TWEEN.Tween(scene.position)
          .to({ x: x, y: y, z: z }, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate(render)
          .start();
      }
      
      



      

/*       const techToolsFrameworks = [ "app.java", "app.springboot", "app.android", "app.javaee", "app.quarkus",
        'app.javascript', 'app.react', 'app.threejs', 'app.materialui', 'app.tailwind', 'app.d3', 'app.typescript', 'app.reactnative',
        'app.python', 'app.scrapy', 'app.django', 'app.pandas', 'app.R', 'app.php', 'app.symfony', 'app.phpmyadmin', 'app.apiplatform',
        'app.solidy', 'app.remix', 'app.truffle', 'app.ganache', 'app.metamask', 'app.EPKBPMN', 'app.git', 'app.languages', 'app.linux',
        'app.office', 'app.SAP', 'app.SQL', 'app.unity', 'app.aws', 'app.Docker', 'app.firebase', 'app.hobbies', 'app.nginx', 'app.wildfly',
        'app.jenkins', 'app.cleancode', 'app.jira', 'app.confluence'
      ];
 */

      const techToolsFrameworksJava = ["app.java", "app.springboot", "app.android", "app.javaee", "app.quarkus"];
      const techToolsFrameworksAJAX = [ 'app.javascript', 'app.react', 'app.threejs', 'app.materialui', 'app.tailwind', 'app.d3', 'app.typescript', 'app.reactnative'];
      const techToolFrameworksOtherProgramming = [   'app.python', 'app.scrapy', 'app.django', 'app.pandas', 'app.R', 'app.php', 'app.symfony', 'app.phpmyadmin', 'app.apiplatform', 'app.solidity', 'app.remix', 'app.truffle', 'app.ganache', 'app.metamask'];
      const techToolFrameworksDevOpsAndMore = ['app.EPKBPMN', 'app.git', 'app.languages', 'app.linux', 'app.office', 'app.SAP', 'app.SQL', 'app.aws', 'app.Docker', 'app.firebase', 'app.hobbies', 'app.nginx', 'app.wildfly', 'app.cleancode', 'app.jenkins', 'app.jira', 'app.confluence','app.jenkins', 'app.googleanalytics', 'app.matomo', "app.paypalsdk", "app.stripe", "app.law"];
      
      
      const aboutMeCards = ['app.cleancode', 'app.languages','app.hobbies', 'app.hobbies' ];


      for (let i = 0; i < techToolsFrameworksJava.length; i++) {
        const x = (i + 1) * 3000;
        createText(intl, scene, x, 0, x, techToolsFrameworksJava[i]);
        goBackToMain(intl, scene, x, 0, x, render, controls);
        prevOrNextButton(intl, scene, x, 0, x, render, "Prev", controls, "right");
        prevOrNextButton(intl, scene, x, 0, x, render, "Next", controls, "right");
      }

      
      for (let i = 0; i < techToolsFrameworksAJAX.length; i++) {
        const x = (i + 1) * 3000;
        createText(intl, scene, 0, x, x, techToolsFrameworksAJAX[i]);
        goBackToMain(intl, scene, 0, x, x, render, controls);
        prevOrNextButton(intl, scene, 0, x, x, render, "Prev", controls, "top");
        prevOrNextButton(intl, scene, 0, x, x, render, "Next", controls, "top");
      }


            
      for (let i = 0; i < techToolFrameworksDevOpsAndMore.length; i++) {
        const x = (i + 1) * 3000;
        createText(intl, scene, 0, -x, x, techToolFrameworksDevOpsAndMore[i]);
        goBackToMain(intl, scene, 0, -x, x, render, controls);
        prevOrNextButton(intl, scene, 0, -x, x, render, "Prev", controls, "down");
        prevOrNextButton(intl, scene, 0, -x, x, render, "Next", controls, "down");
      }


      for (let i = 0; i < techToolFrameworksOtherProgramming.length; i++) {
        const x = (i + 1) * 3000;
        createText(intl, scene, -x, 0, x, techToolFrameworksOtherProgramming[i]);
        goBackToMain(intl, scene, -x, 0, x, render, controls);
        prevOrNextButton(intl, scene, -x, 0, x, render, "Prev", controls, "left");
        prevOrNextButton(intl, scene, -x, 0, x, render, "Next", controls, "left");
      }



      createImage(scene);
      initTable(elementRef, scene, objects, targets, elementRefs);
      elementClickListener(elementRefs, scene, render, rotateObj7);


 


      const vector = new THREE.Vector3();

      /* Different Forms */
      createFractalTree(objects, vector, targets);
      createDoubleHelix(objects, vector, targets);
      createSphere(objects, vector, targets);
      createHelix(objects, vector, targets);
      createCircle(objects, targets);
      createGrid(objects, targets);
      createTable(objects, vector, targets);
      createTest(objects, vector, targets);

 
      diableControllsOnElementHover(elementRefs, controls);

      /* Init Formtransition */
      transform(targets.pyramid, 5000);

      window.addEventListener("resize", onWindowResize);
    };

    const onWindowResize = () => {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      cssRenderer.setSize(window.innerWidth, window.innerHeight);
      render();

    };



  
    const animate = () => {
      if (
        meshState.current &&
        cloudyState.current &&
        testState.current &&
        rotateObj2State.current &&
        rotateObj3State.current &&
        rotateObj4State.current &&
        rotateObj7State.current
      ) {
        testState.current.rotation.y += 0.01;
        testState.current.rotation.x += 0.01;
    
        rotateObj2State.current.rotation.y += 0.01;
        rotateObj2State.current.rotation.x += 0.01;
    
        rotateObj3State.current.rotation.y += 0.01;
        rotateObj3State.current.rotation.x += 0.01;
    
        rotateObj4State.current.rotation.y += 0.01;
        rotateObj4State.current.rotation.x += 0.01;
    
        rotateObj7State.current.rotation.y += 0.01;
        rotateObj7State.current.rotation.x += 0.01;
    
        meshState.current.rotation.y += 0.005;
        cloudyState.current.rotation.y -= 0.003;
    
        renderer.render(scene, camera);
        renderer.clearDepth();
        camera.layers.set(0);
    
        requestAnimationFrame(animate);
        TWEEN.update();
        render();
      } else {
        requestAnimationFrame(animate);
      }
    };

    const render = () => {
      renderer.render(scene, camera);
      cssRenderer.render(scene, camera);
    };

    init();
    animate();

    return () => {

      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      const webglContainer = document.querySelector("#webgl");
      if (webglContainer) {
        webglContainer.removeChild(renderer.domElement);
      }
      const css3dContainer = document.querySelector("#css3d");
      if (css3dContainer) {
        css3dContainer.removeChild(cssRenderer.domElement);
      }

    };
  }, [locale]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "black", }} className="buttons" >

        <div style={{ display: "flex", justifyContent: "flex-start", zIndex: 1 }} >
          <button id="table" onClick={() => transform(targets.pyramid, 2000)}> Table </button>
          <button id="DoubleHelix" onClick={() => transform(targets.doubleHelix, 2000)} > DoubleHelix </button>
          <button id="sphere" onClick={() => transform(targets.sphere, 2000)}> Sphere </button>
          <button id="helix" onClick={() => transform(targets.helix, 2000)}> Helix </button>
          <button id="grid" onClick={() => transform(targets.grid, 2000)}> Grid </button>
          <button id="circle" onClick={() => transform(targets.circle, 2000)}> Circle </button>
          <button id="tree" onClick={() => transform(targets.fractalTree, 2000)} > Tree </button>
          <button id="test" onClick={() => transform(targets.test, 2000)}> FractalTree </button>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", zIndex: 1 }}>
          <button value={(locale = "en-US")} onClick={selectLang}> 🇺🇸 </button>
          <button value={(locale = "de-DE")} onClick={selectLang}> 🇩🇪 </button>
          <button value={(locale = "es-MX")} onClick={selectLang}> 🇪🇸 </button>
          <button value={(locale = "ru-RU")} onClick={selectLang}> 🇷🇺 </button>
          <button value={(locale = "zh-CN")} onClick={selectLang}> 🇨🇳 </button>
        </div>
      </div>

      <div ref={containerRef}>
        <div id="black-background" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "black", }} ></div>
        <div id="webgl" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", }} ></div>
        <div id="css3d" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", }} ></div>
      </div>
    </div>
  );
};

export default Table;




 








function goBackToMain(intl, scene, x, y, z, render, controls) {
  const objectContent = document.createElement("button");
  objectContent.textContent = "Zum Anfang";
  objectContent.id = "backToMainButton";

  const object = new CSS3DObject(objectContent);

  x = x + 950;
  y = y + 200;

  object.position.set(x, y, z);
  object.scale.set(3, 3, 3);
  scene.add(object);

  object.element.addEventListener("click", () => {
    controls.enabled = false;
    goBackToMainMenu(render, scene);
  });

  // Add event listeners to the DOM element, not the 3D object
  object.element.addEventListener("mouseenter", () => {
    controls.enabled = false;
  });

  object.element.addEventListener("mouseleave", () => {
    controls.enabled = true;
  });
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


function elementClickListener(elementRefs, scene, render, intl, rotateObj7) {
  elementRefs.current.forEach(({ symbol, object }) => {
    object.element.addEventListener("click", () => {
      //this displays a number
      console.log(symbol.previousElementSibling.textContent + " was clicked!");

      let id = symbol.previousElementSibling.textContent;


      /* Switch for all cards */

      switch (id) {

        /* SECTION 1 */
        case "1":
  
      
          goToCard(scene, render, -3000, 0, -3000, rotateObj7);
          render();

          break;
        case "2":
          goToCard(scene, render, -6000, 0, -6000);
          break;
          case "3":
          goToCard(scene, render, -9000, 0, -9000);
          break;
          case "4":
            goToCard(scene, render, -12000, 0, 12000);
            break;
            case "5":
              goToCard(scene, render, -15000, 0, -15000);
              break;
              case "6":
                goToCard(scene, render, -18000, 0, -18000);
                break;

                /* SECTION 2 */
                case "7":
                  goToCard(scene, render, 0, -3000, -3000);
                  break;
                  case "8":
                    goToCard(scene, render, 0, -6000, -6000);
                    break;
                    case "9":
                      goToCard(scene, render, 0, -9000, -9000);
                      break;
                      case "10":
                        goToCard(scene, render, 0, -12000, -12000);
                        break;
                        case "11":
                          goToCard(scene, render, 0, -15000, -15000);
                          break;
                          case "12":
                            goToCard(scene, render, 0, -18000, -18000);
                            break;
                            case "13":
                              goToCard(scene, render, 0, -21000, -21000);
                              break;
                              case "14":
                                goToCard(scene, render, 0, -24000, -24000);
                                break;
                                  case "15":


                                  /* SECTION 3 */
                                  
          goToCard(scene, render, 3000, 0, -3000);
                                break;
                                case "16":
                                  goToCard(scene, render, 6000, 0, -6000);
                                  break;
                                case "17":
                                  goToCard(scene, render, 9000, 0, -9000);
                                  break;
                                case "18":
                                  goToCard(scene, render, 12000, 0, -12000);
                                  break;
                                case "19":
                                  goToCard(scene, render, 15000, 0, -15000);
                                  break;
                                case "20":
                                  goToCard(scene, render, 18000, 0, -18000);
                                  break;
                                case "21":
                                  goToCard(scene, render, 21000, 0, -21000);
                                  break;
                                case "22":
                                  goToCard(scene, render, 24000, 0, -24000);
                                  break;
                                case "23":
                                  goToCard(scene, render, 27000, 0, -27000);
                                  break;
                                case "24":
                                  goToCard(scene, render, 30000, 0, -30000);
                                  break;
                                case "25":
                                  goToCard(scene, render, 33000, 0, -33000);
                                  break;
                                case "26":
                                  goToCard(scene, render, 36000, 0, -36000);
                                  break;
                                case "27":
                                  goToCard(scene, render, 39000, 0, -39000);
                                  break;
                                case "28":
                                  goToCard(scene, render, 42000, 0, -42000);
                                  break;

                                  /* SECTION  */
                                  case "29":
                                    goToCard(scene, render, 0, 3000, -3000);
                                    break;
                                    case "30":
                                    goToCard(scene, render, 0, 6000, -6000);
                                    break;
                                    case "31":
                                    goToCard(scene, render, 0, 9000, -9000);
                                    break;
                                    case "32":
                                    goToCard(scene, render, 0, 12000, -12000);
                                    break;
                                    case "33":
                                    goToCard(scene, render, 0, 15000, -15000);
                                    break;
                                    case "34":
                                    goToCard(scene, render, 0, 18000, -18000);
                                    break;
                                    case "35":
                                    goToCard(scene, render, 0, 21000, -21000);
                                    break;
                                    case "36":
                                    goToCard(scene, render, 0, 24000, -24000);
                                    break;
                                    case "37":
                                    goToCard(scene, render, 0, 27000, -27000);
                                    break;
                                    case "38":
                                    goToCard(scene, render, 0, 30000, -30000);
                                    break;
                                    case "39":
                                    goToCard(scene, render, 0, 33000, -33000);
                                    break;
                                    case "40":
                                    goToCard(scene, render, 0, 36000, -36000);
                                    break;
                                    case "41":
                                    goToCard(scene, render, 0, 39000, -39000);
                                    break;
                                    case "42":
                                    goToCard(scene, render, 0, 42000, -42000);
                                    break;
                                    case "43":
                                    goToCard(scene, render, 0, 45000, -45000);
                                    break;
                                    case "44":
                                    goToCard(scene, render, 0, 48000, -48000);
                                    break;
                                    case "45":
                                    goToCard(scene, render, 0, 51000, -51000);
                                    break;




                              
        default:
          alert("Hier zu gibt es noch keine Informationen :)");
          goToCard(scene, render, 0, 0, -3000);
          // Add code to handle unknown card click
          break;
      }
    });
  });
}

/* 
case "16":
  goToCard(scene, render, 0, 3000, -3000);
                      // Add code to handle Card 2 click
                      break; */

function goToCard(scene, render, x, y, z,rotateObj7 ) {
  new TWEEN.Tween(scene.position)
    .to({ x: x, y: y, z: z }, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(render)
    .start();

    new TWEEN.Tween(rotateObj7.position)
    .to({ x: x, y: y, z: z }, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(render)

    rotateObj7.position.x(x)
    rotateObj7.position.y(x)
    rotateObj7.position.z(z)

}



function prevOrNextButton(intl, scene, x, y, z, render, prevOrNext, controls, direction) {


  const objectContent = document.createElement("button");
  if (prevOrNext == "Next") {
    objectContent.textContent = ">";
    x = x + 1128;
  } else {
    x = x + 764;
    objectContent.textContent = "<";
  }
  const object = new CSS3DObject(objectContent);

  y = y + 200;
  object.position.set(x, y, z);
  object.scale.set(3, 3, 3);
  scene.add(object);

  object.element.addEventListener("click", () => {
    controls.enabled = false;
    goPrevOrNext(render, scene, prevOrNext, direction);
  });



  // Add event listeners to the DOM element to disable/enable controls
  object.element.addEventListener("mouseenter", () => {
    controls.enabled = false;
  });

  object.element.addEventListener("mouseleave", () => {
    controls.enabled = true;
  });
}

function goBackToMainMenu(render, scene) {
  new TWEEN.Tween(scene.position)
    .to({ x: 0, y: 0, z: 0 }, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(render)
    .start();
}

function goPrevOrNext(render, scene, prevOrNext, direction) { //left, right, up, down 
  const currentPositionX = scene.position.x;
  const currentPositionY = scene.position.y; 
  let newPosition;

  let newPositionZ;


  if(direction == "right"){

    if (prevOrNext === "Prev") {
      newPosition = currentPositionX + 3000;
    } else {
      newPosition = currentPositionX - 3000;
    }
  
    console.log("direction right")
    new TWEEN.Tween(scene.position)
    .to({ x: newPosition, y: 0, z: newPosition }, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(render)
    .start();
  }

  if (direction === "left") {
    if (prevOrNext === "Prev") {
      newPosition = currentPositionX + 3000;
    } else {
      newPosition = currentPositionX - 3000;
    }
  
    console.log("direction left");
    new TWEEN.Tween(scene.position)
      .to({ x: newPosition, y: 0, z: -newPosition }, 1000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(render)
      .start();
  }


  if(direction == "top"){


    if (prevOrNext === "Prev") {
      newPosition = currentPositionY + 3000;
    } else {
      newPosition = currentPositionY - 3000;
    }
    

    console.log("direction top")
    new TWEEN.Tween(scene.position)
    .to({ x: 0, y: newPosition, z: newPosition }, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(render)
    .start();
  }


  if (direction === "down") {
    if (prevOrNext === "Prev") {
      newPosition = currentPositionY + 3000;
    } else {
      newPosition = currentPositionY - 3000;
    }
  
    console.log("direction down");
    new TWEEN.Tween(scene.position)
      .to({ x: 0, y: newPosition, z: -newPosition }, 1000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(render)
      .start();
  }

}
