// Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
// Es decir, la media de volumen de todos los volumenes juntos.

const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
let sum = 0;
let contador = 0;

  for(const user of users){
    for(key in user.favoritesSounds){
      let volume = user.favoritesSounds[key].volume;
      // console.log(volume);
      sum += volume;
      contador++;
    }
  }
let mediaVolume = sum / contador;
console.log("La media de los volúmenes de las canciones es de " + mediaVolume);
