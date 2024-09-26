// import { Croix, imageCroix,randomImagesJoueurs,tabImagesJoueurs } from "./imagesJoueurs.js";

export class Joueurs {
   constructor(imgJoueur, name, imgCroix) {
      this.imgJoueur = imgJoueur;
      this.name = name;
      this.imgCroix = imgCroix;
   }
   creerElementDOM() {
      const containerCreateJoueur = document.createElement("div");
      containerCreateJoueur.classList.add("container-joueur");
      
      const imgElement = document.createElement("img");
      imgElement.src = this.imgJoueur;
      imgElement.alt = this.name;

      const pNameJoueurs = document.createElement("p");
      pNameJoueurs.textContent = this.name;
      const imgCroixElement = document.createElement("img");
      //creation de la croix mais je vais le faire dans le fichier images.js
      imgCroixElement.src = this.imgCroix;
      imgCroixElement.alt = "Supprimer";
      imgCroixElement.classList.add("img-croix");
      imgCroixElement.addEventListener("click", function () {
         containerCreateJoueur.remove();
      });
      containerCreateJoueur.appendChild(imgElement);
      containerCreateJoueur.appendChild(pNameJoueurs);
      containerCreateJoueur.appendChild(imgCroixElement);
      return containerCreateJoueur;
   }
}