import React, { useRef, useEffect, useState, createRef } from "react";
import * as THREE from "three";
import { initControls, initCSS3DRenderer, initWebGlRenderer, } from "./components/Initializer";
import { createTable, createGrid, createSphere, createHelix, createDoubleHelix, createCircle, createTest, createFractalTree, } from "./components/FormCreator";
import { createWelcomeText, createText, createImage, } from "./components/HtmlElements";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

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
//google analytics
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

const table = [ { icon: JavaIcon }, "Java", "8/10", 1, 1, { icon: spring }, "Spring", "7/10", 2, 2, { icon: AndroidIcon }, "Android", "6/10", 1, 1, { icon: SeleniumIcon }, "Selenium", "8/10", 0, 1, { icon: javaee }, "Java EE", "6/10", 2, 2, { icon: quarkus }, "Quarkus", "3/10", 3, 3, { icon: js }, "JavaScript", "8/10", 5, 5, { icon: ReactIcon }, "React", "9/10", 1, 1, { icon: Three }, "Three.js", "7/10", 1, 1, { icon: mui }, "Material UI", "8/10", 2, 2, { icon: tailwind }, "Tailwind CSS", "7/10", 1, 1, { icon: d3 }, "D3.js", "3/10", 1, 1, { icon: typescript }, "TypeScript", "4/10", 2, 2, { icon: reactnative }, "React Native", "3/10", 2, 2, { icon: python }, "Python", "6/10", 1, 1,  { icon: scrapy }, "Scrapy", "8/10", 1, 1, {icon:django}, "Django", "5/10", 1,1, { icon: pandas }, "Pandas", "5/10", 1, 1, { icon: R }, "R", "6/10", 1, 1,  { icon: php }, "PHP", "6/10", 1, 1,{ icon: symfony }, "Symfony", "6/10", 1, 1, { icon: pm }, "PhpMyAdmin", "6/10", 1, 1, { icon: apiplatform }, "API Platform", "6/10", 2, 2, { icon: remix }, "Remix", "5/10", 1, 1, { icon: solidity }, "Solidity", "6/10", 1, 1,  { icon: truffle }, "Truffle", "7/10", 1, 1,  { icon: ganache }, "Ganache", "8/10", 1, 1, { icon: metamask }, "MetaMask", "10/10", 1, 1, { icon: EPKBPMNIcon }, "EPKBPMN", "9/10", 0, 1, { icon: git2 }, "Git", "8/10", 0, 1, { icon: language }, "Language", "10/10", 0, 0, { icon: linux }, "Linux", "7/10", 0, 1, { icon: office2 }, "Office", "9/10", 0, 0, { icon: sap }, "SAP", "3/10", 0, 0, { icon: sql }, "SQL/ PLSQL", "9/10", 1, 1, { icon: unity }, "Unity/ C#", "3/10", 1, 0,  { icon: aws }, "AWS", "7/10", 1, 1,  { icon: docker }, "Docker", "4/10", 1, 1, { icon: firebase }, "Firebase", "7/10", 1, 1,  { icon: hobbys }, "Hobbies", "10/10", 5, 5, { icon: nginx }, "NGINX", "7/10", 1, 1, { icon: wildfly }, "WildFly", "6/10", 1, 1,  { icon: cleancode }, "Clean Code", "9/10", 1, 1,];

/* 
https://sbcode.net/react-three-fiber/stats/ */

