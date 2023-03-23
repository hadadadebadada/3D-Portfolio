import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';




export function createPlanet(scene, earthTexture, earthBump, earthSpec, cloudMapTrans, androidObj, computer, pythonObj, react, java) {
    //main planet sizes

let mesh;
let cloudy;
let test;
let rotateObj2;
let rotateObj3;
let rotateObj4;
let rotateObj7;



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


return {
 mesh,
 cloudy,
 test,
 rotateObj2,
 rotateObj3,
 rotateObj4,
 rotateObj7
};
}