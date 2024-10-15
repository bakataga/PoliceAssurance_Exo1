/* filtrer une liste d'etudiants
-ceux qui ont uune note > 15
-trier les etudiants par ordre alpha
-calculer la moyenne */

let etudiants=[
    {etudiant:"Agathe", note:14}, 
    {etudiant:"wlad",note:17},
    {etudiant:"Yohann",note:16},
    {etudiant:"Laureline",note:17},
    {etudiant:"Christian",note:12},
    {etudiant:"Yannick",note:19},
    {etudiant:"Kaique",note:17},
    {etudiant:"Angélique",note:18},
    {etudiant:"Dorian",note:15},
    {etudiant:"Emmanuel",note:16},
    {etudiant:"Jeremy",note:13},
    {etudiant:"Sylvain",note:17},
    {etudiant:"Yann",note:15},
    {etudiant:"Amin",note:16} ];
/* déclaration de la fonction*/
    function trierEtudiantsAlpha(etudiants) {
        /* on va comparer un element sur toute la longueur du tableau  et on itere sur chaque element */
    /* boucle exterieure */  for (let i = 1; i < etudiants.length; i++){
         /* on stocke l'objet dans une variable */
  /* stockage temporaire */  let temp = etudiants[i];
            /* on initialise une variable avec la valeur i-1 pour commencer par l'element precedent du tableau */
 /* initialisation de la boucle interieur */let j=i-1;
/* boucle interieure: tant que j est superieur ou egal a o et que le nom de l'etudiant a l'index j est alphabetiquement plus grand que le nom de l'etudiant stocké dans temp */
         while (j>=0 && etudiants[j].etudiant.toLowerCase()>temp.etudiant.toLowerCase())
            {
           /*deplacement vers la droite on deplace l'etudiant a l'index j vers l'index j+1  */     
          etudiants[j+1]  = etudiants[j];
          /* on decremente j pour comparer temp avec l'element precedent */
          j--;
         }
         /* on place l'objet à l'index */
         etudiants[j+1]=temp;
        }
       return etudiants;
    }

    let etudiantsTri = trierEtudiantsAlpha(etudiants);
    console.log(etudiantsTri)

/* filtrer ceux qui ont au dessus de 15 */
     

    function noteMeilleur (etudiants){
        let resultat=[];
for (let i=0; i<etudiants.length;i++)
{
    
   if (etudiants[i].note >=15  )
{ resultat.push(etudiants[i]); }
}
return resultat;
    }
let EtudiantNoteSupA15= noteMeilleur (etudiants);
console.log(EtudiantNoteSupA15);


/* calculer moyenne */
function calculerMoyenne(note){
    let somme = 0;
    for (let i = 0; i < etudiants.length; i++) {
        somme += etudiants[i].note;
    }
    let moyenne = somme / etudiants.length;
    return moyenne.toFixed(1);
}

let moyenne = calculerMoyenne(etudiants);
console.log("La moyenne des notes est : " + moyenne);



