let memoria = "0";
let parcela1=0,parcela2=0,resultado=0;
var estaSomando=false,estaSubtraindo=false,estaMultiplicando=false,estaDividindo = false;
const tela = document.querySelector(".tela");

function botaoClicado(valor){
    if(isNaN(parseInt(valor))){
        botaoSimbolo(valor)
    }else{
       botaoNumero(valor);
    }
}

function botaoSimbolo(simbolo){
    if(simbolo == "+"){
       operacaoSomar(memoria,simbolo);
    }else if(simbolo == "="){
        operacaoIgual();
    }else if(simbolo == "*"){
        operacaoMultiplicar(memoria,simbolo);
    }else if(simbolo == "/"){
        operacaoDividir(memoria,simbolo);
    }else if(simbolo == "-"){
        operacaoSubtrair(memoria,simbolo);
    }else if(simbolo == "AC"){
        limpaMemoria();
        memoria = 0;
    }
    renderiza()
}

function limpaMemoria(){
    memoria = 0,parcela1 = 0,parcela2 = 0;
    estaSubtraindo = false,estaSomando = false,estaMultiplicando = false,estaDividindo=false;
}

function operacaoSomar(){
    estaSomando = true;
    estaDividindo=false,estaMultiplicando=false,estaSubtraindo = false;
    parcela1 = Number.parseInt(memoria);
    memoria = 0;
    renderiza();
}

function operacaoSubtrair(){
    estaSubtraindo = true;
    estaDividindo=false,estaMultiplicando=false,estaSomando = false;
    parcela1 = Number.parseInt(memoria);
    memoria = 0;
    renderiza();
}

function operacaoMultiplicar(){
    estaMultiplicando = true;
    estaDividindo=false,estaSomando=false,estaSubtraindo = false;
    parcela1 = Number.parseInt(memoria);
    memoria = 0;
    renderiza();
}

function operacaoDividir(){
    estaDividindo = true;
    estaSomando=false,estaMultiplicando=false,estaSubtraindo = false;
    parcela1 = Number.parseInt(memoria);
    memoria = 0;
    renderiza();
}

function operacaoIgual(){
    parcela2 = Number.parseInt(memoria);
    if(estaSomando){
        resultado = parcela1 + parcela2;
        memoria = resultado;
    }
    else if(estaSubtraindo){
        resultado = parcela1 - parcela2;
        memoria = resultado;
    }
    else if(estaMultiplicando){
        resultado = parcela1 * parcela2;
        memoria = Number.parseInt(resultado);
    }
    else if(estaDividindo){
        resultado = parcela1 / parcela2;
        memoria = resultado;
    }
    renderiza();

}

function botaoNumero(numero){
    if(memoria=="0"){
        memoria = parseInt(numero);
    }else{
        memoria += numero;
    }
    renderiza();

}

function renderiza(){
    tela.innerText = memoria;
}

function init() {
    document.querySelector(".botoes").addEventListener("click",() => {
        botaoClicado(event.target.innerText)
    })
}

init();