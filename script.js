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
