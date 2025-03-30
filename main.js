let bill = 0
let tipPercentage = 0
let numberOfPeople = 0


//receber valor da conta 
let billInput = document.querySelector("#bill")
billInput.addEventListener('input', receiveBillValue)

function receiveBillValue(){
    bill = billInput.valueAsNumber
}

//receber o numero de pessoas

let numberOfPeopleInput = document.querySelector ("#people")
numberOfPeopleInput.addEventListener('input', )

function receiveNumberOfPeople(){
    numberOfPeople  = numberOfPeopleInput.valueAsNumber
    calculate()
}

function receiveTipPercentage (value){
    let buttonSelected = document.querySelector ()
}

function calculate(){
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0){
        console.log("calculate")
    } else {
        console.log ("Ainda não é possível calcular")
    }
}