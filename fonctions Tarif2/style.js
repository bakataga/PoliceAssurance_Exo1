

function calculTarif(age, anneesPermis, nombreAccidents) {
    let tarif = "Refusé"; /* valeur par défaut.si aucune des conditions suivantes est remplie*/

    if (age < 25 && anneesPermis < 2 &&nombreAccidents === 0) {
         {
           return tarif = "D";/* on peut modifier la valeur  */
        }
    } else if ((age < 25 && anneesPermis >= 2 && nombreAccidents === 0) || (age >= 25 && anneesPermis < 2)) {
        {/* == si les valeurs sont differentes js essaie de les 
            convertir avant de les comparer exemple 5==="5" est false car les types sont differents
            5===5 true car les valeurs et les types sont identiques
            recommandé d'utiliser ===
            let a = 0;
let b = false;

console.log(a == b);  // true, car 0 est converti en false
console.log(a === b); // false, car les types sont différents (nombre et booléen)*/
         return   tarif = "C";
        } 
    }else if (nombreAccidents === 1) {
          return  tarif = "D";
        }
    else if (age >= 25 && anneesPermis >= 2 &&nombreAccidents === 0) {
   
           return tarif = "B";
        } else if (nombreAccidents === 1) {
          return  tarif = "C";
        } else if (nombreAccidents === 2) {
           return tarif = "D";
        }
{
    return tarif;}
}
/* Appplication de la fidélité */
function contrat(annéesContrat)
{
    let tarifPreferenciel="tarif preferenciel";
    let tarifDeBase="tarif de base";
if (annéesContrat>=1)
{
    return tarifPreferenciel
}
else {
    return tarifDeBase
}
}