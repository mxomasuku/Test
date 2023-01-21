const changeCalculator = (input) => {
    try{
        if(input > 0.10){
            console.log('Input good')
        }else if(input <= 0.10) console.log(input)
    }
    catch(e){
        console.log('input not a number')
    }


}

changeCalculator(2.5)
