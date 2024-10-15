function afficherEtoiles() {
    for (let i = 1; i <=10; i++) { 
        // Commence à 9 et décrémente jusqu'à 1
        let ligne = "* ".repeat(i); 
        // Répète l'étoile avec un espace i fois
        console.log(ligne.trim()); 
        // Affiche la ligne, en enlevant l'espace final avec trim
    }
}


afficherEtoiles();