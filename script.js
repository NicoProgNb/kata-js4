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

// Aidé via IA
qteJoueur = +selectQteJoueur.value
// 

txtNbAllumettes.innerText = resteAllumette

// Section partie
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

// Conditions à respecter
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
    txtStatutJoueur.innerText = `Joueur ${joueurActuel}`
}
inputChoixJoueur.value = 1 
}

btnValider.addEventListener("click", jouerTour)

// Recommencer
const reinitialiserJeu = () => {
    resteAllumette = 50
    joueurActuel = 1
    txtMessage.innerText = ""
    inputChoixJoueur.value = 1

    afficher(selection)
}

btnRecommencer.addEventListener("click", reinitialiserJeu)
