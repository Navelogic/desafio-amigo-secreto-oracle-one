const passo1 = document.getElementById('passo1');
const passo2 = document.getElementById('passo2');
const passo3 = document.getElementById('passo3');
const passo4 = document.getElementById('passo4');

const nomeOrganizador = document.getElementById('nomeOrganizador');
const participacaoOrganizador = document.getElementById('participacaoOrganizador');
const nomeSorteio = document.getElementById('nomeSorteio');
const proximoPasso2 = document.getElementById('proximoPasso2');

const nomeSorteioExibicao = document.getElementById('nomeSorteioExibicao');
const nomeOrganizadorExibicao = document.getElementById('nomeOrganizadorExibicao');
const nomeParticipante = document.getElementById('nomeParticipante');
const adicionarParticipante = document.getElementById('adicionarParticipante');
const listaParticipantes = document.getElementById('listaParticipantes');
const contadorParticipantes = document.getElementById('contadorParticipantes');
const botaoSortear = document.getElementById('botaoSortear');

const animacaoSorteio = document.getElementById('animacaoSorteio');
const mostrarResultados = document.getElementById('mostrarResultados');

const listaResultados = document.getElementById('listaResultados');
const botaoReiniciar = document.getElementById('botaoReiniciar');

const erroNomeOrganizador = document.getElementById('erroNomeOrganizador');
const erroNomeSorteio = document.getElementById('erroNomeSorteio');
const erroNomeParticipante = document.getElementById('erroNomeParticipante');

// Lista
let participantes = [];
let paresAmigoSecreto = [];