// financialmodelingprep.com Your API Key : dc2b9b8726339dd8eb2ee6dfc4d9e9b5


//SELECTORS/VARIABLES
const inputNode = document.querySelector('#myInput')
const selectNode = document.querySelector('#market')
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')

let urlNyse = 'http://localhost:3000/nyse_ticker.json'
let urlNasdaq = `http://localhost:3000/nasdaq_ticker.json`
// let url = `https://financialmodelingprep.com/api/v3/search-ticker?query=&limit=&exchange=NYSE&apikey=dc2b9b8726339dd8eb2ee6dfc4d9e9b5`
let nyseTickerData = []
let nasdaqTickerData = []

loadJson(urlNyse)
  .then(data => {
    nyseTickerData = data
    autoComplete(inputNode, nyseTickerData)
  })
  .catch(err => console.log('rejected:', err.message))
loadJson(urlNasdaq )
  .then(data => {
    nasdaqTickerData = data
  })
  .catch(err => console.log('rejected:', err.message))





//EVENT LISTENERS
selectNode.addEventListener('change', (event) => {  
  let selectedMarket = selectNode.options[selectNode.selectedIndex].innerText
  //CLEAN EVERYTHING
  document.querySelector('#displayInfo').innerHTML = ''
  button1.setAttribute('style', 'display: none;')
  button2.setAttribute('style', 'display: none;')
  button3.setAttribute('style', 'display: none;')
  inputNode.value = ''
  if(document.querySelector('#myTable')){
    document.querySelector('#myTable').remove()
  }

  //
  if(selectedMarket === 'NYSE'){
    autoComplete(inputNode, nyseTickerData)
  }else if(selectedMarket === 'NASDAQ'){
    autoComplete(inputNode, nasdaqTickerData)
  }
})

button1.addEventListener('click', (event) => {
  if(document.querySelector('#myTable')){
    document.querySelector('#myTable').remove()
  }
  // let col_headers = []
  // let row_headers = []
  // let companyDataObj = {} //???? 
  //get data and prepare data
  // inputNode.value = 'AAPL'
  // console.log('button clicked')
  // console.log(inputNode.value)
  let incomeAnnualUrl = 'http://localhost:3000/AAPL_anual_income.json'
  loadJson(incomeAnnualUrl)
  .then(data => {
  
  console.log(data) //data is array of objects (working with arrays and objects?)


  //pass it to function => generate and fill up the table
  generateDataTable(data)
  //create buttons

  })
  .catch(err => console.log('rejected:', err.message))


})
  
button2.addEventListener('click', (event) => {
  console.log('value of the company is ...')
  // console.log(this, 'from button2.addEventListener scope')

})

button3.addEventListener('click', (event) => {
  console.log('quality of the company is ...')

})



//FUNCTIONS

function calculateQuality(){

}

function calculateValue(){

}

function generateDataTable(arrOfObj){
  


  let body = document.getElementsByTagName("body")[0]
  let tbl = document.createElement("table")
  tbl.setAttribute("id", "myTable")
  let tblBody = document.createElement("tbody")
  //creating header row and cells
  let headerRow = document.createElement("tr")
  headerRow.setAttribute("id", "headerRow")
  //first header row cell
  let headerCell = document.createElement("th")
  let headerCellText = document.createTextNode('dushman')
  headerCell.appendChild(headerCellText)
  headerRow.appendChild(headerCell)
  //rest
  for (let k = 0; k < arrOfObj.length; k++) {
    let headerCell = document.createElement("th")
    let headerCellText = document.createTextNode(arrOfObj[k]['date'].slice(0,4)) // 2020-09-26 => 2020
    headerCell.appendChild(headerCellText)
    headerRow.appendChild(headerCell)
  }
  tblBody.appendChild(headerRow)

  // creating all cells
  
  //
  let j = 0
  let objKeys = Object.keys(arrOfObj[0])
  for (let i = 0; i < Object.keys(arrOfObj[0]).length; i++) { // rows
    // creates a table row
    let row = document.createElement("tr")
    row.setAttribute('id', `row${i}`)
     //creates first cell
    let firstCell = document.createElement("td")
    firstCell.setAttribute('id', 'cell0')
    firstCell.setAttribute('class', 'cell0')
    let firstrCellText = document.createTextNode(objKeys[j++])
    firstCell.appendChild(firstrCellText)
    row.appendChild(firstCell)

    // creates rest
    for(let m = 0; m < arrOfObj.length; m++){ // columns

    let cell = document.createElement("td")
    cell.setAttribute('id', `cell0${m}`)
    cell.setAttribute('class', `cell0${m}`)
    let cellText = document.createTextNode(arrOfObj[m][`${objKeys[i]}`])
    cell.appendChild(cellText)
    row.appendChild(cell)

    }

    tblBody.appendChild(row)
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody)
  // appends <table> into <body>
  body.appendChild(tbl) 


  button2.removeAttribute('style')
  button3.removeAttribute('style')

}

