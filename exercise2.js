"use strict";


//Obtencion de elementos 
const botonCreate = document.querySelector(".btn-primary");


const inputTitle = document.getElementById("title");

const inputDescription = document.getElementById("description");

const inputImagen = document.getElementById("image");

const postContainer = document.getElementById("postContainer");

var cantidad_de_posts = 0;



function mensajeError() {
	
	let divMensajeDeError = document.getElementById("errorMsg");
  
	
	if (inputTitle.value === "" || inputDescription.value === "" || inputImagen.files.length === 0) {
	  // Muestra el mensaje de error
	  divMensajeDeError.classList.remove("alert", "alert-danger", "col", "hidden");

  
	  
	  setTimeout(function() {
		divMensajeDeError.classList.add("alert", "alert-danger", "col", "hidden");
	  }, 3000);
	}
  }
  
  botonCreate.addEventListener("click", mensajeError);
  

// Agrega un event listener para el evento "click" al botón "Create"
botonCreate.addEventListener("click", 
	function() 
	{
		

		//console.log(inputImagen.files);
		//console.log(inputImagen.files.length);

	  	
	  	

	  		cantidad_de_posts++;
		    let nuevoDiv = document.createElement("div");
		    nuevoDiv.className = "card mb-4 shadow border-success ";
		    nuevoDiv.setAttribute("id","post-"+cantidad_de_posts);

			
			var selectElement = document.getElementById("mood");

			
			var selectedValue = selectElement.value;
			//console.log("esta es tu eleccion",selectedValue);


			// cambio de borde del post
			/*if (selectedValue === "1") {
			nuevoDiv.classList.add("'border-secondary");
			nuevoDiv.classList.remove("border-success");
			} else if (selectedValue === "2") {
			nuevoDiv.classList.remove("border-success");
			nuevoDiv.classList.add("border-danger");
			
			}*/
		 
		    const imagen = document.createElement("img");

		    
		    const selectedImage = inputImagen.files[0];

		    
		    const imageUrl = URL.createObjectURL(selectedImage);

		    
		    imagen.src = imageUrl;

		    
		    nuevoDiv.appendChild(imagen);



		    // Crea un nuevo div para la información del restaurante
		    const newDivinfo = document.createElement("div");
		    newDivinfo.className = "card-body";

		   
		    const newDivName= document.createElement("h5");
		    newDivName.className = "card-title";
		    newDivName.textContent = inputTitle.value;
		    

		    const newDivDescription = document.createElement("p");
		    newDivDescription.className = "card-text";
		    newDivDescription.textContent = inputDescription.value;


			const newDivFooter = document.createElement("div");
			newDivFooter.className = "card-footer bg-transparent";

			const newDivFooter2 = document.createElement("div");
			newDivFooter2.className = "row";

			const newDivFooter3 = document.createElement("div");
			newDivFooter3.className ="col-auto avatar ps-1 pe-1";

			const newDivFooter4 = document.createElement("div");
			newDivFooter4.className="col";
			newDivFooter4.textContent = "Bad Guy";

			const newDivFooter5 = document.createElement("div");
			
			const newDivFooter6Small = document.createElement("small");
			newDivFooter6Small.className = "text-muted";
			
			var fechaActual = new Date();
			newDivFooter6Small.textContent = fechaActual.toLocaleString();

			const newDivFooterDedos = document.createElement("div");
			newDivFooterDedos.className = "col-auto pt-2";
			const dedos1 = document.createElement("i");
			dedos1.className = "fa-regular fa-thumbs-up text-primary me-3";
			dedos1.setAttribute("id","dedoMeGusta"+cantidad_de_posts);
			//console.log(dedos1);
			const dedos2 =  document.createElement("i");
			dedos2.className = "fa-regular fa-thumbs-down text-danger";
			dedos2.setAttribute("id","dedoNoMeGusta"+cantidad_de_posts);
			console.log(dedos2);

			//imagen del footer AVATAR
			const imagenFooter = document.createElement("img");
			imagenFooter.className = "rounded-circle";
			imagenFooter.src = "./img/avatar.png";
			imagenFooter.alt = "Avatar";
			
			

			//Incorporacion de elementos a la estructura web
		    
		    newDivinfo.appendChild(newDivName);
		    newDivinfo.appendChild(newDivDescription);

		    
		    nuevoDiv.appendChild(newDivinfo);
			nuevoDiv.appendChild(newDivFooter);
			newDivFooter.appendChild(newDivFooter2);
			newDivFooter2.appendChild(newDivFooter3);
			newDivFooter2.appendChild(newDivFooter4);
			newDivFooter3.appendChild(imagenFooter);
			newDivFooter4.appendChild(newDivFooter5);
			newDivFooter5.appendChild(newDivFooter6Small);
			newDivFooter2.appendChild(newDivFooterDedos)
			newDivFooterDedos.appendChild(dedos1);
			newDivFooterDedos.appendChild(dedos2);
		    postContainer.appendChild(nuevoDiv);

			
				// Elimina las clases 'text-primary' de los íconos Me gusta
				const dedoMeGusta = document.getElementById("dedoMeGusta" + cantidad_de_posts);
				if (dedoMeGusta) {
					dedoMeGusta.classList.remove('text-primary');
				}

				// Elimina las clases 'text-danger' de los íconos No me gusta
				const dedoNoMeGusta = document.getElementById("dedoNoMeGusta" + cantidad_de_posts);
				if (dedoNoMeGusta) {
					dedoNoMeGusta.classList.remove('text-danger');
				}

				 // Activa odesactiva la clase 
			 
				 if (dedoMeGusta) {
					 dedoMeGusta.classList.remove('text-primary');
				 }
			 
				 if (dedoNoMeGusta) {
					 dedoNoMeGusta.classList.remove('text-danger');
				 }
			 
				 
				 if (dedoMeGusta) {
					 dedoMeGusta.addEventListener('click', function() {
						 if (dedoMeGusta.classList.contains('text-primary')) {
							 dedoMeGusta.classList.remove('text-primary');
						 } else {
							 dedoMeGusta.classList.add('text-primary');
							 
							 dedoNoMeGusta.classList.remove('text-danger');
						 }
					 });
				 }
			 
				 
				 if (dedoNoMeGusta) {
					 dedoNoMeGusta.addEventListener('click', function() {
						 if (dedoNoMeGusta.classList.contains('text-danger')) {
							 dedoNoMeGusta.classList.remove('text-danger');
						 } else {
							 dedoNoMeGusta.classList.add('text-danger');
							 
							 dedoMeGusta.classList.remove('text-primary');
						 }
					 });
					 


				 }
			
					inputImagen.value = "";
					inputTitle.value = "";
					inputDescription.value = "";


					return false;
	  	}
		
	 
	
);



