let itemCount = 0

// Cards
const cards = document.querySelectorAll('.cards');

for (let card of cards) {
    const index = card;
    const btn = index.querySelector('.btn');
    const bnt = btn.addEventListener('click', function(){
        
        // Items Count
    const itemCounts = document.getElementById('item-count');
    itemCount++;
    itemCounts.innerText = itemCount

    // Add place
    const addPlace = document.getElementById('add-place');
    const span = document.createElement('span');
        span.innerText
        addPlace.appendChild(span);
    })
}