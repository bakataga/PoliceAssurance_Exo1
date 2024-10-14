

/* if age<25 et permis> 2 et 0accident =tarif c
age>25 et permis<2 et 0 accident =tarif c
else=false


if age<25 et permis> 2 et 1accident = tarif d
age>25 et permis<2 et 1 accident = tarif d
else=false

if age>25 et permis>2 et 0 accident=tarif b
>25 et >2 et 1 accident=tarif c
>25 et >2 et 2 accident=tarif d
=true
else=false

if contrat >1
tarif < */
let tarifD=5;
let tarifC =20;
let tarifB=30;





function tarifVieux (age,annéesPermis,nombreAccident){
            
    
    if (age>=25 && annéesPermis<=2 && nombreAccident==0)
    {return tarifD;}
    else {
        return "condition non remplies pour un tarif spécifique"

    }
    
}



function tarifJeune(age,annéesPermis,nombreAccident){

    
    if (age<=25 && annéesPermis>=2 && nombreAccident==0 )
{return tarifC;}
    if (age>=25 && annéesPermis<2 && nombreAccident==0)
  {return tarifC;}
    if (age<=25 && annéesPermis>=2 && nombreAccident==1)
    {return tarifD;}
    if (age>=25 && annéesPermis<2 && nombreAccident==1)
    {return tarifD;}
else { 
    return "condition non remplies pour un tarif spécifique" 

}
    }

function tarifAccident (age,annéesPermis,nombreAccident)
{
   
    if (age>=25 && annéesPermis>2 && nombreAccident==0)
{return tarifB }
    if(age>=25 && annéesPermis>=2 && nombreAccident==1 )
    {return tarifC }
    if (age>=25 && annéesPermis>=2 && nombreAccident==2)
    {return tarifD }
    else{
        return "condition non remplies pour un tarif spécifique"
    }
    }



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

function afficherTarif()
{

    let age = document.getElementById("age").value;
let annéesPermis = document.getElementById("anneesPermis").value;
let nombreAccident = document.getElementById("nombreAccident").value;

  
    let resultatTarifVieux = tarifVieux(age,annéesPermis,nombreAccident);
    document.getElementById("resultat").innerText+=`tarifvieux: ${resultatTarifVieux}\n`;
    let resultatTarifJeune = tarifJeune(age,annéesPermis,nombreAccident);
    document.getElementById("resultat").innerText+=`Tarif Jeune: ${resultatTarifJeune}\n`;
    let resultatTarifAccident = tarifAccident(age,annéesPermis,nombreAccident);
    document.getElementById("resultat").innerText+=`Tarif Accident: ${resultatTarifAccident}\n`;
    
}

function afficherFidelite ()
{
    let annéesContrat= document.getElementById("annéesContrat").value;
    let resultatContrat = contrat(annéesContrat);
    document.getElementById("resultatFidelite").innerText+=`contrat: ${resultatContrat}\n`;
}

 


    