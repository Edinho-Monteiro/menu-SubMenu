// Função para realizar a rolagem suave até a seção alvo
function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId); // Encontrar o elemento de destino
    if (!targetElement) return; // Se o ID não for encontrado, aborta

    const headerHeight = document.querySelector('.barra-fixa').offsetHeight; // Altura da barra fixa
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; // Posição do alvo em relação à página
    const scrollToPosition = targetPosition - headerHeight; // Ajustar para compensar a altura da barra fixa

    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth' // Rolagem suave
    });
}

// Evento de clique para rolar até a seção correspondente
document.querySelectorAll('.barra-fixa a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Obter o id da seção de destino
        scrollToSection(targetId); // Chamar a função de rolagem suave
    });
});

// Início do Bloco de Notas

// Carregar dados salvos ao carregar a página
window.onload = function () {
    document.getElementById('nome').value = localStorage.getItem('nome') || '';
    // document.getElementById('endereco').value = localStorage.getItem('endereco') || '';
    // document.getElementById('email').value = localStorage.getItem('email') || '';
    // document.getElementById('celular').value = localStorage.getItem('celular') || '';
    document.getElementById('mensagem').value = localStorage.getItem('mensagem') || '';
  };
  
  // Salvar dados no localStorage ao submeter o formulário
  document.getElementById('meuForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar o envio padrão do formulário
    const nome = document.getElementById('nome').value;
    // const endereco = document.getElementById('endereco').value;
    // const email = document.getElementById('email').value;
    // const celular = document.getElementById('celular').value;
    const mensagem = document.getElementById('mensagem').value;
  
    localStorage.setItem('nome', nome);
    // localStorage.setItem('endereco', endereco);
    // localStorage.setItem('email', email);
    // localStorage.setItem('celular', celular);
    localStorage.setItem('mensagem', mensagem);
  
    alert('Dados salvos com sucesso!');
  });
  
  function imprimirPagina() {
    window.print(); // Abre a janela de impressão do navegador
  }

  // Fim do Bloco de Notas

// Início do carrossel de imagens

let currentImageIndex = 0;

const images = [
  { src: './image/prompt2.jpg', message: 'Segundo a definição da Microsoft, um prompt é essencialmente: “um comando ou um conjunto de instruções que orienta a geração de respostas ou conteúdos específicos por parte de sistemas baseados em inteligência artificial (IA)”. Quanto mais detalhes você fornecer, melhor o resultado será. Sempre que possível, forneça trechos de código ou exemplos de como o problema está se manifestando. Isso ajuda a fornecer soluções mais direcionadas.' },
  { src: './image/aplicativo.jpg', message: 'A imagem retrata o desenvolvimento de aplicativos em um ambiente tecnológico moderno. No centro, um smartphone é rodeado por ícones e blocos de código, simbolizando o processo criativo digital. O fundo apresenta um escritório com computadores e telas de programação. Elementos geométricos flutuantes destacam a inovação e a tecnologia.' },
  { src: './image/empreendedor.jpg', message: 'processo do empreendedorismo, com elementos-chave como a lâmpada (simbolizando a ideia), engrenagens (planejamento e execução), e gráficos de crescimento' },
  { src: './image/art(2).jpg', message: 'Uma mão interagindo com um dispositivo digital, enquanto pequenos cubos flutuantes representam várias imagens e gráficos virtuais, sugerindo inovação tecnológica. O design evoca conceitos de conectividade, dados e tecnologia de ponta em um ambiente digitalizado.' },
  { src: './image/sonho.jpg', message: '"Faça dos seus sonhos, seu objetivo!" com uma pessoa olhando para o topo de uma montanha, simbolizando a jornada de alcançar seus sonhos.' },
  { src: './image/prompt3.jpg', message: 'A imagem exibe cubos cinza de tamanhos variados, conectados entre si por estruturas que parecem tubos. As bordas dos cubos são iluminadas por linhas brilhantes em tons de azul, criando um efeito futurista e tecnológico. Cubos menores cercam a estrutura central, sugerindo uma organização modular e complexa.' },
  { src: './image/scorpion.jpg', message: 'A conserva de pimentas é um produto artesanal que combina o sabor intenso das pimentas com a praticidade do armazenamento prolongado. Feita com ingredientes frescos e naturais, as pimentas são conservadas em vinagre ou azeite, mantendo sua picância e propriedades nutricionais. Ideal para dar um toque especial a pratos, a conserva oferece uma explosão de sabor que realça qualquer refeição. Além de saborosa, possui benefícios à saúde, como ação antioxidante e auxílio na digestão.' },
]

let currentIndex = 0;
const imageDisplay = document.getElementById('imageDisplay');
const imageMessage = document.getElementById('imageMessage');

function updateDisplay() {
  imageDisplay.src = images[currentIndex].src;
  imageMessage.textContent = images[currentIndex].message;
}

document.getElementById('leftButton').addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateDisplay();
});

document.getElementById('rightButton').addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateDisplay();
});

// Inicializa a exibição com a primeira imagem e mensagem
updateDisplay();
// final do carrossel de imagens

// Início do Relógio ditital

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
// const milissegundos = document.getElementById('milissegundos');
const relogio = setInterval(function time() {

let dateToday = new Date();
let hr = dateToday.getHours();
let min = dateToday.getMinutes();
let seg = dateToday.getSeconds();
// let mile = dateToday.getMiliseconds();

if (hr < 10) hr = '0' + hr;
if (min < 10) min = '0' + min;
if (seg < 10) seg = '0' + seg; 
// if (mile < 10) seg = '0' + mile; 

horas.textContent = hr;
minutos.textContent = min;
segundos.textContent = seg;
// milissegundos.textContent = mile;
})
  
// Final do Relógio ditital

// início da Previsão do tempo

// VARIÁVEIS => Um espaço da memória do computador que guardamos algo (um numero, uma letra, um texto, uma imagem)
// FUNÇÃO => Um trecho de código que só é executado quando é chamado

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}


function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarCidade(cidade)
}

// Final da Previsão do tempo

// Início da calculadora

function adicionarCaracter(caracter) {
  const valorInput = document.querySelector('.display').value
  
  document.querySelector('.display').value = valorInput + caracter
}

  function limparTela() {
      document.querySelector('.display').value = ''
  }

  function calcular() {
      const valorInput = document.querySelector('.display').value

      document.querySelector('.display').value = eval(valorInput)
  }

  function inverte() {
      const valorInput = document.querySelector('.display').value

      document.querySelector('.display').value = valorInput * -1
  }

// Final da calculadora
