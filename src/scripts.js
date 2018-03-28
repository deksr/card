console.log("scripts attached");
// ********************************************************

  var buttonsClass= document.getElementsByClassName("buttonClass");
  var pick= document.getElementById("pick");
  var refresh = document.getElementById("refresh");
  var print= document.getElementById("print");


  var mainWbpageDivId = document.getElementById('mainWbpageDivId')
	var popUpText = document.createElement("div");


  var designButton = document.createElement("button");
  var buttonText = document.createTextNode("Ready To design");


  var InputBoxbutton = document.createElement("button");
	var buttonText2 = document.createTextNode("create Input text");


  var ul=document.createElement('ul');
  ul.setAttribute("id", "ulDiv");


  var getCardsPanel = document.getElementsByClassName("cardsPanel");




           // *********squaremain**************




  var attachCardsDiv = document.createElement("div");
	attachCardsDiv.className += "attach-cards-div"// main div don't touch
	attachCardsDiv.setAttribute("id", "attachCardsDiv"); 


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



// **************************functions******************************



  function disableButton(){
		pick.disabled = true;//disable the pick button
		popUpText.remove()
	  console.log("two other Button have been disabled.");
  }




  function attachTwoCardsOnDom(){
  	console.log("hi from attachTwoCardsOnDom() function")

    classBDiv.appendChild(cardFrontDiv);
		classBDiv.appendChild(cardBackDiv);
		classADiv.appendChild(classBDiv)
		squareMainDiv.appendChild(classADiv)
		attachCardsDiv.appendChild(squareMainDiv);
		document.body.appendChild(attachCardsDiv);

    // ***************************

    classBDiv2.appendChild(cardFrontDiv2);
		classBDiv2.appendChild(cardBackDiv2);
	  classADiv2.appendChild(classBDiv2)
		roundMainDiv.appendChild(classADiv2)
		attachCardsDiv.appendChild(roundMainDiv);
		document.body.appendChild(attachCardsDiv);

	}




  function addInputBoxbutton(e){
  	console.log("input box function called")
 		InputBoxbutton.setAttribute("id", "createInputText")
 		InputBoxbutton.appendChild(buttonText2);
 		squareMainDiv.appendChild(InputBoxbutton)
 		attachCardsDiv.appendChild(squareMainDiv);
 		// document.body.appendChild(attachCardsDiv);
  }





	function squareCardTools() {
		console.log("hi from squareCardTools() function")

	
    var seeBackButton = document.createElement("button");
 		var buttonText = document.createTextNode("Rotate to see Back");
 		seeBackButton.setAttribute("id", "rotate-to-back-id")
 		seeBackButton.appendChild(buttonText);


 		var uploadButton = document.createElement("input");
 		uploadButton.setAttribute("type", "file");
 		uploadButton.setAttribute("id", "filetag");



 		var imageWrapperDiv = document.createElement("div");
 		imageWrapperDiv.setAttribute("id", "imageWrapper");
 		cardBackDiv.appendChild(imageWrapperDiv);


 		var imageAttach = document.createElement("img");
 		imageAttach.setAttribute("src", "");
 		imageAttach.setAttribute("id", "preview");
 		imageWrapperDiv.appendChild(imageAttach);


 		squareMainDiv.appendChild(uploadButton);
 		cardBackDiv.appendChild(imageWrapperDiv);


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




 

  function uploadImage(){/////code directly copy and pasted from the internet
  	console.log("hi from uploadImage() function")


    var fileTag = document.getElementById("filetag"),
    preview = document.getElementById("preview");


    function changeImage(input) {
		  var reader;

		  if (input.files && input.files[0]) {
		    reader = new FileReader();

		    reader.onload = function(e) {
		      preview.setAttribute('src', e.target.result);
		    }

		    reader.readAsDataURL(input.files[0]);
		  }
		}
    
    fileTag.addEventListener("change", function() {
      changeImage(this);
    });	

  }//////code directly copy and pasted from the internet


  function popuUpText(){
		popUpText.innerHTML = "please pick a div";
	  mainWbpageDivId.appendChild(popUpText);
	}

	function removePopUpText(){
		popUpText.remove()
		 console.log("popup removed");
	}


	 		
  function readyToDesign(){
  	console.log("ready to design button added")
    designButton.setAttribute("id", "designButtonId")
    designButton.appendChild(buttonText);//to see front button
    attachCardsDiv.appendChild(designButton)
  }

  

  function runThis(event){
  	console.log("runThis function + squareClick + roundClick is running")
  	var squareClick =  document.getElementById("squareMainID");
		var roundClick =  document.getElementById("roundMainID");

    if(event.target.parentNode.parentNode.parentNode === squareClick){
    	console.log(event.target.parentNode.parentNode.parentNode)
		  console.log("squareMain clicked");
			roundMainDiv.remove();
			readyToDesign();
			getCardsPanel[0].removeEventListener('click', runThis, false)
		}

		if(event.target.parentNode.parentNode.parentNode === roundClick){
			console.log("roundMain clicked");
			squareMainDiv.remove();
			readyToDesign()
			getCardsPanel[0].removeEventListener('click', runThis, false)
		}
  }


  function attachEventToCardPanels(){
  	for (var i = 0; i < getCardsPanel.length; i++) {
      getCardsPanel[i].addEventListener('click', runThis)
    }
  }


  // **************************dom event handlers******************************

	designButton.addEventListener('click', function(){
		console.log("designButton clicked")
		squareCardTools();
		addInputBoxbutton()
		// addListToDom()
		uploadImage()
		//ready to design button dissapears

		if(document.body.contains(designButton)){
			console.log("design button is removed")
	    designButton.remove()
	    buttonText.remove()
		}
	})





  InputBoxbutton.addEventListener('click', function(){
	  console.log("input Box clicked");

		var inputTagOne = document.createElement("input");
	  inputTagOne.setAttribute("type", "text" ,"autofocus");
	  inputTagOne.setAttribute("value", "your name");
	  inputTagOne.setAttribute("class", "tagClass")

	  var li=document.createElement('li');
	 	li.setAttribute("class", "liClass");

    li.innerHTML="hello";
    li.appendChild(inputTagOne)
    	// document.body.appendChild(ul); //this create elements dynamically

    var removeButton = document.createElement("button");
    var buttonText3 = document.createTextNode("delete Input Tag");
	  removeButton.setAttribute("class", "deleteButton");
	 	removeButton.appendChild(buttonText3);

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
 

    
  // **************************round card layout*****************************



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


	


  
// **************************main recipe******************************




	for (var i = 0; i < buttonsClass.length; i++) {

		buttonsClass[i].addEventListener('click', function(event){	


		  if(event.target ===  pick){
		  	console.log("pick button clicked");
				removePopUpText();

			  attachTwoCardsOnDom();
				attachEventToCardPanels();


        if(document.body.contains(designButton)){
				  console.log("design button from refresh is removed")
	        designButton.remove()
	        buttonText.remove()     
				}

        if(document.body.contains(document.getElementById("rotate-to-back-id"))){
          console.log("design button from pick is removed")
          document.getElementById("rotate-to-back-id").remove();
          document.getElementById("rotate-to-front-id").remove();
          document.getElementById("filetag").remove();
          document.getElementById("createInputText").remove();
          buttonText2.remove() 
        }

        if(document.body.contains(document.getElementById("ulDiv"))){
        	var liClass = document.querySelectorAll(".liClass");
        	for (var i = 0; i < liClass.length; i++) {
        		liClass[i].remove();
        		console.log("li removed")
        	};
        	console.log("ul div is removed")
        	document.getElementById("ulDiv").remove();   
        }

			}	




  	    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



			if(event.target === refresh){
			  console.log("refresh button says: pick a card first");
				popuUpText()

				if(document.body.contains(designButton)){
				  console.log("design button from refresh is removed")
	        designButton.remove()
	        buttonText.remove()     
				}

				if(document.body.contains(document.getElementById("rotate-to-back-id"))|| document.body.contains(document.getElementById("designButtonId"))){
          console.log("design button from pick is removed")
          document.getElementById("rotate-to-back-id").remove();
          document.getElementById("rotate-to-front-id").remove();
          document.getElementById("filetag").remove();
          document.getElementById("createInputText").remove();
          buttonText2.remove() 
        }

        if(document.body.contains(document.getElementById("ulDiv"))){
        	var liClass = document.querySelectorAll(".liClass");
        	for (var i = 0; i < liClass.length; i++) {
        		liClass[i].remove();
        		console.log("li removed")
        	};
        	console.log("ul div is removed")
        	 document.getElementById("ulDiv").remove();   
        }

				if(document.body.contains(attachCardsDiv)){
				  console.log("attach card div is removed")
				  attachCardsDiv.remove()
				  // buttonText.remove()     

				}
		  }



	      // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

	       

		  if(event.target === print){
				console.log("print button says: pick a card first");
				popuUpText()
			}



				// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

		})
	}








// ********************************************************
	if(document.getElementById("attachCardsDiv")){
		console.log("hello")
	}
	else{
		console.log("wtf")
	}




