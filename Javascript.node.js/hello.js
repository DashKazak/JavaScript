console.log('Hello, world!')

//let is used to create a variable
//var is used to create variables, but it's not recommended due to wider scope
//const is used to create constants -values that can't change

//to trim white space use variable.trim()

//use const for variables defined by html input
//t0 extract their value do const var . value and assign it to a new var
//then you can trim that var

// function shout(text){ //js ignores extra arguments but needs at least one argument
//     let shouty_text = text.toUpperCase() + '!!!!'
//     return shouty_text
// }
// console.log(shout('hello world!'))

function f_to_c(f, decimalPlaces){
    let c = (f - 32)*5/9
    if(decimalPlaces){
        return c.toFixed(decimalPlaces)
    } else{
        return c
    }
    
}

let today_temp  = 75
tc= f_to_c(today_temp,2)
console.log(tc)

function isMNzip(code){
    if(code>=55001 && code<=56763){
        return true
    } else{
        return false
    }
}

console.log(isMNzip('55403')) //type coercion both 55403 and '55403' will work
console.log(isMNzip(55444))
console.log(isMNzip(0))


function gpafunc(gpa){
    // if (gpa>=0 && gpa<=4){
    //     return true
    // }else{
    //     return false
    // }
    return gpa>=0 && gpa<=4
}

console.log(gpafunc(3))
console.log(gpafunc(-4))
console.log(gpafunc(4.1))
console.log(gpafunc(2.5))
console.log(gpafunc(4))

function cityState(city,state){
    return `${city}, ${state.toUpperCase()}`
}

console.log(cityState('Minneapolis','mn'))
let address = cityState('Seattle', 'WA')
console.log(address)

let age = 56
let usCitizenTime = 3
let stateOfResidence = 'Wisconsin'
let stateToRep = 'Minnesota'

if(age >= 30 && usCitizenTime >= 9 && stateOfResidence == stateToRep){
    console.log('Welcome, senator')
}else{
    console.log('You don\'t meet the criteria')
}

//faulsy values - undefined, null, empty lists, empty objects, 0 , false, all == to 0 
//which is why === is  a better practice, as it avoids type coercion