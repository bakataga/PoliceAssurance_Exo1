

function calculTarif(age, anneesPermis, nombreAccidents) {
    let tarif = "Refusé";

    if (age < 25 && anneesPermis < 2 &&nombreAccidents === 0) {
         {
           return tarif = "D";
        }
    } else if ((age < 25 && anneesPermis >= 2 && nombreAccidents === 0) || (age >= 25 && anneesPermis < 2)) {
        {
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