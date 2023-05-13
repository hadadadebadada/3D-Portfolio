
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import * as THREE from "three";





export const initControls = (camera, cssRenderer) => {
    const controls = new OrbitControls(camera, cssRenderer.domElement);
    controls.minDistance = 0;
    controls.maxDistance = 20000;
    
    controls.enableDamping = false;
    controls.enableRotate = false;
    controls.enableZoom = true;
  

    controls.mouseButtons.RIGHT = null;

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
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); 
    renderer.setClearColor(0x000000, 0); 
    renderer.setPixelRatio(window.devicePixelRatio);
    const width = isPortrait ? window.innerHeight : window.innerWidth;
    const height = isPortrait ? window.innerWidth : window.innerHeight;
    renderer.setSize(width, height);
    renderer.domElement.style.position = "absolute";
    document.querySelector("#webgl").appendChild(renderer.domElement);
    return renderer;
  };
  