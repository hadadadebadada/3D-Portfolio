import React, { useRef, useEffect, useState, createRef } from "react";
import * as THREE from "three";
import { initControls, initCSS3DRenderer, initWebGlRenderer, } from "./components/Initializer";
import { createTable, createGrid, createSphere, createHelix, createDoubleHelix, createCircle, createTest, createFractalTree, } from "./components/FormCreator";
import {createIconOnCard, createProjectsDiv, createArrow, createWelcomeText, createText, createImage, createSocialIcon } from "./components/HtmlElements";
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
import { FormattedMessage } from 'react-intl';
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

import jira from "./icons2/jira.png"
import confluence from "./icons2/jira2.png"
import jenkins from "./icons2/jenkins.png"
import ga from "./icons2/ga.png"
import matomo from "./icons2/matomo.png"
import paypal from "./icons2/paypal.png"
import stripe from "./icons2/stripe-icon.svg"
import law from "./icons2/law.png"



import seo from "./icons2/seo.png"
import oidc from "./icons2/oidc.png"
import vue from "./icons2/vue.png"
import blockchain from "./icons2/blockchain.png"
import kali from "./icons2/kali.png"
import langchain from './icons2/langchain.png'


import linkedin from './icons2/icons8-linkedin-96.png'
import github from './icons2/icons8-github-96.png'
import whatsapp from './icons2/icons8-whatsapp-96.png'


import androidObj from './landingpage/android.glb' 
import pythonObj from './landingpage/python.glb' 
import react from './landingpage/react.glb'
import java from './landingpage/java.glb'
import computer from './landingpage/computer.glb'


import earthTexture from './earth/01-3.jpg'
import earthBump from './earth/earthbump1k.jpg'
import earthSpec from './earth/earthspec1k.jpg'
import cloudMapTrans from './earth/earthcloudmaptrans.jpg'

import useWindowDimensions from './useWindowDimensions'

/* CrytoMinig, MuayThai, Zocken, Yoga, Fußball */

/* Projects!!!! */
/* Social Media!! */

/* About me ? --> Cards */


const table = [ 
  
  { icon: JavaIcon }, "Java", "8/10", 1, 1, { icon: spring }, "Spring", "7/10", 2, 2, { icon: AndroidIcon }, "Android", "6/10", 1, 1, { icon: SeleniumIcon }, 
  "Selenium", "8/10", 0, 1, { icon: javaee }, "Java EE", "6/10", 2, 2, { icon: quarkus }, "Quarkus", "3/10", 3, 3, 


  { icon: js }, "JavaScript", "8/10", 5, 5, 
  { icon: ReactIcon }, "React", "9/10", 1, 1, { icon: Three }, "Three.js", "7/10", 1, 1, 
  { icon: mui }, "Material UI", "8/10", 2, 2, { icon: tailwind }, "Tailwind CSS", "7/10", 1, 1, {icon: vue}, "Vue", "3/10", 1,1,
  { icon: d3 }, "D3.js", "3/10", 1, 1, { icon: typescript }, "TypeScript", "4/10", 2, 2, { icon: reactnative }, "React Native", "3/10", 2, 2, 
  


  { icon: python }, "Python", "6/10", 1, 1,  { icon: scrapy }, "Scrapy", "8/10", 1, 1, {icon:django}, "Django", "5/10", 1,1, {icon:langchain}, "LangChain", "3/10", 1,1,
  { icon: pandas }, "Pandas", "4/10", 1, 1, { icon: R }, "R", "6/10", 1, 1,  { icon: php }, "PHP", "6/10", 1, 1,{ icon: symfony }, 
  "Symfony", "6/10", 1, 1, { icon: pm }, "PhpMyAdmin", "6/10", 1, 1, { icon: apiplatform }, "API Platform", "6/10", 2, 2, { icon: remix }, 
  "Remix", "5/10", 1, 1, { icon: solidity }, "Solidity", "6/10", 1, 1,  { icon: truffle }, "Truffle", "7/10", 1, 1,  { icon: ganache }, 
  "Ganache", "8/10", 1, 1, { icon: metamask }, "MetaMask", "10/10", 1, 1, { icon: EPKBPMNIcon }, 
  


  "EPKBPMN", "9/10", 0, 1, { icon: git2 }, "Git", "8/10", 0, 1, { icon: language }, "Language", "10/10", 0, 0, { icon: linux }, "Linux", "7/10", 0, 1, { icon: office2 }, "Office", "9/10", 0, 0, { icon: sap }, "SAP", "3/10", 0, 0, { icon: sql }, "SQL/ PLSQL", "9/10", 1, 1, { icon: unity }, "Unity/ C#", "3/10", 1, 0,  { icon: aws }, "AWS", "7/10", 1, 1,  { icon: docker }, "Docker", "4/10", 1, 1, { icon: firebase }, "Firebase", "7/10", 1, 1,  { icon: hobbys }, "Hobbies", "10/10", 5, 5, { icon: nginx }, "NGINX", "7/10", 1, 1, { icon: wildfly }, "WildFly", "6/10", 1, 1,  { icon: cleancode }, "Clean Code", "9/10", 1, 1,
{ icon: jira }, "Jira", "9/10", 2, 2,
{ icon: confluence }, "Confluence", "9/10", 1, 1,
{ icon: jenkins }, "Jenkins", "3/10", 2, 2,
{ icon: ga }, "Google Analytics", "5/10", 1, 1,
{ icon: matomo }, "Matomo", "5/10", 2, 2,
{ icon: paypal }, "PayPal", "5/10", 1, 1,
{ icon: stripe }, "Stripe", "5/10", 2, 2,
{ icon: law }, "Law", "6/10", 1, 1,


 {icon: seo}, "SEO", "4/10", 1,1,
 {icon: oidc}, "OIDC", "3/10", 1,1,
 {icon: blockchain}, "CryptoMining", "5/10",1,1,
 {icon: kali}, "CyberSecurity", "4/10",1,1





];

