function valider() {
    var chaine1 = document.getElementById("string-input").value;
    var caract = document.getElementById("char-input").value;

    if (chaine1.length === 0) {
        alert("Veuillez entrer au moins un caractère dans la chaîne.");
        return;
    }

    if (caract.length !== 1) {
        alert("Veuillez entrer un seul caractère.");
        return;
    }

    alert("Longueur de la chaîne : " + chaine1.length +
          "\nValeur en majuscule : " + chaine1.toUpperCase() +
          "\nNombre de fois où on y rencontre le caractère : " + occurrences(chaine1, caract));
}

function occurrences(chaine, caract) {
    var count = 0;
    for (var i = 0; i < chaine.length; i++) {
        if (chaine.charAt(i) === caract) {
            count++;
        }
    }
    return count;
}

function rechercher() {
    var chaine1 = document.getElementById("string-input").value;
    var chaine2 = document.getElementById("search-char").value;

    if (chaine1.length === 0) {
        alert("Veuillez entrer au moins un caractère dans la première chaîne.");
        return;
    }

    if (chaine2.length < 2) {
        alert("Veuillez entrer au moins deux caractères dans la deuxième chaîne.");
        return;
    }

    var occurrencesCount = countOccurrences(chaine1, chaine2);

    alert("Nombre de fois où l'on rencontre la deuxième chaîne dans la première : " + occurrencesCount);
}

function countOccurrences(mainString, subString) {
    var count = 0;
    var position = 0;

    while ((position = mainString.indexOf(subString, position)) !== -1) {
        count++;
        position += subString.length; 
    }

    return count;
}
