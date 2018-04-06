console.log("scripts attached");
// ********************************************************

  var buttonsClass= document.getElementsByClassName("buttonClass");
  var pick= document.getElementById("pick");
  var refresh = document.getElementById("refresh");
  var printMe= document.getElementById("printMe");


  var mainWbpageDivId = document.getElementById('mainWbpageDivId')
	var popUpText = document.createElement("div");//popup for pick a card first
  popUpText.setAttribute("class", "pickCardFirstPopUp"); 


  var popUpText12 = document.createElement("div");//popup for design and give print
  popUpText12.setAttribute("class", "designAndPrintPopUp");

  var wrapperForallButtonsDivWrapper = document.createElement("div");
  wrapperForallButtonsDivWrapper.setAttribute("id", "wrapperForallButtonsDivWrapper");//not used




  var allButtonsDivWrapper = document.createElement("div");
  allButtonsDivWrapper.setAttribute("id", "allButtonsDivWrapperId");//not used
  allButtonsDivWrapper.setAttribute("class", "placeSideBySide"); 
 


  var designButton = document.createElement("button");
  var buttonText = document.createTextNode("Let's Design");
  var designSpanButton = document.createElement("span");


  var seeBackButton = document.createElement("button");
  var buttonText5 = document.createTextNode("Rotate to see Back");

  var seeFrontButton = document.createElement("button");
  var buttonText7 = document.createTextNode("Rotate to see Front");

  var uploadButton = document.createElement("input");
  var imageWrapperDiv = document.createElement("div");



  var InputBoxbutton = document.createElement("button");
	var buttonText2 = document.createTextNode("Type your address");





  var PopUpTextForDraggable = document.createElement("div");
  PopUpTextForDraggable.setAttribute("class", "PopUpTextForDraggableClass"); 


  var dragArrowElement = document.createElement("li");
  dragArrowElement.setAttribute('id', "draggArrowId");

  

  var dragFont = document.createElement('i');
  dragFont.setAttribute("class", "fa fa-arrows-alt");


  var heartBeatFont = document.createElement('i');
  heartBeatFont.setAttribute("class", "fa fa-heart heartBeat");
  heartBeatFont.setAttribute("id", "heartBeatId");



  // select tag related

  var selectTag = document.createElement("select");
  selectTag.setAttribute("id", "fontSelectId");
  selectTag.setAttribute("class", "buttonBlockStyle selectTagStyle");



  var optionTagOne = document.createElement("option");
  optionTagOne.setAttribute("class", "optionStyle");
  optionTagOne.setAttribute("value", "Jaldi");
  optionTagOne.textContent = "Jaldi";
 

  var optionTagTwo = document.createElement("option");
  optionTagTwo.setAttribute("value", "Kite One"); 
  optionTagTwo.textContent = "Kite";


  var optionTagThree = document.createElement("option");
  optionTagThree.setAttribute("value", "Nanum Myeongjo");
  optionTagThree.textContent = "Nanum";
 

  var optionTagFour = document.createElement("option");
  optionTagFour.setAttribute("value", "Allerta Stencil");
  optionTagFour.textContent = "Stencil";
 

  var optionTagFive = document.createElement("option");
  optionTagFive.setAttribute("value", "Text Me One");
  optionTagFive.textContent = "TextMe";





 

  var ul=document.createElement('ul');
  ul.setAttribute("id", "ulDiv");

  var getCardsPanel = document.getElementsByClassName("cardsPanel");
  
  var designRefreshButton = document.createElement("button");
  var buttonText4 = document.createTextNode("Refresh the design");


  var imageAttach = document.createElement("img");

  var printButtonAndGoBackWrapper = document.createElement("div");
  printButtonAndGoBackWrapper.setAttribute("class", "printButtonAndGoBackWrapperClass");


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
	classADiv.setAttribute("class", "classA placeSideBySide"); 
  classADiv.setAttribute("id", "fourA"); 


	var classBDiv = document.createElement("div");
	classBDiv.setAttribute("class", "classB"); 
	classBDiv.setAttribute("id", "fourB"); 


	var cardFrontDiv = document.createElement("div");//class .front is orange color
	cardFrontDiv.setAttribute("class", "front boxShadowClassSquare");
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
	classBDiv2.setAttribute("id", "fourB2"); 


	var cardFrontDiv2 = document.createElement("div");
	cardFrontDiv2.setAttribute("class", "front2 boxShadowClassRound"); 
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
    // document.querySelector('.boxShadowClassSquare').classList.add("boxShadowClassSquare");



    // ***************************

    classBDiv2.appendChild(cardFrontDiv2);
		classBDiv2.appendChild(cardBackDiv2);
	  classADiv2.appendChild(classBDiv2)
		roundMainDiv.appendChild(classADiv2)
		attachCardsDiv.appendChild(roundMainDiv);
		document.body.appendChild(attachCardsDiv);

	}



  function shadowStleCheck(){
    if(document.body.contains(document.querySelector('.front') && document.querySelector('.boxShadowClassSquare'))){
      console.log("contains front and boxShadowClassSquare class")
    }
    else{
      document.querySelector('.front').classList.add("boxShadowClassSquare");
    }

    if(document.body.contains(document.querySelector('.front2') && document.querySelector('.boxShadowClassRound'))){
      console.log("contains front and boxShadowClassRound class")
    }
    else{
      document.querySelector('.front2').classList.add("boxShadowClassRound");
    }


  }


      

  // function addInputBoxbutton(e){
  // 	console.log("input box function called")
 		
 		
 	// 	// document.body.appendChild(attachCardsDiv);
  // }




  function cardTools(){




    seeBackButton.setAttribute("id", "rotate-to-back-id")
    console.log("I'm back side being called")

    selectTag.appendChild(optionTagFive)
    selectTag.appendChild(optionTagFour)
    selectTag.appendChild(optionTagThree)
    selectTag.appendChild(optionTagTwo)
    selectTag.appendChild(optionTagOne)



    seeBackButton.setAttribute("class", "buttonBlockStyle backButtonStyle")
    seeBackButton.appendChild(buttonText5);
    seeBackButton.style.display = ""//original-code: we are displaying back button on the front.


    seeFrontButton.setAttribute("id", "rotate-to-front-id")
    console.log("I'm front being called")
    seeFrontButton.setAttribute("class", "buttonBlockStyle frontButtonStyle")
    seeFrontButton.appendChild(buttonText7);
    seeFrontButton.style.display = "none"; //original-code: dont diaply see front button yet



    // InputBoxbutton.style.display='' //original-code: display input box button on dom



  
    designRefreshButton.setAttribute("id", "refreshButtonId");
    designRefreshButton.appendChild(buttonText4);
    designRefreshButton.setAttribute("class", "buttonBlockStyle designRefreshStyle");


    InputBoxbutton.setAttribute("id", "createInputText")
    InputBoxbutton.setAttribute("class", "buttonBlockStyle InputBoxStyle");
    InputBoxbutton.appendChild(buttonText2);




    uploadButton.setAttribute("type", "file");
    uploadButton.setAttribute("id", "filetag");
    uploadButton.setAttribute("class", "buttonBlockStyle UploadStyle");
    uploadButton.style.display='none'//original-code: upload is not displayed on dom still




    imageWrapperDiv.setAttribute("id", "imageWrapper");
    cardBackDiv.appendChild(imageWrapperDiv);



    imageAttach.setAttribute("src", "");
    imageAttach.setAttribute("id", "preview");
    imageAttach.setAttribute("class", "buttonBlockStyle");
    imageWrapperDiv.appendChild(imageAttach);
  }




  function flippyStyle(){

    document.getElementById('rotate-to-back-id').addEventListener('click',function(e){
      console.log("hello there rotate to back button clicked");



      if(document.body.contains(squareMainDiv)){
        var bar = document.getElementById('fourC');
        bar.setAttribute("class", "front moon");

        var loo = document.getElementById('fourB');
        loo.setAttribute("class", "classB sun");//
      }


      if(document.body.contains(roundMainDiv)){
        // var bar = document.getElementById('fourC');
        // bar.setAttribute("class", "front2 moon");
        var loo2 = document.getElementById('fourB2');
        loo2.setAttribute("class", "classB sun");
      }
  


      seeFrontButton.style.display = "" //original -code:
      seeBackButton.style.display = "none"// original -code: none means css style is taken out on the otehr side and the back button is not displayed

      uploadButton.style.display = ''// original -code:shows button on the other side on click
      InputBoxbutton.style.display='none' //original -code:

      //create input text dissapears 
    })



    document.getElementById('rotate-to-front-id').addEventListener('click',function(){
      console.log("hello there rotate to front button clicked");

      if(document.body.contains(squareMainDiv)){
        var loo = document.getElementById('fourB');
        loo.classList.remove("sun");//
      }

      if(document.body.contains(roundMainDiv)){
        var loo2 = document.getElementById('fourB2');
        loo2.classList.remove("sun");//
      }




      seeFrontButton.style.display = "none" //original -code:
      seeBackButton.style.display = ""//original -code:

      uploadButton.style.display='none'//original -code:
      InputBoxbutton.style.display=''//original -code:
    })
  }





	function squareCardTools() {
		console.log("hi from squareCardTools() function")

    cardTools();


    allButtonsDivWrapper.appendChild(selectTag)//original-code

    cardBackDiv.appendChild(imageWrapperDiv);
    
    
    allButtonsDivWrapper.appendChild(seeBackButton);//button 
    allButtonsDivWrapper.appendChild(seeFrontButton);//button //original -code:


    allButtonsDivWrapper.appendChild(designRefreshButton); 
    allButtonsDivWrapper.appendChild(InputBoxbutton)
    allButtonsDivWrapper.appendChild(uploadButton);//original -code:


 		//appending on the dom
    classBDiv.appendChild(cardFrontDiv)
    classBDiv.appendChild(cardBackDiv)
    classADiv.appendChild(classBDiv)
    squareMainDiv.appendChild(classADiv);
    attachCardsDiv.appendChild(squareMainDiv)
    document.body.appendChild(attachCardsDiv);
    wrapperForallButtonsDivWrapper.appendChild(allButtonsDivWrapper);


    document.body.appendChild(wrapperForallButtonsDivWrapper);
    flippyStyle()  
  }



  function roundCardTools(){
    console.log("hi from roundCardTools() function");

    cardTools()

    allButtonsDivWrapper.appendChild(selectTag)//all fonts
    cardBackDiv2.appendChild(imageWrapperDiv);

    allButtonsDivWrapper.appendChild(seeBackButton);//back button
    allButtonsDivWrapper.appendChild(seeFrontButton);//front button

    allButtonsDivWrapper.appendChild(designRefreshButton); //refresh button
    allButtonsDivWrapper.appendChild(InputBoxbutton)//text input button
    allButtonsDivWrapper.appendChild(uploadButton);//upload image button

    
    // seeFrontButton.style.display = "none"

    classBDiv2.appendChild(cardFrontDiv2)
    classBDiv2.appendChild(cardBackDiv2)
    classADiv2.appendChild(classBDiv2)
    roundMainDiv.appendChild(classADiv2);
    attachCardsDiv.appendChild(roundMainDiv)
    document.body.appendChild(attachCardsDiv);
    wrapperForallButtonsDivWrapper.appendChild(allButtonsDivWrapper);
    document.body.appendChild(wrapperForallButtonsDivWrapper);
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




  // picakCardFirstPopUp
  function popuUpText1(){  
		popUpText.innerHTML = "Pick a card first";
	  mainWbpageDivId.appendChild(popUpText);
	}


  // picakCardFirstPopUpRemove
  function removePopUpText1(){
    popUpText.remove()
    console.log("popup removed");
  }



  // designAndGivePrintPopUp
  function popuUpText2(){
    popUpText12.innerHTML = "design and give print";
    mainWbpageDivId.appendChild(popUpText12);
  }



  // designAndPrintPopUpRemove
  function designAndPrintPopUpRemove(){
    popUpText12.remove()
    console.log("popup removed");
  }







  function draggablePopUp(){
    PopUpTextForDraggable.innerHTML = "drag the text to design the layout.dont show me this again ";
    attachCardsDiv.appendChild(PopUpTextForDraggable);
    // <i class="material-icons">close</i>
  }


	 		
  function readyToDesign(){
  	console.log("ready to design button added")
    designButton.setAttribute("id", "designButtonId")
    designSpanButton.setAttribute('class', "designSpanButtonClass")
    designSpanButton.appendChild(buttonText);
    designButton.appendChild(designSpanButton);
    attachCardsDiv.appendChild(designButton);


    var questionTextDiv  = document.createElement("div")
    questionTextDiv.setAttribute("class", "questionTextClass");//not used


    if(document.body.contains(squareMainDiv)){
      questionTextDiv.innerHTML = "Youve picked <br> a square card"
      attachCardsDiv.appendChild(questionTextDiv);  
    }


    if(document.body.contains(roundMainDiv)){
      questionTextDiv.innerHTML = "Youve picked <br> a round card"
      attachCardsDiv.appendChild(questionTextDiv);  
    }

    // designButton.appendChild(buttonText);//to see front button
  }

  

  function runThis(event){
  	console.log("runThis function + squareClick + roundClick is running")
  	var squareClick =  document.getElementById("squareMainID");
		var roundClick =  document.getElementById("roundMainID");

    if(event.target.parentNode.parentNode.parentNode === squareClick){
		  console.log("squareMain clicked");
      // before removing roundmain grab squaremain and add animation?
      heartAppearsAnimation();
      document.querySelector('.boxShadowClassSquare').classList.remove("boxShadowClassSquare");

      designAndPrintPopUpRemove()



      function roundCardRemoveAnimation(){
        roundMainDiv.remove();
        readyToDesign();//ready to design button

        getCardsPanel[0].removeEventListener('click', runThis, false)
      }
      setTimeout(roundCardRemoveAnimation, 1000)
      //animation related- remove round card after few seconds




      setTimeout(removeDragAndCloseIcon, 5000)
      //animation related-remove drag icon and remove close buttons

		}




		if(event.target.parentNode.parentNode.parentNode === roundClick){
			console.log("roundMain clicked");
      heartAppearsAnimation();
      document.querySelector('.boxShadowClassRound').classList.remove("boxShadowClassRound");
      designAndPrintPopUpRemove()



      function squareCardRemoveAnimation(){
        console.log("this one ran")
        squareMainDiv.remove();
        readyToDesign();//ready to design button

        getCardsPanel[0].removeEventListener('click', runThis, false)
      }
      setTimeout(squareCardRemoveAnimation, 1000)
      setTimeout(removeDragAndCloseIcon, 5000)


		}
  }


  function attachEventToCardPanels(){
  	for (var i = 0; i < getCardsPanel.length; i++) {
      getCardsPanel[i].addEventListener('click', runThis)
    }
  }








  function heartAppearsAnimation(){
      var x=event.clientX-10;
      var y=event.clientY-207;
      console.log("Your Mouse Position Is :" + x + " and " + y );

      if(document.body.contains(squareMainID)){
        squareMainDiv.appendChild(heartBeatFont);
      }


      if(document.body.contains(roundMainID)){
        roundMainDiv.appendChild(heartBeatFont);
      }


 

      document.getElementById('heartBeatId').style.position = "absolute";
      document.getElementById('heartBeatId').style.left =  x +'px';
      document.getElementById('heartBeatId').style.top = y +'px';

      

      // setTimeout(colorChange, 550);
      setTimeout(function(){
      document.getElementById('heartBeatId').style.visibility = "hidden";
      }, 1000);
  }
    



  function removeDragAndCloseIcon(){
    console.log("removeDragAndCloseIcon function")
    dragArrowElement.style.visibility = "hidden";

    var deleteButtons = document.querySelectorAll('.deleteButton')
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].style.visibility = 'hidden'
    };

  }


  


  function mouseOverFunction(){
    console.log("mouse over me");
    dragArrowElement.style.visibility= "visible";
    var deleteButtons = document.querySelectorAll('.deleteButton')
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].style.visibility= 'visible'
    };
  }



  function mouseOutFunction(){
    console.log("mouse out")
    dragArrowElement.style.visibility= "hidden";
    var deleteButtons = document.querySelectorAll('.deleteButton')
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].style.visibility= 'hidden'
    };
  }

  function mouseInAndOutOnDragAndCloseIcon(){
    document.getElementById('fourC').addEventListener("mouseover", mouseOverFunction)
    document.getElementById('fourC').addEventListener("mouseout", mouseOutFunction)
  }








