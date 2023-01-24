

const calculateChange = (input) => {
    userInputConverted = input * 100;
    var change = {}
    const changeTypes = [ 'R20', 'R10', 'R5', 'R1', '20c', '10c']
    const changeValues = [2000, 1000, 500, 100, 20, 10]

    var amount;

    for(var i = 0; i <= changeValues.length; i++){

        // TODO : FIX BUG AT Math.floor(16.9) Unexpected behaviour: iteration omitting 10c

         amount = Math.floor(userInputConverted/changeValues[i])
         if(amount > 0){
            change[changeTypes[i]] = amount
           userInputConverted = userInputConverted%changeValues[i]
         }

    }


    return change
}

// console.log(calculateChange(16.9))

export {calculateChange}

