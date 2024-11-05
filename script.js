// Banco de Perguntas
const questionBank = shuffleQuestions([
    {
    question: "O que significa dizer que um gene é 'dominante'?",
    options: [ "Ele só se expressa em organismos unicelulares", "Ele se expressa mesmo se houver uma cópia recessiva", "Ele desaparece na presença de um gene recessivo", "Ele precisa de duas cópias para ser expresso"],
    correctAnswer: 1
},
{
    question: "Qual das alternativas melhor descreve um gene recessivo?",
    options: [ "Sempre se expressa independente de seu par", "Ativa o DNA nas células somáticas","Só é expresso quando em homozigose", "Inativa os genes vizinhos em seu cromossomo"],
    correctAnswer: 2
},
{
    question: "Quando dois alelos diferentes para uma mesma característica se combinam, qual termo descreve a característica que se manifesta?",
    options: [ "Recessivo", "Neutralizado", "Dominante", "Epistático"],
    correctAnswer: 2
},
{
    question: "Como se chama a situação em que dois alelos diferentes se expressam simultaneamente em um heterozigoto?",
    options: [ "Dominância completa","Codominância", "Recessividade", "Epistasia"],
    correctAnswer: 1
},
{
    question: "Qual dos exemplos a seguir é um caso de codominância?",
    options: [ "Pelos longos em cães", "Olhos azuis em gatos", "Cor da pele em répteis", "Grupo sanguíneo AB em humanos"],
    correctAnswer: 3
},
{
    question: "Em uma herança de dominância incompleta, o que acontece com o fenótipo de um heterozigoto?",
    options: ["Apenas o fenótipo dominante se manifesta", "Apenas o fenótipo recessivo se manifesta","Ele exibe uma mistura dos dois fenótipos parentais", "Ele apresenta uma terceira característica não relacionada"],
    correctAnswer: 2
},
{
    question: "Quando um gene interfere na expressão de outro gene em um local diferente, qual é o termo utilizado?",
    options: [ "Codominância", "Dominância incompleta", "Herança recessiva", "Epistasia"],
    correctAnswer: 3
},
{
    question: "No caso de herança poligênica, como as características são determinadas?",
    options: [ "Por um único gene com múltiplos alelos","Pela interação de múltiplos genes", "Apenas por genes dominantes", "Exclusivamente por influência ambiental"],
    correctAnswer: 1
},
{
    question: "Qual exemplo a seguir melhor representa uma característica poligênica?",
    options: [ "Cor dos olhos em gatos", "Cor das penas em aves", "Altura em humanos", "Presença de manchas em cães"],
    correctAnswer: 2
},
{
    question: "O que acontece quando ocorre pleiotropia em um organismo?",
    options: ["Um único gene afeta várias características", "Vários genes afetam uma única característica", "Genes recessivos se sobrepõem aos dominantes", "O fenótipo é independente dos genes"],
    correctAnswer: 0
},

        {
    question: "O que diz o princípio da seleção natural de Darwin?",
    options: [ "A evolução é causada por mutações aleatórias", "A herança genética é completamente previsível", "Organismos mais adaptados têm maior chance de sobreviver e se reproduzir", "Todos os organismos se adaptam ao ambiente por escolha própria"],
    correctAnswer: 2
},
{
    question: "Qual é a unidade básica da hereditariedade?",
    options: [ "Célula", "DNA", "Proteína", "Gene"],
    correctAnswer: 3
},
{
    question: "O que é crossing-over na meiose?",
    options: ["Troca de segmentos entre cromossomos homólogos", "Fusão de duas células", "Divisão celular em duas células filhas", "Dobra do DNA para formar proteínas"],
    correctAnswer: 0
},
{
    question: "Qual é a principal função da mitose?",
    options: ["Criar diversidade genética", "Gerar células idênticas para crescimento e reparo",  "Produzir gametas", "Permitir a troca genética entre espécies"],
    correctAnswer: 1
},
{
    question: "O que é um alelo?",
    options: ["Uma proteína", "Uma mutação", "Forma alternativa de um gene", "Um tipo de RNA"],
    correctAnswer: 2
},
{
    question: "Quem foi o primeiro cientista a descrever o princípio da hereditariedade?",
    options: [ "Charles Darwin", "Jean-Baptiste Lamarck", "Gregor Mendel", "Francis Crick"],
    correctAnswer: 2
},
{
    question: "O que caracteriza o DNA?",
    options: ["Duas fitas helicoidais de nucleotídeos", "Um único filamento de RNA", "Átomos de fósforo e lipídios", "Seqüências repetidas de proteínas"],
    correctAnswer: 0
},
{
    question: "Qual é o papel da enzima DNA polimerase?",
    options: ["Cortar fragmentos de RNA", "Copiar DNA durante a replicação",  "Produzir proteínas a partir de DNA", "Quebrar moléculas de açúcar"],
    correctAnswer: 1
},
{
    question: "O que ocorre durante a transcrição?",
    options: [ "O RNA é traduzido para proteínas", "As células se dividem", "O DNA é transcrito para RNA", "Os genes são duplicados"],
    correctAnswer: 2
},
{
    question: "Qual é o principal conceito da genética molecular?",
    options: ["Estudo da estrutura e função dos genes em nível molecular", "Análise da morfologia das espécies", "Observação do comportamento dos animais", "A evolução das plantas"],
    correctAnswer: 0
},
{
    question: "Segundo a teoria de Darwin, o que impulsiona a seleção natural?",
    options: ["As diferenças nas características hereditárias que favorecem a sobrevivência", "A modificação direta das características dos organismos", "A reprodução entre indivíduos de espécies diferentes", "A extinção de todas as espécies menos adaptadas"],
    correctAnswer: 0
},
{
    question: "Qual foi a principal descoberta de Mendel?",
    options: [ "Teoria da evolução", "Estrutura do DNA", "Cromossomos sexuais", "Leis da hereditariedade"],
    correctAnswer: 3
},
{
    question: "Em genética, o que é fenótipo?",
    options: [ "A sequência de bases nitrogenadas", "A expressão física dos genes", "A estrutura dos cromossomos", "A fase de divisão celular"],
    correctAnswer: 1
},
{
    question: "O que ocorre na fase G1 do ciclo celular?",
    options: ["O DNA é replicado", "A célula cresce e se prepara para a divisão",  "Os cromossomos são separados", "A célula entra em meiose"],
    correctAnswer: 1
},
{
    question: "Quem são considerados os pioneiros na descoberta da estrutura do DNA?",
    options: [ "Darwin e Lamarck", "Mendel e Morgan", "Watson e Crick", "Linnaeus e Pasteur"],
    correctAnswer: 2
},
    
        {
        question: "Qual é o conceito central das teorias evolutivas?",
        options: ["Estabilidade genética", "Mudança ao longo do tempo nas espécies",  "Reprodução assexuada", "Extinção de espécies"],
        correctAnswer: 1
    },
    {
        question: "Quem são os principais proponentes das teorias da evolução?",
        options: [ "Newton e Einstein", "Mendel e Galileu", "Darwin e Lamarck", "Pasteur e Jenner"],
        correctAnswer: 2
    },
    {
        question: "De acordo com Darwin, a evolução ocorre através de qual mecanismo?",
        options: [ "Mutação", "Herança de Características Adquiridas", "Reprodução Assexuada", "Seleção Natural"],
        correctAnswer: 3
    },
    {
        question: "Qual a diferença fundamental entre as teorias de Darwin e Lamarck?",
        options: ["Herança adquirida vs seleção natural", "Mutação vs recombinação", "Migração vs seleção sexual", "Isolamento geográfico vs. mutação"],
        correctAnswer: 0
    },
    {
        question: "O que é o DNA?",
        options: [ "Ácido Ribonucleico", "Proteína", "Ácido Desoxirribonucleico", "Lipídio"],
        correctAnswer: 2
    },
    {
        question: "Qual é a principal função do RNA?",
        options: [ "Transporte de proteínas", "Transporte de informações genéticas", "Produção de energia", "Digestão de nutrientes"],
        correctAnswer: 1
    },
    {
        question: "Qual é a principal diferença entre mitose e meiose?",
        options: ["Mitose produz células idênticas, meiose produz células com diversidade genética", "Mitose ocorre apenas em plantas", "Meiose ocorre apenas em bactérias", "Mitose ocorre em células reprodutivas"],
        correctAnswer: 0
    },
    {
        question: "O que é expressão gênica?",
        options: [ "Replicação de DNA", "Produção de lipídios", "Processo de ativação de genes para produzir proteínas", "Absorção de nutrientes"],
        correctAnswer: 2
    },
    {
        question: "O que estuda a genética molecular?",
        options: ["A ecologia das espécies", "A estrutura e função dos genes em nível molecular",  "A fisiologia das plantas", "A anatomia dos mamíferos"],
        correctAnswer: 1
    },
    {
        question: "O que é modo de ação gênica?",
        options: ["Processo de replicação do RNA", "Formação de anticorpos", "Forma como os genes determinam características específicas",  "Mutação genética"],
        correctAnswer: 2
    },
    {
        question: "Qual é o princípio básico da hereditariedade segundo Mendel?",
        options: ["Os fatores hereditários são passados de pais para filhos", "A herança ocorre apenas por mutações", "A herança é exclusivamente ligada ao ambiente", "As características adquiridas são herdadas"],
        correctAnswer: 0
    },
    {
        question: "Qual é o conceito de herança genética?",
        options: ["Seleção natural", "Transmissão de características dos pais para os filhos",  "Isolamento reprodutivo", "Formação de novas espécies"],
        correctAnswer: 1
    },
    {
        question: "Qual foi a principal descoberta de Morgan ao estudar ligação gênica?",
        options: ["Genes podem estar ligados no mesmo cromossomo", "Genes independentes sempre se segregam juntos", "Mutação é a única fonte de variabilidade", "Hibridização aumenta a variabilidade genética"],
        correctAnswer: 0
    },
    {
        question: "O que o experimento de Morgan com drosófilas demonstrou?",
        options: ["Existência de mutações", "Ligação entre genes no mesmo cromossomo",  "Mutação ocorre apenas em genes dominantes", "Cromossomos têm herança uniparental"],
        correctAnswer: 1
    },
    {
        question: "O que é DNA?",
        options: ["Proteína", "Carboidrato","Ácido Desoxirribonucleico", "Lipídio"],
        correctAnswer: 2
    },
    {
        question: "Qual a função do RNA?",
        options: ["Transporte de informações genéticas", "Transporte de proteínas", "Formação de lipídios", "Transporte de lipídios"],
        correctAnswer: 0
    },
    {
        question: "O que é um gene?",
        options: ["Unidade básica da hereditariedade", "Uma proteína", "Um tipo de célula", "Um órgão"],
        correctAnswer: 0
    },
    {
        question: "Qual das seguintes opções é uma mutação genética?",
        options: ["Oxidação", "Deleção", "Evaporação", "Digestão"],
        correctAnswer: 1
    },
    {
        question: "O que são cromossomos?",
        options: ["Moléculas de lipídios", "Estruturas que contêm DNA", "Órgãos celulares", "Parte do RNA"],
        correctAnswer: 1
    },
    {
        question: "Qual é a base nitrogenada presente no RNA, mas não no DNA?",
        options: ["Timina", "Citosina", "Guanina", "Uracila"],
        correctAnswer: 3
    },
    {
        question: "O que é um fenótipo?",
        options: ["A sequência de DNA", "O tipo de mutação", "A aparência física ou característica observável", "O ambiente"],
        correctAnswer: 2
    },
    {
        question: "O que é um genótipo?",
        options: ["A estrutura do RNA", "A aparência física", "A composição genética de um organismo", "O ambiente onde o organismo vive"],
        correctAnswer: 2
    },
    {
        question: "Qual das seguintes é uma base nitrogenada encontrada no DNA?",
        options: ["Uracila", "Adenina", "Lisina", "Arginina"],
        correctAnswer: 1
    },
    {
        question: "O que é herança mendeliana?",
        options: ["A formação de novas espécies", "A transmissão de características de uma geração para outra conforme as leis de Mendel", "A mutação de genes", "A evolução das espécies"],
        correctAnswer: 1
    },
    {
        question: "O que significa a sigla F1 na genética mendeliana?",
        options: ["Forma da primeira célula", "Primeira mutação detectada", "Filamento 1 de DNA", "Primeira geração filial"],
        correctAnswer: 3
    },
    {
        question: "Qual cientista é conhecido como o 'pai da genética'?",
        options: ["Charles Darwin","Gregor Mendel", "James Watson", "Rosalind Franklin"],
        correctAnswer: 1
    },
    {
        question: "O que é uma alelo?",
        options: ["Um tipo de proteína", "Uma sequência de RNA","Uma forma alternativa de um gene", "Uma célula mutante"],
        correctAnswer: 2
    },
    {
        question: "O que são organismos homozigotos?",
        options: ["Organismos com dois alelos diferentes para uma característica", "Organismos sem alelos", "Organismos com dois alelos idênticos para uma característica", "Organismos com apenas um alelo"],
        correctAnswer: 2
    },
    {
        question: "O que é dominância incompleta?",
        options: ["Quando um alelo domina completamente o outro", "Quando nenhum alelo é expresso", "Quando ambos os alelos se anulam", "Quando o fenótipo resultante é intermediário entre os dois alelos"],
        correctAnswer: 3
    },
    {
        question: "O que é codominância?",
        options: ["Quando apenas um alelo é expresso","Quando ambos os alelos são expressos igualmente", "Quando nenhum dos alelos se manifesta", "Quando os alelos se misturam em um único fenótipo"],
        correctAnswer: 1
    },
    {
        question: "O que são genes ligados ao sexo?",
        options: ["Genes que determinam o comportamento", "Genes localizados nos cromossomos sexuais", "Genes que estão presentes apenas em fêmeas", "Genes que são herdados apenas pela mãe"],
        correctAnswer: 1
    },
    {
        question: "O que é uma mutação pontual?",
        options: ["Uma mudança em uma sequência completa de DNA", "Uma duplicação de genes", "Uma alteração em um único nucleotídeo no DNA", "Uma troca de cromossomos inteiros"],
        correctAnswer: 2
    },
    {
        question: "Qual é o papel da enzima DNA polimerase?",
        options: [ "Quebrar o DNA em fragmentos", "Transportar RNA para fora do núcleo", "Formar ligações de hidrogênio entre nucleotídeos", "Adicionar nucleotídeos à cadeia de DNA durante a replicação"],
        correctAnswer: 3
    }
    
    // Adicione mais perguntas conforme necessário
];

// Variáveis para armazenar pontuação
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

function loadQuestion() {
    const questionData = questionBank[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.innerText = questionData.question;
    optionsElement.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });


    // Atualizar pontuação
    updateScore();
}

function checkAnswer(selectedOption) {
    const feedbackElement = document.getElementById("feedback");
    const questionData = questionBank[currentQuestionIndex];

    if (selectedOption === questionData.correctAnswer) {
        correctAnswers++;
        feedbackElement.innerText = "Correto!";
        feedbackElement.className = "happy";
    } else {
        wrongAnswers++;
        feedbackElement.innerText = "Errado!";
        feedbackElement.className = "sad";
    }

    // Carregar próxima pergunta após um pequeno delay
    setTimeout(() => {
        feedbackElement.innerText = ""; // Limpar feedback
        currentQuestionIndex++;

        if (currentQuestionIndex < questionBank.length) {
            loadQuestion();
        } else {
            displayFinalScore();
        }
    }, 1000);
}

function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = `Acertos: ${correctAnswers} | Erros: ${wrongAnswers}`;
}

function displayFinalScore() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");

    questionElement.innerText = "Fim do jogo!";
    optionsElement.innerHTML = "";
    feedbackElement.innerText = `Pontuação Final - Acertos: ${correctAnswers}, Erros: ${wrongAnswers}`;
}

// Carregar a primeira pergunta ao iniciar o jogo
loadQuestion();
