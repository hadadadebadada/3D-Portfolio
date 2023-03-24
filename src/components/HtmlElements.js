
import {  CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import arturpfeifer from "./arturpfeifer.jpeg";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";





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
  
    const wrapper = document.createElement("div"); 
    wrapper.style.position = "relative"; 
  
  
    const newMessageText = intl.formatMessage({ id: "app.welcome" });
    wrapper.innerHTML += newMessageText; 
  
    textElement.appendChild(wrapper); 
  
    const textObject = new CSS3DObject(textElement);
    textObject.position.set(-1000, 500, -900);
    textObject.scale.set(2, 2, 2);
    scene.add(textObject);
  
    const textboxElement = document.createElement("style");
    textboxElement.innerHTML = `.textbox { ${textboxStyle} }`;
    document.head.appendChild(textboxElement);
  }




const textboxStyleProjects = `
position: absolute;
width: 400px;
height: 500px;
background-color: rgba(0, 127, 127, 0.5);
color: white;
font-size: 24px;
text-align: center;
padding: 10px;
border-radius: 10px;
transform: translate(-50%, -50%);
left: 75%;
top: 50%;

/* Add styles for a tags and bold text */
a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.bold-text {
  font-weight: bold;
}
`;

export function createProjectsDiv(intl, scene) {


  const header = intl.formatMessage({ id: 'app.projectsheader' }); 
  const project1 = intl.formatMessage({ id: 'app.project1' });
  const project2 = intl.formatMessage({ id: 'app.project2' });
  const project3 = intl.formatMessage({ id: 'app.project3' });

    let jobPortalLink = `
  <a href="https://bewerbung100.de/" target="_blank" rel="noopener noreferrer">
    ${project1}
  </a>
`;

let web3PixelGridLink = `
<a href="https://web3pixelgrid.web.app/" target="_blank" rel="noopener noreferrer">
${project2}
</a>
`;


let orozgLink = `<a href="https://orozg-6350b.web.app/" target="_blank" rel="noopener noreferrer">
${project3}
</a>
`;


/*   let jobPortalLink = `
  <a href="https://bewerbung100.de/" target="_blank" rel="noopener noreferrer">
    Job Portal with AI Integration and Email Service with over 1 Million Jobs and several thousand applications
  </a>
`;

let web3PixelGridLink = `
<a href="https://web3pixelgrid.web.app/" target="_blank" rel="noopener noreferrer">
Direct on chain NFT drawing tool
</a>
`;


let orozgLink = `<a href="https://orozg-6350b.web.app/" target="_blank" rel="noopener noreferrer">
OZG - Platform - List of all onlineservices in Germany with integrated management of the digitalization stucture for a city ​​administration
</a>
`;
 */

  const textElement = document.createElement("div");
  textElement.className = "textboxProjects";

  const wrapper = document.createElement("div");
  wrapper.style.position = "relative";

  wrapper.innerHTML += '<span class="bold-text">latest projects</span>';
  wrapper.innerHTML += `<br/><br/>${jobPortalLink}<br/><br/>${web3PixelGridLink}<br/><br/>${orozgLink}`;

  textElement.appendChild(wrapper);

  const textObject = new CSS3DObject(textElement);
  textObject.position.set(-3000, 500, -900);
  textObject.scale.set(2, 2, 2);
  scene.add(textObject);

  const textboxElement = document.createElement("style");
  textboxElement.innerHTML = `.textboxProjects { ${textboxStyleProjects} }`;
  document.head.appendChild(textboxElement);
}




  export function createImage(scene) {
    const imageElement = document.createElement("img");
    imageElement.src = arturpfeifer;
    const containerElement = document.createElement("div");
    containerElement.style.position = "absolute";
    containerElement.style.top = "50px"; 
    containerElement.style.left = "50px"; 
    imageElement.style.borderRadius = "50%";
    containerElement.appendChild(imageElement);
    const imageObject = new CSS3DObject(containerElement);
    imageObject.position.set(-4500, 2500, -5000);
    imageObject.scale.set(2, 2, 2);
    scene.add(imageObject);
  }

  const iconCardImageStyle = `
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;




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

/* const arrowHoverStyles = {
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
}; */

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
  



        textElement.addEventListener("click", () => {
          controls.enabled = false;
          setTimeout(() => {
            controls.enabled = true;
          }, 100);
        });
      
        textElement.addEventListener("mouseenter", () => {
          controls.enabled = false;
        });
      
        textElement.addEventListener("mouseleave", () => {
          controls.enabled = true;
        });



}





export function createText(intl, scene, x, y, z, messageId, icon, controls, onClickCallback,onClickCallbackPrev,onClickCallbackNext) {
  

  /* TEXT */
  const textElement = document.createElement('div');
  textElement.className = 'textbox';
  const wrapper = document.createElement('div');
  wrapper.style.position = 'relative';
  const newMessageText = intl.formatMessage({ id: messageId });
  wrapper.innerHTML += newMessageText;
/* ---------------------- */


  /* ICON */
  const iconElement = document.createElement('img');
  iconElement.src = icon;
  iconElement.className = 'iconcardimage';
  wrapper.appendChild(iconElement);
/* ------------ */



/*GO BACK TO MAIN  BUTTON */
const buttonElement = document.createElement('button');
buttonElement.className = "testDirectBackToMain";

const goBackToMainText = intl.formatMessage({ id: "app.backToMain" });
buttonElement.textContent = goBackToMainText;

wrapper.appendChild(buttonElement);

buttonElement.addEventListener("click", onClickCallback);

buttonElement.addEventListener("mouseenter", () => {
  controls.enabled = false;
});

buttonElement.addEventListener("mouseleave", () => {
  controls.enabled = true;
});

const backToMainButton = `
  position: absolute;
  bottom: 0;
  left: 200px;
  top: 430px;
  width: 400px;
  height: 100px;
