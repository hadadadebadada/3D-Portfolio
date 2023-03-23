
import {  CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import arturpfeifer from "./arturpfeifer.jpeg";





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

  const jobPortalLink = `
  <a href="https://bewerbung100.de/" target="_blank" rel="noopener noreferrer">
    https://bewerbung100.de/
  </a>
`;

export function createText(intl, scene, x, y, z, messageId) {
  const textElement = document.createElement('div');
  textElement.className = 'textbox';

  const wrapper = document.createElement('div'); // create wrapper div
  wrapper.style.position = 'relative'; // set position to relative

  /* ADD BUTTON HERE */

  const newMessageText = intl.formatMessage({ id: messageId });
  wrapper.innerHTML += newMessageText; // add text to wrapper

/*   const linkElement = document.createElement('span'); // create a span for the link
  linkElement.innerHTML = jobPortalLink; // set the link as innerHTML
  wrapper.appendChild(linkElement); // add linkElement to wrapper */

  textElement.appendChild(wrapper); // add wrapper to textElement

  const textObject = new CSS3DObject(textElement);
  textObject.position.set(x, y, z);
  textObject.scale.set(2, 2, 2);
  scene.add(textObject);

  const textboxElement = document.createElement('style');
  textboxElement.innerHTML = `.textbox { ${textboxStyle} }`;
  document.head.appendChild(textboxElement);
}

  export function createImage(scene) {
    const imageElement = document.createElement("img");
    imageElement.src = arturpfeifer;
 
      const containerElement = document.createElement("div");
    containerElement.style.position = "absolute"; // set position to absolute
    containerElement.style.top = "50px"; // set top position to 50px
    containerElement.style.left = "50px"; // set left position to 50px
    imageElement.style.borderRadius = "50%"; // make the image round
    containerElement.appendChild(imageElement);
  
    const imageObject = new CSS3DObject(containerElement);
    imageObject.position.set(-4500, 2500, -5000);
    imageObject.scale.set(2, 2, 2);
    scene.add(imageObject);
  }
/* 
  const arrowStyle = `
  position: absolute;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 60px solid rgba(0, 127, 127, 0.5);
  color: white;
  font-size: 24px;
  text-align: center;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  cursor: pointer;
`;

const arrowHoverStyle = `
  .arrow:hover {
    border-bottom-color: rgba(0, 191, 191, 0.7);
  }
`;

const textWrapperStyle = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export function createMainNavigation(scene) {
  const textElement = document.createElement("div");
  textElement.className = "arrow";

  const wrapper = document.createElement("div");
  wrapper.style.cssText = textWrapperStyle;
  wrapper.innerHTML += "JAVA";

  textElement.appendChild(wrapper);

  const textObject = new CSS3DObject(textElement);
  textObject.position.set(-1000, 1000, -900);
  textObject.scale.set(2, 2, 2);
  scene.add(textObject);

  const arrowElement = document.createElement("style");
  arrowElement.innerHTML = `.arrow { ${arrowStyle} } ${arrowHoverStyle}`;
  document.head.appendChild(arrowElement);
} */



/*   

THIS WORKING
const arrowStyle = `
  position: absolute;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 60px solid rgba(0, 127, 127, 0.5);
  color: white;
  font-size: 24px;
  text-align: center;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  cursor: pointer;
`;

const arrowHoverStyle = `
  .arrow:hover {
    border-bottom-color: rgba(0, 191, 191, 0.7);
  }
`; */


const arrowStyles = {
  up: `
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-bottom: 60px solid rgba(0, 127, 127, 0.5);
  `,
  down: `
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-top: 60px solid rgba(0, 127, 127, 0.5);
  `,
  left: `
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
    border-right: 60px solid rgba(0, 127, 127, 0.5);
  `,
  right: `
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
    border-left: 60px solid rgba(0, 127, 127, 0.5);
  `,
};

const arrowStyle = `
  position: absolute;
  width: 0;
  height: 0;
  color: white;
  font-size: 24px;
  text-align: center;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  cursor: pointer;
`;

const arrowHoverStyles = {
  up: `
    .arrow-up:hover {
      border-bottom-color: rgba(0, 191, 191, 0.7);
    }
  `,
  down: `
    .arrow-down:hover {
      border-top-color: rgba(0, 191, 191, 0.7);
    }
  `,
  left: `
    .arrow-left:hover {
      border-right-color: rgba(0, 191, 191, 0.7);
    }
  `,
  right: `
    .arrow-right:hover {
      border-left-color: rgba(0, 191, 191, 0.7);
    }
  `,
};

const textWrapperStyle = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export function createArrow(scene, direction, x, y, intl, messageId, onClickCallback, controls) {
  const textElement = document.createElement("div");
  textElement.className = `arrow arrow-${direction}`;
  textElement.id = `arrow-${direction}`;
  textElement.style.cssText = arrowStyle + arrowStyles[direction];

  const wrapper = document.createElement("div");
  wrapper.style.cssText = textWrapperStyle;

  const newMessageText = intl.formatMessage({ id: messageId });
  wrapper.innerHTML += newMessageText; // add text to wrapper

  textElement.appendChild(wrapper);

  const textObject = new CSS3DObject(textElement);
  textObject.position.set(x, y, -900);
  textObject.scale.set(2, 2, 2);
  scene.add(textObject);

  textElement.addEventListener("click", onClickCallback);
  

       /*    textElement.className = `arrow arrow-${direction}`;
        textElement.id = `arrow-${direction}`; */



        textElement.addEventListener("click", () => {
          controls.enabled = false;
        });
      
        // Add event listeners to the DOM element, not the 3D object
        textElement.addEventListener("mouseenter", () => {
          controls.enabled = false;
        });
      
        textElement.addEventListener("mouseleave", () => {
          controls.enabled = true;
        });



}