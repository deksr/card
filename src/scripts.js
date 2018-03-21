console.log("scripts attached");

// ********************************************************
  var buttonsClass= document.getElementsByClassName("buttonClass");
  var pick= document.getElementById("pick");
  var create= document.getElementById("create");
  var print= document.getElementById("print");




  var attachCardsDiv = document.createElement("div");//not using this ????
	attachCardsDiv.className += "attach-cards-div"// main div don't touch



		var squareMainDiv = document.createElement("div");
    squareMainDiv.className = "cardsPanel";//keep this while adding cards to dom
    squareMainDiv.setAttribute("id", "squareMainID"); // add this in the begining


    var roundMainDiv = document.createElement("div");
    roundMainDiv.className = "cardsPanel"; //keep this while adding cards to dom
    roundMainDiv.setAttribute("id", "roundMainID"); // add this in the begining




				var classADiv = document.createElement("div");
				// classADiv.className += "classA" //add this when rotate is clicked

		    var classBDiv = document.createElement("div");
				// classBDiv.className += "classB" // add this when rotate is clicked




				    var cardFrontDiv = document.createElement("div");
					  // cardFrontDiv.className += "front"  // add this when rotate is clicked

				    var cardBackDiv = document.createElement("div");
						// cardBackDiv.className += "back"  // add this when rotate is clicked






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


       classBDiv.appendChild(cardBackDiv);
			  classBDiv.appendChild(cardFrontDiv);
			  classADiv.appendChild(classBDiv)
			  roundMainDiv.appendChild(classADiv).addEventListener('click', function(event){
			    console.log("clicked");
		    });
			  attachCardsDiv.appendChild(roundMainDiv);
			  document.body.appendChild(attachCardsDiv);

	}


	function flipStyle(){ //adds flip css style to dom
		var styleSheet = document.createElement('style');
	  styleSheet.innerHTML = "body{background-color: blue}";
	  document.body.appendChild(styleSheet);	     
  }





	function rotateButton(){ //this function goes inside removeCardFromDom function
		var createrotatebutton = document.createElement("button");
		var buttonText = document.createTextNode("Rotate");
		createrotatebutton.classList.add("rotate-button-class");
		createrotatebutton.appendChild(buttonText);
		attachCardsDiv.appendChild(createrotatebutton)
		document.body.appendChild(attachCardsDiv);

		createrotatebutton.addEventListener('click', function(event){
		  console.log("hello rotate button clicked");
		  flipStyle();
		})
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
				console.log(event.target)
				if(event.target === squareClick){
					console.log("squareMain clicked")
					roundMainDiv.remove();
					rotateButton()	
				}
				if(event.target === roundClick){
					console.log("roundMain clicked");
					squareMainDiv.remove();
					rotateButton()
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





  



	// function detectClassOnDom(){
	// 	var picksquaretag= document.querySelectorAll(".roundMainID"); ////roundmain id or div check?????????????
	// 	console.log(picksquaretag)
	// }
