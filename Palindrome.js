// get the textbox
var word = document.getElementById("word")
// get the button
var rubMe = document.getElementById("belly_btn")

var result = ''


//document.getElementById("belly_btn").style.cursor = "crosshair";


let findOut = function(word) {
  //w,o,r,d 1 to 4

  var drow = []

  for (let letter = 1; letter < word.length; letter++) {
    drow.push(word[-letter])
  }

  drow = drow.toString()

  console.log(drow)

  //Using ? conditional statement
  let test = (drow === word);
  test ? result = (word + ' is a palindrome!'): result = (word + ' is not a palindrome!');
  console.log(result)
  return result
}



console.log(result)



rubMe.addEventListener('mouseout',function( ){
  var userinput = word.value

  var result = findOut(userinput)

  heading1.innerHTML = result

})


/* if else statement
if (drow === word) {
  console.log(`${word} is a palindrome!`);

  console.log(
    print (f"{word} == {drow}.")
  } else{
  console.log(`This ${word} is a not a palindrome!!!`)
  }

*/
