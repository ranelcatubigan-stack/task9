function totalClick(click) {
    const coin = document.getElementById("coin");
    const sumvalue = parseInt(coin.textContent);
    const newValue = Math.max(0, sumvalue + click); // Ensure value doesn't go below 0
    coin.textContent = newValue;
}