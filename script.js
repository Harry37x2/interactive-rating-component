const stars = document.querySelectorAll(".stars a");
let rating = 0;

stars.forEach((star, clickedIdx) => {
    star.addEventListener('click', () => {
        stars.forEach((otherStar, otherIdx) => {
            if (otherIdx <= clickedIdx) {
                otherStar.classList.add("active");
            }
        })
        console.log(`${clickedIdx + 1}`);
        rating = clickedIdx + 1;
    });
});

const prevoted = document.querySelector('.rating-state')
const postvoted = document.querySelector('.result')

document.getElementById("submit-button").onclick = function () {
    prevoted.classList.add('hidden');
    postvoted.classList.remove('hidden');
    document.getElementById("rating").innerText = rating;
};