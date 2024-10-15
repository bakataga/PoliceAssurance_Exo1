/* C = contribuable
PI = paie impots
NI = ne paie pas impots */


let sexe="H";
let age= 40;


function PI(sexe, age){
    let payeImpot="Vous payez des impots";
    let NoImpot="vous ne payez pas d'impots";
    if ((sexe=="H" && age>=18) || (sexe=="F" && age>18 && age<35))
    {
        return payeImpot
    }
else


{return NoImpot}
}


let quiPayeDesImpots= PI(sexe,age);
console.log(quiPayeDesImpots);
/*H= tximpot=10% de age
  F<25 ans = tximpot= 8% de age
  f>=25 ans = tx impots =5% age  */

  function calculTxImpot(sexe, age){

    let ImpotH= age *0.10;
    let ImpotFmoinsde25= age* 0.8;
    let ImpotFplusde25= age*0.5;
    if (sexe="H")
    {return ImpotH }
    else if (sexe="F" && age<25 )
    {return ImpotFmoinsde25}
    else if ( sexe="F" && age>=25)
    {return ImpotFplusde25}
  }
  let resultat=calculTxImpot(sexe,age);
  console.log("votre taux d'aimposition est de" + resultat + "%")