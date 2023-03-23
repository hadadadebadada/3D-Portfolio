import * as THREE from "three";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";

export const createGrid = (objects, targets) => {
  for (var i = 0; i < objects.length; i++) {
    let object = new THREE.Object3D();
    object.position.x = (i % 4) * 400 - 400;
    object.position.y = -(Math.floor(i / 4) % 3) * 400 + 400;
    object.position.z = Math.floor(i / 16) * 1000 - 2000;
    targets.grid.push(object);
  }
}


export const createSphere = (objects, vector, targets) => {
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
  



export const createTable = (objects, vector, targets) => {
    for (let i = 0, l = objects.length; i < l; i++) {
      const rows = 5;
      const cols = 13;
      const row = Math.floor(i / cols);
      const col = i % cols;
      const x = (col - cols / 2 + 0.5) * 200;
      let y = (rows - row) * 180;
      let z = 0;
  
      const object = new THREE.Object3D();
      y = y - 800;
      z = z + 1200;
      object.position.set(x, y, z);
  
      vector.copy(object.position).multiplyScalar(2);
  
      object.lookAt(vector);
  
      targets.pyramid.push(object);
    }
  }

  

  
  export const createCircle = (objects, targets) => {
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
  



export const createFractalTree = (objects, vector, targets) => {
    const fibonacci = [];
    const angle = Math.PI * (3 - Math.sqrt(5));
    const scaleFactor = 120;
  
    for (let i = 0, l = objects.length; i < l; i++) {
      let object = new THREE.Object3D();
  
      const radius = Math.sqrt(i) * scaleFactor;
      const theta = i * angle;
  
      object.position.x = radius * Math.cos(theta);
      object.position.y = -(i * 60) + 1250;
      object.position.z = radius * Math.sin(theta);
  
      vector.x = object.position.x * 2;
      vector.y = object.position.y;
      vector.z = object.position.z * 2;
  
      object.lookAt(vector);
  
      targets.fractalTree.push(object);
    }
  }
  
  export const createDoubleHelix = (objects, vector, targets) => {
    const doubleHelix = [];
    const radius = 250;
    const distanceBetweenHelices = 100;
  
    for (let i = 0, l = objects.length; i < l; i++) {
      let phi = i * 0.375 + Math.PI;
      let object1 = new THREE.Object3D();
      object1.position.x = radius * Math.sin(phi) - distanceBetweenHelices / 2;
      object1.position.y = -(i * 120) + 1450;
      object1.position.z = radius * Math.cos(phi);
  
      vector.x = object1.position.x * 2;
      vector.y = object1.position.y;
      vector.z = object1.position.z * 2;
  
      object1.lookAt(vector);
  
      targets.doubleHelix.push(object1);
  
      let object2 = new THREE.Object3D();
      object2.position.x = radius * Math.sin(phi + Math.PI) + distanceBetweenHelices / 2;
      object2.position.y = -(i * 120) + 1450;
      object2.position.z = radius * Math.cos(phi + Math.PI);
  
      vector.x = object2.position.x * 2;
      vector.y = object2.position.y;
      vector.z = object2.position.z * 2;
  
      object2.lookAt(vector);
  
      targets.doubleHelix.push(object2);
    }
  }

/* tRIPPLE HELIX */

/*   export const createDoubleHelix = (objects, vector, targets) => {
    const doubleHelix = [];
    const tripleHelix = [];
    const radius = 150;
    const distanceBetweenHelices = 100;
  
    for (let i = 0, l = objects.length; i < l; i++) {
      let phi = i * 0.575 + Math.PI;
  
      // Helix 1
      let object1 = new THREE.Object3D();
      object1.position.x = radius * Math.sin(phi) - distanceBetweenHelices;
      object1.position.y = -(i * 120) + 1450;
      object1.position.z = radius * Math.cos(phi);
  
      vector.x = object1.position.x * 2;
      vector.y = object1.position.y;
      vector.z = object1.position.z * 2;
  
      object1.lookAt(vector);
      targets.doubleHelix.push(object1);
  
      // Helix 2
      let object2 = new THREE.Object3D();
      object2.position.x = radius * Math.sin(phi + Math.PI / 3);
      object2.position.y = -(i * 120) + 1450;
      object2.position.z = radius * Math.cos(phi + Math.PI / 3);
  
      vector.x = object2.position.x * 2;
      vector.y = object2.position.y;
      vector.z = object2.position.z * 2;
  
      object2.lookAt(vector);
      targets.doubleHelix.push(object2);
  
      // Helix 3
      let object3 = new THREE.Object3D();
      object3.position.x = radius * Math.sin(phi + 2 * Math.PI / 3) + distanceBetweenHelices;
      object3.position.y = -(i * 120) + 1450;
      object3.position.z = radius * Math.cos(phi + 2 * Math.PI / 3);
  
      vector.x = object3.position.x * 2;
      vector.y = object3.position.y;
      vector.z = object3.position.z * 2;
  
      object3.lookAt(vector);
      targets.doubleHelix.push(object3);
    }
    
  } */
  
  export const createHelix = (objects, vector, targets) => {
    const helix = [];
    const radius = 450;
  
    for (let i = 0, l = objects.length; i < l; i++) {
      let phi = i * 0.175 + Math.PI;
      let object = new THREE.Object3D();
  
      object.position.x = radius * Math.sin(phi);
      object.position.y = -(i * 60) + 1250;
      object.position.z = radius * Math.cos(phi);
  
      vector.x = object.position.x * 2;
      vector.y = object.position.y;
      vector.z = object.position.z * 2;
  
      object.lookAt(vector);
  
      targets.helix.push(object);
    }
  }
  

  export const createTest = (objects, vector, targets)  => {
    const maxDepth = 8;
    const spacingFactorX = 5.5;
     const spacingFactorY = 5.5;
     const stack = [{
      startX: 0,
      startY: -1500,
      len: 150,
      angle: 11,
      branchWidth: 10,
      depth: 2
    }];
  
    while (stack.length > 0) {
      const { startX, startY, len, angle, branchWidth, depth } = stack.pop();
  
      if (depth >= maxDepth) continue;
  
      const branchMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
      const branchGeometry = new THREE.CylinderGeometry(branchWidth, branchWidth, len, 16);
      const branch = new THREE.Mesh(branchGeometry, branchMaterial);
  
      const object = new THREE.Object3D();
      object.add(branch);
      object.position.set(startX, startY, 0);
      object.rotation.z = angle;
  
      branch.position.y = -len / 2;
  
      vector.x = object.position.x * 2;
      vector.y = object.position.y;
      vector.z = object.position.z * 2;
  
      object.lookAt(vector);
  
      targets.test.push(object);
  
      const newStartX = startX + Math.cos(angle) * len * spacingFactorX;
      const newStartY = startY - Math.sin(angle) * len * spacingFactorY;
      const newLen = len * 0.8;
      const newBranchWidth = branchWidth * 0.8;
  
      stack.push({
        startX: newStartX,
        startY: newStartY,
        len: newLen,
        angle: angle - (15 * Math.PI / 180),
        branchWidth: newBranchWidth,
        depth: depth + 1
      });
  
      stack.push({
        startX: newStartX,
        startY: newStartY,
        len: newLen,
        angle: angle + (15 * Math.PI / 180),
        branchWidth: newBranchWidth,
        depth: depth + 1
      });
    }
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

/* 
      function createSpiral(objects, vector, targets) {
        const spiral = [];
        const numTurns = 2;
        const heightPerTurn = 400;
        const radius = 250;
      
        for (let i = 0, l = objects.length; i < l; i++) {
          let object = new THREE.Object3D();
      
          const angle = (i / l) * Math.PI * 2 * numTurns;
          const height = (i / l) * numTurns * heightPerTurn - (numTurns * heightPerTurn) / 2;
      
          object.position.x = radius * Math.cos(angle);
          object.position.y = height;
          object.position.z = radius * Math.sin(angle);
      
          vector.x = object.position.x * 2;
          vector.y = object.position.y;
          vector.z = object.position.z * 2;
      
          object.lookAt(vector);
      
          targets.spiral.push(object);
        }
      } */



/* function createTest(objects, vector, targets) {
  const maxDepth = 10;
  const spacingFactorX = 10;
  const spacingFactorY = 5.5;
  const stack = [{
    startX: 0,
    startY: 0,
    len: 150,
    angle: 10,
    branchWidth: 10,
    depth: 2
  }];

  while (stack.length > 0) {
    const { startX, startY, len, angle, branchWidth, depth } = stack.pop();

    if (depth >= maxDepth) continue;

    const branchMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
    const branchGeometry = new THREE.CylinderGeometry(branchWidth, branchWidth, len, 16);
    const branch = new THREE.Mesh(branchGeometry, branchMaterial);

    const object = new THREE.Object3D();
    object.add(branch);
    object.position.set(startX, startY, 0);
    object.rotation.z = angle;

    branch.position.y = -len / 2;

    vector.x = object.position.x * 2;
    vector.y = object.position.y;
    vector.z = object.position.z * 2;

    object.lookAt(vector);

    targets.test.push(object);

    const newStartX = startX + Math.cos(angle) * len * spacingFactorX;
    const newStartY = startY - Math.sin(angle) * len * spacingFactorY;
    const newLen = len * 0.8;
    const newBranchWidth = branchWidth * 0.8;

    const branchAngle = 20 * Math.PI / 180;
    
    stack.push({
      startX: newStartX,
      startY: newStartY,
      len: newLen,
      angle: angle - branchAngle,
      branchWidth: newBranchWidth,
      depth: depth + 1
    });

    stack.push({
      startX: newStartX,
      startY: newStartY,
      len: newLen,
      angle: angle + branchAngle,
      branchWidth: newBranchWidth,
      depth: depth + 1
    });
  }
}

 */

/* function createFractalTree(objects, vector, targets, depth = 8, length = 300, angle = Math.PI / 4, parentId = null) {
  if (depth === 0) return;

  const object = new THREE.Mesh(
    new THREE.CylinderGeometry(5, 5, length, 16),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  );

  object.position.copy(vector);

  if (parentId !== null) {
    object.position.sub(objects[parentId].position);
    objects[parentId].add(object);
  }

  object.position.y += length / 2;
  object.rotation.z = angle * (parentId === null ? 0 : parentId % 2 === 0 ? 1 : -1);

  objects.push(object);
  targets.fractalTree.push(object);

  const newLength = length * 0.7;
  const newVector = vector.clone();
  newVector.y += length;

  createFractalTree(objects, newVector, targets, depth - 1, newLength, angle, objects.length - 1);
}
 */



/* its more like rearange obejcts */
/* function createFractalTree(objects, vector, targets) {
  function createBranch(depth, length, angle, parentId) {
    if (depth === 0) return;

    const object = new THREE.Mesh(
      new THREE.CylinderGeometry(5, 5, length, 16),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );

    if (parentId !== null) {
      object.position.copy(objects[parentId].position);
      object.position.y += length / 2;
      object.rotation.z = angle * (parentId % 2 === 0 ? 1 : -1);
      objects[parentId].add(object);
    }

    objects.push(object);
    targets.fractalTree.push(object);

    const newLength = length * 0.7;
    const newVector = object.position.clone();
    newVector.y += length / 2;

    createBranch(depth - 1, newLength, angle, objects.length - 1);
  }

  const depth = 8;
  const length = 300;
  const angle = Math.PI / 4;

  createBranch(depth, length, angle, null);
} */




/* 
 */


