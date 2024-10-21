const tableau = [
    { nom: "Alice", note: 85 },
    { nom: "benjamin", note: 92 },
    { nom: "Claire", note: 78 },
    { nom: "david", note: 88 },
    { nom: "Emma", note: 95 },
    { nom: "fabien", note: 67 },
    { nom: "Gabriel", note: 90 },
    { nom: "helene", note: 73 },
    { nom: "Isabelle", note: 82 },
    { nom: "jacques", note: 76 },
    { nom: "Kevin", note: 89 },
    { nom: "laura", note: 91 },
    { nom: "Marc", note: 84 },
    { nom: "nathalie", note: 79 },
    { nom: "Olivier", note: 87 },
    { nom: "pierre", note: 93 },
    { nom: "Quentin", note: 80 },
    { nom: "roxane", note: 77 },
    { nom: "Sophie", note: 94 },
    { nom: "thomas", note: 86 },
    { nom: "Ulysse", note: 81 },
    { nom: "valerie", note: 75 },
    { nom: "William", note: 83 },
    { nom: "xavier", note: 70 },
    { nom: "Yann", note: 88 },
    { nom: "zoe", note: 92 },
    { nom: "Adrien", note: 85 },
    { nom: "brigitte", note: 78 },
    { nom: "Camille", note: 89 },
    { nom: "damien", note: 91 },
    { nom: "Elise", note: 87 },
    { nom: "françois", note: 76 },
    { nom: "Gaëlle", note: 84 },
    { nom: "hugo", note: 93 },
    { nom: "Ingrid", note: 79 },
    { nom: "julien", note: 88 },
    { nom: "Karine", note: 82 },
    { nom: "lucas", note: 90 },
    { nom: "Mathilde", note: 95 },
    { nom: "nicolas", note: 77 },
    { nom: "Océane", note: 86 },
    { nom: "paul", note: 80 },
    { nom: "Quentin", note: 83 },
    { nom: "rachel", note: 75 },
    { nom: "Samuel", note: 92 },
    { nom: "thibault", note: 89 },
    { nom: "Ursula", note: 78 },
    { nom: "vincent", note: 91 },
    { nom: "Wendy", note: 87 },
    { nom: "xena", note: 76 },
    { nom: "Yasmine", note: 84 },
    { nom: "zacharie", note: 93 },
    { nom: "Amélie", note: 79 },
    { nom: "bruno", note: 88 },
    { nom: "Chloé", note: 82 },
    { nom: "dylan", note: 90 },
    { nom: "Estelle", note: 95 },
    { nom: "fabrice", note: 77 },
    { nom: "Géraldine", note: 86 },
    { nom: "henri", note: 80 },
    { nom: "Inès", note: 83 },
    { nom: "jean", note: 75 },
    { nom: "Kévin", note: 92 },
    { nom: "léa", note: 89 },
    { nom: "Mélanie", note: 78 },
    { nom: "nathan", note: 91 },
    { nom: "Ophélie", note: 87 },
    { nom: "patrick", note: 76 },
    { nom: "Quentin", note: 84 },
    { nom: "rémi", note: 93 },
    { nom: "Sarah", note: 79 },
    { nom: "théo", note: 88 },
    { nom: "Ugo", note: 82 },
    { nom: "valentin", note: 90 },
    { nom: "Wendy", note: 95 },
    { nom: "xavier", note: 77 },
    { nom: "Yohan", note: 86 },
    { nom: "zoé", note: 80 },
    { nom: "Antoine", note: 83 },
    { nom: "bernadette", note: 75 },
    { nom: "Cédric", note: 92 },
    { nom: "diane", note: 89 },
    { nom: "Élodie", note: 78 },
    { nom: "franck", note: 91 },
    { nom: "Guillaume", note: 87 },
    { nom: "hélène", note: 76 },
    { nom: "Isabelle", note: 84 },
    { nom: "jules", note: 93 },
    { nom: "Kevin", note: 79 },
    { nom: "laetitia", note: 88 },
    { nom: "Maxime", note: 82 },
    { nom: "nadine", note: 90 },
    { nom: "Olivier", note: 95 },
    { nom: "pascal", note: 77 },
    { nom: "Quentin", note: 86 },
    { nom: "romain", note: 80 },
    { nom: "Stéphanie", note: 83 },
    { nom: "thomas", note: 75 },
    { nom: "Ulysse", note: 92 },
    { nom: "valérie", note: 89 }
];

let minuscule=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let majuscule=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let majaccent=[ "Á","","","","É", "Í", "Ó", "Ú"," Ý", "À", "È", "Ì", "Ò", "Ù","Â", "Ê", "Î"," Ô", "Û","Ä", "Ë", "Ï", "Ö", "Ü", "Ÿ","Ç","Ñ", "Õ", "Ã"]
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

function trierNomAlpha(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        let temp = tableau[i];
        let j = i - 1;
        while (j >= 0 &&  compareStrings(tableau[j].nom, temp.nom) > 0) {
            tableau[j + 1] = tableau[j];
            j--;
        }
        tableau[j + 1] = temp;
    }
    return tableau;
}

let NomTri = trierNomAlpha(tableau);
console.log(NomTri);