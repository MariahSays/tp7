//AJAX function starts here loads file into 
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML += this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}


//onload function and contents added form my "interactive recipe codepen https://codepen.io/mariahdawn9/pen/XWqqPMK 

window.onload = function(){
  
//document.querySelector("#header h1").classList.add("makeBig"); //changes title on page  ``
  
//document.querySelector("#header h1").onclick = function() {
  this.classList.toggle("makeWhite");
  } // toggles title color on page

//document.querySelector("#ingredients h4").onclick = function() {
   document.querySelector("#ingredients ul").style.display = "block";
 } //displays ingredients 

//document.querySelector("#equipment h4").onclick = function() {
   document.querySelector("#equipment ul").style.display = "block";
 } //displays equipment 
 
 //document.querySelector("#directions h4").onclick = function() {
   document.querySelector("#directions ol").style.display = "block";
 } //displays directions
 
//loadFileInto("ingredients.html  ", "#ingredients ul"); // loads ingredients
//loadFileInto("equipment.html", "#equipment ul"); // loads equipment
//loadFileInto("directions.html", "#directions ol"); //load directions

//setTimeout(function() {
//document.querySelector("#ingredients ul").innerHTML +="<li>Love!</li>";
//}, 100);
 
 function Recipes(title,contributor,url, file,file,file){
   this.recipeTitle = title;
   this.recipeContributer = contributor;
   this.imageUrl = url;
  
   
 }
} 


//end of window on load