console.log(document.body);
//selcionar por TAG
const listaItens = document.getElementsByTagName('li');
console.log(listaItens);

// const botao = document.getElementById('btn');
// botao.addEventListener('click', function(){
//     alert("Você clicou no botão!")
// });
const cor = document.getElementById('btn');
cor.addEventListener('click', function(){
    document.body.style.backgroundColor = '#008B8B'
});