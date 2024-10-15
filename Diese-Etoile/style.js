function DieseEtoile(lignes) {
    let motif1 = "#*#*#*#*#*";
    let motif2 = "*#*#*#*#*#";
    
    for (let i = 0; i < lignes; i++) {
        if (i % 2 === 0) {
            console.log(motif1);
        } else {
            console.log(motif2);
        }
    }
}

console.log(DieseEtoile(6));
