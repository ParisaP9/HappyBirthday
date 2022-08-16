const btn = document.querySelector("#btn");

btn.addEventListener("click", e => {
    btn.style.display = "none"
    secondsCount("10");
});

function secondsCount(counter) {
    const secondsCount = document.querySelector("#secondsCount");
    const msg = document.querySelector("#msg");
    const img = document.querySelector("#img");

    const interval = setInterval(() => {
        secondsCount.innerHTML = counter;
        counter--;

        if (counter < 0) {
            clearInterval(interval);
            secondsCount.style.display = "none";
            msg.style.display = "block";
            img.style.display = "block";
        }
    }, 1000);

}