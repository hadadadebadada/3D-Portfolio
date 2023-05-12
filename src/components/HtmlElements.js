
import {  CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import arturpfeifer from "./arturpfeifer.jpeg";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import linkedin from '../icons2/icons8-linkedin-96.png'
import github from '../icons2/icons8-github-96.png'
import whatsapp from '../icons2/icons8-whatsapp-96.png'





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



const textWrapperStyle = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

 



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
left: 71%;
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



export function createWelcomeText (intl, scene, controls){
  const textElement = document.createElement("div");
  textElement.className = "textbox";

  const wrapper = document.createElement("div"); 
  wrapper.style.position = "relative"; 

  const newMessageText = intl.formatMessage({ id: "app.welcome" });
  wrapper.innerHTML += newMessageText; 

  // Create LinkedIn social icon
  const socialIconElementLinkedin = document.createElement('img');
  socialIconElementLinkedin.src = linkedin;
  socialIconElementLinkedin.className = 'socialIconElementLinkedin';

  const linkElementLinkedin = document.createElement("a");
  linkElementLinkedin.href = "https://www.linkedin.com/in/artur-pfeifer/";
  linkElementLinkedin.target = "_blank";
  linkElementLinkedin.rel = "noopener noreferrer";

  socialIconElementLinkedin.addEventListener("mouseenter", () => {
    controls.enabled = false;
  });

  socialIconElementLinkedin.addEventListener("mouseleave", () => {
    controls.enabled = true;
  });

  linkElementLinkedin.appendChild(socialIconElementLinkedin);
  wrapper.appendChild(linkElementLinkedin);

  // Create GitHub social icon
  const socialIconElementGithub = document.createElement('img');
  socialIconElementGithub.src = github;
  socialIconElementGithub.className = 'socialIconElementGithub';

  const linkElementGithub = document.createElement("a");
  linkElementGithub.href = "https://github.com/hadadadebadada";
  linkElementGithub.target = "_blank";
  linkElementGithub.rel = "noopener noreferrer";

  socialIconElementGithub.addEventListener("mouseenter", () => {
    controls.enabled = false;
  });

  socialIconElementGithub.addEventListener("mouseleave", () => {
    controls.enabled = true;
  });

  linkElementGithub.appendChild(socialIconElementGithub);
  wrapper.appendChild(linkElementGithub);

  // Create WhatsApp social icon
  const socialIconElementWhatsapp = document.createElement('img');
  socialIconElementWhatsapp.src = whatsapp;
  socialIconElementWhatsapp.className = 'socialIconElementWhatsapp';

  const linkElementWhatsapp = document.createElement("a");
  linkElementWhatsapp.href = "https://api.whatsapp.com/send?phone=491772266449"; // replace with your actual WhatsApp link
  linkElementWhatsapp.target = "_blank";
  linkElementWhatsapp.rel = "noopener noreferrer";

  socialIconElementWhatsapp.addEventListener("mouseenter", () => {
    controls.enabled = false;
  });

  socialIconElementWhatsapp.addEventListener("mouseleave", () => {
    controls.enabled = true;
  });

  linkElementWhatsapp.appendChild(socialIconElementWhatsapp);
  wrapper.appendChild(linkElementWhatsapp);

  textElement.appendChild(wrapper); 

  const textObject = new CSS3DObject(textElement);
  textObject.position.set(-1000, 500, -900);
  textObject.scale.set(2, 2, 2);
  scene.add(textObject);

  

  const iconCardImageStyle1 = `
  position: absolute;
  bottom: 0;
  left: 0;
  top: 300px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

  const iconCardImageStyle2 = `
    position: absolute;
    bottom: 0;
    left: 350px;
    top: 300px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
  `;

  const iconCardImageStyle3 = `
  position: absolute;
  bottom: 0;
  left: 700px;
  top: 300px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

  const textboxElement = document.createElement("style");
  textboxElement.innerHTML = `.textbox { ${textboxStyle} } 
                              .socialIconElementLinkedin { ${iconCardImageStyle1} }
                              .socialIconElementGithub { ${iconCardImageStyle2} }
                              .socialIconElementWhatsapp { ${iconCardImageStyle3} }`;
  document.head.appendChild(textboxElement);
}





/* export function createSocialIcon(scene, controls, xPosition, image, href) {
  const imageElement = document.createElement("img");
  imageElement.src = image;
  const containerElement = document.createElement("div");
  containerElement.style.position = "absolute";
  containerElement.style.top = "50px"; 
  containerElement.style.left = "50px"; 
  imageElement.style.borderRadius = "50%";

  const linkedinLink = "https://bewerbung100.de/"
  // assuming you have this id in your internationalization file




  const linkElement = document.createElement("a");
  linkElement.innerHTML = `
    <a href="${href}" target="_blank" rel="noopener noreferrer">
      <img src="${imageElement.src}" style="border-radius: 50%;" />
    </a>
  `;
  
  linkElement.addEventListener("mouseenter", () => {
    controls.enabled = false;
  });
  
  linkElement.addEventListener("mouseleave", () => {
    controls.enabled = true;
  });
  



  containerElement.appendChild(linkElement);
  
  const imageObject = new CSS3DObject(containerElement);
  imageObject.position.set(xPosition, 550, -900);
  imageObject.scale.set(2, 2, 2);
  scene.add(imageObject);
} */


export function createProjectsDiv(intl, scene, controls) {


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




  const textElement = document.createElement("div");
  textElement.className = "textboxProjects";

  const wrapper = document.createElement("div");
  wrapper.style.position = "relative";

  wrapper.innerHTML += `<span class="bold-text">${header}</span>`;
  wrapper.innerHTML += `<br/><br/>${jobPortalLink}<br/><br/>${web3PixelGridLink}<br/><br/>${orozgLink}`;


  wrapper.addEventListener("mouseenter", () => {
    controls.enabled = false;
  });
  
  wrapper.addEventListener("mouseleave", () => {
    controls.enabled = true;
  });

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
    containerElement.style.top = "100px"; 
    containerElement.style.left = "25px"; 
    imageElement.style.borderRadius = "50%";
    containerElement.appendChild(imageElement);
    const imageObject = new CSS3DObject(containerElement);
    imageObject.position.set(-4500, 2500, -5000);
    imageObject.scale.set(2, 2, 2);
    scene.add(imageObject);
  }





  




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
buttonElement.style.fontSize = "24px"; // Set font size to 24px
buttonElement.style.fontWeight = "bold"; // Set fon

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
  font-size: 24px;
  font-weight: bold;
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
  font-size: 24px;
  font-weight: bold;
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
  font-size: 24px;
  font-weight: bold;
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



