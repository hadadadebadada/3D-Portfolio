
import {  CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";

const textboxStyle = `
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
`;



export function createWelcomeText (intl, scene){
    const textElement = document.createElement("div");
    textElement.className = "textbox";
  
    const wrapper = document.createElement("div"); // create wrfcrper div
    wrapper.style.position = "relative"; // set position to relfcrive
  
  
    const newMessageText = intl.formatMessage({ id: "app.welcome" });
    wrapper.innerHTML += newMessageText; // add text to wrapper
  
    textElement.appendChild(wrapper); // add wrapper to textElement
  
    const textObject = new CSS3DObject(textElement);
    textObject.position.set(-1000, 500, -900);
    textObject.scale.set(2, 2, 2);
    scene.add(textObject);
  
    const textboxElement = document.createElement("style");
    textboxElement.innerHTML = `.textbox { ${textboxStyle} }`;
    document.head.appendChild(textboxElement);
  }


  export function createText(intl, scene, x,y,z, messageId) {
    const textElement = document.createElement("div");
    textElement.className = "textbox";
  
    const wrapper = document.createElement("div"); // create wrapper div
    wrapper.style.position = "relative"; // set position to relative
  
    /* ADD BUTTON HERE */
  
    const newMessageText = intl.formatMessage({ id: messageId });
    wrapper.innerHTML += newMessageText; // add text to wrapper
  
    textElement.appendChild(wrapper); // add wrapper to textElement
  
    const textObject = new CSS3DObject(textElement);
    textObject.position.set(x, y,z);
    textObject.scale.set(2, 2, 2);
    scene.add(textObject);
  
    const textboxElement = document.createElement("style");
    textboxElement.innerHTML = `.textbox { ${textboxStyle} }`;
    document.head.appendChild(textboxElement);
  }
  

  export function createImage(scene) {
    const imageElement = document.createElement("img");
    imageElement.src =
      "https://images.unsplash.com/photo-1677032448705-92557fb54c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODY0NzI0MQ&ixlib=rb-4.0.3&q=80&w=1080";
    const containerElement = document.createElement("div");
    containerElement.style.position = "absolute"; // set position to absolute
    containerElement.style.width = "300px"; // set width to 300px
    containerElement.style.height = "300px"; // set height to 300px
    containerElement.style.top = "50px"; // set top position to 50px
    containerElement.style.left = "50px"; // set left position to 50px
    containerElement.appendChild(imageElement);
  
    const imageObject = new CSS3DObject(containerElement);
    imageObject.position.set(-4500, 2500, -5000);
    scene.add(imageObject);
  }
  