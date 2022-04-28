let botao = document.querySelector('input#botao')
let formula = document.querySelector('div#formula')
let resultado = document.querySelector('div#resultado')

botao.addEventListener('click',apertar)

function apertar(){
    let a = Number(prompt('valor de a'))
    let b = Number(prompt('valor de b'))
    let c = Number(prompt('valor de c')) 
    let delta = Number(b ** 2) - (4 * a * c)

    formula.innerHTML = `<h2>Solucionando Bhaskara<h2>`
    resultado.innerHTML = `<p>Equação atual <strong>${a}x² + ${b}x + ${c} = 0</strong></p>
                           <p>valor de b é = ${b} <br>valor de a é = ${a} <br>valor de c é = ${c}</strong><p>
                           <p>O resultado é = <strong>&Delta; = ${delta}</strong><p>`
}
    


