
const run = () => {
    var count = document.querySelector("#count")
    var n = Number(count.innerText)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    delta = 200 / n * 360* 3 * Math.PI / 180;
    ctx.translate(70, 70);
    ctx.rotate(delta);
    ctx.drawImage(img, -75, -75, 150, 150);
    // ctx.fillRect(0,0,30,30);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    count.innerText = n + 1
    if (n > 1000) {
        clearInterval(interval); // If exceeded 100, clear interval
    }
}

const roll = () => {
    var interval = setInterval(run, 10);
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.onload = roll;
img.src = 'https://assets.piliapp.com/s3lnk/random/wheel/screenshot.png';
