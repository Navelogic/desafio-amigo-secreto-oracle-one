// COMECO Validação do formulário inicial
proximoPasso2.addEventListener('click', () => {
    let valido = true;

    if (!nomeOrganizador.value.trim()) {
        erroNomeOrganizador.textContent = "Por favor, digite seu nome";
        valido = false;
    } else {
        erroNomeOrganizador.textContent = "";
    }

    if (!nomeSorteio.value.trim()) {
        erroNomeSorteio.textContent = "Por favor, dê um nome para o sorteio";
        valido = false;
    } else {
        erroNomeSorteio.textContent = "";
    }

    if (valido) {
        // Adicionar organizador como participante, se necessário
        if (participacaoOrganizador.checked) {
            participantes.push(nomeOrganizador.value.trim());
            atualizarListaParticipantes();
        }

        // Atualizar informações na tela
        nomeSorteioExibicao.textContent = nomeSorteio.value;
        nomeOrganizadorExibicao.textContent = nomeOrganizador.value;

        // Avançar para o próximo passo
        irParaPasso(2);
    }
});
// FIM Validação do formulário inicial

// COMECO Adicionar participante
adicionarParticipante.addEventListener('click', () => {
    const nome = nomeParticipante.value.trim();

    if (!nome) {
        erroNomeParticipante.textContent = "Por favor, digite o nome do participante";
        return;
    }

    if (participantes.includes(nome)) {
        erroNomeParticipante.textContent = "Este nome já está na lista";
        return;
    }

    erroNomeParticipante.textContent = "";
    participantes.push(nome);
    nomeParticipante.value = "";
    atualizarListaParticipantes();
});

// Tecla Enter
nomeParticipante.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarParticipante.click();
    }
});
// FIM Adicionar participante


// COMECO Realizar sorteio
botaoSortear.addEventListener('click', () => {
    if (participantes.length < 2) {
        alert("É preciso ter pelo menos 2 participantes para realizar o sorteio!");
        return;
    }

    irParaPasso(3);
    let contador = 0;
    const nomes = [...participantes];

    const intervaloAnimacao = setInterval(() => {
        contador++;
        if (contador >= 15) {
            clearInterval(intervaloAnimacao);
            realizarSorteio();
            mostrarResultados.style.display = 'block';
        } else {
            const nomeAleatorio1 = nomes[Math.floor(Math.random() * nomes.length)];
            const nomeAleatorio2 = nomes[Math.floor(Math.random() * nomes.length)];
            animacaoSorteio.innerHTML = `${nomeAleatorio1} <span class="seta">→</span> ${nomeAleatorio2}`;
        }
    }, 200);
});
// FIM Realizar sorteio

// COMECO  Mostrar resultados
mostrarResultados.addEventListener('click', () => {
    irParaPasso(4);
    exibirResultados();
});

// FIM Mostrar resultados

// COMECO reset
botaoReiniciar.addEventListener('click', () => {
    participantes = [];
    paresAmigoSecreto = [];
    nomeOrganizador.value = '';
    nomeSorteio.value = '';
    participacaoOrganizador.checked = true;
    nomeParticipante.value = '';
    atualizarListaParticipantes();
    irParaPasso(1);
});

// FIM reset