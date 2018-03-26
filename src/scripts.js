console.log("scripts attached");

$( document ).ready(function() {
    console.log( "ready!" );
    $('#dragIDsweety').draggable()
});


// ********************************************************


  var buttonsClass= document.getElementsByClassName("buttonClass");
  var pick= document.getElementById("pick");
  var print= document.getElementById("print");


  var mainWbpageDivId = document.getElementById('mainWbpageDivId')
	var popUpText = document.createElement("div");





           // *********squaremain**************

  var attachCardsDiv = document.createElement("div");
	attachCardsDiv.className += "attach-cards-div"// main div don't touch


	var squareMainDiv = document.createElement("div");
  squareMainDiv.className = "cardsPanel";
  squareMainDiv.setAttribute("id", "squareMainID"); 


	var classADiv = document.createElement("div");
	// classADiv.className += "apple" //add this when rotate is clicked
	classADiv.setAttribute("class", "classA"); 
  classADiv.setAttribute("id", "fourA"); 


	var classBDiv = document.createElement("div");
	// classBDiv.className += "apple" // add this when rotate is clicked
	classBDiv.setAttribute("class", "classB"); 
	classBDiv.setAttribute("id", "fourB"); 


	var cardFrontDiv = document.createElement("div");//class .front is orange color
	// cardFrontDiv.className += "apple"  // add this when rotate is clicked
	cardFrontDiv.setAttribute("class", "front");
	cardFrontDiv.setAttribute("id", "fourC"); 


	var tinyDivFront = document.createElement("div");
	tinyDivFront.setAttribute("class", "tiny-div-front");
	tinyDivFront.setAttribute("id", "tinyDivFront");



	var cardBackDiv = document.createElement("div");//class .back is yellow color
	// cardBackDiv.className += "apple"  // add this when rotate is clicked
	cardBackDiv.setAttribute("class", "back");
	cardBackDiv.setAttribute("id", "fourD");


	var tinyDivBack = document.createElement("div");
	tinyDivBack.setAttribute("class", "tiny-div-back");



	         // *********roundmain**************


  var roundMainDiv = document.createElement("div");
  roundMainDiv.className = "cardsPanel"; 
  roundMainDiv.setAttribute("id", "roundMainID"); 


  var classADiv2 = document.createElement("div");
	// classADiv.className += "apple" //add this when rotate is clicked
	classADiv2.setAttribute("class", "classA"); 
  classADiv2.setAttribute("id", "fourA"); 



	var classBDiv2 = document.createElement("div");
	// classBDiv.className += "apple" // add this when rotate is clicked
	classBDiv2.setAttribute("class", "classB"); 
	classBDiv2.setAttribute("id", "fourB"); 


	var cardFrontDiv2 = document.createElement("div");
	// cardFrontDiv.className += "apple"  // add this when rotate is clicked
	cardFrontDiv2.setAttribute("class", "front2"); 
	cardFrontDiv2.setAttribute("id", "fourC"); 



	var cardBackDiv2 = document.createElement("div");
	// cardBackDiv.className += "apple"  // add this when rotate is clicked
	cardBackDiv2.setAttribute("class", "back2");
	cardBackDiv2.setAttribute("id", "fourD");




