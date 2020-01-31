function imc() {
    let alt = document.getElementById('txtalt')
    let peso = document.getElementById('txtpeso')

    if (alt.value.length == 0) {
        alert('Por favor, digite sua altura!')
    } else if (peso.value.length == 0) {
        alert('Por favor, digite seu peso!')
    } else {
        let height = Number(alt.value)
        let weight = Number(peso.value)
        let conta = weight / (height * height)
        let imc = parseFloat(conta.toFixed(2))
        res.innerHTML = `Seu IMC é de ${imc}<br>`
        if (imc < 16) {
            res.innerHTML += 'Situação: Subpeso Severo<br>'
        } else if (imc < 20) {
            res.innerHTML += 'Situação: Subpeso<br>'
        } else if (imc < 25) {
            res.innerHTML += 'Situação: Normal<br>'
        } else if (imc < 30) {
            res.innerHTML += 'Situação: Sobrepeso<br>'
        } else if (imc < 40) {
            res.innerHTML += 'Situação: Obeso<br>'
        } else {
            res.innerHTML += 'Situação: Obeso Mórbido<br>'
        }

    }
}