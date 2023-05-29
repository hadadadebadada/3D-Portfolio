
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import * as THREE from "three";





export const initControls = (camera, cssRenderer) => {
    const controls = new OrbitControls(camera, cssRenderer.domElement);
    controls.minDistance = -2000;
    controls.maxDistance = 5000;   
    controls.enableDamping = false;
    controls.enableRotate = true; // 

    controls.minPolarAngle = Math.PI / 4; // radians
    controls.maxPolarAngle = Math.PI / 2; // radians

    controls.minAzimuthAngle = -Math.PI / 4; // radians
    controls.maxAzimuthAngle = Math.PI / 4; // radians


    controls.enableZoom = true;
    controls.mouseButtons.RIGHT = null;
    controls.touches.TWO = THREE.TOUCH.NONE;

    return controls;
  }


  export const initCSS3DRenderer = (cssRenderer, isPortrait) => {
    cssRenderer = new CSS3DRenderer();
    const width = isPortrait ? window.innerHeight : window.innerWidth;
    const height = isPortrait ? window.innerWidth : window.innerHeight;
    cssRenderer.setSize(width, height);
    cssRenderer.domElement.style.position = "absolute";
    document.querySelector("#css3d").appendChild(cssRenderer.domElement);
    return cssRenderer;
  };
  
  export const initWebGlRenderer = (renderer, isPortrait) => {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" }); 
    renderer.setClearColor(0x000000, 0); 
    renderer.setPixelRatio(window.devicePixelRatio);
    const width = isPortrait ? window.innerHeight : window.innerWidth;
    const height = isPortrait ? window.innerWidth : window.innerHeight;
    renderer.setSize(width, height);
    renderer.domElement.style.position = "absolute";
    document.querySelector("#webgl").appendChild(renderer.domElement);
    return renderer;
  };
  