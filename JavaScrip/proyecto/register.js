const button = document.getElementById("submit")

button.addEventListener("click",() => {
    const usuario = document.getElementById("registerUser").value
    const email = document.getElementById("registerEmail").value
    const password = document.getElementById("registerPassword").value
    const confirm_password = document.getElementById("confirmPassword").value
    const data = {
        username: usuario, 
        email: email, 
        password: password,

    }

    let listado=[]
    if(localStorage.getItem("usuarios")){
    listado=JSON.parse(localStorage.getItem("usuarios"))
   
    }
    listado.push(
        data
    )

    localStorage.setItem("usuarios", JSON.stringify (listado))

    let fechaActual = new Date();
    let fechaExpiracion = new Date(fechaActual.getTime() + 3 * 60 * 60 * 1000);
    
    document.cookie = `cookie=${JSON.stringify(data)}; expires=${fechaExpiracion.toUTCString()}; path=/`;
    window.location.href = "./home.html" 

}

)