`;

buttonElement.style.cssText = backToMainButton;
/* -------------------------- */



/*GO PREV OF NEXT  BUTTON */
const buttonElementPrev = document.createElement('button');
buttonElementPrev.className = "prevButton";

const prevText = intl.formatMessage({ id: "app.prev" });
buttonElementPrev.textContent = prevText;


wrapper.appendChild(buttonElementPrev);

buttonElementPrev.addEventListener("click", onClickCallbackPrev);

buttonElementPrev.addEventListener("mouseenter", () => {
  controls.enabled = false;
});

buttonElementPrev.addEventListener("mouseleave", () => {
  controls.enabled = true;
});

const prevButtonStyle = `
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  top: 430px;
  width: 200px;
  height: 100px;
`;

buttonElementPrev.style.cssText = prevButtonStyle;


/* --------------- */


/* GO NEXT Button */

const buttonElementNext = document.createElement('button');




buttonElementNext.className = "nextButton";


const nextText = intl.formatMessage({ id: "app.next" });
buttonElementNext.textContent = nextText;



wrapper.appendChild(buttonElementNext);

buttonElementNext.addEventListener("click", onClickCallbackNext);

buttonElementNext.addEventListener("mouseenter", () => {
  controls.enabled = false;
});

buttonElementNext.addEventListener("mouseleave", () => {
  controls.enabled = true;
});

const nextButtonStyle = `
  position: absolute;
  bottom: 0;
  left: 600px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  top: 430px;
  width: 200px;
  height: 100px;
`;

buttonElementNext.style.cssText = nextButtonStyle;

/* --------------------------------------------- */


  textElement.appendChild(wrapper);
  const textObject = new CSS3DObject(textElement);
  textObject.position.set(x, y, z);
  textObject.scale.set(2, 2, 2);
  scene.add(textObject);

  const textboxElement = document.createElement('style');
  const iconCardImageStyle = `
    position: absolute;
    bottom: 0;
    left: 0;
    top: 300px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
  `;
  textboxElement.innerHTML = `.textbox { ${textboxStyle} } .iconcardimage { ${iconCardImageStyle} }`;
  document.head.appendChild(textboxElement);
}



/* 



  const newMessageText = intl.formatMessage({ id: "app.toBackToMain" });

  objectContent.textContent = newMessageText;
  objectContent.id = "backToMainButton";

  const object = new CSS3DObject(objectContent);

  x = x + 950;
  y = y + 200;

  object.position.set(x, y, z);
  object.scale.set(3, 3, 3);
  scene.add(object);

  object.element.addEventListener("click", () => {
    setTimeout(() => {
      controls.enabled = true;
    }, 100);
    goBackToMainMenu(render, scene);
  });

  object.element.addEventListener("mouseenter", () => {
    controls.enabled = false;
  });

  object.element.addEventListener("mouseleave", () => {
    controls.enabled = true;
  });

}

function goBackToMainMenu(render, scene) {
  new TWEEN.Tween(scene.position)
    .to({ x: 0, y: -150, z: -500 }, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(render)
    .start();
}
 */