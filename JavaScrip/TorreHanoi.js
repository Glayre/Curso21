    
   //** Torres de Hanoi*/
   function hanoi(n, from, to, aux) {
    if (n === 1) {
        console.log(`Mover disco de ${from} a ${to}`);
        return;
    }
    hanoi(n - 1, from, aux, to);
    console.log(`Mover disco de ${from} a ${to}`);
    hanoi(n - 1, aux, to, from);
}

function startHanoi() {
    const numDiscos = 3; // Puedes modificar el número de discos
    hanoi(numDiscos, 'A', 'C', 'B');
}