// the autocomplete function takes two arguments, the text field element and an array of possible autocompleted values
function autoComplete(inp, data) {
  //GETTING TICKERS FROM DATA SET
  const arr = data.map(element => element.name)
  // const arr = data.map(element => element.symbol)

  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      // console.log(this)
      let a, b, i, val = this.value
      //console.log(val)
      /*close any already open lists of autocompleted values*/
      closeAllLists()
  
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV")
      a.setAttribute("id", "autocomplete-list")
      a.setAttribute("class", "autocomplete-items")
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a)
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV")
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>"
          b.innerHTML += arr[i].substr(val.length)
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>"
        
          
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {

              // DELETE DISPLAY and Table INFO IF EXISTS
              if(document.querySelector('#myTable')){
                document.querySelector('#myTable').remove()
              }
              document.querySelector('#displayInfo').innerHTML = ''

              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value
              // console.log(this)


              //DISPLAY INFO OF THIS TICKER
              // console.log(data, inp.value)

              elementIndex = data.map(element => element.name).indexOf(inp.value)
              // elementIndex = data.map(element => element.symbol).indexOf(inp.value)
              
              
              // console.log(data[elementIndex])
              // document.querySelector('#displayInfo').style.display = 'block'
              for(key in data[elementIndex]){
                // console.log(data[elementIndex][key])
                let p = document.createElement("p")
                p.innerText = `Key: ${key} Value: ${data[elementIndex][key]}`
                document.querySelector('#displayInfo').appendChild(p)
                

              }

              // CREATING BUTTON
              // let btn = document.createElement('button')
              // btn.setAttribute('type', 'button')
              // btn.setAttribute('id', 'button1')
              // document.querySelector('#displayInfo').appendChild(btn)
              // document.querySelector('#button1').innerText = 'View Data Table'
              button1.removeAttribute('style')


              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    let x = document.getElementsByClassName("autocomplete-items")
    for (let i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i])
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target)
  });
}

async function loadJson (URL){
  const response = await fetch(URL)
  if(response.status === 200){
    const data = await response.json()
    // console.log(this, 'from loadJson function scope')
    return data
  }
  throw new Error(response.status);
}




























// //Helps developer to visualise data in the browser
// function myObjDisplayer(id, jsonData) {
//   let incomeStatementObj = {}
//   incomeStatementObj = JSON.parse(jsonData);
//   console.log(incomeStatementObj)
//   for (let i = 0; i < incomeStatementObj.length; i++){
//       for (let key in incomeStatementObj[i]) {
//           if (incomeStatementObj[i].hasOwnProperty(key)) { //нужно запомнить
//               let elem = document.querySelector(`#${id}`)
//               elem.innerHTML += key + ":" + incomeStatementObj[i][key] + "|||||||||||||||||";
//           }
//       }
//       let br = document.createElement("br")
//       let p = document.createElement("p")
//       p.innerText = "Annaul Income Statement"
//       demo.appendChild(br)
//       demo.appendChild(p)
//   }
// }




// function printObject(obj){
//   let res = '<ul>'
//   for(i in obj){
//     res += '<li><b>' + i + '</b>:' + obj[i] + '</li>'
//     document.write(res)
//   }
// }



//

// class $ {
//   constructor(selector){
//     this.elems = document.querySelectorAll(selector)
//   }
//   on(event, callback){
//     for(let i=0;i<this.elems.length;i++){
//       this.elems[i].addEventListener(event, callback)
//     }
//   }

// }

// let elems = new $('.item')
// elems.on('click', function(){
//   this.style.color = 'red'
// })