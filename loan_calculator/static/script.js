document.getElementById('calculate-button').addEventListener('click', function(event) {
    // Prevent the form from submitting immediately
    event.preventDefault();

    // Start the money falling animation
    startMoneyAnimation();

    // Wait for a short duration before submitting the form
    setTimeout(function() {
        document.getElementById('loan-form').submit();
    }, 1000);
});

function startMoneyAnimation() {
    const moneyContainer = document.getElementById('money-container');
    moneyContainer.innerHTML = ''; // Clear previous money elements

    for (let i = 0; i < 30; i++) {
        const money = document.createElement('div');
        money.classList.add('money');
        money.style.left = Math.random() * window.innerWidth + 'px';
        moneyContainer.appendChild(money);
    }

    // Remove money elements after animation
    setTimeout(function() {
        moneyContainer.innerHTML = '';
    }, 7000);
}
