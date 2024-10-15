function triABulles(liste) {
    let n = liste.length;
    let echange;
/* boucle do-while pour continuer à trier 
jusqu'à ce qu'aucun échange ne soit fait. */
    do {
        echange = false;
        for (let i = 0; i < n - 1; i++) {
            if (liste[i] > liste[i + 1])
                /* si l'element i est plus 
            grand que l'element i+1 on echange */ {
                /*  Échange des éléments */
                let echangeTemporaire = liste[i];
                liste[i] = liste[i + 1];
                liste[i + 1] = echangeTemporaire;
                echange = true;
            }
        }
        n--; /* Réduire la plage de la 
        boucle car l'élément le plus grand 
        est déjà à sa place */
    } while (echange);

    return liste;
}


let maListe = [64, 34, 25, 12, 22, 11, 90];
console.log("Liste triée :", triABulles(maListe));