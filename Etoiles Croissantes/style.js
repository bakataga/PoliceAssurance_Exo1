function afficherEtoiles() {
    
    let etoiles = "";
    
    
    
for (let i = 1; i <=10; i++) {
    
for (let j = 1; j <= i; j++) {
          
    etoiles += "* ";
        }
    etoiles += "\n";
    }
   
   
    console.log(etoiles);


}
afficherEtoiles();