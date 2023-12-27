import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";





function load3DObject(){

    const GLTFloader = new GLTFLoader();
    let obj = null;
  
    GLTFloader.setCrossOrigin("true");
  
    test = new THREE.Mesh(cloudGeometry, cloudMaterial);
  
    GLTFloader.load(androidObj, function (glb) {
      test = glb.scene;
  
      glb.scene.scale.set(10, 10, 10);
      glb.scene.position.x = -500;
      glb.scene.rotation.x -= 0.5;
      scene.add(glb.scene);
      var orbitingObjPivot2 = new THREE.Object3D();
      mesh.add(orbitingObjPivot2);
      orbitingObjPivot2.add(glb.scene);
    });
}