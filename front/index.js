export { Joueurs } from "./utils/joueurs.js";
export { tabImagesJoueurs, randomImagesJoueurs } from "./utils/imagesJoueurs.js";
export { Croix } from "./utils/imagesJoueurs.js";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container-players");
  const containerConfirmButton = document.getElementById("container-confirm-button");

    // Fonction pour ajouter le bouton de confirmation unique
  function ajouterBoutonConfirmation() {
 
    if (!document.querySelector(".btn-confirm-joueur")) {
      let buttonConfirmJoueurs = document.createElement("button");
      const divBtnConfirm = document.createElement("div");
      divBtnConfirm.classList.add("container-btn-confirm");

        buttonConfirmJoueurs = document.createElement("button");
        buttonConfirmJoueurs.textContent = "Confirmer";
      buttonConfirmJoueurs.classList.add("btn-confirm-joueur");
      containerConfirmButton.appendChild( buttonConfirmJoueurs);
      

        console.log("Le bouton de confirmation a été ajouté.");
      } else {
        console.log("Le bouton de confirmation existe déjà.");
        
      }
  }


  // input text-room--- Récupérer la valeur depuis localStorage lors du chargement de la page
  const storedRoom = localStorage.getItem("text-room");
  if (storedRoom) {
    document.getElementById("text-room").value = storedRoom;
  }

  // input Text-room===============================================================
  // Stocker la valeur de l'input text-room dans localStorage lors de la saisie
  const textRoomInput = document.getElementById("text-room");
  if (textRoomInput) {
    textRoomInput.addEventListener("input", function (e) {
      localStorage.setItem("text-room", e.target.value);
    });
  }

  /**
     * Cet élément est utilisé pour saisir la date de la salle.

   * 
lem   * @type {HTMLInputElement}
   */

  const dateRoomInput = document.getElementById("date-room");
  if (dateRoomInput) {
    dateRoomInput.addEventListener("input", function (e) {
      let input = e.target;
      let value = input.value.replace(/\D/g, ""); // Supprime tous les caractères non numériques
      let formattedValue = "";

      if (value.length >= 8) {
        let day = value.substr(0, 2);
        let month = value.substr(2, 2);
        let year = value.substr(4, 4);

        // Vérifiez que le jour et le mois sont valides
        if (
          parseInt(day) > 31 ||
          parseInt(day) < 1 ||
          parseInt(month) > 12 ||
          parseInt(month) < 1
        ) {
          formattedValue = ""; // Ne pas formater si les valeurs sont invalides
        } else {
          formattedValue = `${day}-${month}-${year}`;
        }
      } else {
        formattedValue = value;
      }

      // Sauvegarde la date en localStorage
      localStorage.setItem("date-room", formattedValue);
      localStorage.setItem("date-room", input.value);
    });
  }

  /**
       * Ce bouton est utilisé pour déclencher la création d'une nouvelle salle.

     * 
eme     * @type {HTMLElement}
     */

  const createRoom = document.getElementById("btn-create-room");
  if (createRoom) {
    createRoom.addEventListener("click", function (e) {
      e.preventDefault();
      const roomName = document.getElementById("name-room").value;
      const roomDate = document.getElementById("date-room").value;
      const containerRoom = document.getElementById("container-room");
      if (roomName && roomDate) {
        const dateParts = roomDate.split("-");
        const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        const roomContent = `
          <div class="container-create-room">
          <h3>Table de Poker: ${roomName}</h3>
          <p>Date: ${formattedDate}</p>
          <button id="delete-room">supprimer la table</button>
          </div>
          <input id="create-joueurs" type="text" placeholder="inscription joueur" >
          <button id="confirm-joueur">OK</button>
        `;
        containerRoom.innerHTML = roomContent;
        document.getElementById("name-room").value = ""; //vide les champs après la création de la room
        document.getElementById("date-room").value = ""; //vide les champs après la création de la room

        // Ajoutez l'écouteur d'événement pour le bouton delete-room après l'avoir inséré dans le DOM
        const deleteRoom = document.getElementById("delete-room");
        if (deleteRoom) {
          
          deleteRoom.addEventListener("click", function (e) {
            e.preventDefault();
            containerRoom.innerHTML = "";
          });
        }

       
                          
        
        const buttonConfirm = document.getElementById("confirm-joueur");
        const inputokJoueur = document.getElementById("create-joueurs")

        if (buttonConfirm) {
          buttonConfirm.addEventListener("click", function (e) {
            e.preventDefault();
            // Récupérer la valeur de l'input
            const nameJoueurInput = inputokJoueur.value;
            if (nameJoueurInput) {
              // Créer le conteneur pour le joueur
              const containerCreateJoueur = document.createElement("div");
              containerCreateJoueur.classList.add("container-joueur");
  
              // Créer l'élément p et ajouter la valeur de l'input
              const pNameJoueurs = document.createElement("p");
              pNameJoueurs.textContent = nameJoueurInput;
  
              // Ajouter l'élément p au conteneur
              containerCreateJoueur.appendChild(pNameJoueurs);
  
              // Ajouter le conteneur au DOM (par exemple, à un conteneur existant)
              const container = document.getElementById("container-players");
              if (container) {
                container.appendChild(containerCreateJoueur);
              }else {
                console.error("Le conteneur avec l'ID 'container-players' n'a pas été trouvé.");
              }
           
               // Effacer la valeur de l'input après l'ajout
              inputokJoueur.value = "";
                 // Ajouter le bouton de confirmation unique
                 ajouterBoutonConfirmation();
            } else {
              alert("Veuillez remplir tous les champs.");
            }
          });
        }
      }
    });
  }
});
