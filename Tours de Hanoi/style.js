/* 
FONCTION RECURSIVE
Principe de base/
-Condition de base : C'est la condition qui arrête 
la récursion. Sans elle, 
la fonction s'appellerait à l'infini.

-Appel récursif : La fonction s'appelle elle-même 
avec des paramètres modifiés 
pour progresser vers la condition de base. */
let n=3;
function Hanoi(n, A, B, C) {
    
    
    if (n === 0) {
        
        return n;
    }
    // Déplacer n-1 disques de la source à l'auxiliaire
    Hanoi(n - 1, A, C, B);
    // Déplacer le disque restant de la source à la destination
    deplacerDisque(n,A,C)  /* au lieu de mettre un console. log je cree une fonction */
    // Déplacer n-1 disques de l'auxiliaire à la destination
   Hanoi(n - 1, B, A, C);
}


Hanoi(n, "A", "C", "B");

/* console.log(`Déplacer le disque ${n} de ${source} à ${destination}`); */

function deplacerDisque(n, source, destination){

console.log(`Déplacer le disque ${n} de ${source} à ${destination}`)

}