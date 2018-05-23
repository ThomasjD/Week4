
//first while loop: to start & end injection into html file

  //2nd while loop: to start or a start a new block of codes


    //3rd while loop: to start and end appending attributes to a single block
      //this loops has its on attributesArray [] to keep track which attribute is the parent of the newly added attribute
        //winthin this block add a new attributes
          //possible properties of attribute: class, styles, labels
            //if attribute has label append the  the label to html via its attribute name
            //after adding all properties and labels of an attribute, append this to parent attribute
              //the parent attribute will be the last attribute appended to the attributesArray for the block
      //at end loop, have option to add more attributes for the block, or start a new block



  /*2 functions or 3 functions
    1. function startStop: 1 while loop
      1st while loop: to start & end injection into html file
        *has an blocksArray[]
          -a way to reference each blocks of codes
        *start: call the codeBlock function()
        *end: gives option
          -to loop again to add another code of block
          -or to finish


    2. function codeBlock: 1 while loop
      attributesArray = []
        -a way to reference who the parent attribute of the attribute that you are creating
      while loop: to start & end a block of html attributes
        *start: insert new attribute

        *can check on attributesArray to see who is parent attribute, and refference this parent attribute when appending to html

        *end: options
          -to insert more attributes within block
          -or exit block


    *If 2 functions - only 2 while loops needed
    *if 1 function- 3 while loops needed, because need to keep array outside of loop

  */


var createHtml = function() {
  let blockInjection = true;
  let blockArray = []

  while (blockInjection === true);
    let blockName = prompt('What is the block name?')
    blockArray.push(blockName);
    createBlock() //how to reference these attributes to the block?

  let continueHtml = prompt('Would you like to continue with injecting more code blocks into your html y/n?')

  let continueHtml === 'y';
  continueHtml ? blockInjection = true: blockInjection = false;
}//close function


var createBlock = function(){
  let attributesInjection = true;
  let attributesArray = []

  while (attributesInjection === true){
    let attributeName = promt("Whats the type of variable attribute")
    switch (attributeType){
      case "div":
        attributeName = document.createElement("div")
        break;
      case "p":
        attributeName = document.createElement("p")
        break;
      case "h1":
        attributeName = document.createElement("h1")
        break;
      case "h2":
        attributeName = document.createElement("h2")
        break;
      case "h3":
        attributeName = document.createElement("h3")
        break;
      case "h4":
        attributeName = document.createElement("h4")
        break;
      case "h5":
        attributeName = document.createElement("h5")
        break;
      case "h6":
        attributeName = document.createElement("h6")
        break;
      case "ul":
        attributeName = document.createElement("ul")
        break;
      case "li":
        attributeName = document.createElement("li")
        break;
    }

    let attributeProperties = promt("Enter type of properties combinations that\ this attribute has\
    [a] class\
    [b] style\
    [c] style & class")

    switch (attributeProperties) {
      case "a":
        let attributeName.className  = prompt('Enter name of this class');
        break;
      case "b":
        var attributeName.styleName  = prompt('Enter name of this style');
        break;
      case "c":
        let attributeName.className  = prompt('Enter name of this class');
        var attributeName.styleName  = prompt('Enter name of this style');
        break;
      }

    let haveLabel = promt("Do you ned a label for this attribute")

    switch (haveLabel) {
      case 'n':
        break;
      case 'y':
        var labelName = prompt('Enter name of this label');
        labelName = document.createElement("label");
        labelName.innerHTML = promt("Enter what goes in the lable");
        attributeName.appendChild(labelName)
        //append this attribute to parent attribute, prior to this

    if (attributesArray === true) {
        let x = attributesArray.length;
        attributesArray[x-1].appendChild(attributeName)
      } else: {attributesArray.push(attributeName)}

    let continueBlock = prompt{'Would you like to continue with block y/n?'}

    let continueBlock === 'y';
    continueBlock ? attributesInjection = true: attributesInjection = false;
  }

createHtml()
