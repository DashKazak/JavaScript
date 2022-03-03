let birds =['Owl', 'Robin', 'Eagle'] //an array, CAN change the size of an array. Behaves like a list in python
console.log(birds)

birds.forEach(function(birds, index){
    //repeat once for each object in array
    // function will be called once for each object in array
    console.log(index+1, birds.toUpperCase())

})

for (let x =0; x<birds.length; x++){
    let bird = birds[x]
    console.log(x+1, bird)
}

// let replaceALL = text.replace(/itec/g, 'ITEC') //regex

