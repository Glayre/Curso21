const cookies = document.cookie.split(";");
console.log (cookies)
console.log (window.location)

let hasCookie = false;
let sesionCookie = "";
cookies.forEach(cookie => {
  const [name, value] = cookie.split("=");
  console.log(name, value)
  if(name === "cookie") {
    console.log (name)
    hasCookie = true;
    sesionCookie = value;
  }
});

if(hasCookie) {
    if(window.location.pathname === "/JavaScrip/proyecto/login.html" || window.location.pathname === "/JavaScrip/proyecto/register.html") {
      window.location.href = "./home.html";
    }
  } else{
    //alert("No hay sesion");
    if(window.location.pathname === "/JavaScrip/proyecto/home.html" || window.location.pathname === "/JavaScrip/proyecto/profile.html") {
      window.location.href = "./login.html";
    }
  }