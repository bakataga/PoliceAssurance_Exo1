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
function Hanoi(n, source, auxiliaire, destination) {
    
    
    if (n === 0) {
        
        return n;
    }
    // Déplacer n-1 disques de la source à l'auxiliaire
    Hanoi(n - 1, source, auxiliaire, destination);
    // Déplacer le disque restant de la source à la destination
    deplacerDisque(n,source,destination)
    // Déplacer n-1 disques de l'auxiliaire à la destination
   Hanoi(n - 1, auxiliaire, destination, source);
}


Hanoi(n, "A", "C", "B");

/* console.log(`Déplacer le disque ${n} de ${source} à ${destination}`); */

function deplacerDisque(n, source, destination){

console.log(`Déplacer le disque ${n} de ${source} à ${destination}`)

}