function rollDice() {
    // uso del math.floor() para redondear los decimales hacia abajo y que no aparezcan los decimales.
    // uso del math.random para que imprima numeros aleatorios que por defecto es entre 0 y 1(excluido)
    // se multiplica *6 y se suma 1 para que salgan numeros random desde el 1 al 6
    const resultado = Math.floor(Math.random() * 6) + 1;
    console.log(`El resultado del dado es un: ${resultado}`);
  }
rollDice()