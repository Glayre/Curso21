function validar_datos() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let fecha_nacimiento = document.getElementById("fecha").value;
  let password = document.getElementById("password").value;

  if (
    nombre === "" ||
    email === "" ||
    telefono === "" ||
    fecha_nacimiento === "" ||
    password === ""
  ) {
    return {
      valido: false,
      mensaje: "Todos los campos son obligatorios",
    };
  }

  /*
    Las expresiones regulares sirven para validar los datos ingresados por el usuario.
    Siempre tienen un patron y modificadores.
    El patron es la forma en la que queremos que el dato sea ingresado.
    Los modificadores son las opciones que le damos a la expresion regular.

    Los patrones pueden tener:
    ^ -> Indica el inicio de la cadena
    $ -> Indica el final de la cadena
    \d -> Indica un digito
    \w -> Indica una letra o un digito
    \s -> Indica un espacio
    [] -> Indica un conjunto de caracteres
    [a-z] -> Indica una letra minuscula
    [A-Z] -> Indica una letra mayuscula
    [0-9] -> Indica un digito
    [a-zA-Z] -> Indica una letra minuscula o mayuscula
    {n, m} -> Indica que el patron se repite de n a m veces
    + -> Indica que el patron se repite una o mas veces
    * -> Indica que el patron se repite cero o mas veces
    ? -> Indica que el patron se repite cero o una vez
    () -> Indica un grupo de caracteres
    | -> Indica una o otra opcion
    ?= -> Indica una busqueda positiva
    ?! -> Indica una busqueda negativa
    \ -> Indica un caracter especial
    . -> Indica cualquier caracter
    \d{3} -> Indica que el patron se repite 3 veces (numeros)
    \w{3} -> Indica que el patron se repite 3 veces (letras o digitos)
    \s{3} -> Indica que el patron se repite 3 veces (espacios)
    \w{3,} -> Indica que el patron se repite 3 o mas veces (letras o digitos)

    los modificadores son:
    i -> Indica que la busqueda no es sensible a mayusculas o minusculas
    g -> Indica que la busqueda es global
    m -> Indica que la busqueda es multilinea
    y -> Indica que la busqueda es de una sola linea
    u -> Indica que la busqueda es unicode
    s -> Indica que la busqueda es de una sola linea
  */
  let resultado = {
    valido: true,
    mensajes: [],
  };

  // Validar el nombre
  let nombre_regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\'\s]+$/i;
  if (!nombre_regex.test(nombre)) {
    resultado.valido = false;
    resultado.mensajes.push("El nombre no es valido");
  }

  // Validar el email
  let email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}+$/i;
  if (!email_regex.test(email)) {
    resultado.valido = false;
    resultado.mensajes.push("El email no es valido");
  }

  // Validar el telefono
  let telefono_regex = /^\+[0-9]{10,20}$/;
  if (!telefono_regex.test(telefono)) {
    resultado.valido = false;
    resultado.mensajes.push("El telefono no es valido");
  }

  // Validar la contraseña
  let password_regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password_regex.test(password)) {
    resultado.valido = false;
    resultado.mensajes.push("La contraseña no es valida");
  }

  // En caso de que todo sea valido
  if (resultado.valido) {
    return {
      valido: true,
      mensaje: "Los datos son validos",
    };
  }

  return resultado;
}

