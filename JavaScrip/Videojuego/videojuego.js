// Clase base para los personajes
// Define atributos y métodos comunes para todos los personajes del juego.
class Personaje {
    /**
     * Constructor de la clase Personaje.
     * @param {string} nombre - Nombre del personaje.
     * @param {number} vida - Puntos de vida del personaje.
     * @param {number} ataque - Poder de ataque del personaje.
     * @param {number} defensa - Poder de defensa del personaje.
     * @param {number} velocidad - Velocidad del personaje (determina el orden de ataque).
     */
  constructor(nombre, vida, ataque, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    }

    /**
     * Método que muestra un mensaje de presentación en consola.
     */
  saludar() {
    console.log(`¡Soy ${this.nombre} y estoy listo para la batalla!`);
    }

    /**
   * Método que calcula el daño recibido por un ataque y permite la defensa.
   * @param {Personaje} atacante - Personaje que realiza el ataque.
   */
  calcularDanio(atacante) {
    const ataqueReal = Math.floor(Math.random() * atacante.ataque) + 1; // Asegura daño mínimo de 1
    const defensaReal = Math.floor(Math.random() * this.defensa);
    const danio = Math.max(ataqueReal - defensaReal, 1); // Evita daño cero

    this.vida -= danio;
    console.log(`⚔ ${atacante.nombre} ataca a ${this.nombre}, causando ${danio} de daño.`);

  if (this.vida <= 0) {
        this.vida = 0;
        console.log(`☠ ${this.nombre} ha muerto.`);
    } else {
        this.defender(atacante);
    }
   }

    /**
  * Método que permite al personaje defenderse reduciendo el daño recibido.
  * @param {Personaje} atacante - Personaje que ataca y contra el cual se defiende.
  */
  defender(atacante) {
    const defensaReal = Math.floor(Math.random() * this.defensa);
    const danioReducido = Math.max(defensaReal, 1); // Evita reducción a 0
    console.log(`🛡 ${this.nombre} se defiende y reduce el daño en ${danioReducido}.`);

    atacante.vida -= danioReducido; // Se devuelve parte del daño como contraataque
    if (atacante.vida <= 0) {
        atacante.vida = 0;
        console.log(`☠ ${atacante.nombre} ha muerto.`);
    }
  }
}

// Clases específicas con métodos de ataque
class Mago extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, hechizos) {
    super(nombre, vida, ataque, defensa, velocidad);
    this.hechizos = hechizos; // Lista de hechizos disponibles
    }

    /**
  * Método que lanza un hechizo contra un enemigo.
  * @param {Personaje} objetivo - Personaje que recibe el ataque.
  */
  lanzarHechizo(objetivo) {
    const hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
    const danio = Math.max(hechizo.daño, 1);
    objetivo.vida -= danio;

    console.log(`🔥 ${this.nombre} lanza ${hechizo.nombre} contra ${objetivo.nombre}, causando ${danio} de daño.`);

    if (objetivo.vida <= 0) {
        objetivo.vida = 0;
        console.log(`☠ ${objetivo.nombre} ha muerto.`);
    } else {
        objetivo.defender(this);
    }
  }
}

class Guerrero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, armas) {
    super(nombre, vida, ataque, defensa, velocidad);
    this.armas = armas; // Lista de armas disponibles
  }

  /**
   * Método que ataca a otro personaje con un arma.
   * @param {Personaje} objetivo - Personaje que recibe el ataque.
   */
  atacarConArma(objetivo) {
    const arma = this.armas[Math.floor(Math.random() * this.armas.length)];
    const danio = Math.max(arma.daño, 1);
    objetivo.vida -= danio;

    console.log(`⚔ ${this.nombre} ataca con ${arma.nombre} a ${objetivo.nombre}, causando ${danio} de daño.`);

    if (objetivo.vida <= 0) {
        objetivo.vida = 0;
        console.log(`☠ ${objetivo.nombre} ha muerto.`);
    } else {
        objetivo.defender(this);
    }
  }
}

class Arquero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, flechas) {
    super(nombre, vida, ataque, defensa, velocidad);
    this.flechas = flechas; // Lista de tipos de flechas
  }

  /**
   * Método que dispara una flecha contra un enemigo.
   * @param {Personaje} objetivo - Personaje que recibe el ataque.
   */
  dispararFlecha(objetivo) {
    const ataqueReal = Math.floor(Math.random() * this.ataque) + 1;
    const defensaReal = Math.floor(Math.random() * objetivo.defensa);
    const danio = Math.max(ataqueReal - defensaReal, 1);

    objetivo.vida -= danio;
    console.log(`🏹 ${this.nombre} dispara una flecha a ${objetivo.nombre}, causando ${danio} de daño.`);

    if (objetivo.vida <= 0) {
        objetivo.vida = 0;
        console.log(`☠ ${objetivo.nombre} ha muerto.`);
    } else {
        objetivo.defender(this);
    }
  }
}

// Creación de personajes (constante global)
const personajes = [
  new Mago("Hermione", 100, 20, 10, 5, [{ nombre: "Fuego", daño: 50 }, { nombre: "Rayo", daño: 40 }]),
  new Mago("Albus", 110, 25, 15, 6, [{ nombre: "Hielo", daño: 35 }, { nombre: "Oscuridad", daño: 45 }]),
  new Guerrero("Hercules", 120, 30, 20, 4, [{ nombre: "Espada", daño: 30 }, { nombre: "Hacha", daño: 40 }]),
  new Guerrero("Aquiles", 130, 35, 25, 5, [{ nombre: "Mazo", daño: 25 }, { nombre: "Daga", daño: 20 }]),
  new Arquero("Merida", 90, 25, 15, 7, ["Flecha rápida", "Flecha explosiva"])
];

// Simulación de la batalla por rondas
let ronda = 1;
while (personajes.filter(p => p.vida > 0).length > 1) {
  console.log(`\n=== RONDA ${ronda} ===`);

  personajes.forEach(p => {
    p.orden = Math.random() * p.velocidad;
    console.log(`⏩ ${p.nombre} tiene velocidad aleatoria ${p.orden.toFixed(2)}`);
  });

  personajes.sort((a, b) => b.orden - a.orden);

  let atacantes = new Set();
  for (let atacante of personajes) {
    if (atacante.vida <= 0 || atacantes.has(atacante)) continue;
    const objetivo = personajes.find(p => p !== atacante && p.vida > 0);
    if (!objetivo) continue;

    atacantes.add(atacante);
    if (atacante instanceof Mago) atacante.lanzarHechizo(objetivo);
    else if (atacante instanceof Guerrero) atacante.atacarConArma(objetivo);
    else if (atacante instanceof Arquero) atacante.dispararFlecha(objetivo);
    else atacante.calcularDanio(objetivo);
  }

  console.log("\n📜 ESTADO DE LOS PERSONAJES:");
  personajes.forEach(p => p.vida > 0 && console.log(`💖 ${p.nombre}: ${p.vida} de vida restante`));

  ronda++;
}

const ganador = personajes.find(p => p.vida > 0);
console.log(`\n🏆 ¡${ganador.nombre} ha ganado la batalla!`);

