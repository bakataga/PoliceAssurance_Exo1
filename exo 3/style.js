function calculerPrixPhotocopies(n) {
    let prix = 0;

    if (n <= 10) {
        prix = n * 0.10;
    } else if (n <= 30) {
        prix = (10 * 0.10) + ((n - 10) * 0.09);
    } else {
        prix = (10 * 0.10) + (20 * 0.09) + ((n - 30) * 0.08);
    }

    return prix.toFixed(2) + " €";
}/* tofixed(2) formate le nombre en monetaire 2 
chiffres apres la virgule!!! */