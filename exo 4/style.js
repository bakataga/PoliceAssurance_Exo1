/* C = contribuable
PI = paie impots
NI = ne paie pas impots */

function PI(sexe, age){
    let payeImpot="Vous payez des impots";
    if ((sexe==H && age>=18) || (sexe==F && age>18 && age<35))
    {
        return payeImpot
    }

}

function NI (sexe,age){

    let NoImpot="Vous ne payez pas d'impots"
    if ((sexe==H && age<18)||
    (sexe==F  && age<18  &&  age>35))
        {
            return NoImpot
        }
}
console.log(NI('H', 20));
console.log(NI('F', 40));