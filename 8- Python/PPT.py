import random
"""
  Ejecuta el juego de Piedra, Papel o Tijera.
"""
def jugar():
  opciones = ["Piedra", "Papel", "Tijera"]
  opcion = pedir_opcion(opciones)
  opcion_pc = random.choice(opciones)
  determinar_resultado(opcion, opcion_pc)

"""
  Pide la opción al jugador.
  Return la opción elegida.
"""
def pedir_opcion(opciones):
  while True:
    try:
      opcion = int(input("1. Piedra 2. Papel 3. Tijera "))
      if opcion in [1, 2, 3]:
        return opciones[opcion - 1]
      else:
        print("Opción inválida. Intenta de nuevo.")
    except ValueError:
      print("Entrada no válida. Por favor ingresa un número.")

"""
  Determina el resultado del juego.
"""
def determinar_resultado(opcion_jugador, opcion_pc):
  print(f"Tu opción: {opcion_jugador}, Opción de la PC: {opcion_pc}")
  if opcion_jugador == opcion_pc:
    print("Empate!")
  elif (opcion_jugador == "Piedra" and opcion_pc == "Tijera") or (opcion_jugador == "Papel" and opcion_pc == "Piedra") or (opcion_jugador == "Tijera" and opcion_pc == "Papel"):
    print("¡Ganaste!")
  else:
    print("Perdiste.")

while True:
  jugar()

"""
  Realiza un TO DO List en Python. Donde puedas agregar, eliminar y ver tareas.
"""