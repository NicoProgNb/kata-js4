let resteAllumette = 50
let joueurActuel = 1
let qteJoueur = 1

const selection = document.getElementById("selection")
const partie = document.getElementById("partie")
const fin = document.getElementById("fin")
const selectQteJoueur = document.getElementById("qte_joueur")
const btnCommencer = document.getElementById("btnCommencer")
const btnValider = document.getElementById("btnValider")
const btnRecommencer = document.getElementById("btnRecommencer")

const txtStatutJoueur = document.getElementById("statutJoueur")
const txtNbAllumettes = document.getElementById("nbAllumettes")
const txtMessage = document.getElementById("message")
const txtMessageGagnant = document.getElementById("messageGagnant")
const inputChoixJoueur = document.getElementById("choixJoueur")

// Afficher l'ecran actifs
const afficher = (ecran) => {
  selection.classList.add('cache')
  partie.classList.add('cache')
  fin.classList.add('cache')
  ecran.classList.remove('cache')
}


// Commencer la partie
btnCommencer.addEventListener("click", () => {

// On récupère la valeur du select grâce au signe +
qteJoueur = +selectQteJoueur.value

// On affiche la quantité de départ à l'écran
txtNbAllumettes.innerText = resteAllumette





afficher(partie)
if (qteJoueur === 1) {
    txtStatutJoueur.innerText = "Mode Solo"
} else {
    txtStatutJoueur.innerText = `Joueur ${joueurActuel}`
}
})

// Tour de jeu
const jouerTour = () => {
    const choix = +inputChoixJoueur.value
    txtMessage.innerText = "" 

    // Vérification des conditions
    if (isNaN(choix) || choix < 1 || choix > 6) {
        txtMessage.innerText = "Erreur : Choisissez un nombre entre 1 et 6."
        return 
    }
    if (choix > resteAllumette) {
        txtMessage.innerText = `Erreur : Il ne reste que ${resteAllumette} allumette(s).`
        return
    }

    resteAllumette -= choix
    txtNbAllumettes.innerText = resteAllumette

    // Fin de partie
    if (resteAllumette === 0) {
        afficher(fin)
        if (qteJoueur === 2) {
            txtMessageGagnant.innerText = `Le Joueur ${joueurActuel} gagne`
        } else {
            txtMessageGagnant.innerText = "J'ai plus d'allumette pour toi désolé !"
        }
        return
    }

    // 4. Alternance entre 2 joueurs)
    if (qteJoueur === 2) {
        joueurActuel = 3 - joueurActuel 
        txtStatutJoueur.innerText = `Tour du Joueur ${joueurActuel}`
    }
    inputChoixJoueur.value = 1 
}

// Recommencer
const reinitialiserJeu = () => {
    resteAllumette = 50
    joueurActuel = 1
    txtMessage.innerText = ""
    inputChoixJoueur.value = 1

    afficher(selection)
}

// Écouteurs d'événements
btnValider.addEventListener("click", jouerTour)
btnRecommencer.addEventListener("click", reinitialiserJeu)

inputChoixJoueur.addEventListener("keydown", (e) => {
    if (e.key === "Enter") jouerTour()
})