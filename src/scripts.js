console.log("scripts attached");

// ********************************************************
  var buttonsClass= document.getElementsByClassName("buttonClass");
  var pick= document.getElementById("pick");
  var create= document.getElementById("create");
  var print= document.getElementById("print");



           // *********squaremain**************

  var attachCardsDiv = document.createElement("div");
	attachCardsDiv.className += "attach-cards-div"// main div don't touch

	var squareMainDiv = document.createElement("div");
  squareMainDiv.className = "cardsPanel";
  squareMainDiv.setAttribute("id", "squareMainID"); 


	var classADiv = document.createElement("div");
	// classADiv.className += "apple" //add this when rotate is clicked
	classADiv.setAttribute("class", "fourPack classA"); 
  classADiv.setAttribute("id", "fourA"); 


	var classBDiv = document.createElement("div");
	// classBDiv.className += "apple" // add this when rotate is clicked
	classBDiv.setAttribute("class", "fourPack classB"); 
	classBDiv.setAttribute("id", "fourB"); 


	var cardFrontDiv = document.createElement("div");//class .front is orange color
	// cardFrontDiv.className += "apple"  // add this when rotate is clicked
	cardFrontDiv.setAttribute("class", "fourPack front");
	cardFrontDiv.setAttribute("id", "fourC"); 



	var cardBackDiv = document.createElement("div");//class .back is yellow color
	// cardBackDiv.className += "apple"  // add this when rotate is clicked
	cardBackDiv.setAttribute("class", "fourPack back");
	cardBackDiv.setAttribute("id", "fourD");


	         // *********roundmain**************


  var roundMainDiv = document.createElement("div");
  roundMainDiv.className = "cardsPanel"; 
  roundMainDiv.setAttribute("id", "roundMainID"); 


  var classADiv2 = document.createElement("div");
	// classADiv.className += "apple" //add this when rotate is clicked
	classADiv2.setAttribute("class", "fourPack classA"); 
  classADiv2.setAttribute("id", "fourA"); 



	var classBDiv2 = document.createElement("div");
	// classBDiv.className += "apple" // add this when rotate is clicked
	classBDiv2.setAttribute("class", "fourPack classB"); 
	classBDiv2.setAttribute("id", "fourB"); 


	var cardFrontDiv2 = document.createElement("div");
	// cardFrontDiv.className += "apple"  // add this when rotate is clicked
	cardFrontDiv2.setAttribute("class", "fourPack front2"); 
	cardFrontDiv2.setAttribute("id", "fourC"); 



	var cardBackDiv2 = document.createElement("div");
	// cardBackDiv.className += "apple"  // add this when rotate is clicked
	cardBackDiv2.setAttribute("class", "fourPack back2");
	cardBackDiv2.setAttribute("id", "fourD");




// **************************functions******************************





  function disableButton(){
		pick.disabled = true;//disable the pick button
	  console.log("two others Button have been disabled.");
  }






  function attachTwoCardsOnDom(){
 
    classBDiv.appendChild(cardBackDiv);
		classBDiv.appendChild(cardFrontDiv);
		classADiv.appendChild(classBDiv)
		squareMainDiv.appendChild(classADiv).addEventListener('click', function(event){
			console.log("clicked");
		});
		attachCardsDiv.appendChild(squareMainDiv);
		document.body.appendChild(attachCardsDiv);

    // ************************************************************

    classBDiv2.appendChild(cardBackDiv2);
		classBDiv2.appendChild(cardFrontDiv2);
	  classADiv2.appendChild(classBDiv2)
		roundMainDiv.appendChild(classADiv2).addEventListener('click', function(event){
		  console.log("clicked");
		});
		attachCardsDiv.appendChild(roundMainDiv);
		document.body.appendChild(attachCardsDiv);

	}





	

	function squareCardLayout() {

		console.log("hello");
		var inputTag = document.createElement("INPUT");
    inputTag.setAttribute("type", "text" ,"autofocus");
    inputTag.setAttribute("value", "your name");

    var createrotatebutton = document.createElement("button");
 		var buttonText = document.createTextNode("Rotate");	 		
 		createrotatebutton.classList.add("rotate-button-class");

 		createrotatebutton.appendChild(buttonText);
 		cardBackDiv.appendChild(inputTag);//text 
 		cardBackDiv.appendChild(createrotatebutton);//button



    classBDiv.appendChild(cardBackDiv)
    classADiv.appendChild(classBDiv)
    squareMainDiv.appendChild(classADiv);
    attachCardsDiv.appendChild(squareMainDiv)
    document.body.appendChild(attachCardsDiv);

	}



	function roundCardLayout(){
		var inputTag = document.createElement("INPUT");
    inputTag.setAttribute("type", "text" ,"autofocus");
    inputTag.setAttribute("value", "your name");

    var createrotatebutton = document.createElement("button");
 		var buttonText = document.createTextNode("Rotate");	 		
 		createrotatebutton.classList.add("rotate-button-class");

 		createrotatebutton.appendChild(buttonText);
 		cardBackDiv2.appendChild(inputTag);//text 
 		cardBackDiv2.appendChild(createrotatebutton);//button


    classBDiv2.appendChild(cardBackDiv2)
    classADiv2.appendChild(classBDiv2)
    roundMainDiv.appendChild(classADiv2);
    attachCardsDiv.appendChild(roundMainDiv)
    document.body.appendChild(attachCardsDiv);

    // add a button

	}










			
	function removeCardFromDom(){
    var getCardsPanel = document.getElementsByClassName("cardsPanel");
  	for (var i = 0; i < getCardsPanel.length; i++) {
  		console.log(getCardsPanel[i]);

	  	getCardsPanel[i].addEventListener('click', function(event){
				console.log("clicked want to remove");

			  var squareClick =  document.getElementById("squareMainID");
				var roundClick =  document.getElementById("roundMainID");

				console.log(squareClick, roundClick)
				console.log(event.target)////
				console.log(event.target.parentNode.parentNode.parentNode)

				if(event.target.parentNode.parentNode.parentNode === squareClick){
					console.log("squareMain clicked")
					roundMainDiv.remove();
					squareCardLayout()	
				}
				if(event.target.parentNode.parentNode.parentNode === roundClick){
					console.log("roundMain clicked");
					squareMainDiv.remove();
					roundCardLayout()
				}

			});
  	};
  } 

  
  


  


// **************************main recipe******************************




	  	for (var i = 0; i < buttonsClass.length; i++) {

	  	buttonsClass[i].addEventListener('click', function(event){		
				

				if(event.target === create || event.target === print){
					console.log("pick a card first");
					//add popup
				}
				else
				{
					disableButton();	
					if(pick.disabled = true){
						create.disabled = true;
						print.disabled = true;
						console.log("disable create button or print button");
						attachTwoCardsOnDom();
						// detectClassOnDom();//detecting
						removeCardFromDom();//this runs along with 

					}
				}

		  })
	  };






