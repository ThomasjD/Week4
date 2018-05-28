
let myHommies = [
 "https://www.pastoraleman10.com/wp-content/uploads/2017/03/el-pastor-aleman.jpg",
 "https://razapastoraleman.com/wp-content/uploads/2015/08/pastor-aleman-guardian-1.jpg",
 "http://perrito.info/wp-content/uploads/2015/05/pastores-alemanes-1024x970.jpg",
 "http://marcianos.com/wp-content/uploads/2017/09/no-adoptar-pastor-aleman-fb.jpg",
 "https://i.pinimg.com/736x/df/8b/25/df8b25a6b16677427b9ee53626e2296d--chopper-i-love-dogs.jpg",
]



let btnStart = document.querySelector("#btnStart")
let slideShowImage = document.querySelector("#slideShowImage")

btnStart.addEventListener('click',function(){
  
})

//finds element in the html file
//let slideShowImage = document.querySelector("#slideShowImage")

let showPictures = function (homies) {
  //counter = 0
  let y = 0
  slideShowImage.innerHTML = " "

  for (x = 1; x<6; x++) {
    if(y===myHommies.length){
      y=0
    }
    y++
    
    let interval = setInterval({
      let showImage = `<img src="${homies[y]}"/>`
      slideShowImage.innerHTML = showImage
      },1000)
    setTimeout(function(){
      clearInterval(interval)
    }, 5000)
    
  }
      //function mytimer(){
      //console.log("Inside mytimer()")
      //counter++ 
}


/*
  for(let x = 0; x < homies.length) {
    console.log(`round is ${x}`)
    let showImage = `<img src="${homies[x]}"/>`
    console.log(homies[x])
    slideShowImage.innerHTML += showImage
    y++
    console.log(y)
  }
  */

    //slideShowImage.src = currentImage
    //let interval = setInterval(mytimer,5000);
    //function mytimer(){
      //console.log("Inside mytimer()")
      //counter++ 
      //
    

 
    
    //
    
  
  

/*
setInterval(function(){
  //currentImage = image for each spot
  

  

  //
 
  
  index++

  //
  if(index >= images.length) {
    index = 0
  }

},2000) */

/*function showPictures(hommies) {
  console.log("I was called 1st") //only 1st round
  
  
//setTimeout(function(){
  
  hommies.every(function(homie) {
    console.log("I was called before interval") 
    let x = false
    if (x===true){
      return this.homie === false;
    }
    setTimeout(function(){
      console.log("I was called before interval clear")
      x = true


      let interval = setInterval(function(){
      
      
        console.log("I'm last line before setTimeout()") //called 3x twice

        clearInterval(interval)
        myBody.innerHTML = " "
        let showImage = `<img src='${homie.hommie}'/>`
        myBody.innerHTML += showImage
        console.log("I was called last line before set Interval() ends")
 
      },1000)
    },3000)  
  })  
}
*/
  


/*
//sources
let images = ["image1.png","image2.png","image3.png"]
let index = 0

//finds element in the html file
let slideShowImage = document.querySelector("#slideShowImage")


setInterval(function(){
  //currentImage = image for each spot
  let currentImage = images[index]

  //
  slideShowImage.src = currentImage
  index++

  //
  if(index >= images.length) {
    index = 0
  }

},2000) */
