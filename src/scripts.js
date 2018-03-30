console.log("scripts attached");
// ********************************************************

  var buttonsClass= document.getElementsByClassName("buttonClass");
  var pick= document.getElementById("pick");
  var refresh = document.getElementById("refresh");
  var printMe= document.getElementById("printMe");


  var mainWbpageDivId = document.getElementById('mainWbpageDivId')
	var popUpText = document.createElement("div");


  var designButton = document.createElement("button");
  var buttonText = document.createTextNode("Ready To design");


  var seeBackButton = document.createElement("button");
  var buttonText5 = document.createTextNode("Rotate to see Back");

  var seeFrontButton = document.createElement("button");
  var buttonText7 = document.createTextNode("Rotate to see Front");

  var uploadButton = document.createElement("input");
  var imageWrapperDiv = document.createElement("div");



  var InputBoxbutton = document.createElement("button");
	var buttonText2 = document.createTextNode("create Input text");


  var ul=document.createElement('ul');
  ul.setAttribute("id", "ulDiv");


  var getCardsPanel = document.getElementsByClassName("cardsPanel");
  
  var designRefreshButton = document.createElement("button");
  var buttonText4 = document.createTextNode("Refresh the design");


  var imageAttach = document.createElement("img");

  var layoutPrintButton = document.createElement("button");

  var goBackButton = document.createElement("button");





// ***********************squaremain************************************



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



