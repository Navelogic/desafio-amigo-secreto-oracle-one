function irParaPasso(numeroPasso) {
    document.querySelector('.passo.ativo').classList.remove('ativo');
    document.getElementById(`passo${numeroPasso}`).classList.add('ativo');
}

// COMECO Atualizar lista de participantes
function atualizarListaParticipantes() {
    listaParticipantes.innerHTML = '';
    participantes.forEach(participante => {
        const item = document.createElement('div');
        item.className = 'item-participante';

        const spanNome = document.createElement('span');
        spanNome.textContent = participante;

        const botaoRemover = document.createElement('button');
        botaoRemover.className = 'botao-remover';
        botaoRemover.textContent = 'X';
        botaoRemover.addEventListener('click', () => {
            participantes = participantes.filter(p => p !== participante);
            atualizarListaParticipantes();
        });

        item.appendChild(spanNome);
        item.appendChild(botaoRemover);
        listaParticipantes.appendChild(item);
    });

    contadorParticipantes.textContent = participantes.length;
}

// FIM Atualizar lista de participantes

// COMECO Embaralhar array USANDO Fisher-Yates (https://www.youtube.com/watch?v=FGAUekwri1Q)
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// FIM Embaralhar array


// COMECAR Realizar o sorteio
function realizarSorteio() {
    const embaralhado = embaralharArray([...participantes]);
    paresAmigoSecreto = [];

    for (let i = 0; i < participantes.length; i++) {
        const doador = participantes[i];
        const receptor = embaralhado[i];

        if (doador === receptor) {
            const proximoIndice = (i + 1) % participantes.length;
            [embaralhado[i], embaralhado[proximoIndice]] = [embaralhado[proximoIndice], embaralhado[i]];
        }

        paresAmigoSecreto.push({
            doador: participantes[i],
            receptor: embaralhado[i]
        });
    }

    const autoSorteio = paresAmigoSecreto.some(par => par.doador === par.receptor);
    if (autoSorteio) {
        realizarSorteio();
    }
}
// FIM Realizar o sorteio

// COMECO Exibir resultados
function exibirResultados() {
    listaResultados.innerHTML = '';

    paresAmigoSecreto.forEach(par => {
        const item = document.createElement('div');
        item.className = 'item-resultado';

        const spanDoador = document.createElement('span');
        spanDoador.textContent = par.doador;

        const divReceptor = document.createElement('div');
        divReceptor.className = 'receptor';
        divReceptor.style.display = 'none';
        divReceptor.innerHTML = `<span class="seta">→</span> ${par.receptor}`;

        // Mostrar quem foi sorteado ao clicar
        spanDoador.style.cursor = 'pointer';
        spanDoador.addEventListener('click', () => {
            divReceptor.style.display = divReceptor.style.display === 'none' ? 'block' : 'none';
        });

        item.appendChild(spanDoador);
        item.appendChild(divReceptor);
        listaResultados.appendChild(item);
    });
}
// FIM Exibir resultados