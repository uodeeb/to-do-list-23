// var hd=document.getElementById("hd")
// console.log(hd)
// var cont=document.querySelector("#cont")
// console.log(cont)
// // var hd02=document.createElement("h2")
// // console.log(hd02)
// // cont.appendChild(hd02)
// // hd02.textContent="Add a new item here......."
// // hd02.id="hd2"
// // function addStyle(){
// //     hd02.className="head"
// // }
// // addStyle()
// var usrInpt=document.getElementById("user__input")

// function addInput(e){
//     e.preventDefault();
//     console.log(usrInpt.value)
//     var newEl=document.createElement("h3")
//     newEl.textContent=usrInpt.value
//     cont.appendChild(newEl)
// }
// // setTimeout(addInput, 10000)
// var addButton=document.getElementById("add")
// console.log(addButton)
// addButton.addEventListener("click", addInput)

/*-----------------------------project plan ---------------------------- */
/*
## Description:
To do list app to allow the user to add items with date and time. Button to inform
the user if the item was done or not. the items should be ordered. button  to remove the item from
the item. reminder. handle repeats
## work flow
1. use HTML & CSS to design the UI of the app. ------------------
2. collect user input
3. add item number
4. add date
5. add time
6. add remove button
7. add done button  
8. add reminder
9. handle repeated items
10. generate UI
*/
var items=[]

// create a function to collect user input
function collectUserInput(){
    var userInput=document.getElementById("user__input")
    console.log(userInput)
    var addBut=document.getElementById("add")
    console.log(addBut)
    addBut.addEventListener("click", function(e){
        e.preventDefault();
        console.log(userInput.value)
        items.push(userInput.value)
        console.log(items)
        itemNumber(items)
        return userInput.value
    })
}
// call the function
collectUserInput()
console.log(items)

//create a function to add item number
function itemNumber(arr){
    for(item of arr){
        console.log(arr.indexOf(item) + 1)
        return arr.indexOf(item) + 1
    }
}

// create a functio to get date
function getDate(){
    var date = new Date()
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}
//getDate()

//create a function to get time
function getTime(){
    var date=new Date()
    var hrs=(date.getHours() < 10)? `0${date.getHours()}`:date.getHours()
    var mins=(date.getMinutes() < 10)?`0${date.getMinutes()}`:date.getMinutes()
    var secs=(date.getSeconds() < 10)?`0${date.getSeconds()}`:date.getSeconds()
    console.log(`${hrs}:${mins}:${secs}`)

}
//getTime()

// create ann alert
// function addReminder(){
//     alert("Hi, you have to visit the gym now!!!!!!!!")
// }
// addReminder()

// create a function to remove the item
function removeItem(){
    var butt=document.createElement("button")
    butt.textContent="X"
    var err=document.getElementById("err")
    err.appendChild(butt)
    butt.addEventListener("click", function(){
        var hd=document.getElementById("hd")
        hd.remove()
    })
}

removeItem()

// create functionn to confirm item
function confirm(){
    var confirmButt=document.createElement("button")
    confirmButt.textContent="pending.."
    confirmButt.className="cnfrm"
    var err=document.getElementById("err")
    err.appendChild(confirmButt)
    confirmButt.addEventListener("click", function(){
        console.log("working!!")
        confirmButt.classList.toggle("confirmed")
        confirmButt.classList.contains("confirmed")?confirmButt.textContent="Confirmed":confirmButt.textContent="pending.."

    })

}

confirm()