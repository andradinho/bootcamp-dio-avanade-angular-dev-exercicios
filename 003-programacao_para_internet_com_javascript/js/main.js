
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
    //alert("Obrigado por clicar")
}
function redirecionar(){
    window.open("https://google.com")
    //window.location.href = "http://google.com"
}
function trocar(element){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    // melhorando código. Recebendo o próprio elemento como parâmetro (this) e removendo a necessidade de usar id
    element.innerHTML = "Obrigado por passar o mouse"
}
function voltar(element){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    element.innerHTML = "Passe o mouse aqui"
}
function load(){
    alert("Página carregada")
}
function funcaoChange(element){
    console.log(element.value)
}
// function soma(n1, n2){
//     return n1 + n2;
// }
// 
// function validaIdade(idade){
//     var validar;
//     if(idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar;
// }
// 
// var idade = prompt("Qual sua idade?")
// console.log(validaIdade(idade))
// 
// alert(soma(5, 10))
// 



// var d = new Date();
// alert(d);

//var count;
//for(count=0; count<=5; count++){
//    alert(count);
//};

// var count = 5;
// while(count < 5){
//     console.log(count);
//     count = count + 1; 
// };


// var idade = prompt("Qual sua idade?");
// var idade = 18;
// if(idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// };


// var fruta = {nome:"maça", cor:"vermelha"}
// console.log(fruta)
// console.log(fruta.nome)
// console.log(fruta.cor)


// var lista = ["maça", "pera", "laranja"];
// lista.push("uva");
// console.log(lista);
// console.log(lista.toString());
// console.log(lista.pop());


// var nome = "Raphael Andrade";
// var idade = 28;
// var idade2 = 1;
// var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + (idade + idade2) + " anos.");
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());
