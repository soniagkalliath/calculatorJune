

//1. display all numbers and operators other than ac & = inside input with id = result
//when we click on it

function display(num){
    result.value+=num
}

//1. clear all contents from input when we click on ac button

function clearAll(){
    result.value = ""
}

//3. Evaluate expression using eval
function output(){
    result.value = eval(result.value)
}

//4. Remove last item
function removeItem(){
    result.value = (result.value).slice(0,-1)
}