const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');
let timesClicked = 0;

loveMe.addEventListener('dblclick', (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    const x = e.clientX - loveMe.offsetLeft;
    const y = e.clientY - loveMe.offsetTop ;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    loveMe.appendChild(heart);
    times.innerHTML = ++timesClicked;
    setTimeout(() => heart.remove(), 1000);
})