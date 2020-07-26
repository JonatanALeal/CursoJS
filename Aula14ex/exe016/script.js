function contar() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var ps = document.getElementById('ps')
    var res = document.getElementById('res')

    //res.innerHTML  = `Sua contagem ${res}`
     if(n1.value.length == 0 || n2.value.length == 0 || ps.value.length == 0) {
        res.innerHTML = 'Impossivel contar !!'
        //window.alert ('[ERRO] Valor incorreto no primeiro campo!')
    } else {
        res.innerHTML = `Contando: `
        var i = Number(n1.value)
        var f = Number(n2.value)
        var p = Number(ps.value)

        if( i < f) {//contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            } 

        } else if (i > f) { //Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }   
        }
        res.innerHTML += ` \u{1F62A} `
    }
}