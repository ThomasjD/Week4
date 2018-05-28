


let dishes =  [
  {
    "description" : "These mini cheeseburgers are served on a fresh baked pretzel bun with lettuce, tomato, avocado, and your choice of cheese. ",
    "imageURL" : "http:\/\/restaurant.wpdiy.net\/genesis\/wp-content\/uploads\/2015\/07\/Mini-Cheeseburgers-492624907-200x200.jpg",
    "title" : "Mini Cheeseburgers",
    "course" : "Starters",
    "id" : 2,
    "price" : 8
  },
  {
    "description" : "Large mushroom caps are filled a savory cream cheese, bacon and panko breadcrumb stuffing, topped with cheddar cheese. ",
    "imageURL" : "http:\/\/restaurant.wpdiy.net\/genesis\/wp-content\/uploads\/2015\/07\/Stuffed-Mushrooms-466004034-200x200.jpg",
    "title" : "Panko Stuffed Mushrooms",
    "course" : "Starters",
    "id" : 10,
    "price" : 7
  },
  {
    "description" : "Our New York Style Cheesecake is rich, smooth, and creamy. Available in various flavors, and with seasonal ",
    "imageURL" : "http:\/\/restaurant.wpdiy.net\/genesis\/wp-content\/uploads\/2015\/08\/Cheesecake-466968669-200x200.jpg",
    "title" : "Cheesecake",
    "course" : "Desserts",
    "id" : 14,
    "price" : 9
  },
  {
    "description" : "This platter is perfect for sharing! Enjoy our spicy buffalo wings, traditional nachos, and cheese quesadillas served with freshly made guacamole dip.",
    "imageURL" : "http:\/\/restaurant.wpdiy.net\/genesis\/wp-content\/uploads\/2015\/08\/Fiesta-Platter-86518097-200x200.jpg",
    "title" : "Fiesta Family Platter",
    "course" : "Entrees",
    "id" : 9,
    "price" : 16
  },
  {
    "description" : "This classic cheese tortellini is cooked in a sundried tomato sauce. Served with bruschetta topped with a tomato and basil marinara.",
    "imageURL" : "http:\/\/restaurant.wpdiy.net\/genesis\/wp-content\/uploads\/2015\/08\/Bruschetta-Tortellini-57576141-200x200.jpg",
    "title" : "Tomato Bruschetta Tortellini",
    "course" : "Entrees",
    "id" : 12,
    "price" : 14
  },
  {
    "description" : "Elegantly crafted creamy vanilla custard with a caramelized crunchy layer on top. Served with seasonal fruit.",
    "imageURL" : "http:\/\/restaurant.wpdiy.net\/genesis\/wp-content\/uploads\/2015\/08\/Creme-Brulee-163915034-200x200.jpg",
    "title" : "CrÃ¨me BrÃ»lÃ©e",
    "course" : "Desserts",
    "id" : 13,
    "price" : 9
  },
  {
    "description" : "Made with local granny smith apples to bring you the freshest classic apple pie available.",
    "imageURL" : "http:\/\/restaurant.wpdiy.net\/genesis\/wp-content\/uploads\/2015\/08\/Apple-Pie-450739739-200x200.jpg",
    "title" : "Apple Pie",
    "course" : "Desserts",
    "id" : 15,
    "price" : 5
  },
  {
    "description" : "Our thin crust pizzas are made fresh daily and topped with your choices of fresh meats, veggies, cheese, and sauce. Price includes two toppings. Add $1 for each additional topping.",
    "imageURL" : "http:\/\/restaurant.wpdiy.net\/genesis\/wp-content\/uploads\/2015\/08\/Handcrafted-Pizza-480957521-200x200.jpg",
    "title" : "Handcrafted Pizza",
    "course" : "Entrees",
    "id" : 16,
    "price" : 10
  },
  {
    "description" : "Our barbecued skewers include tofu, cherry tomatoes, bell peppers, and zucchini marinated in a ginger sesame sauce and charbroiled. Served with steamed rice.",
    "imageURL" : "http:\/\/restaurant.wpdiy.net\/genesis\/wp-content\/uploads\/2015\/08\/BBQ-Tofu-Skewers-184219445-200x200.jpg",
    "title" : "Barbecued Tofu Skewers",
    "course" : "Entrees",
    "id" : 17,
    "price" : 10
  }
]



//placeholderImg, item, price, description


//document.querySelector("#container .menu")
let placeholderImg2 = document.querySelector("#placeholderImg")
let item2 = document.querySelector("#item")
let price2 = document.querySelector("#price")
let description2 = document.querySelector("#description")
let injectTest2 = document.querySelector("#injectTest")
let btnAll2 = document.querySelector("#btnAll")
let body2 = document.querySelector("body")

btnAll2.addEventListener('click',function(){

  //populateDishes is functio that prints a template
  injectMenu(dishes)
})


//function that has a template, when gets called
//it will fill in the template with the appropriate key.value from the
//array

function injectMenu(dishes) {
  //dishesDiv is the reference to where it will be injected in html
  injectTest2.innerHTML = ''

  // for each item in dishesToDisplay(which represent dishes)
  dishes.forEach(function(eachDish){
    console.log(eachDish)
    let eachItem = `


    <div id="menuContainer2" class="container d-inline">

      <div id="burger" class="row ml-5">
        <div id= "placeholderImg" class="col-sm-3">
          <img src="${eachDish.imageURL}">
        </div>

        <div class="col-sm-9">
          <div class="row">
              <div class="col-sm-9">
                <h2 id="item">${eachDish.item}</h2>
              </div>
              <div class="col-sm-3">
                <h1 id="price">${eachDish.price}</h1>
              </div>

          </div>

          <div class="row">
            <div class="col-sm-12 mr-5">
              <h5 id= "description">${eachDish.description}</h5>
            </div>
          </div>
        </div>

      </div>

    </div>`
    console.log(eachDish)



    injectTest2.innerHTML += eachItem
  })

}
injectMenu(dishes)
