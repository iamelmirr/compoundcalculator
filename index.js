const prompt = require('prompt-sync')()

// This is my compound interest calculator that prompts a user for some inputs, and finally calculates the compuonded interest value


 init_amount = 20000
 monthly_contribution = 400
 interest_rate = 10 
 number_of_years = 30



// step 1 - define a function that we can use to calculate the final value of the compounded interest


function calculateInterest (init_amount, monthly_contribution, interest_rate, number_of_years) {
    let total = init_amount

    let annual_contribution = monthly_contribution * 12

    for (let i = 0; i < number_of_years; i++) {
         total = total + annual_contribution
         total = total * ((100 + interest_rate) / 100) 
    }

    return total.toFixed(2)
}






// step 2 - define a function that would calculate the difference - the effect that compounding has had


function calculateRegular (init_amount, monthly_contribution, number_of_years) {
    let regular_value = init_amount + monthly_contribution * 12 * number_of_years

    return regular_value.toFixed(2)
}







// step 3 - create a run function that then prompts the user for all necessary inputs required to calculate the final amount

function run() {
    let init_amount = parseInt(prompt('What is your initial investment($)?'))
    let monthly_contribution = parseInt(prompt('How much would you like to contribute monthly ($)?'))
    let interest_rate = parseInt(prompt('What is your expected interest rate (%) over these years?'))
    let number_of_years = parseInt(prompt('For how many years would you like to compound?'))

    printOutput (init_amount, monthly_contribution, interest_rate, number_of_years)

}









// step 4 - inside of said function, make a nice print statement using a template literal string that gives the financial breakdown


function printOutput (init_amount, monthly_contribution, interest_rate, number_of_years) {
    let final_value = calculateInterest (init_amount, monthly_contribution, interest_rate, number_of_years)
    let regular_val = calculateRegular (init_amount, monthly_contribution, number_of_years)
    

    let summary = `FINAL_VALUE: ${final_value}\nVALUE_WITHOUT_INTEREST: ${regular_val}\nDIFFERENCE: ${final_value - regular_val}\n\nINIT_AMOUNT: ${init_amount}\nMONTHLY_CONTRIBUTION: ${monthly_contribution}\nINTEREST_RATE: ${interest_rate}\nNUMBER_OF_YEARS: ${number_of_years}`

    console.log(summary)
}


run()