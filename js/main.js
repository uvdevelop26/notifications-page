const toggleButton = document.querySelector('.toggle-state');
const notifBar = document.querySelectorAll('.content-body > .unread');
const unreadPoints = document.querySelectorAll('.point');
const notifCounter = document.querySelector('.notif-counter');


toggleButton.addEventListener('click', () => {
    notifBar.forEach(item => {
        item.classList.toggle('unread')
    });

    unreadPoints.forEach(item => {
        item.classList.toggle('display-none');
    });

    if (notifCounter.innerHTML == 3) {
        notifCounter.innerHTML = 0;
    } else if (notifCounter.innerHTML == 0) {
        notifCounter.innerHTML = 3;
    }
});