let itemCount = 0;
let totalPriceCost = 0;
let totalBudgetAmount = 900;

// Cards
const cards = document.querySelectorAll('.cards');

for (let card of cards) {
    const index = card;
    const btn = index.querySelector('.btn');
    const bnt = btn.addEventListener('click', function(){

    // // Add place
    // const findTitle = index.querySelector('h2').innerText;
    // const placeCost = index.querySelector('span').innerText;
    // const addPlace = document.getElementById('add-place');
    // const span = document.createElement('span');
    //     span.innerText = ' ' + findTitle + ' ' + placeCost;
    //     addPlace.appendChild(span);

    // // Total Cost
    // const price = parseFloat(placeCost);
    // totalPriceCost += price;
    // const totalCost = document.getElementById('total-cost');
    //     totalCost.innerText = totalPriceCost
    
    // // Grand Total Amount
    // const grandTotalAmount = document.getElementById('grand-amount');
    //     grandTotalAmount.innerText = totalPriceCost

    

    if(totalBudgetAmount <= 0){
        console.log('tomar budget ses');
    }
    else{

         // Items Count
    const itemCounts = document.getElementById('item-count');
        itemCount++;
        itemCounts.innerText = itemCount

        // Add place
    const findTitle = index.querySelector('h2').innerText;
    const placeCost = index.querySelector('span').innerText;
    const addPlace = document.getElementById('add-place');
    const span = document.createElement('span');
        span.innerText = ' ' + findTitle + ' ' + placeCost;
        addPlace.appendChild(span);

    // Total Cost
    const price = parseFloat(placeCost);
    totalPriceCost += price;
    const totalCost = document.getElementById('total-cost');
        totalCost.innerText = totalPriceCost
    
    // Grand Total Amount
    const grandTotalAmount = document.getElementById('grand-amount');
        grandTotalAmount.innerText = totalPriceCost
    
     // Total Budget 900$
        totalBudgetAmount -= price
    const totalBudget = document.getElementById('total-budget');
        totalBudget.innerText = totalBudgetAmount
    }


    })

}