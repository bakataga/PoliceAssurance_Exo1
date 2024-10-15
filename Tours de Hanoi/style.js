/* 
FONCTION RECURSIVE
Principe de base/
-Condition de base : C'est la condition qui arrête 
la récursion. Sans elle, 
la fonction s'appellerait à l'infini.

-Appel récursif : La fonction s'appelle elle-même 
avec des paramètres modifiés 
pour progresser vers la condition de base. */

function toursDeHanoi(n, source, auxiliaire, destination) {
    if (n === 1) {
        console.log(`Déplacer le disque 1 de ${source} à ${destination}`);
        return;
    }
    // Déplacer n-1 disques de la source à l'auxiliaire
    toursDeHanoi(n - 1, source, destination, auxiliaire);
    // Déplacer le disque restant de la source à la destination
    console.log(`Déplacer le disque ${n} de ${source} à ${destination}`);
    // Déplacer n-1 disques de l'auxiliaire à la destination
    toursDeHanoi(n - 1, auxiliaire, source, destination);
}console.log(`Déplacer le disque ${n} de ${auxiliaire} à ${source}`);

const nombreDeDisques = 3;
toursDeHanoi(nombreDeDisques, 'A', 'B', 'C');