/* 
https://sbcode.net/react-three-fiber/stats/ */

export const Table = ({ locale, selectLang }) => {

  const containerRef = useRef(null);
  const intl = useIntl();
  const elementRef = useRef(null);
  const elementRefs = useRef([]);

  const { width, height, isPortrait } = useWindowDimensions();

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

      console.log(width, height, isPortrait )



      camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.y = 50;
      camera.position.z = 3000;
      scene = new THREE.Scene();

      cssRenderer = initCSS3DRenderer(cssRenderer, isPortrait );
      renderer = initWebGlRenderer(renderer,isPortrait );

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

      createWelcomeText(intl, scene, controls);


      createProjectsDiv(intl, scene, controls);

      
      createImage(scene);
     // createSocialIcon(scene, controls, -800, linkedin, "https://linkedin.com");
   

      createArrow(scene, "up", -1000, 1000, intl, "app.toTopArrow", () => handleArrowClick("up"), controls);
      createArrow(scene, "left", -1900, 500, intl, "app.toLeftArrow", () => handleArrowClick("left"),controls);
      createArrow(scene, "right", -100, 500, intl, "app.toRightArrow", () => handleArrowClick("right"),controls);
      createArrow(scene, "down", -1000, 0, intl, "app.toButtomArrow", () => handleArrowClick("down"),controls);
      



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
      
      



      


      /* Projekts??? */
/*       const aboutMeCards = ['app.cleancode', 'app.languages','app.hobbies', 'app.hobbies' ]; */







      const techToolsFrameworksJavaTEST = [ { icon: JavaIcon, label: "app.java", proficiency: "8/10" }, { icon: spring, label: "app.springboot", proficiency: "7/10" }, { icon: AndroidIcon, label: "app.android", proficiency: "6/10" }, { icon: SeleniumIcon, label: "app.selenium", proficiency: "8/10" }, { icon: javaee, label: "app.javaee", proficiency: "6/10" }, { icon: quarkus, label: "app.quarkus", proficiency: "3/10" }, ];
      const techToolsFrameworksAJAXTEST = [ { icon: js, label: "app.javascript", proficiency: "8/10" }, { icon: ReactIcon, label: "app.react", proficiency: "9/10" }, { icon: Three, label: "app.threejs", proficiency: "7/10" }, { icon: mui, label: "app.materialui", proficiency: "8/10" }, { icon: tailwind, label: "app.tailwind", proficiency: "7/10" }, { icon: vue, label: "app.vue", proficiency: "3/10" }, { icon: d3, label: "app.d3", proficiency: "3/10" }, { icon: typescript, label: "app.typescript", proficiency: "4/10" }, { icon: reactnative, label: "app.reactnative", proficiency: "3/10" }, ];
  
      const techToolsFrameworksOtherProgrammingTEST = [ { icon: python, label: "app.python", proficiency: "6/10" }, { icon: scrapy, label: "app.scrapy", proficiency: "8/10" }, { icon: django, label: "app.django", proficiency: "5/10" }, {icon:langchain, label:"app.langchain", proficiency:"3/4"},{ icon: pandas, label: "app.pandas", proficiency: "5/10" }, { icon: R, label: "app.R", proficiency: "6/10" }, { icon: php, label: "app.php", proficiency: "6/10" }, { icon: symfony, label: "app.symfony", proficiency: "6/10" }, { icon: pm, label: "app.phpmyadmin", proficiency: "6/10" }, { icon: apiplatform, label: "app.apiplatform", proficiency: "6/10" }, { icon: remix, label: "app.remix", proficiency: "5/10" }, { icon: solidity, label: "app.solidity", proficiency: "6/10" }, { icon: truffle, label: "app.truffle", proficiency: "7/10" }, { icon: ganache, label: "app.ganache", proficiency: "8/10" }, { icon: metamask, label: "app.metamask", proficiency: "10/10" }, { icon: EPKBPMNIcon, label: "app.EPKBPMNIcon", proficiency: "3/10" }, ];
      const techToolsFrameworksDevOpsAndMoreTEST = [
        { icon: EPKBPMNIcon, label: "app.EPKBPMN", proficiency: "9/10" },
        { icon: git2, label: "app.git", proficiency: "8/10" },
        { icon: language, label: "app.languages", proficiency: "10/10" },
        { icon: linux, label: "app.linux", proficiency: "7/10" },
        { icon: office2, label: "app.office", proficiency: "9/10" },
        { icon: sap, label: "app.SAP", proficiency: "3/10" },
        { icon: sql, label: "app.SQL", proficiency: "9/10" },
        { icon: unity, label: "app.unity", proficiency: "3/10" },
        { icon: aws, label: "app.aws", proficiency: "7/10" },
        { icon: docker, label: "app.Docker", proficiency: "4/10" },
        { icon: firebase, label: "app.firebase", proficiency: "7/10" },
        { icon: hobbys, label: "app.hobbies", proficiency: "10/10" },
        { icon: nginx, label: "app.nginx", proficiency: "7/10" },
        { icon: wildfly, label: "app.wildfly", proficiency: "6/10" },
        { icon: cleancode, label: "app.cleancode", proficiency: "9/10" },
        { icon: jira, label: "app.jira", proficiency: "9/10" },
        { icon: confluence, label: "app.confluence", proficiency: "9/10" },
        { icon: jenkins, label: "app.jenkins", proficiency: "3/10" },
        { icon: ga, label: "app.googleanalytics", proficiency: "5/10" },
        { icon: matomo, label: "app.matomo", proficiency: "5/10" },
        { icon: paypal, label: "app.paypalsdk", proficiency: "5/10" },
        { icon: stripe, label: "app.stripe", proficiency: "5/10" },
        { icon: law, label: "app.law", proficiency: "6/10" },
        { icon: seo, label: "app.seo", proficiency: "4/10" },
        { icon: oidc, label: "app.oidc", proficiency: "3/10" },
        { icon: blockchain, label: "app.cryptomining", proficiency: "5/10" },
        { icon: kali, label: "app.cybersecurity", proficiency: "4/10" },
      ];
      


      function goBackToMainMenuCallBack(render, scene) {
       
        setTimeout(() => {
          controls.enabled = true;
        }, 100);
        new TWEEN.Tween(scene.position)
          .to({ x: 0, y: -150, z: -500 }, 1000)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .onUpdate(render)
          .start();
      }
      

      function goPrevOrNextCallBack(render, scene, prevOrNext, direction) { //left, right, up, down 
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
            newPosition = currentPositionY - 3000;
          } else {
            newPosition = currentPositionY + 3000;
          }
        
          console.log("direction down");
          new TWEEN.Tween(scene.position)
            .to({ x: 0, y: newPosition, z: -newPosition }, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(render)
            .start();
        }
      
      }
      


      for (let i = 0; i < techToolsFrameworksJavaTEST.length; i++) {
        let x = (i + 1) * 3000; 
        createText(intl, scene, x, 0, x, techToolsFrameworksJavaTEST[i].label,  techToolsFrameworksJavaTEST[i].icon, controls, 
          
          ()=>goBackToMainMenuCallBack(render, scene), ()=>goPrevOrNextCallBack(render, scene, "Prev", "right"),()=>goPrevOrNextCallBack(render, scene, "Next", "right")); //      function goPrevOrNextCallBack(render, scene, prevOrNext, direction) { //left, right, up, down 

 /*        goBackToMain(intl, scene, x, 0, x, render, controls, ()=>goBackToMainMenuCallBack(render, scene));
        prevOrNextButton(intl, scene, x, 0, x, render, "Prev", controls, "right");
        prevOrNextButton(intl, scene, x, 0, x, render, "Next", controls, "right");
    */
      }

      
      for (let i = 0; i < techToolsFrameworksAJAXTEST.length; i++) {
        let x = (i + 1) * 3000;
        createText(intl, scene, 0, x, x, techToolsFrameworksAJAXTEST[i].label, techToolsFrameworksAJAXTEST[i].icon, controls, 
          ()=>goBackToMainMenuCallBack(render, scene), ()=>goPrevOrNextCallBack(render, scene, "Prev", "top"),()=>goPrevOrNextCallBack(render, scene, "Next", "top"), );
 
        
      }
            



      for (let i = 0; i < techToolsFrameworksDevOpsAndMoreTEST.length; i++) {
        let x = (i + 1) * 3000;
        createText(intl, scene, 0, -x, x, techToolsFrameworksDevOpsAndMoreTEST[i].label, techToolsFrameworksDevOpsAndMoreTEST[i].icon,  
          controls, ()=>goBackToMainMenuCallBack(render, scene),  ()=>goPrevOrNextCallBack(render, scene, "Prev", "down"), ()=>goPrevOrNextCallBack(render, scene, "Next", "down"));

  
      }
      



      for (let i = 0; i < techToolsFrameworksOtherProgrammingTEST.length; i++) {
        let x = (i + 1) * 3000;
        createText(intl, scene, -x, 0, x, techToolsFrameworksOtherProgrammingTEST[i].label,techToolsFrameworksOtherProgrammingTEST[i].icon,  controls, 
          ()=>goBackToMainMenuCallBack(render, scene),  ()=>goPrevOrNextCallBack(render, scene, "Next", "left"));


      }


      initTable(elementRef, scene, objects, targets, elementRefs);
      elementClickListener(elementRefs, scene, render, intl, controls);


 


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
        testState.current.rotation.y += 0.001;
        testState.current.rotation.x += 0.001;
    
        rotateObj2State.current.rotation.y += 0.001;
        rotateObj2State.current.rotation.x += 0.001;
    
        rotateObj3State.current.rotation.y += 0.001;
        rotateObj3State.current.rotation.x += 0.001;
    
        rotateObj4State.current.rotation.y += 0.001;
        rotateObj4State.current.rotation.x += 0.001;
    
        rotateObj7State.current.rotation.y += 0.001;
        rotateObj7State.current.rotation.x += 0.001;
    
        meshState.current.rotation.y += 0.0005;
        cloudyState.current.rotation.y -= 0.0003;
    
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
  }, [locale, isPortrait ]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "black", }} className="buttons" >

        <div style={{ display: "flex", justifyContent: "flex-start", zIndex: 1 }} >
        <button id="table" onClick={() => transform(targets.pyramid, 2000)}>
  <FormattedMessage id="app.tableButton" defaultMessage="Table" />
