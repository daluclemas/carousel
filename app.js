const imgs = document.getElementById('imgs');

console.log(imgs);

const img = document.querySelectorAll('#imgs img');

console.log(img);

let idx = 0;
console.log(img.length - 1)

const runIt = () => {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx*300}px)`;


};

// runIt()
setInterval(runIt, 2000);