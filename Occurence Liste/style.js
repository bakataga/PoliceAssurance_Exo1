

/* dans une liste = elements x et t 
trouver combien de fois x apparait dans la liste  */
let liste=[];
let t = [5, 3, 7, 5, 9, 1, 5];
let x=5;


function trouverOccurrences() {
   /* dans le tableau on passe la boucle opur lister */
    for (i = 0; i <t.length; i++) {
        if (t[i] === x) {/* l'élément à l'indice i dans la liste t est égal à x */
            liste.push(i);
        }  /*  avec push ajoute i a la liste */
    }
    return liste;
}

console.log(trouverOccurrences());
trouverOccurrences();


