setInterval(function() {
    const h1 = document.querySelector('.message');
    if (!h1.classList.contains('message-show')) {
        h1.classList.add('message-show');
    } else {
        h1.classList.remove('message-show');
    }
}, 750);