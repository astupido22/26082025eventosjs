const imagem = document.getElementById('imagem');
const mensagem = document.getElementById('mensagem');

imagem.addEventListener('mouseover', function(){
    mensagem.textContent = "Você passou o mouse"
    mensagem.addEventListener('mouseout', function(){
        mensagem.textContent = ''
    });
});