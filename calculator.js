/*
Create a calculator which allows the user to enter two numbers.
* Calculator must consists of two textboxes for each input number.
* Calculator must have 4 buttons for each operation "add, subtract, divide, multiply"
* Calculator must have an equal to button "=" which when pressed shows the result
* Calculator must display result in a nice, clear fashion to the user.
* Calculator must have a "Clear" button to remove the inputs from the textboxes.
* Calculator must clear the inputs when the user clicks "=" button.
*Optional: Add a DropDownList to the page and allow the user to select the background color for the calculator. You can add 4-5 background colors in the DropDownList like "black, red, orange, gray, green". The first option of the DropDownList would be "Select a theme".
* Design the Calculator to work on mobile devices
*/

// get num1
var num1 = document.getElementById("num1")
//get operand
var operand = document.getElementById("operand")
// get num2
var num2 = document.getElementById("num2")

var click = document.getElementById("click")

console.log(num1)
console.log(operand)
console.log(num2)

//Math operands of calculator
let findOut = function(num1, operand, num2) {
      case (operand === '+'):
        result = num1 + num2
        break;

      case (operand === '-'):
        result = num1 - num2
        break;

      case (operand === '/'):
        result = num1 / num2
        break;

      default:
          result = num1 * num2
      }
console.log(result)

rubMe.addEventListener('clicked',function( ){
  var firstNum = num1.value
  var calNum = operand.value
  var secondNum = num2.value
  var calResult = findOut(firstNum, calNum, secondNum)
  var resultString = calResult.toString()
  heading1.innerHTML = resultString

})
