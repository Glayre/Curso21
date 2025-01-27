
function mover(e){
    e.preventDefault();
    let personaje = document.getElementById("personaje");
    console.log(e);
    switch(e.key){
      case "ArrowUp":
        if(personaje.offsetTop <= 0){
          break;
        }
        personaje.style.top = personaje.offsetTop - 10 + "px";
        personaje.style.transform = "rotate(270deg)";
        break;
      case "ArrowDown":
        if(personaje.offsetTop >= 500){
          break;
        }
        personaje.style.top = personaje.offsetTop + 10 + "px";
        personaje.style.transform = "rotate(90deg)";
        break;
      case "ArrowLeft":
        if(personaje.offsetLeft <= 0){
          break;
        }
        personaje.style.left = personaje.offsetLeft - 10 + "px";
        personaje.style.transform = "scale(-1,1)";
        break;
      case "ArrowRight":
        if(personaje.offsetLeft >= 500){
          break;
        }
        personaje.style.left = personaje.offsetLeft + 10 + "px";
        personaje.style.transform = "rotate(0deg)";
        break;
    }
  }