</button>
<button id="DoubleHelix" onClick={() => transform(targets.doubleHelix, 2000)}>
  <FormattedMessage id="app.doubleHelixButton" defaultMessage="DoubleHelix" />
</button>
<button id="sphere" onClick={() => transform(targets.sphere, 2000)}>
  <FormattedMessage id="app.sphereButton" defaultMessage="Sphere" />
</button>
<button id="helix" onClick={() => transform(targets.helix, 2000)}>
  <FormattedMessage id="app.helixButton" defaultMessage="Helix" />
</button>
<button id="grid" onClick={() => transform(targets.grid, 2000)}>
  <FormattedMessage id="app.gridButton" defaultMessage="Grid" />
</button>
<button id="circle" onClick={() => transform(targets.circle, 2000)}>
  <FormattedMessage id="app.circleButton" defaultMessage="Circle" />
</button>
<button id="tree" onClick={() => transform(targets.fractalTree, 2000)}>
  <FormattedMessage id="app.treeButton" defaultMessage="Tree" />
</button>
<button id="test" onClick={() => transform(targets.test, 2000)}>
  <FormattedMessage id="app.testButton" defaultMessage="FractalTree" />
</button>

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


  /* INTL */

  const newMessageText = intl.formatMessage({ id: "app.toBackToMain" });

  objectContent.textContent = newMessageText;
  objectContent.id = "backToMainButton";

  const object = new CSS3DObject(objectContent);

  x = x + 950;
  y = y + 200;

  object.position.set(x, y, z);
  object.scale.set(3, 3, 3);
  scene.add(object);

  object.element.addEventListener("click", () => {
    setTimeout(() => {
      controls.enabled = true;
    }, 100);
    goBackToMainMenu(render, scene);
  });

  object.element.addEventListener("mouseenter", () => {
    controls.enabled = false;
  });

  object.element.addEventListener("mouseleave", () => {
    controls.enabled = true;
  });

}

