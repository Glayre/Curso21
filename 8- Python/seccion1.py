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

#Funciones con retorno
def sumar(a, b):
  return a + b

print(f"La suma de 5 y 3 es: {sumar(5, 3)}")

#Loops
#Bucle for
carros = ["toyota", "chevrolet", "fiat", "bentley", "BMW"]
for carro in carros:
  print(f"El carro es: {carro}")

for i in range(5):
  print(f"El número es: {i}")

#while
contador = 0
while contador < 5:
  print(f"El contador es: {contador}")
  contador += 1

"""
  En python tambien existe el Break por si quieres salir del bucle antes de que termine
"""

#Funciones de tiempo
tiempo_inicio = time.time()
# Simulamos un proceso que toma tiempo
time.sleep(2)
tiempo_fin = time.time()
print(f"El proceso tardó {tiempo_fin - tiempo_inicio} segundos.")

# Clases
class Coche:
  def __init__(self, marca, modelo):
    self.marca = marca
    self.modelo = modelo

  def mostrar_info(self):
    print(f"Marca: {self.marca}, Modelo: {self.modelo}")

mi_coche = Coche("Toyota", "Corolla")
mi_coche.mostrar_info() 

#try/except es lo mismo try/catch

try:
  nombre = "Juan"
  edad = 20
  info = nombre + edad
  print(info)
except:
  print("Hubo algun error")

#Manejo de archivos
"""
  w = write
  r = read
  a = append
  x = create
"""
archivo = open("archivo.txt", "w")  # Abrir un archivo en modo escritura
archivo.write("Hola, este es un archivo de texto.\n")
archivo.close()  # Cerrar el archivo

archivo = open("archivo.txt", "a")  # Abrir el archivo en modo append
archivo.write("Hola, este es un nuevo texto.\n")
archivo.close()  # Cerrar el archivo

archivo = open("archivo.txt", "r")  # Abrir el archivo en modo lectura
#leer el archivo linea por linea
for linea in archivo:
  print(linea)

archivo.close()  # Cerrar el archivo

#eliminar el archivo
os.remove("archivo.txt")

correo = "juan.rodriguez@example.com"

#validar correo con regex

regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
if re.match(regex, correo):
  print("El correo es válido")
else:
  print("El correo no es válido")