// ********************************roundmain****************************


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
 		
 		// document.body.appendChild(attachCardsDiv);
  }




  function cardTools(){

    seeBackButton.setAttribute("id", "rotate-to-back-id")
    seeBackButton.appendChild(buttonText5);


    seeFrontButton.setAttribute("id", "rotate-to-front-id")
    seeFrontButton.appendChild(buttonText7);



    uploadButton.setAttribute("type", "file");
    uploadButton.setAttribute("id", "filetag");
    uploadButton.style.display='none'




    imageWrapperDiv.setAttribute("id", "imageWrapper");
    cardBackDiv.appendChild(imageWrapperDiv);



    imageAttach.setAttribute("src", "");
    imageAttach.setAttribute("id", "preview");
    imageWrapperDiv.appendChild(imageAttach);

    designRefreshButton.setAttribute("id", "refreshButtonId")
    designRefreshButton.appendChild(buttonText4);

  }




  function flippyStyle(){

    document.getElementById('rotate-to-back-id').addEventListener('click',function(e){
      console.log("hello there rotate to back button clicked");

      var loo = document.getElementById('fourB');
      loo.setAttribute("class", "classB sun");//

      

      if(document.body.contains(squareMainDiv)){
        var bar = document.getElementById('fourC');
        bar.setAttribute("class", "front moon");
      }


      if(document.body.contains(roundMainDiv)){
        var bar = document.getElementById('fourC');
        bar.setAttribute("class", "front2 moon");
      }





      seeFrontButton.style.display = ""
      seeBackButton.style.display = "none"

      uploadButton.style.display = ''

    })



    document.getElementById('rotate-to-front-id').addEventListener('click',function(){
      console.log("hello there rotate to front button clicked");

      var loo = document.getElementById('fourB');
      loo.classList.remove("sun");//

      seeFrontButton.style.display = "none"
      seeBackButton.style.display = ""

      uploadButton.style.display='none'

    })
  }





	function squareCardTools() {
		console.log("hi from squareCardTools() function")

    cardTools()
    
    squareMainDiv.appendChild(designRefreshButton);
 		squareMainDiv.appendChild(uploadButton);
 		cardBackDiv.appendChild(imageWrapperDiv);



 	  // cardFrontDiv.appendChild(inputTag);//text 
 		squareMainDiv.appendChild(seeBackButton);//button
 		squareMainDiv.appendChild(seeFrontButton);//button


    squareMainDiv.appendChild(InputBoxbutton)
    attachCardsDiv.appendChild(squareMainDiv);


    seeFrontButton.style.display = "none"


 		//appending on the dom
    classBDiv.appendChild(cardFrontDiv)
    classBDiv.appendChild(cardBackDiv)
    classADiv.appendChild(classBDiv)
    squareMainDiv.appendChild(classADiv);
    attachCardsDiv.appendChild(squareMainDiv)
    document.body.appendChild(attachCardsDiv);

    flippyStyle()  
  }


  function roundCardTools(){
    console.log("hi from roundCardTools() function")

    cardTools()

    roundMainDiv.appendChild(designRefreshButton);
    roundMainDiv.appendChild(uploadButton);
    cardBackDiv2.appendChild(imageWrapperDiv);


    // cardFrontDiv.appendChild(inputTag);//text 
    roundMainDiv.appendChild(seeBackButton);//button
    roundMainDiv.appendChild(seeFrontButton);//button
    

    roundMainDiv.appendChild(InputBoxbutton)
    attachCardsDiv.appendChild(roundMainDiv);

    
    seeFrontButton.style.display = "none"




    classBDiv2.appendChild(cardFrontDiv2)
    classBDiv2.appendChild(cardBackDiv2)
    classADiv2.appendChild(classBDiv2)
    roundMainDiv.appendChild(classADiv2);
    attachCardsDiv.appendChild(roundMainDiv)
    document.body.appendChild(attachCardsDiv);



    flippyStyle()
  }




 

  function uploadImage(){/////code directly copy and pasted from the internet
  	console.log("hi from uploadImage() function")


    var fileTag = document.getElementById("filetag"),
    preview = document.getElementById("preview");


    function changeImage(input) {
		  var reader;
      console.log("this is changeImage function")

		  if (input.files && input.files[0]) {

        console.log(input.files)
        console.log(input.files[0])

		    reader = new FileReader();

		    reader.onload = function(e) {
		      preview.setAttribute('src', e.target.result);
          console.log("s,sammd,as,aas,s,ad,asd,asdlkedlqdlqlqdlqksdlsd")
          console.log(e.target.result)//image
		    }

		    reader.readAsDataURL(input.files[0]);
        console.log(reader.readAsDataURL(input.files[0]))
        console.log(input.files)
        console.log(input.files[0])
		  }
		}
    
    fileTag.addEventListener("change", function() {
      changeImage(this);
    });	

  }//////code directly copy and pasted from the internet





  function popuUpText1(){
		popUpText.innerHTML = "please pick a div";
	  mainWbpageDivId.appendChild(popUpText);
	}


  function popuUpText2(){
    popUpText.innerHTML = "designa and give print";
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
    	// console.log(event.target.parentNode.parentNode.parentNode)
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

    if(document.body.contains(squareMainDiv)){
      console.log("square main div is present");
      console.log("designButton clicked")
      squareCardTools();
      addInputBoxbutton();
      uploadImage();
      //ready to design button dissapears
    }


    if(document.body.contains(roundMainDiv)){
      console.log("round main div is present");
      console.log("designButton clicked")
      roundCardTools();//????????????      
      addInputBoxbutton();
      uploadImage();




      //ready to design button dissapears
    }

		
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
    inputTagOne.setAttribute("id", "InputTagId")

    console.log("wtf")


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

    if(document.body.contains(squareMainDiv)){
     (cardFrontDiv).appendChild(ul);
    }

    if(document.body.contains(roundMainDiv)){
      (cardFrontDiv2).appendChild(ul);
    }

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



  designRefreshButton.addEventListener('click', function(){
    console.log("hello there wtf")
    
    if(document.body.contains(document.getElementById("ulDiv"))){
      var liClass = document.querySelectorAll(".liClass");
      for (var i = 0; i < liClass.length; i++) {
        liClass[i].remove();
        console.log("li removed")
      };
      console.log("ul div is removed")
      document.getElementById("ulDiv").remove();   
    }

    var imgsrc= document.getElementById("preview")
    console.log(imgsrc)

   console.log(imgsrc.removeAttribute("src")) 
    imgsrc.setAttribute("src", "")
    imgsrc.setAttribute("id", "preview");
  })




  goBackButton.addEventListener('click', function(){
    console.log("hello from go back button")
    document.location.reload(true)
  })



  
  layoutPrintButton.addEventListener('click', function(){
    console.log("hello from layout print button")
              window.print()

  })
 

    
// *********************************round card layout*******************************






	


  
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
          document.getElementById("refreshButtonId").remove()

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

	       

		  if(event.target === printMe){

        if(document.getElementById("attachCardsDiv") === undefined || document.getElementById("attachCardsDiv")=== null ){
          console.log("print button says: pick a card first");
          popuUpText1()

        }


        //if there is nothing on the dom 
        if(document.body.contains(document.getElementById("attachCardsDiv"))){
          console.log("print button is clicked")
          console.log("design and give print");
          popuUpText2()

          function removepopup(){
            removePopUpText()
            console.log("set time out clicked")
          }

          setTimeout(removepopup, 2000)
        }



          function printCriteria(){
            if(document.body.contains(document.getElementById("rotate-to-back-id"))){
              console.log("design button from pick is removed")
              document.getElementById("rotate-to-back-id").remove();
              document.getElementById("rotate-to-front-id").remove();
              document.getElementById("createInputText").remove();
              document.getElementById("refreshButtonId").remove()
              buttonText2.remove()


              var removeButtonFromPrint = document.querySelectorAll(".deleteButton");
              for (var i = 0; i < removeButtonFromPrint.length; i++) {
                removeButtonFromPrint[i].remove()
              };


              //add back facing card
              if(document.body.contains(squareMainDiv)){
                squareMainDiv.appendChild(cardFrontDiv)
                squareMainDiv.appendChild(cardBackDiv)
                attachCardsDiv.appendChild(squareMainDiv);
                classBDiv.remove()
                classADiv.remove()
              }

              if(document.body.contains(roundMainDiv)){
                roundMainDiv.appendChild(cardFrontDiv2)
                roundMainDiv.appendChild(cardBackDiv2)
                attachCardsDiv.appendChild(roundMainDiv);
                classBDiv2.remove()
                classADiv2.remove()
                cardFrontDiv2.style.cursor = 'none';//cursor doesnt move
                cardBackDiv2.style.cursor = 'none';//cusrsor doesnt move
              }
              
    
              //add another print button for window .print
              var buttonText8 = document.createTextNode("print back and front");
              layoutPrintButton.setAttribute("id", "layoutPrintButtonId");
              layoutPrintButton.appendChild(buttonText8);//to see front button
              document.body.appendChild(layoutPrintButton);



              // add back button to go back to the pick cards

              var buttonText9 = document.createTextNode("go back to main page");
              goBackButton.setAttribute("id", "goBackButtonId");
              goBackButton.appendChild(buttonText9);//to see front button
              document.body.appendChild(goBackButton);


              var allInputTagforPrint = document.querySelectorAll(".tagClass");
              for (var i = 0; i < allInputTagforPrint.length; i++) {
                allInputTagforPrint[i].disabled = true;
              };

              

              cardFrontDiv.style.cursor = 'none';//cursor doesnt move
              cardBackDiv.style.cursor = 'none';//cusrsor doesnt move
              document.getElementById("filetag").remove();


                
              document.getElementById('mainWbpageDivId').remove()
            }
          } 


        if(document.body.contains(squareMainDiv)){
          printCriteria();
          console.log("hi from print squareMainDiv says remove roundMainDiv")
          roundMainDiv.remove()

        }

        if(document.body.contains(roundMainDiv)){
          printCriteria()
          console.log("hi from print roundMainDiv says remove squareMainDiv")
          squareMainDiv.remove()

        }











        // if(document.body.contains(document.getElementById("ulDiv"))){
        //   console.log("print this")

          
        // }
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


  



