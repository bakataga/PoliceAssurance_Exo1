function afficherEtoiles() {
    
    let etoiles = ""; /* declaration vide pour declarer apres de maniere dynamique */
 /* déclarer une variable etoiles qui est initialement une chaîne vide. Cette variable va stocker les étoiles à afficher. */   
    
    
for (let i = 1; i <=10; i++) {
  /* Cette boucle va de 1 à 10, ce qui signifie qu’elle va s’exécuter 10 fois. La variable i représente le nombre de lignes d’étoiles. */  
for (let j = 1; j <= i; j++) {
   /* Cette boucle s’exécute à chaque itération de la boucle extérieure. La variable j va de 1 à i, ce qui signifie qu’elle ajoute i étoiles à chaque ligne. */       
    etoiles += "* ";/* permet d'ajouter une etoile a chaque iteration de la boucle */
        }/* À chaque itération de la boucle intérieure, une étoile suivie d’un espace est ajoutée à la chaîne etoiles. */
    etoiles += "\n";
    }/* va a la ligne */
   
   
    console.log(etoiles);


}
afficherEtoiles();