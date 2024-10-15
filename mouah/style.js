/* mouah = chaine initiale
   ah = repetitions
   
   => Parametre*/

let chaineInitiale = "mouah";
let repetitions = 8;
let chaineFinale = rajouterAh(chaineInitiale, repetitions)


   function rajouterAh(chaineInitiale, repetitions){
     /* initialise */   
    let chaineFinale= chaineInitiale
        for (let i=0; i< repetitions; i++){
            chaineFinale +="ah";
        }
   
   return chaineFinale;
    }

console.log(chaineFinale);