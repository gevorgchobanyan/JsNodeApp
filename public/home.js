//Понимание javascript - работа с DOM
//youtube.com/watch?v=-2WiaSvOj78&ab_channel=ДмитрийЛаврик


// let p = document.querySelector('#dus .dushman')

// let arrPics = document.querySelectorAll("#images img")
// console.log(arrPics.length)
// let i = 0

// let btn1 = document.querySelector('.prev')
// let btn2 = document.querySelector('.next')

// btn2.addEventListener('click', (event) => {

//     if(i <= arrPics.length-2){
//         arrPics[i].style.display = 'none'
//         arrPics[++i].style.display = 'block'
//     }else{
//         btn2.setAttribute("disabled", true);
//         btn1.removeAttribute('disabled')
//     }
// })
// btn1.addEventListener('click', (event) => {

//     if(i >= 1){
//         arrPics[i].style.display = 'none'
//         arrPics[--i].style.display = 'block'
//     }else{
//         btn1.setAttribute("disabled", true);
//         btn2.removeAttribute('disabled')
//     }
// })











// ВНУТРЕННИЙ МИР JS - ОБЪЕКТЫ И ПРОТОТИПЫ
// https://www.youtube.com/watch?v=zWjT_2hFkMw&ab_channel=%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9%D0%9B%D0%B0%D0%B2%D1%80%D0%B8%D0%BA



//

// class Animal {
//     constructor(tail){
//         this.tail = tail
//     }
// }

// //extends adds prototype (New Syntax)
// class Cat extends Animal{
//     constructor(tail, length, color){
//         super(tail)
//         this.length = length
//         this.color = color
//     }
//     getVoice(){
//         return "mew mew mew mew"
//     }

// }


// let cat1 = new Cat(true, 10, 'red')
// console.log(cat1)
// let cat2 = new Cat(true, 10, 'red')
// console.log(cat2)
// let cat3 = new Cat(true, 10, 'red')
// console.log(cat3)


// function Animal(tail) {
//     this.tail = 10
// }

// // constructor function Old Syntax
// function Dog(length, color){
//     this.length = length
//     this.color = color
//     getVoice = function(){
//         return "wuf wuf wuf"
//     }
// }


// //adds prototype
// Dog.prototype = new Animal()

// let dog1 = new Dog(20, 'black')
// console.log(dog1)
// let dog2 = new Dog(20, 'black')
// console.log(dog2)
// let dog3 = new Dog(20, 'black')
// console.log(dog3)




// const dog1 = Object.create(cat1)
// console.log(dog1)












// Понимание javascript - замыкания, контекст, callback.
//https://www.youtube.com/watch?v=LM0tW2MZJZ4&ab_channel=%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9%D0%9B%D0%B0%D0%B2%D1%80%D0%B8%D0%BA


// //closure, context, this

// const pElements = document.querySelectorAll('p')
// for(let i=0;i<pElements.length;i++){
//   pElements[i].onclick = changeColor
//   // function changeColor(event){ //works in the same way as below 
//   //   // console.log(event)
//   //   this.classList.toggle('p-active')
//   // }
// }

// // setInterval(function(){
// //   let rand = mrRand(0, pElements.length-1)
// //   changeColor.call(pElements[rand])

// // }, 200)

// function mrRand(min,max){
//   return Math.floor(Math.random() * (max-min+1))
// }


// function changeColor(event){
//   this.classList.toggle('p-active')
// }



// // callback
// //dushman - rab
// function dushmanKopalshik(callback){
//   //sync execution
//   console.log('kopayu transheu')
//   callback()
//   console.log('vse eshe kopayu transheu')

// }

// //komandi KOMANDIRA
// function zakopaiTransheu(){
//   console.log('Zakapivayu transheyu posle vikapivaniya')
// }

// function idivMagaz(){
//   console.log('idu v magaz posle vikapivaniya')
// }


// dushmanKopalshik(zakopaiTransheu)











// Javascript. Стандарт ES6. Смысл, основные фишки и подвохи.
// https://www.youtube.com/watch?v=Spme1IW1ejg&ab_channel=%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9%D0%9B%D0%B0%D0%B2%D1%80%D0%B8%D0%BA



