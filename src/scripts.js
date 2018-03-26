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
	classADiv.setAttribute("class", "classA"); 
  classADiv.setAttribute("id", "fourA"); 


	var classBDiv = document.createElement("div");
	classBDiv.setAttribute("class", "classB"); 
	classBDiv.setAttribute("id", "fourB"); 


	var cardFrontDiv = document.createElement("div");//class .front is orange color
	cardFrontDiv.setAttribute("class", "front");
	cardFrontDiv.setAttribute("id", "fourC"); 


	var tinyDivFront = document.createElement("div");
	tinyDivFront.setAttribute("class", "tiny-div-front");
	tinyDivFront.setAttribute("id", "tinyDivFront");



	var cardBackDiv = document.createElement("div");//class .back is yellow color
	cardBackDiv.setAttribute("class", "back");
	cardBackDiv.setAttribute("id", "fourD");


	var tinyDivBack = document.createElement("div");
	tinyDivBack.setAttribute("class", "tiny-div-back");



	         // *********roundmain**************


  var roundMainDiv = document.createElement("div");
  roundMainDiv.className = "cardsPanel"; 
  roundMainDiv.setAttribute("id", "roundMainID"); 


  var classADiv2 = document.createElement("div");
	classADiv2.setAttribute("class", "classA"); 
  classADiv2.setAttribute("id", "fourA"); 



	var classBDiv2 = document.createElement("div");
	classBDiv2.setAttribute("class", "classB"); 
	classBDiv2.setAttribute("id", "fourB"); 


	var cardFrontDiv2 = document.createElement("div");
	cardFrontDiv2.setAttribute("class", "front2"); 
	cardFrontDiv2.setAttribute("id", "fourC"); 



	var cardBackDiv2 = document.createElement("div");
	cardBackDiv2.setAttribute("class", "back2");
	cardBackDiv2.setAttribute("id", "fourD");




	var InputBoxbutton = document.createElement("button");

  var ul=document.createElement('ul');
  ul.setAttribute("id", "ulDiv");





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
  	var buttonText = document.createTextNode("create Input text");
 		InputBoxbutton.setAttribute("id", "createInputText")
 		InputBoxbutton.appendChild(buttonText);
 		attachCardsDiv.appendChild(InputBoxbutton)
 		document.body.appendChild(attachCardsDiv);
  }





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


    document.getElementById('rotate-to-back-id').addEventListener('click',function(e){
      console.log("hello there rotate to back button clicked");

      var loo = document.getElementById('fourB');
      loo.setAttribute("class", "classB sun");//

      var bar = document.getElementById('fourC');
      bar.setAttribute("class", "front moon");

      // document.getElementById('ulDiv').style.display = "none"
      //ul tag disappears
    })



    document.getElementById('rotate-to-front-id').addEventListener('click',function(){
     console.log("hello there rotate to front button clicked");

      var loo = document.getElementById('fourB');
      loo.classList.remove("sun");//

      // var bar = document.getElementById('fourC');
      // bar.classList.remove("moon")


      // ul tag appears
      // document.getElementById('ulDiv').style.display = 'block'

    })

  }





  function addListToDom(){



    InputBoxbutton.addEventListener('click', function(){
	    console.log("sm,d,asm");

		  var inputTagOne = document.createElement("INPUT");
	    inputTagOne.setAttribute("type", "text" ,"autofocus");
	    inputTagOne.setAttribute("value", "your name");
	    inputTagOne.setAttribute("class", "tagClass")



    	var li=document.createElement('li');
    	li.innerHTML="hello";
    	li.appendChild(inputTagOne)
    	// document.body.appendChild(ul); //this create elements dynamically


    	var removeButton = document.createElement("button");
	 		var buttonText = document.createTextNode("delete Input Tag");
	 		removeButton.setAttribute("class", "deleteButton");
	 		removeButton.appendChild(buttonText);

	 		li.appendChild(removeButton)
    	ul.appendChild(li);
    	(cardFrontDiv).appendChild(ul);



    	document.querySelectorAll(".deleteButton").forEach(function(btn) {
	      btn.addEventListener('click', function(e){
		      e.target.parentNode.remove();
		    });
      });

      $( document ).ready(function() {
        console.log( "ready!" );
        $('#ulDiv').draggable()
      });


    })
  }


  // function hideAndShowOnTurn(){


  // 	document.getElementById("rotate-to-back-id")


  // }


    



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
					addInputBoxbutton()
					addListToDom()



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





















