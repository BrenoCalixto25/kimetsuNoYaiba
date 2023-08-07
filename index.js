const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => { 
    personagem.addEventListener('click', () => {

    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado')

    personagem.classList.add('selecionado');

    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./assets/card-${idPersonagem}.png`;
    //`src/assets/card-${idPersonagem}.png`;

    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');


    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');


    })
})