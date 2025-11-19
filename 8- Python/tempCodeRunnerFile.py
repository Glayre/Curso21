import time #se importa la libreria de tiempo
import os #se importa la libreria de sistema operativo
import re #se importa la libreria de expresiones regulares

# Esto es un comentario
"""
  Este es un comentario
  multilínea
"""
#Variables
hola = "Hola Mundo"
#Tipos de datos
tipo_string = "Esto es un string"
tipo_int = 42
tipo_float = 3.14
tipo_bool = True
tipo_none = None
tipo_list = [1, 2, 3, "cuatro"] #A diferencia de Javascript, se llama lista
tipo_tuple = (1, 2, 3)  # La tupla es un array constante
# El motivo por el cual se llama lista es porque puede contener elementos de diferentes tipos de datos.
tipo_dict = {"clave": "valor", "edad": 30} #los diccionarios no pueden tener metodos

#En python, no puedes mezclar distintos tipos de datos
#tipo_string = 2 #No es estricto con los tipos de datos
#resultado = tipo_int + tipo_string #Daria error
#Print es la funcion que utilizamos en python para imprimir mensajes en consola
#print(resultado)
print(tipo_string)

#Operadores de asignacion
"""
  Los operadores de asignación se utilizan para asignar valores a las variables.
  En Python, el operador de asignación es el signo igual (=).

  - tipo_variable = valor
  - tipo_variable += valor
  - tipo_variable -= valor
  - tipo_variable *= valor
  - tipo_variable /= valor
  - tipo_variable //= valor es division entera
  - tipo_variable **= valor
  - tipo_variable %= valor
"""

"""
  Operadores aritméticos
  - tipo_variable + valor
  - tipo_variable - valor
  - tipo_variable * valor
  - tipo_variable / valor
  - tipo_variable // valor siempre redondea hacia abajo
  - tipo_variable ** valor
  - tipo_variable % valor
"""

"""
  Operadores de comparación
  - tipo_variable == valor
  - tipo_variable != valor
  - tipo_variable > valor
  - tipo_variable < valor
  - tipo_variable >= valor
  - tipo_variable <= valor
"""

"""
  Operadores logicos
  - tipo_variable and valor
  - tipo_variable or valor
  - not tipo_variable
"""

#Input para pedir informacion al usuario
mensaje = input("Por favor ingresa un mensaje: ")
print("El mensaje ingresado es: " + mensaje)

#Concatenacion de strings
nombre = "Juan"
apellido = "Rodriguez"
nombre_completo = nombre + " " + apellido
print("El nombre completo es: " + nombre_completo)

#F string
print(f"El nombre completo es: {nombre_completo}")

#Condicionales
edad = 18
if(edad < 0):
  print("La edad no puede ser negativa")
elif(edad < 18):
  print("Eres menor de edad")
else:
  print("Eres mayor de edad")

#Operador ternario
mensaje = "Eres menor de edad" if edad < 18 else "Eres mayor de edad"
print(mensaje)

#Funcion sin parametros
def saludar():
  print("Hola, bienvenido a la sección de Python")

saludar()

#funcion con parametros
def saludar_persona(nombre = "Juan"):
  print(f"Hola, {nombre}. Bienvenido a la sección de Python")

saludar_persona("Juan")