export const Table = ({ locale, selectLang }) => {

  const containerRef = useRef(null);
  const intl = useIntl();
  const elementRef = useRef(null);
  const elementRefs = useRef([]);

  const objects = [];

  const targets = { table: [], sphere: [], helix: [], grid: [], pyramid: [], fractalTree: [], circle: [], doubleHelix: [], test: [], };

  let camera, scene, renderer, cssRenderer;
  let mesh;
  let cloudy;
  let test;
  let rotateObj2;
  let rotateObj3;
  let rotateObj4;
  let rotateObj7;

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



  };

  useEffect(() => {
    const init = () => {
      camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );

      camera.position.z = 3000;
      scene = new THREE.Scene();

      cssRenderer = initCSS3DRenderer(cssRenderer);
      renderer = initWebGlRenderer(renderer);

      const controls = initControls(camera, cssRenderer);





      renderer.render(scene, camera);



/* TEST EARTH */



    //main planet sizes

    let r = 150;
    let d = 150;
    let e = 150;




    const loader = new THREE.TextureLoader();

    loader.setCrossOrigin("true");

    //-----------------PLAIN EARTH-------------------------

    const texture = loader.load(earthTexture); //wird geladen von privatem google drive account
    const earthBumpMap = loader.load(earthBump);
    const earthSpecMap = loader.load(earthSpec)

    var geometry = new THREE.SphereGeometry(r, d, e);
    var material = new THREE.MeshPhongMaterial({

        map: texture,
        bumpMap: earthBumpMap,
        specularMap: earthSpecMap,
        bumpScale: 1,
        shininess: 1
    })


    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x += 0.5;
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.layers.set(0);




    //------------------------ATMOSPHERE------------------------------------

    //custom shader material 
    const atmosphericGlow = new THREE.Mesh(
        new THREE.SphereGeometry(r, d, e),
        new THREE.ShaderMaterial(
            {
                vertexShader: `
      varying vec3 vertexNormal;
      void main()
      {
          vertexNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix*modelViewMatrix * vec4(position, 1.0);

      }`,
                fragmentShader: `
      varying vec3 vertexNormal;
      void main()
      {
          float intensity = pow(0.7 - dot(vertexNormal, vec3(0,0,1.0)), 2.0);

          gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0) * intensity;
      }`,
                blending: THREE.AdditiveBlending,
                side: THREE.BackSide
            }
        )



        //custom shader material

    )

    atmosphericGlow.scale.set(1.1, 1.1, 1.1)


    //----------------------CLOUDS----------------------------------------
    var cloudGeometry = new THREE.SphereGeometry(1.45, d, e);
    const texture2 = new THREE.TextureLoader().load(cloudMapTrans);

    //Cloud Geomtry and Material
    var cloudMaterial = new THREE.MeshBasicMaterial({
        map: texture2,
        transparent: true,
        opacity: 0.3

    });

    cloudy = new THREE.Mesh(cloudGeometry, cloudMaterial);
    cloudy.rotation.x -= 0.003;
    cloudGeometry.scale(1.1, 1.1, 1.1);



    
   const GLTFloader = new GLTFLoader();
   let obj = null;

   GLTFloader.setCrossOrigin("true");


   
       test = new THREE.Mesh(cloudGeometry, cloudMaterial);

   GLTFloader.load(androidObj, function (glb) {

       test = glb.scene;

       glb.scene.scale.set(10,10, 10)
       glb.scene.position.x = -500;
       glb.scene.rotation.x -= 0.5;
       scene.add(glb.scene);
       var orbitingObjPivot2 = new THREE.Object3D();
       mesh.add(orbitingObjPivot2);
       orbitingObjPivot2.add(glb.scene);
   });

   //-------------------------------orbiting pc -----------------------------------------------------
   //https://drive.google.com/file/d/1niNm5TpcuMHVWnvmTMTUlhZLvw95UCEi/view?usp=sharing

   // GLTFloader.load('https://drive.google.com/uc?export=download&id=1niNm5TpcuMHVWnvmTMTUlhZLvw95UCEi', function(glb) {

   rotateObj2 = new THREE.Mesh();
   GLTFloader.load(computer, function (glb) {

       rotateObj2 = glb.scene;
       glb.scene.scale.set(50,50, 50)

       glb.scene.position.x = 500;
       glb.scene.rotation.x -= 0.5;
       scene.add(glb.scene);
       var orbitingObjPivot3 = new THREE.Object3D();
       mesh.add(orbitingObjPivot3);
       orbitingObjPivot3.add(glb.scene);
   });


   //python
   rotateObj3 = new THREE.Mesh();

   GLTFloader.load(pythonObj, function (glb) {

       rotateObj3 = glb.scene;
       glb.scene.scale.set(3, 3, 3)
       glb.scene.position.z = -500

       glb.scene.position.x = 0;
       glb.scene.position.y = 2;
       glb.scene.rotation.x -= 0.5;
       scene.add(glb.scene);
       var orbitingObjPivot4 = new THREE.Object3D();
       mesh.add(orbitingObjPivot4);
       orbitingObjPivot4.add(glb.scene);
   });

   // react
   rotateObj4 = new THREE.Mesh();

   GLTFloader.load(react, function (glb) {

/*        rotateObj4 = glb.scene;
       glb.scene.scale.set(20, 20, 20)
       glb.scene.position.z = +500
       glb.scene.position.x = 0;
       glb.scene.position.y = -2;
       glb.scene.rotation.x -= 0.5;
       scene.add(glb.scene);
       var orbitingObjPivot5 = new THREE.Object3D();
       mesh.add(orbitingObjPivot5);
       orbitingObjPivot5.add(glb.scene); */
   });


   function setPosition(obj, x, y, z) {
    obj.position.set(x, y, z);
  }
  
  rotateObj7 = new THREE.Mesh();
  
  GLTFloader.load(java, function (glb) {
    rotateObj7 = glb.scene;
    glb.scene.scale.set(30, 30, 30);
    glb.scene.position.z = +500;
    glb.scene.position.x = 0;
    glb.scene.position.y = -2;
    glb.scene.rotation.x -= 0.5;
    scene.add(glb.scene);
    var orbitingObjPivot7 = new THREE.Object3D();
    mesh.add(orbitingObjPivot7);
    orbitingObjPivot7.add(glb.scene);
  
    // Call the setPosition function after the object has been loaded
   // setPosition(rotateObj7, 3200, 3200, 3500);
  });



    let planet = new THREE.Object3D();

    planet.add(mesh);
    planet.add(atmosphericGlow);
    planet.add(cloudy);



    planet.position.z = 0;
    planet.position.x = 1400;
    planet.position.y = 800;
    scene.add(planet);




    var light = new THREE.DirectionalLight(0xffffff, 5);
    light.position.set(1000, 3000, 3000).normalize();
    light.castShadow = true;

    light.target = planet
    scene.add(light);


    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );
   // camera.lookAt(planet);

/*    controls.target = planet.position; */




      createWelcomeText(intl, scene);
      createText(intl, scene, 3000, 3000, 3000, "app.java");
           createText(intl, scene, 6000, 6000, 6000, "app.springboot");
               createText(intl, scene, 9000, 9000, 9000, "app.android");
               createText(intl, scene, 12000, 12000, 12000, "app.selenium");
               createText(intl, scene, 15000, 15000, 15000, "app.javaee");
               createText(intl, scene, 18000, 18000, 18000, "app.quarkus");



      for (let i = 1; i < 10; i++) {
        const x = i * 3000;
        goBackToMain(intl, scene, x, x, x, render, controls);
        prevOrNextButton(intl, scene, x, x, x, render, "Prev", controls);
        prevOrNextButton(intl, scene, x, x, x, render, "Next", controls);
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

      
      test.rotation.y += 0.01;
      test.rotation.x += 0.01;

      rotateObj2.rotation.y += 0.01;
      rotateObj2.rotation.x += 0.01;

      rotateObj3.rotation.y += 0.01;
      rotateObj3.rotation.x += 0.01;

      rotateObj4.rotation.y += 0.01;
      rotateObj4.rotation.x += 0.01;

      rotateObj7.rotation.y += 0.01;
      rotateObj7.rotation.x += 0.01;


      mesh.rotation.y += 0.005;
      cloudy.rotation.y -= 0.003;
      renderer.render(scene, camera);
      renderer.clearDepth();
      camera.layers.set(0);
   



      requestAnimationFrame(animate);
      TWEEN.update();
      render();
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
          <button id="test" onClick={() => transform(targets.test, 2000)}> TEST </button>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", zIndex: 1 }}>
          <button value={(locale = "en-US")} onClick={selectLang}> 🇺🇸 </button>
          <button value={(locale = "de-DE")} onClick={selectLang}> 🇩🇪 </button>
          <button value={(locale = "es-MX")} onClick={selectLang}> 🇪🇸 </button>
          <button value={(locale = "ru-RU")} onClick={selectLang}> 🇷🇺 </button>
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

      console.log("id is: ", id);
      /* Switch for all cards */

      switch (id) {
        case "1":
          console.log("Card 1 was clicked!");
      
          goToCard(scene, render, -3000, -3000, -3000, rotateObj7);
          render();
          // Add code to handle Card 1 click

          break;
        case "2":
          goToCard(scene, render, -6000, -6000, -6000);
          // Add code to handle Card 2 click
          break;
        // Add additional cases for other cards
        default:
          alert("Hier zu gibt es noch keine Informationen :)");
          goToCard(scene, render, -9000, -9000, -9000);
          // Add code to handle unknown card click
          break;
      }
    });
  });
}

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



function prevOrNextButton(intl, scene, x, y, z, render, prevOrNext, controls) {
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
    goPrevOrNext(render, scene, prevOrNext);
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

function goPrevOrNext(render, scene, prevOrNext) {
  const currentPosition = scene.position.x;
  let newPosition;

  if (prevOrNext === "Prev") {
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
