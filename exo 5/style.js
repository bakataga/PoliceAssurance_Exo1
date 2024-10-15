function afficherEtoiles() {
    
    let etoiles = "";
    
    
    
for (let i = 9; i >= 1; i--) {
    
for (let j = 1; j <= i; j++) {
          
    etoiles += "* ";
        }
    etoiles += "\n";
    }
   
   
    console.log(etoiles);

console.log(etoiles);
console.log(etoiles);
console.log(etoiles);

}
afficherEtoiles();