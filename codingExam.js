let buttonOne = document.getElementById('ButtonOne')
let paragraphOne = document.getElementById('allInfo')

buttonOne.addEventListener('click', function(){
    let loanAmount = parseInt(prompt("Please enter a loan amount(without commas): "))
    let downPayment = parseInt(prompt("Please enter a downpayment as a percentage of the total loan amount: "))
    let years = parseInt(prompt("How many years would you like this to be, 15 or 30"))
    if (years !== 15 && years !== 30){
        alert('Please enter 15 or 30')
    }
    let firstPart = (loanAmount * (downPayment/100))
    let secondPart = loanAmount - parseInt(firstPart)
    
    
    monthlyPayment = (((0.0575 / 12) * parseInt(secondPart)) / (1 - Math.pow(1 + (0.0575 / 12), (years * -12)))).toFixed(2); 
    console.log(monthlyPayment)
    let totalInterest = (parseInt(monthlyPayment) * years*12) - loanAmount
    let mortgageAmount = parseInt(loanAmount) + parseInt(totalInterest.toFixed(2))
    let totalMortgage = loanAmount + totalInterest

    paragraphOne.textContent = `Mortgage Term in years: ${years}`
    let paragraphTwo = document.createElement('p')
    paragraphTwo.textContent = `Mortgage Interest Rate: 5.75%`
    let paragraphThree = document.createElement('p')
    paragraphThree.textContent = `Mortgage Amount: $${loanAmount}`
    let paragraphFour = document.createElement('p')
    paragraphFour.textContent = `Total Interest Amount: $${totalInterest.toFixed(2)}`
    let paragraphFive = document.createElement('p')
    paragraphFive.textContent = `Total Mortgage Amount: $${totalMortgage}`
    paragraphOne.appendChild(paragraphTwo)
    paragraphOne.appendChild(paragraphThree)
    paragraphOne.appendChild(paragraphFour)
    paragraphOne.appendChild(paragraphFive)


    for(let i = 0; i < years*12; i++){
        const interestRate = (0.0575/12) * secondPart

        principle = monthlyPayment-interestRate
        secondPart = secondPart - principle
        let paragraphSix = document.createElement('p')
        paragraphSix.textContent = `Month ${i+1}: Interest: $${interestRate.toFixed(2)} Principle: $${principle.toFixed(2)} Balance: $${secondPart.toFixed(2)}`
        paragraphOne.appendChild(paragraphSix)
        if(secondPart < 0){
            let paragraphSeven = document.createElement('p')
            paragraphSeven.textContent = 'Ending...'
            paragraphOne.appendChild(paragraphSeven)
        }
        
    }

})

