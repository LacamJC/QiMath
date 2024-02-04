// Instanciando objetos da pagina
const boxN1 = document.getElementById('n1')
const boxN2 = document.getElementById('n2')
const boxRes = document.getElementById('resultado')
const boxOp = document.getElementById('operador')
const resposta = document.getElementById('resposta')
const btn = document.getElementById('btn')
const aviso = document.getElementById('aviso')
const pular = document.getElementById('pular')


pular.addEventListener('click', ()=>{ 
    location.reload()// Atualizando a pagina caso o usuario clique em reiniciar
})

var n1 = Math.floor(Math.random() * 50); // Gerando o valor aleatorio entre 0 e 50, se quiser aumentar apenas mude o valor 50 para o desejado
var n2 = Math.floor(Math.random() * 50); 
var ctl = Math.floor(Math.random() * 3); // Aqui um numero random ira decidir o operador da conta 
var _resultado = 0;
var operador = "";// Esse aqui é somente para questoes visuais na pagina html

switch(ctl) // Switch para controlar resultado e conta
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
                    _resultado = (n1 / n2).toFixed(2) // Talvez as funçoes de divisão estejam meio erradas
                    operador = "/"
                    break;

}

var random = Math.floor(Math.random() * 2) // Aqui gera um valor para escolher qual sera o numero escondido

console.log(random)
switch(random)// Switch para esconder o operador
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



btn.addEventListener('click', ()=>{ // Um evento click no botao resultado para verificar se o usuario esta correto ou nao

    if(random == 0)
    {
        if(Number(resposta.value) === Number(n1))
        {
            console.log("REPOSTA CORRETA")
            aviso.innerHTML = "Parabens você acertou !"
            setTimeout(()=>{ // caso acerte a pagina ira reiniciar para mostrar novos valores
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
            location.reload() // caso acerte a pagina ira reiniciar para mostrar novos valores
            }, 2000)
        }else 
        {
            aviso.innerHTML = "Tente novamente ! Você errou" 
        }
    }


})


