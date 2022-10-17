//AJAX function starts here loads file into 
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}
//recipe object created here
 function Recipe(recipeTitle, recipeContributor, imageURL, ingredientsURL, equipmentURL, directionsURL){
     
   this.title = recipeTitle;
   this.contributer = recipeContributor;
   this.imageURL = imageURL;
   this.ingredients = ingredientsURL;
   this.equipment = equipmentURL;
   this.directions = directionsURL;
  
 //recipe method
   this.displayRecipe = function(){
     
       document.querySelector("#header h1").innerHTML = this.recipeTitle;
       document.querySelector("#contributor").innerHTML = this.recipeContributor;
       document.querySelector("#header").style.backgroundImage = "url("+ this.imageURL +")";
       loadFileInto(this.ingredients, "#ingredients ul");
       loadFileInto(this.equipment, "#equipment ul");
       loadFileInto(this.directions, "#directions ol");
 }
}
//recipe for cashew chicken defined
  CashewChicken = new Recipe("15 Minute Healthy Cashew Chicken", "Mariah", "https://images.pexels.com/photos/3763792/pexels-photo-3763792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "ingredients.html", "equipment.html","directions.html");
  MonkeyBreadKabob = new Recipe("Monkey Bread Kabob",);
  BananaBread = new Recipe ("Banana Bread", "Serena");
//end of recipe object

//onload function and contents added form my "interactive recipe codepen https://codepen.io/mariahdawn9/pen/XWqqPMK 

window.onload = function(){
  
      document.querySelector("#firstRecipe").onclick = function(){
        CashewChicken.displayRecipe();
      }
  } 


//end of window on load