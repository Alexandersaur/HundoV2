//--Get the values from the user (controller function)--//
function getValues(){
    //--Get values from the page--//
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //--Ensure values are integers (input validation)--//
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //--Call generateNumbers function--//
        let numbers = generateNumbers(startValue, endValue);
        //--Call displayNumbers function--//
        displayNumbers(numbers);

    }else{
        alert("You must enter integers");
    }
}

//--Generate the numbers from startValue to endValue (logic function)--//
function generateNumbers(sValue, eValue){

    let numbers = [];
    //--Get all numbers from start to end--//
    for(let index = sValue; index <= eValue; index++){
        //--Execute in a loop until index = eValue--//
        numbers.push(index);
    }
    return numbers;
}

//--Display the numbers and mark the even numbers in bold (display function)--//
function  displayNumbers(numbers){
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let number = numbers[index];
        //--Check if number is even, format and display it in a table--//
        if(number % 2 == 0){
            className = "even";
        }else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}