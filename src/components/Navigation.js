
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";


export function goToCard(scene, render, x,y,z){
    new TWEEN.Tween(scene.position)
    .to({ x: x, y: y, z: z }, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(render)
    .start();
  }