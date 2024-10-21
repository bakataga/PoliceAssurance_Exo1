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
            /* variable i , le compteur part a 0
            tant que i est inferieur a repetition donc 8 la boucle continue 
            i++ a chaque iteration de la boucle on rajoute 1*/
            chaineFinale +="ah";
        }
   
   return chaineFinale;
    }

console.log(chaineFinale);