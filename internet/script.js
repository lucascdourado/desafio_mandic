function carregar() {
    online = window.navigator.onLine;
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    if (online == true) {
        msg.innerHTML = ''
        msg.innerHTML += '<strong>ONLINE</strong>'
        img.src = 'online.png'
        document.body.style.background = '#8bff96'
    } else {
        msg.innerHTML = ''
        msg.innerHTML += '<strong>OFFLINE</strong>'
        img.src = 'offline.png'
        document.body.style.background = '#ff8f9b'
    }

    window.addEventListener('offline', function(e) {carregar()});
    window.addEventListener('online', function(e) {carregar()});
}
