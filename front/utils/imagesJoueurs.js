//tableaux des images des joueurs==============
export const tabImagesJoueurs = [
   //cemein vers les images des joueurs
   "../../src/img/utilisateur0.jpg",
   "../../src/img/utilisateur1.jpg",
   "../../src/img/utilisateur2.jpg",
   "../../src/img/utilisateur3.jpg",
   "../../src/img/utilisateur4.jpg",
   "../../src/img/utilisateur5.jpg",
   "../../src/img/utilisateur6.jpg",
   "../../src/img/utilisateur7.jpg",
   "../../src/img/utilisateur8.jpg",
   
];
//function qui retourne un index (0=>9) et donc une image aléatoire
export function randomImagesJoueurs(tabImagesJoueurs) {
   const indexAleatoire = Math.floor(Math.random() * tabImagesJoueurs.length);
   return tabImagesJoueurs[indexAleatoire];
}

//creation de la class croix===========================================
 const imagegCroix = "../../src/img/croix.png";

export class Croix {
   constructor(imgCroix) {
      this.imgCroix = imgCroix;
   }
   creerElementDOM(containerCreateJoueur) {
      const imgCroixElement = document.createElement("img");
      imgCroixElement.src = this.imgCroix;
      imgCroixElement.alt = "Supprimer";
      imgCroixElement.classList.add("img-croix");

      imgCroixElement.addEventListener("click",() => {
         containerCreateJoueur.remove();
      });

      return imgCroixElement;
   }
}