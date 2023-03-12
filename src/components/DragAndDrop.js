import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { DragControls } from "three/examples/jsm/controls/DragControls";

const DragControlsExample = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let container, camera, scene, renderer, controls, group;
    const objects = [];
    let enableSelection = false;

    const mouse = new THREE.Vector2(),
      raycaster = new THREE.Raycaster();

    const init = () => {
      container = containerRef.current;

      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        1,
        5000
      );
      camera.position.z = 1000;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf0f0f0);

      scene.add(new THREE.AmbientLight(0x505050));

      const light = new THREE.SpotLight(0xffffff, 1.5);
      light.position.set(0, 500, 2000);
      light.angle = Math.PI / 9;

      light.castShadow = true;
      light.shadow.camera.near = 1000;
      light.shadow.camera.far = 4000;
      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;

      scene.add(light);

      group = new THREE.Group();
      scene.add(group);

      const geometry = new THREE.BoxGeometry(40, 40, 40);

      for (let i = 0; i < 200; i++) {
        const object = new THREE.Mesh(
          geometry,
          new THREE.MeshLambertMaterial({
            color: Math.random() * 0xffffff,
          })
        );

        object.position.x = Math.random() * 1000 - 500;
        object.position.y = Math.random() * 600 - 300;
        object.position.z = Math.random() * 800 - 400;

        object.rotation.x = Math.random() * 2 * Math.PI;
        object.rotation.y = Math.random() * 2 * Math.PI;
        object.rotation.z = Math.random() * 2 * Math.PI;

        object.scale.x = Math.random() * 2 + 1;
        object.scale.y = Math.random() * 2 + 1;
        object.scale.z = Math.random() * 2 + 1;

        object.castShadow = true;
        object.receiveShadow = true;

        scene.add(object);

        objects.push(object);
      }

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap;

      container.appendChild(renderer.domElement);

      controls = new DragControls([...objects], camera, renderer.domElement);
      controls.addEventListener("drag", render);

      window.addEventListener("resize", onWindowResize);

      document.addEventListener("click", onClick);
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);

      render();
    };

    const render = () => {
      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

      render();
    };

    const onKeyDown = (event) => {
      enableSelection = event.keyCode === 16 ? true : false;
    };


    const onKeyUp = () => {
        enableSelection = false;
        
        // Remove event listeners for mousemove and mouseup
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        
        // Reset the selection area
        selectionArea.style.display = 'none';
        selectionArea.style.width = '0';
        selectionArea.style.height = '0';
        
        // Loop through all selectable elements and check if they are within the selection area
        selectableElements.forEach((element) => {
        const boundingRect = element.getBoundingClientRect();



        if (
            boundingRect.left >= selectionStartX &&
            boundingRect.right <= selectionEndX &&
            boundingRect.top >= selectionStartY &&
            boundingRect.bottom <= selectionEndY
          ) {
            // Add selected class to the element if it's within the selection area
            element.classList.add('selected');
          }







        });
        };


export default DragAndDrop;