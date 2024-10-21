function trouverPalindrome( mot){
    mot=mot.toLowerCase().replace(/\s/g, "");
    /* mot.toLowerCse convertit en minuscule
    .replace est une methode pour remplacer des parties de la chaine
    ici /\s est un argument qui enleve tout les espaces et /g est l'argument qui dit que ca doit etre fait sur toute la chaine
    et "" indique tout les espaces blancs doivent etre supprimés */
let motInverse =mot.split("").reverse().join("");
/* la methode split("") divise la chaine de mot en un tableau de caractere
si mot est "bonjour" mot.spli devient ["b","o","n"etc] */

/* .reverse() inverse l'ordre des elements dans le tableau */
/* .join("")combine tout les elements du tableau en une seule chaine */
if (mot===motInverse){
    return true;
} else{
    return false;
}

}

let motUtilisateur = prompt ("entrez un mot");
console.log(trouverPalindrome(motUtilisateur));

let n=t.length
let i=0
let ok =true
while(i<n/2 && ok===true){
    if (t [i] !==t[n-1-i])
        ok=false;
    
    }
    else{}