/* 



export const diableControllsOnElementHover = (elementRefs, controls) => {
    elementRefs.current.forEach(({ symbol, object }) => {
      object.element.addEventListener("click", () => {
        controls.enabled = true;
      });
  
      object.element.addEventListener("mouseenter", () => {
        controls.enabled = false;
      });
  
      object.element.addEventListener("mouseleave", () => {
        controls.enabled = true;
      });
    });
  }
  
  


export const elementClickListener = (elementRefs, scene, render) => {
    elementRefs.current.forEach(({ symbol, object }) => {
      object.element.addEventListener("click", () => {
  
        let id = symbol.previousElementSibling.textContent;
  
              switch (id) {
          case "1":
            console.log("Card 1 was clicked!");
            goToCard(scene,render, -3000, -3000, -3000)
            // Add code to handle Card 1 click
            break;
          case "2":
            goToCard(scene,render, -6000, -6000, -6000)
            // Add code to handle Card 2 click
            break;
          // Add additional cases for other cards
          default:
            alert("Hier zu gibt es noch keine Informationen :)");
            goToCard(scene,render, -9000, -9000, -9000)
            // Add code to handle unknown card click
            break;
        }
  

   
      });
    });
  } */