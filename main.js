const block = document.querySelector('.block');
const screenWidth = window.innerWidth;
const blockWidth = parseInt(getComputedStyle(block).width, 10)
let progressBar = block.querySelector('.progressBar')
let isMoving = false;

console.log(screenWidth)


function throwRight(count) {
    if (isMoving) return;

    let leftVal = Math.floor(parseInt(getComputedStyle(block).left, 10));
    let distance = Math.floor(20 * count)
    let destination = leftVal + distance;

    let inc = count * 2;


    let timerId = setInterval(function () {
        isMoving = true;
        if (leftVal >= destination) {
            isMoving = false;
            clearInterval(timerId);
        }

        leftVal += (((destination - (leftVal + inc)) / distance) * inc) + inc / 2;
        block.style.left = leftVal + 'px'
    }, 20)

}

// 100 1
// 30 .03

document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    let max = 20;
    let progress = 0;
    document.addEventListener("keydown", (e) => {
        if (count === max || e.code !== "ArrowUp") return;
        count++
        progress = count * (100 / max);

        progressBar.style.width = progress + "%";
        if (count === max) {
            progressBar.style.backgroundColor = "red";
        } else {
            progressBar.style.backgroundColor = "green";
        }


    })

    document.addEventListener("keyup", (e) => {
        if (e.code === "ArrowUp") {
            throwRight(count);
        }
        progressBar.style.width = "0%";
        count = 0;

    })
})