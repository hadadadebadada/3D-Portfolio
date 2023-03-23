
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import * as THREE from "three";





export const initControls = (camera, cssRenderer) => {
    const controls = new OrbitControls(camera, cssRenderer.domElement);
    controls.minDistance = 0;
    controls.maxDistance = 20000;
    
    controls.enableDamping = false;
    controls.enableRotate = true;
    controls.enableZoom = true;
  

    controls.mouseButtons.RIGHT = null;

    return controls;
  }


  export const initCSS3DRenderer = (cssRenderer) => {
    cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.domElement.style.position = "absolute";
    document.querySelector("#css3d").appendChild(cssRenderer.domElement);
    return cssRenderer;
  }
  
  export const initWebGlRenderer = (renderer) => {
    renderer = new THREE.WebGLRenderer({ alpha: true,antialias: true }); // Add the alpha: true option
    renderer.setClearColor(0x000000, 0); // Add this line to make the background transparent
    renderer.setPixelRatio(window.devicePixelRatio);
/*     renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap; */
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "absolute";
    document.querySelector("#webgl").appendChild(renderer.domElement);
    return renderer;
  }