function diableControllsOnElementHover(elementRefs, controls) {
  elementRefs.current.forEach(({ symbol, object }) => {

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
    symbol.ref = elementRef; 
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


function elementClickListener(elementRefs, scene, render, intl, controls) {
  elementRefs.current.forEach(({ symbol, object }) => {
    object.element.addEventListener("click", () => {
      //this displays a number
      console.log(symbol.previousElementSibling.textContent + " was clicked!");

      let id = symbol.previousElementSibling.textContent;
      switch (id) {

        /* SECTION 1 */
 
        case "1":
          goToCard(scene, render, -3000, 0, -3000, controls);
          render();
          break;
        case "2":
          goToCard(scene, render, -6000, 0, -6000, controls);
          break;
        case "3":
          goToCard(scene, render, -9000, 0, -9000, controls);
          break;
        case "4":
          goToCard(scene, render, -12000, 0, -12000, controls);
          break;
        case "5":
          goToCard(scene, render, -15000, 0, -15000, controls);
          break;
        case "6":
          goToCard(scene, render, -18000, 0, -18000, controls);
          break;

        /* SECTION 2 --> Java?*/
        case "7":
          goToCard(scene, render, 0, -3000, -3000, controls);
          break;
        case "8":
          goToCard(scene, render, 0, -6000, -6000, controls);
          break;
        case "9":
          goToCard(scene, render, 0, -9000, -9000, controls);
          break;
        case "10":
          goToCard(scene, render, 0, -12000, -12000, controls);
          break;
        case "11":
          goToCard(scene, render, 0, -15000, -15000, controls);
          break;
        case "12":
          goToCard(scene, render, 0, -18000, -18000, controls);
          break;
        case "13":
          goToCard(scene, render, 0, -21000, -21000, controls);
          break;
        case "14":
          goToCard(scene, render, 0, -24000, -24000, controls);
          break;
        case "15":
        goToCard(scene, render, 0, -27000, -27000, controls);
        break;
        /* SECTION 3 */

      //  goToCard(scene, render, 3000, 0, -3000, controls);
      case "16":
        goToCard(scene, render, 3000, 0, -3000, controls);
      break;
      case "17":
    goToCard(scene, render, 6000, 0, -6000, controls);
    break;
case "18":
    goToCard(scene, render, 9000, 0, -9000, controls);
    break;
case "19":
    goToCard(scene, render, 12000, 0, -12000, controls);
    break;
case "20":
    goToCard(scene, render, 15000, 0, -15000, controls);
    break;
case "21":
    goToCard(scene, render, 18000, 0, -18000, controls);
    break;
case "22":
    goToCard(scene, render, 21000, 0, -21000, controls);
    break;
case "23":
    goToCard(scene, render, 24000, 0, -24000, controls);
    break;
case "24":
    goToCard(scene, render, 27000, 0, -27000, controls);
    break;
case "25":
    goToCard(scene, render, 30000, 0, -30000, controls);
    break;
case "26":
    goToCard(scene, render, 33000, 0, -33000, controls);
    break;
case "27":
    goToCard(scene, render, 36000, 0, -36000, controls);
    break;
case "28":
    goToCard(scene, render, 39000, 0, -39000, controls);
    break;
case "29":
    goToCard(scene, render, 42000, 0, -42000, controls);
    break;
case "30":
    goToCard(scene, render, 45000, 0, -45000, controls);
    break;

          
          /* SECTION 4 */
          
          case "31":
            goToCard(scene, render, 0, 3000, -3000, controls);
            break;
        case "32":
            goToCard(scene, render, 0, 6000, -6000, controls);
            break;
        case "33":
            goToCard(scene, render, 0, 9000, -9000, controls);
            break;
        case "34":
            goToCard(scene, render, 0, 12000, -12000, controls);
            break;
        case "35":
            goToCard(scene, render, 0, 15000, -15000, controls);
            break;
        case "36":
            goToCard(scene, render, 0, 18000, -18000, controls);
            break;
        case "37":
            goToCard(scene, render, 0, 21000, -21000, controls);
            break;
        case "38":
            goToCard(scene, render, 0, 24000, -24000, controls);
            break;
        case "39":
            goToCard(scene, render, 0, 27000, -27000, controls);
            break;
        case "40":
            goToCard(scene, render, 0, 30000, -30000, controls);
            break;
        case "41":
            goToCard(scene, render, 0, 33000, -33000, controls);
            break;
        case "42":
            goToCard(scene, render, 0, 36000, -36000, controls);
            break;
        case "43":
            goToCard(scene, render, 0, 39000, -39000, controls);
            break;
        case "44":
            goToCard(scene, render, 0, 42000, -42000, controls);
            break;
        case "45":
            goToCard(scene, render, 0, 45000, -45000, controls);
            break;
        case "46":
            goToCard(scene, render, 0, 48000, -48000, controls);
            break;
        case "47":
            goToCard(scene, render, 0, 51000, -51000, controls);
            break;
        case "48":
            goToCard(scene, render, 0, 54000, -54000, controls);
            break;
        case "49":
            goToCard(scene, render, 0, 57000, -57000, controls);
            break;
        case "50":
            goToCard(scene, render, 0, 60000, -60000, controls);
            break;
        case "51":
            goToCard(scene, render, 0, 63000, -63000, controls);
            break;
        case "52":
            goToCard(scene, render, 0, 66000, -66000, controls);
            break;
        case "53":
            goToCard(scene, render, 0, 69000, -69000, controls);
            break;
            case "54":
              goToCard(scene, render, 0, 72000, -72000, controls);
              break;
            case "55":
              goToCard(scene, render, 0, 75000, -75000, controls);
              break;
            case "56":
              goToCard(scene, render, 0, 78000, -78000, controls);
              break;
            case "57":
              goToCard(scene, render, 0, 81000, -81000, controls);
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



function goToCard(scene, render, x, y, z, controls ) {


  /* necessary for chrome in mobile */
  setTimeout(() => {
    controls.enabled = true;
  }, 100);

  new TWEEN.Tween(scene.position)
    .to({ x: x, y: y, z: z }, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(render)
    .start();


    /* TEST Moving Obj with Twen */
    
/*     new TWEEN.Tween(rotateObj7.position)
    .to({ x: x, y: y, z: z }, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(render) */

/*     rotateObj7.position.x(x)
    rotateObj7.position.y(x)
    rotateObj7.position.z(z)
 */
}



function prevOrNextButton(intl, scene, x, y, z, render, prevOrNext, controls, direction) {


  const objectContent = document.createElement("button");
  if (prevOrNext == "Next") {
    objectContent.textContent = ">";
    x = x + 1228;
  } else {
    x = x + 664;
    objectContent.textContent = "<";
  }
  const object = new CSS3DObject(objectContent);

  y = y + 200;
  object.position.set(x, y, z);
  object.scale.set(3, 3, 3);
  scene.add(object);

  object.element.addEventListener("click", () => {
  
    goPrevOrNext(render, scene, prevOrNext, direction);
            setTimeout(() => {
            controls.enabled = true;
          }, 100);
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
    .to({ x: 0, y: -150, z: -500 }, 1000)
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
