function calculerFraisKilometriques(kilometres, passagers) {
    const tarifDeBase = 0.6;
    const reductionParPassager = 0.5;

    let montantTotal = kilometres * tarifDeBase;
    let montantReduction = passagers * reductionParPassager;
    let fraisTotaux = montantTotal - montantReduction;
    let prixParPassager = fraisTotaux / passagers;

    return {
        fraisTotaux: fraisTotaux.toFixed(2),
        prixParPassager: prixParPassager.toFixed(2)
    };
}

let kilometres = 100;  
let passagers = 3;   

let resultats = calculerFraisKilometriques(kilometres, passagers);
console.log("Montant total des frais: " + resultats.fraisTotaux + " €");
console.log("Prix par passager: " + resultats.prixParPassager + " €");