// **************************dom event handlers******************************

	designButton.addEventListener('click', function(){

    designAndPrintPopUpRemove()
    

    if(document.body.contains(squareMainDiv)){
      console.log("square main div is present");
      console.log("designButton clicked")
      document.querySelector(".questionTextClass").remove()
      squareCardTools();
      // addInputBoxbutton();
      mouseInAndOutOnDragAndCloseIcon();
      uploadImage();


      //ready to design button dissapears
    }


    if(document.body.contains(roundMainDiv)){
      console.log("round main div is present");
      console.log("designButton clicked")
      document.querySelector(".questionTextClass").remove()
      roundCardTools();//????????????      
      // addInputBoxbutton();
      mouseInAndOutOnDragAndCloseIcon();
      uploadImage();
    }

		
		if(document.body.contains(designButton)){
			console.log("design button is removed")
	    designButton.remove()
	    buttonText.remove()
		}

	})







  InputBoxbutton.addEventListener('click', function(){
	  console.log("input Box clicked");

    if(document.body.contains(document.querySelector('.designAndPrintPopUp'))){
      designAndPrintPopUpRemove()
    }


    var li=document.createElement('li');
    li.setAttribute("class", "liClass");
    // li.innerHTML="   ";


    var inputTagOne = document.createElement("input");
    var liClass = document.querySelectorAll(".liClass");

    
    setTimeout(removeDragAndCloseIcon, 5000)

    if(document.querySelector('li', [0])){
      console.log("there is a li present")

      for (var i = 0; i < liClass.length; i++) {
        console.log(liClass[0].children[0].style.fontFamily); 
        var fontSelected = liClass[0].children[0].style.fontFamily;
        inputTagOne.setAttribute('style', 'font-family:'+ fontSelected +';')
      };
    }


    inputTagOne.setAttribute("type", "text" ,"autofocus");
    inputTagOne.setAttribute("value", "Enter Text");
    inputTagOne.setAttribute("class", "tagClass");
    inputTagOne.setAttribute("id", "InputTagId");
    li.appendChild(inputTagOne);


    // draggablePopUp()


   // document.body.appendChild(ul); //this create elements dynamically
  // ........................................................

    var removeButton = document.createElement("button");
    removeButton.setAttribute("type", "submit");
    removeButton.setAttribute("class", "deleteButton");



    var closeButtonFont = document.createElement('i');
    closeButtonFont.setAttribute("class", "material-icons");
    closeButtonFont.innerHTML = "close"
    closeButtonFont.style.fontSize='15px';

    removeButton.appendChild(closeButtonFont);
    li.appendChild(removeButton)
    ul.appendChild(li);



  // ..........................................................

    dragArrowElement.appendChild(dragFont)
    ul.insertBefore(dragArrowElement, ul.childNodes[0]);



     // <<<<<<<<<<<>>>>>>>>>>>      
    // apply style to all at once if the fontstyle is selected 
    selectTag.addEventListener("change", function(){
      console.log("a font is selected from option");
      console.log(this.value)
      for (var i = 0; i < liClass.length; i++) {
        liClass[i].style.fontFamily = this.value;
      };

      inputTagOne.style.fontFamily = this.value;
    })
     // <<<<<<<<<<<>>>>>>>>>>>






    if(document.body.contains(squareMainDiv)){
     (cardFrontDiv).appendChild(ul);
    }

    if(document.body.contains(roundMainDiv)){
      (cardFrontDiv2).appendChild(ul);
    }

    document.querySelectorAll(".deleteButton").forEach(function(btn) {
	    btn.addEventListener('click', function(e){
		    e.target.parentNode.parentNode.remove();
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


  // var fontSelectId= document.getElementById('fontSelectId');


  goBackButton.addEventListener('click', function(){
    console.log("hello from go back button")
    document.location.reload(true)
  })



  
  layoutPrintButton.addEventListener('click', function(){
    console.log("hello from layout print button")
    window.print()

  })
 

    
  
// **************************main recipe******************************




	for (var i = 0; i < buttonsClass.length; i++) {

		buttonsClass[i].addEventListener('click', function(event){	


		  if(event.target === pick){
		  	console.log("pick button clicked");
				
        removePopUpText1();
			  attachTwoCardsOnDom();
				attachEventToCardPanels();
        shadowStleCheck();

        setTimeout(function(){
          document.getElementById('squareMainID').style.animation = 'none';
          document.getElementById('roundMainID').style.animation = 'none';
        }, 1000)
        



        if(document.body.contains(designButton)){
				  console.log("design button from refresh is removed")
	        designButton.remove()
	        buttonText.remove() 
          document.getElementById('heartBeatId').style.removeProperty('visibility');//removing visibilty property
          document.getElementById('heartBeatId').remove();
          document.querySelector(".questionTextClass").remove();
          designAndPrintPopUpRemove();
				}



        if(document.body.contains(document.getElementById("rotate-to-back-id"))){
          console.log("design button from pick is removed")

          designAndPrintPopUpRemove()

          document.getElementById("rotate-to-back-id").remove();
          document.getElementById("rotate-to-front-id").remove();
          document.getElementById("filetag").remove();
          document.getElementById("createInputText").remove();
          document.getElementById("refreshButtonId").remove();
          document.getElementById("fontSelectId").remove();

          document.getElementById('heartBeatId').style.removeProperty('visibility');//removing visibilty property
          document.getElementById('heartBeatId').remove();


          if(document.body.contains(document.getElementById('draggArrowId'))){
            document.getElementById('draggArrowId').remove();
            document.getElementById('fourC').removeEventListener("mouseover", mouseOverFunction)
            document.getElementById('fourC').removeEventListener("mouseout", mouseOutFunction)
          }
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

        //if when pick button is pressed, backside of the square card shows, then replace it with the front side. if the class sun is present then remove sun

        if(document.body.contains(document.querySelector(".sun"))){
          console.log("sun is presnt");

          document.getElementById('fourB').classList.remove("sun");//;
          console.log("sun class is removed")
          document.getElementById('fourD').classList.remove("moon");//;
          document.getElementById('fourB2').classList.remove("sun");//;
        }
			}	


			
	   // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

	       

		  if(event.target === printMe){

        if(document.getElementById("attachCardsDiv") === undefined || document.getElementById("attachCardsDiv") === null ){
          console.log("print button says: pick a card first");
          popuUpText1()
        }


        //if there is nothing on the dom 
        if(document.body.contains(document.getElementById("attachCardsDiv"))){
          console.log("print button is clicked")
          console.log("design and give print");
          popuUpText2()//call popup 
        }



        // ................................................
        function removepopup(){
          // removePopUpText()
          designAndPrintPopUpRemove()
          console.log("set time out clicked")
        }



        if(document.body.contains(document.getElementById("rotate-to-back-id"))){
          popuUpText2();
          console.log("rotate to back id identfied from print")

          if(document.body.contains(squareMainDiv) || document.body.contains(roundMainDiv)){
            // printCriteria();
            console.log("sqare main is present : from print");


            if(document.body.contains(document.getElementById('draggArrowId'))){
              console.log("drag arrow id print bit not li div")
              popuUpText2();
            }


            if(document.body.contains( document.getElementById('draggArrowId') && document.querySelectorAll('.liClass')[0]) ) {
              document.body.style.backgroundImage = "none";

              document.getElementById('ulDiv').style.position = "relative"
              document.getElementById('ulDiv').style.top = 30 +'px';
              // document.getElementById('ulDiv').style.left = 30%

              document.querySelector('.attach-cards-div').style.position = "absolute"
              document.querySelector('.attach-cards-div').style.top = 120 +'px';

              printCriteria();

            }

          }
        }



        // if(document.body.contains(roundMainDiv)){
        //   printCriteria()
        //   // squareMainDiv.remove()
        // }
        // .........................................



        function printCriteria(){
          if(document.body.contains(document.getElementById("rotate-to-back-id"))){
            console.log("design button from pick is removed")
            document.getElementById("rotate-to-back-id").remove();
            document.getElementById("rotate-to-front-id").remove();
            document.getElementById("createInputText").remove();
            document.getElementById("refreshButtonId").remove();
            document.getElementById("fontSelectId").remove();
            document.getElementById('draggArrowId').remove();



            buttonText2.remove();



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
              classBDiv2.remove();
              classADiv2.remove();
              // cardFrontDiv2.style.cursor = 'none';//cursor doesnt move
              // cardBackDiv2.style.cursor = 'none';//cusrsor doesnt move
            }
                
    
                //add another print button for window .print
            var buttonText8 = document.createTextNode("print back and front");
            layoutPrintButton.setAttribute("id", "layoutPrintButtonId");
            layoutPrintButton.appendChild(buttonText8);//to see front button
            // document.body.appendChild(layoutPrintButton);

            printButtonAndGoBackWrapper.appendChild(layoutPrintButton);
            document.body.appendChild(printButtonAndGoBackWrapper)





            // add back button to go back to the pick cards

            var buttonText9 = document.createTextNode("go back to main page");
            goBackButton.setAttribute("id", "goBackButtonId");
            goBackButton.appendChild(buttonText9);//to see front button
            // document.body.appendChild(goBackButton);


            printButtonAndGoBackWrapper.appendChild(goBackButton);
            document.body.appendChild(printButtonAndGoBackWrapper)


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


  



