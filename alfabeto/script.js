function converter() {
    let text = document.getElementById('txt')
    let txt = text.value;
    txt = txt.toString().toLowerCase().trim();
    let newtxt = txt.replace(/[^a-z ]/gi, '')
    let c = newtxt.replace(/c/g, '3')
    let f = c.replace(/f/g, '6')
    let i = f.replace(/i/g, '9')
    let l = i.replace(/l/g, '12')
    let o = l.replace(/o/g, '15')
    let r = o.replace(/r/g, '18')
    let u = r.replace(/u/g, '21')
    let convert = u.replace(/x/g, '24')

    res.innerHTML = `Texto convertido:<br>${convert}`
}