const juegos = [
    {
      categoria: "juegos de mesa",
      juegos: ["monopoly", "ajedrez", "damas"],
    },
    {
      categoria: "juegos de cartas",
      juegos: ["poker", "uno", "baraja"],
    },
    {
      categoria: "juegos de video",
      juegos: ["fortnite", "call of duty", "fifa"],
    },
  ];
  
  let string;
  
  for (let juego of juegos) {
    for(let propiedad in juego){
      if (juego[propiedad] == "juegos") {
        for(let valor of juego[propiedad]){
          console.log(valor)
        }
    }
}

  }
  
    
          