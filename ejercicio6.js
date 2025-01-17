// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
// Retorna el array resultante.


const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

function swap(array, idx1, idx2){
  let text = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = text;
}
swap(fantasticFour, 0, 3)
console.log(fantasticFour);

