let buttonOne = document.getElementById('ButtonOne')
let paragraphOne = document.getElementById('allInfo')

buttonOne.addEventListener('click', function(){
    let loanAmount = prompt("Please enter a loan amount(without commas): ")
    let downPayment = prompt("Please enter a downpayment as a percentage of the total loan amount: ")
    let years = prompt("How many years would you like this to be, 15 or 30")
    let firstPart = (loanAmount * (downPayment/100))
    let secondPart = loanAmount - firstPart
    
    
    monthlyPayment = (((0.0575 / 12) * secondPart) / (1 - Math.pow(1 + (0.0575 / 12), (years * -12)))).toFixed(2); 
    console.log(monthlyPayment)
    let totalInterest = (monthlyPayment * years*12) - loanAmount

    paragraphOne.textContent = `Mortgage Term in years: ${years}`
    let paragraphTwo = document.createElement('p')
    paragraphTwo.textContent = `Mortgage Interest Rate: 5.75%`
    let paragraphThree = document.createElement('p')
    paragraphThree.textContent = `Mortgage Amount: ${loanAmount + totalInterest.toFixed(2)}`
    let paragraphFour = document.createElement('p')
    paragraphFour.textContent = `Total Interest Amount: ${totalInterest.toFixed(2)}`
    let paragraphFive = document.createElement('p')
    paragraphFive.textContent = `Total Mortgage Amount: ${loanAmount + totalInterest.toFixed(2)}`
    paragraphOne.appendChild(paragraphTwo)
    paragraphOne.appendChild(paragraphThree)
    paragraphOne.appendChild(paragraphFour)
    paragraphOne.appendChild(paragraphFive)
    
    for(let i = 0; i < years*12; i++){
        interestRate = monthlyPayment/12
        principle = monthlyPayment-interestRate
        let paragraphSix = document.createElement('p')
        paragraphSix.textContent = `Interest Rate: ${interestRate.toFixed(2)}`
        let paragraphSeven = document.createElement('p')
        paragraphSeven.textContent = `Principle: ${principle.toFixed(2)}`
        let paragraphEight = document.createElement('p')
        paragraphEight.textContent = `Balance: ${loanAmount-principle.toFixed(2)}`
        paragraphOne.appendChild(paragraphSix)
        paragraphOne.appendChild(paragraphSeven)
        paragraphOne.appendChild(paragraphEight)
    }

})

