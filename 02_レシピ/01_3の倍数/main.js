const genkiFunction = function(number){
  for (let n = 1; n<= number; n++){
    setTimeout(function(){
    if (n % 3 === 0){
      console.log(`${n}!!!!!!`)
    }
    else{
      console.log(n)
    }
  }, 1000 * n)
}
}


genkiFunction(24)