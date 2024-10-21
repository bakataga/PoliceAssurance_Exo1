/* let etudiants=[
    {etudiant:"Agathe", note:14}, 
    {etudiant:"Wlad",note:17},
    {etudiant:"Yohann",note:16},
    {etudiant:"Laureline",note:17},
    {etudiant:"Christian",note:12},
    {etudiant:"Yannick",note:19},
    {etudiant:"Kaique",note:17},
    {etudiant:"Angélique",note:18},
    {etudiant:"Dorian",note:15},
    {etudiant:"emmanuel",note:16},
    {etudiant:"Jeremy",note:13},
    {etudiant:"Sylvain",note:17},
    {etudiant:"Yann",note:15},
    {etudiant:"Amin",note:16} ];
    function trierEtudiantsAlpha(etudiants) {
      
         for (let i = 0; i < etudiants.length; i++){
         let temp = etudiants[i];
           let j=i-1;
         while (j>=0 && etudiants[j].etudiant > temp.etudiant)
            {etudiants[j+1]  = etudiants[j];
            j--;
         }
         etudiants[j+1]=temp;
        }
       return etudiants;

    }

    let etudiantsTri = trierEtudiantsAlpha(etudiants);
    console.log(etudiantsTri) */
    let etudiants=[
        {etudiant:"Agathe", note:14}, 
        {etudiant:"Wlad",note:17},
        {etudiant:"Yohann",note:16},
        {etudiant:"Laureline",note:17},
        {etudiant:"Christian",note:12},
        {etudiant:"Yannick",note:19},
        {etudiant:"Kaique",note:17},
        {etudiant:"Angélique",note:18},
        {etudiant:"Dorian",note:15},
        {etudiant:"emmanuel",note:16},
        {etudiant:"Jeremy",note:13},
        {etudiant:"Sylvain",note:17},
        {etudiant:"Yann",note:15},
        {etudiant:"Amin",note:16} ];   
/* si les minuscules sont egales aux majuscules elles seront triées de la meme maniere */
let minuscule=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let majuscule=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let majaccent=[ "Á"," É", "Í", "Ó", "Ú"," Ý", "À", "È", "Ì", "Ò", "Ù","Â", "Ê", "Î"," Ô", "Û","Ä", "Ë", "Ï", "Ö", "Ü", "Ÿ","Ç","Ñ", "Õ", "Ã"]
let minaccent=["á", "é", "í", "ó", "ú", "ý","à", "è", "ì", "ò", "ù","â", "ê", "î", "ô", "û","ä", "ë", "ï", "ö", "ü", "ÿ","ç","ñ", "õ", "ã"]
/* si le code ascii des caracteres majuscule et minuscule est egale */
/* faire en sorte que index[i=0]jusqu'a [i=26]du tableau minuscule
que i=0 minuscule corresponde avec i=0 du tableau majuscule

une fois qu'il corresponde la fonction est rappellé dans le tri du tableau*/
let correspondance=[];

/* on cree la correspondance entre les majuscule et les minuscules */


function correspondanceMinMaj() {
    for (let i = 0; i < minuscule.length; i++) {
        correspondance[minuscule[i]] = minuscule[i];
        correspondance[majuscule[i]] = minuscule[i];
        correspondance[majaccent[i]] = minuscule[i];
        correspondance[minaccent[i]] = minuscule[i];
    }
    return correspondance;

}


correspondanceMinMaj();

/* dans l'objet correspondance la lettre retourne a sa version minuscule qu'elle soit minus ou majus */
function convertToLower(letter) {
    if (correspondance[letter]) {
        return correspondance[letter];
    }
    return letter;
}
function compareStrings(str1, str2) {
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
        let char1 = convertToLower(str1[i]);
        let char2 = convertToLower(str2[i]);
        if (char1 < char2) {
            return -1;
        } else if (char1 > char2) {
            return 1;
        }
    }
    return str1.length - str2.length;
}

function trierEtudiantsAlpha(etudiants) {
    for (let i = 0; i < etudiants.length; i++) {
        let temp = etudiants[i];
        let j = i - 1;
        while (j >= 0 &&  compareStrings(etudiants[j].etudiant, temp.etudiant) > 0) {
            etudiants[j + 1] = etudiants[j];
            j--;
        }
        etudiants[j + 1] = temp;
    }
    return etudiants;
}

let etudiantsTri = trierEtudiantsAlpha(etudiants);
console.log(etudiantsTri);