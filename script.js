const boxN1 = document.getElementById('n1')
const boxN2 = document.getElementById('n2')
const boxRes = document.getElementById('resultado')
const boxOp = document.getElementById('operador')
const resposta = document.getElementById('resposta')
const btn = document.getElementById('btn')
const aviso = document.getElementById('aviso')
const pular = document.getElementById('pular')

pular.addEventListener('click', ()=>{
    location.reload()
})

var n1 = Math.floor(Math.random() * 50);
var n2 = Math.floor(Math.random() * 50);
var ctl = Math.floor(Math.random() * 3);
var _resultado = 0;
var operador = "";

switch(ctl)
{
    case 0:
        _resultado = n1 + n2 
        operador = "+"
        break
        case 1:
            _resultado = n1 - n2
            operador = "-"
            break
            case 2:
                _resultado = n1 * n2
                operador = "x"
                break
                case 3:
                    _resultado = (n1 / n2).toFixed(2) 
                    operador = "/"
                    break;

}

var random = Math.floor(Math.random() * 2)

console.log(random)
switch(random)
{
    case 0:
        boxN1.innerHTML = "?"
        boxN2.innerHTML = n2
        break;
        case 1:
            boxN1.innerHTML = n1
            boxN2.innerHTML = "?"
            break;
}


boxRes.innerHTML = _resultado
boxOp.innerHTML = operador



btn.addEventListener('click', ()=>{
    // console.log("Resposta")
    // console.log(resposta.value)


    if(random == 0)
    {
        if(Number(resposta.value) === Number(n1))
        {
            console.log("REPOSTA CORRETA")
            aviso.innerHTML = "Parabens você acertou !"
            setTimeout(()=>{
            location.reload()
            }, 2000)
        }else 
        {
            aviso.innerHTML = "Tente novamente ! Você errou" 
        }
    }else{
        if(Number(resposta.value) === Number(n2))
        {
            console.log("REPOSTA CORRETA")
            aviso.innerHTML = "Parabens você acertou !"
            setTimeout(()=>{
            location.reload()
            }, 2000)
        }else 
        {
            aviso.innerHTML = "Tente novamente ! Você errou" 
        }
    }


})


