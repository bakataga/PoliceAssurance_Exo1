function trouverPalindrome( mot){
    mot=mot.toLowerCase().replace(/\s/g, "");
let motInverse =mot.split("").reverse().join("");
if (mot===motInverse){
    return true;
} else{
    return false;
}

}

let motUtilisateur = prompt ("entrez un mot");
console.log(trouverPalindrome(motUtilisateur));