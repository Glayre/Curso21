
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
    let listado=[]
    if(localStorage.getItem("usuarios")){
    listado=JSON.parse(localStorage.getItem("usuarios")) 
    console.log (listado)

    listado.forEach(usuario => {
       if(usuario.username==data.username && usuario.password==data.password) {
        let fechaActual = new Date();
        let fechaExpiracion = new Date(fechaActual.getTime() + 3 * 60 * 60 * 1000);
    
        document.cookie = `cookie=${JSON.stringify(data)}, expires=${fechaExpiracion.toUTCString()}, path=/`;
        window.location.href = "./home.html"
        console.log (document.cookie)
        
    }
    });

}

})