// **************************functions******************************



  function disableButton(){
		pick.disabled = true;//disable the pick button
		popUpText.remove()
	  console.log("two other Button have been disabled.");
  }





  function attachTwoCardsOnDom(){

    classBDiv.appendChild(cardFrontDiv);
		classBDiv.appendChild(cardBackDiv);
		classADiv.appendChild(classBDiv)
		squareMainDiv.appendChild(classADiv)
		attachCardsDiv.appendChild(squareMainDiv);
		document.body.appendChild(attachCardsDiv);

    // ************************************************************

    classBDiv2.appendChild(cardFrontDiv2);
		classBDiv2.appendChild(cardBackDiv2);
	  classADiv2.appendChild(classBDiv2)
		roundMainDiv.appendChild(classADiv2)
		attachCardsDiv.appendChild(roundMainDiv);
		document.body.appendChild(attachCardsDiv);

	}




  function addInputBoxbutton(){
  	var InputBoxbutton = document.createElement("button");
  	var buttonText = document.createTextNode("create Input text");
 		InputBoxbutton.setAttribute("id", "createInputText")
 		InputBoxbutton.appendChild(buttonText);
 		attachCardsDiv.appendChild(InputBoxbutton)
 		document.body.appendChild(attachCardsDiv);
  }


  // function addRotatebutton(){

  // 	var rotateButton = document.createElement("button");
  // 	var buttonText = document.createTextNode("rotate button");
 	// 	rotateButton.setAttribute("id", "createInputText")
 	// 	rotateButton.appendChild(buttonText);
 	// 	attachCardsDiv.appendChild(rotateButton)
 	// 	document.body.appendChild(attachCardsDiv);

  // }





	function squareCardLayout() {


    var seeBackButton = document.createElement("button");
 		var buttonText = document.createTextNode("Rotate to see Back");
 	  seeBackButton.setAttribute("draggable", "true");	
 		seeBackButton.setAttribute("id", "rotate-to-back-id")
 		seeBackButton.appendChild(buttonText);


 		var seeFrontButton = document.createElement("button");
 		var buttonText = document.createTextNode("Rotate to see Front");
 		seeFrontButton.setAttribute("id", "rotate-to-front-id")
 		seeFrontButton.appendChild(buttonText);


 	  // cardFrontDiv.appendChild(inputTag);//text 
 		squareMainDiv.appendChild(seeBackButton);//button
 		squareMainDiv.appendChild(seeFrontButton);//button


    //appending on the dom
    classBDiv.appendChild(cardFrontDiv)
    classBDiv.appendChild(cardBackDiv)
    classADiv.appendChild(classBDiv)
    squareMainDiv.appendChild(classADiv);
    attachCardsDiv.appendChild(squareMainDiv)
    document.body.appendChild(attachCardsDiv);

    addInputBoxbutton()
    

    // ************rough work from here

    document.getElementById('rotate-to-back-id').addEventListener('click',function(){
     console.log("hello there rotate to back button clicked");

      var loo = document.getElementById('fourB');
      loo.setAttribute("class", "classB sun");//

      var bar = document.getElementById('fourC');
      bar.setAttribute("class", "front moon");



    })


    document.getElementById('rotate-to-front-id').addEventListener('click',function(){
     console.log("hello there rotate to front button clicked");

      var loo = document.getElementById('fourB');
      loo.classList.remove("sun");//
    })

	}









	function roundCardLayout(){

		var inputTag = document.createElement("INPUT");
    inputTag.setAttribute("type", "text" ,"autofocus");
    inputTag.setAttribute("value", "your name");

    var seeBackButton = document.createElement("button");
 		var buttonText = document.createTextNode("Rotate to see Back");	 		
 		seeBackButton.setAttribute("id", "rotate-to-back-id")
 		seeBackButton.appendChild(buttonText);//to see front button

 		var seeFrontButton = document.createElement("button");
 		var buttonText = document.createTextNode("Rotate to see Front");	 		
 		seeFrontButton.setAttribute("id", "rotate-to-front-id")
 		seeFrontButton.appendChild(buttonText);//to see front button


 		cardFrontDiv2.appendChild(inputTag);//text 
 		cardFrontDiv2.appendChild(seeBackButton);//button
 		cardBackDiv2.appendChild(seeFrontButton);//button


    classBDiv2.appendChild(cardFrontDiv2)
    classBDiv2.appendChild(cardBackDiv2)
    classADiv2.appendChild(classBDiv2)
    roundMainDiv.appendChild(classADiv2);
    attachCardsDiv.appendChild(roundMainDiv)
    document.body.appendChild(attachCardsDiv);



    document.getElementById('rotate-to-back-id').addEventListener('click',function(){
     console.log("hello there rotate to back button clicked");

      var loo = document.getElementById('fourB');
      loo.setAttribute("class", "classB sun");

      var bar = document.getElementById('fourC');
      bar.setAttribute("class", "front2 moon");

      // document.getElementById('dragIDsweety').style.visibility = "hidden";
      // document.getElementById(id).style.visibility = "visible"; 
      // use this and add set timeout

    })


    document.getElementById('rotate-to-front-id').addEventListener('click',function(){
     console.log("hello there rotate to front button clicked");

      var loo = document.getElementById('fourB');
      loo.classList.remove("sun");

    })



	}





			
	function removeCardFromDom(){
    var getCardsPanel = document.getElementsByClassName("cardsPanel");

    var squareClick =  document.getElementById("squareMainID");
		var roundClick =  document.getElementById("roundMainID");


  	for (var i = 0; i < getCardsPanel.length; i++) {
  		console.log(getCardsPanel[i]);


      getCardsPanel[i].addEventListener('click', runThis, false)
      console.log(getCardsPanel[i])
      
      function runThis(event){

      	if(event.target.parentNode.parentNode.parentNode === squareClick){
					console.log("squareMain clicked");
					roundMainDiv.remove();
					squareCardLayout();
					getCardsPanel[0].removeEventListener('click', runThis, false)
				}

				if(event.target.parentNode.parentNode.parentNode === roundClick){
					console.log("roundMain clicked");
					squareMainDiv.remove();
					roundCardLayout();
					getCardsPanel[0].removeEventListener('click', runThis, false)
			  }

      }
    }
  } 




  
// **************************main recipe******************************




	  	for (var i = 0; i < buttonsClass.length; i++) {

	  	buttonsClass[i].addEventListener('click', function(event){		
       
				if(event.target === print){
					console.log("pick a card first");

					popUpText.innerHTML = "please pick a div";
				  mainWbpageDivId.appendChild(popUpText);
			    document.body.appendChild(mainWbpageDivId);	

				}
				else
				{

					disableButton();	
					if(pick.disabled = true){
						print.disabled = true;

						console.log("disable create button or print button");
						attachTwoCardsOnDom();
						removeCardFromDom(); 
					}
				}

		  })
	  }








$( document ).ready(function() {
    console.log( "ready!" );
    $('#dragIDsweety').draggable()
});












