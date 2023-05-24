let slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Eléments HTML à modifier //
const bannerImage = document.querySelector(".banner-img");
const bannerTitle = document.querySelector("#banner>p")

const leftArrow = document.querySelector(".arrow_left")
const rightArrow = document.querySelector(".arrow_right")

let i = 0;

// STEP 2 OPC : appeler les fonction au click sur les flèche avec eventlistener
leftArrow.addEventListener("click", previousSlide)
rightArrow.addEventListener("click", nextSlide)

// STEP 3 OPC : Ajout bullet points 

//variable dotsDiv est l'élément qui a la classe ".dots"
const dotsDiv = document.querySelector(".dots")
// Boucle for qui créer le nombres de dot en fonction du nombre d'élément dans tableau slides
for ( let i = 0; i < slides.length; i++) {
	// création des dot en créant l'élement div et en attribuant la classe ".dot" (déjà présente en css)
	const dot = document.createElement("div")
	dot.className = "dot"

	//Rattachement des div ".dot" en leurs attribuant comme parent la div ".dots" 
	// en utilisant "parent.appendChild(enfant)""
	dotsDiv.appendChild(dot)
}

	//Mise en place de la dot selecte en rajoutant la classe avec classList.add 
	// !!!!Problème ici tous séléctionné si ajout [0] les autres disparaissent !!!!!
	//problème résolus en faisant une variable qu'on peut traduire part :
	//création de la variable dotselect et qui est égal à tout les éléments qui ont la classe ".dot"
	// attribution de la classe "dot_selected" au premier élément du tableau (slides)
let dotselect = document.querySelectorAll(".dot")
dotselect[i].classList.add("dot_selected")

//Fonction qui affiche le slide et les source des images et des tag line
function showSlide() {
	bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
	bannerTitle.innerHTML = slides[i].tagLine;
}

// Function pour slide de droite à gauche sur left arrow
function previousSlide(){	
	// On supprime la classe "dot_selected" du dot actuel
	dotselect[i].classList.remove("dot_selected");
	// si i est inférieur ou égal à 0 alors on revient au dernier slide
	if (i <= 0) {
		i = slides.length - 1;
	} 
	else {
		// sinon on décrémente i
		i--			
	}	
	// On ajoute la classe "dot_selected" au nouveau dot correspondant au slide affiché
	dotselect[i].classList.add("dot_selected");
	// on appelle la fonction qui affiche le slide
	showSlide()

}

// Function pour slide de gauche à droite sur right arrow

 function nextSlide(){
	// On supprime la classe "dot_selected" du dot actuel
	dotselect[i].classList.remove("dot_selected");
	// si i est supérieur ou égal à la longueur du tableau slides alors on revient au premier slide
	if (i >= slides.length - 1) {
		i = 0
	}
	else {
		// sinon on incrémente i
		i++
	}
	// On ajoute la classe "dot_selected" au nouveau dot correspondant au slide affiché
	dotselect[i].classList.add("dot_selected");
	// on appelle la fonction qui affiche le slide
	showSlide()
}
