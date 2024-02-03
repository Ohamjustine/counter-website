let count = 0

function adjustCount(amount) {
    count = count + amount;
    document.getElementById("counter").innerText = count;

}

function resetCount() {
    count = 0;
    document.getElementById("counter").innerText = count;
}