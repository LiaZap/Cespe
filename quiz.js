const questionBank = [
    // --- BLOCO 1: TÁTICAS E ABORDAGEM (5 Questões) ---
    {
        id: 1,
        text: "Durante uma abordagem na BR-116, o condutor apresenta nervosismo excessivo e evita contato visual. Qual sua PRIMEIRA atitude tática de segurança?",
        options: [
            { text: "Iniciar busca veicular imediatamente", correta: false, feedback: "Erro Crítico. Jamais inicie a busca sem antes controlar o suspeito e o perímetro. Risco de emboscada." },
            { text: "Verbalizar comando de voz e controlar as mãos do suspeito", correta: true, feedback: "Correto! O controle das mãos é a regra de ouro. Mãos controladas não sacam armas." },
            { text: "Solicitar CNH e documento do veículo", correta: false, feedback: "Arriscado. Ao focar nos documentos, você perde o visual das mãos do suspeito, onde está o perigo." }
        ]
    },
    {
        id: 2,
        text: "Em uma fiscalização noturna, você identifica um veículo com características de 'batedor'. Qual o procedimento padrão?",
        options: [
            { text: "Ignorar e focar na carga principal que vem atrás", correta: false, feedback: "Erro. O batedor deve ser abordado para cortar a comunicação com a carga." },
            { text: "Abordar isoladamente sem comunicar a equipe", correta: false, feedback: "Suicídio tático. Abordagens de risco exigem superioridade numérica e comunicação." },
            { text: "Comunicar a equipe, solicitar apoio e realizar abordagem tática", correta: true, feedback: "Exato. A doutrina exige comunicação prévia e superioridade de força." }
        ]
    },
    {
        id: 3,
        text: "O uso progressivo da força deve seguir qual princípio fundamental?",
        options: [
            { text: "Legalidade, Necessidade, Proporcionalidade e Conveniência", correta: true, feedback: "Boa! Esses são os 4 pilares do uso da força na atividade policial." },
            { text: "Atirar primeiro em caso de dúvida", correta: false, feedback: "Crime. O uso da força letal é a última ratio, apenas para cessar injusta agressão." },
            { text: "Uso máximo de força para intimidar", correta: false, feedback: "Errado. A força deve ser escalonada de acordo com a resistência encontrada." }
        ]
    },
    {
        id: 4,
        text: "Ao encontrar um local de acidente com vítimas, qual a prioridade zero?",
        options: [
            { text: "Identificar os motoristas", correta: false, feedback: "Isso é secundário. A prioridade é a vida e a segurança da cena." },
            { text: "Sinalizar e proteger o local para evitar novos acidentes", correta: true, feedback: "Correto. A segurança da cena vem antes do socorro, para não gerar novas vítimas (incluindo você)." },
            { text: "Remover os veículos da pista", correta: false, feedback: "Só se não houver vítimas. Com vítimas, o local deve ser preservado para perícia se possível, após socorro." }
        ]
    },
    {
        id: 5,
        text: "Na condução de viatura em emergência (sirene ligada), o policial:",
        options: [
            { text: "Tem prioridade absoluta e pode furar qualquer sinal sem parar", correta: false, feedback: "Mito. O motorista deve ter cautela e velocidade compatível, mesmo na emergência." },
            { text: "Goza de livre circulação, mas deve respeitar as normas de segurança", correta: true, feedback: "Exato. A preferência não isenta a responsabilidade por acidentes." },
            { text: "Pode transitar na contramão em qualquer rodovia", correta: false, feedback: "Apenas em situações extremas e com total segurança visualizada." }
        ]
    },

    // --- BLOCO 2: LEGISLAÇÃO DE TRÂNSITO - CTB (5 Questões) ---
    {
        id: 6,
        text: "Estrategicamente, qual matéria tem o maior peso na pontuação final da prova objetiva da PRF?",
        options: [
            { text: "Legislação de Trânsito (CTB)", correta: true, feedback: "Exato! São 30 questões exclusivas. Quem não domina o CTB, não vira Policial." },
            { text: "Direito Penal", correta: false, feedback: "Importante, mas Trânsito tem peso 3x maior na prova." },
            { text: "Português", correta: false, feedback: "Fundamental, mas o volume de Trânsito é insuperável." }
        ]
    },
    {
        id: 7,
        text: "Segundo o CTB, a embriaguez ao volante é caracterizada por:",
        options: [
            { text: "Apenas teste do bafômetro positivo", correta: false, feedback: "Errado. Sinais notórios (hálito, fala) também servem como prova." },
            { text: "Qualquer concentração de álcool ou sinais de alteração", correta: true, feedback: "Correto. Tolerância zero. O crime ocorre com concentração igual ou superior a 6 decigramas/L." },
            { text: "Apenas se houver acidente", correta: false, feedback: "O perigo é abstrato. Dirigir embriagado já é crime/infração." }
        ]
    },
    {
        id: 8,
        text: "A PRF tem competência para autuar infrações em:",
        options: [
            { text: "Rodovias e Estradas Federais", correta: true, feedback: "Sim. A circunscrição da PRF é a malha viária federal." },
            { text: "Ruas municipais e estaduais", correta: false, feedback: "Errado. Apenas mediante convênio específico." },
            { text: "Apenas em rodovias pedagiadas", correta: false, feedback: "Indifere se é concessionada ou não, sendo federal, é PRF." }
        ]
    },
    {
        id: 9,
        text: "O exame toxicológico é obrigatório para motoristas das categorias:",
        options: [
            { text: "A e B", correta: false, feedback: "Não exigido para motos e carros de passeio comuns." },
            { text: "C, D e E", correta: true, feedback: "Correto! Veículos pesados e transporte de passageiros exigem 'janela larga' de detecção." },
            { text: "Apenas transportadores de carga perigosa", correta: false, feedback: "A exigência é pela categoria da CNH, não apenas pela carga." }
        ]
    },
    {
        id: 10,
        text: "Ultrapassar pelo acostamento é infração:",
        options: [
            { text: "Grave", correta: false, feedback: "Mais pesado que isso." },
            { text: "Gravíssima (x5)", correta: true, feedback: "Isso! Multa multiplicada por 5. Manobra de alto risco de atropelamento." },
            { text: "Média", correta: false, feedback: "Sem chance." }
        ]
    },

    // --- BLOCO 3: PORTUGUÊS E DIREITO (5 Questões) ---
    {
        id: 11,
        text: "[CESPE] Acerca do emprego do acento grave, julgue: 'Refiro-me à Maria'. A crase é facultativa?",
        options: [
            { text: "CERTO", correta: true, feedback: "Boa, 06! Antes de nomes próprios femininos, o artigo é opcional, logo a crase também." },
            { text: "ERRADO", correta: false, feedback: "Cuidado! Regra clássica. Antes de nomes de mulher, crase é facultativa." }
        ]
    },
    {
        id: 12,
        text: "[Direito Penal] O policial que, por descuido, dispara a arma e fere o colega responde por:",
        options: [
            { text: "Lesão Corporal Dolosa", correta: false, feedback: "Dolo exige intenção. Descuido é culpa." },
            { text: "Lesão Corporal Culposa", correta: true, feedback: "Certo. Houve imprudência ou imperícia, sem intenção de ferir." },
            { text: "Tentativa de Homicídio", correta: false, feedback: "Exagero. Sem 'animus necandi' (vontade de matar), não há tentativa de homicídio." }
        ]
    },
    {
        id: 13,
        text: "[Constitucional] A casa é asilo inviolável, mas o policial pode entrar à noite:",
        options: [
            { text: "Com mandado judicial", correta: false, feedback: "Mandado judicial só se cumpre de DIA." },
            { text: "Em caso de flagrante delito, desastre ou socorro", correta: true, feedback: "Perfeito. Essas são as exceções constitucionais para entrada noturna." },
            { text: "Se o morador for suspeito", correta: false, feedback: "Mera suspeita não autoriza violação de domicílio." }
        ]
    },
    {
        id: 14,
        text: "[Direitos Humanos] O uso de algemas, segundo a Súmula Vinculante 11, é:",
        options: [
            { text: "Regra absoluta", correta: false, feedback: "Errado. É exceção." },
            { text: "Excepcional e deve ser justificado por escrito", correta: true, feedback: "Correto. Só em caso de risco, fuga ou resistência." },
            { text: "Proibido para mulheres", correta: false, feedback: "Não há essa proibição absoluta, depende do risco." }
        ]
    },
    {
        id: 15,
        text: "A tortura é crime inafiançável e insuscetível de graça ou anistia.",
        options: [
            { text: "CERTO", correta: true, feedback: "Correto. Equiparado a hediondo pela Constituição (Mandado de Criminalização)." },
            { text: "ERRADO", correta: false, feedback: "Texto expresso da CF/88." }
        ]
    },

    // --- BLOCO 4: GEOPOLÍTICA E ÉTICA (5 Questões) ---
    {
        id: 16,
        text: "Sobre Geopolítica: A expansão da fronteira agrícola para o Norte gera conflitos. A PRF foca em:",
        options: [
            { text: "Fiscalização ambiental e crimes de trânsito nas BRs", correta: true, feedback: "Correto. O foco é o escoamento ilegal pelas rodovias federais." },
            { text: "Reforma agrária", correta: false, feedback: "Competência do INCRA." },
            { text: "Conflitos internos indígenas", correta: false, feedback: "Competência primária da FUNAI/PF." }
        ]
    },
    {
        id: 17,
        text: "O 'Arco do Desmatamento' na Amazônia Legal coincide com o traçado de quais rodovias?",
        options: [
            { text: "BR-101 e BR-116", correta: false, feedback: "Essas são litorâneas (translitorâneas)." },
            { text: "BR-163 e BR-230", correta: true, feedback: "Isso! Cuiabá-Santarém e Transamazônica são eixos críticos de desmatamento." },
            { text: "BR-040 e BR-050", correta: false, feedback: "Essas ligam Brasília ao Sudeste." }
        ]
    },
    {
        id: 18,
        text: "[Ética] Servidor público pode receber 'brinde' de empresa fiscalizada?",
        options: [
            { text: "Sim, se for baratinho", correta: false, feedback: "Abre margem para corrupção." },
            { text: "Não. É vedado receber vantagem de quem tem interesse na decisão", correta: true, feedback: "Correto. O Código de Ética veda para evitar conflito de interesses." },
            { text: "Sim, no Natal pode", correta: false, feedback: "Natal não suspende a ética." }
        ]
    },
    {
        id: 19,
        text: "A rota do tráfico de cocaína que entra no Brasil vinda da Bolívia passa forte por qual estado?",
        options: [
            { text: "Mato Grosso / Mato Grosso do Sul", correta: true, feedback: "Sim. A extensa fronteira seca é o principal portão de entrada para a droga andina." },
            { text: "Rio Grande do Sul", correta: false, feedback: "Rota mais comum para maconha e armas vindas do Uruguai/Argentina." },
            { text: "Espírito Santo", correta: false, feedback: "Não faz fronteira com países produtores." }
        ]
    },
    {
        id: 20,
        text: "Qual o lema institucional da PRF?",
        options: [
            { text: "Servir e Proteger", correta: false, feedback: "Comum nas PMs." },
            { text: "Polícia de Estrada", correta: false, feedback: "Não." },
            { text: "Polícia de todos os brasileiros", correta: true, feedback: "Esse é o slogan institucional que reflete a capilaridade da PRF." }
        ]
    }
];

let questions = [];
let currentQ = 0;
let score = 0;
let streak = 0;

function startQuiz() {
    playSound('start');
    
    // Randomize and Pick 5
    questions = shuffleArray([...questionBank]).slice(0, 5);
    
    // Reset Stats
    currentQ = 0;
    score = 0;
    streak = 0;
    updateStreak();
    
    document.getElementById('introScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const q = questions[currentQ];
    document.getElementById('questionText').innerText = q.text;
    document.getElementById('qCurrent').innerText = currentQ + 1;
    document.getElementById('progressBar').style.width = `${((currentQ) / questions.length) * 100}%`;
    
    // Reset State
    document.getElementById('feedbackArea').style.display = 'none';
    const grid = document.getElementById('optionsGrid');
    grid.innerHTML = '';
    
    // Shuffle Options for difficulty
    const shuffledOptions = shuffleArray([...q.options]);
    
    shuffledOptions.forEach((opt) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        // We need to keep track of the original index or pass the object to check properly
        btn.onclick = () => checkAnswer(opt, btn, shuffledOptions);
        grid.appendChild(btn);
    });
}

function checkAnswer(selectedOpt, btnElement, currentOptions) {
    const isCorrect = selectedOpt.correta;
    const allBtns = document.querySelectorAll('.option-btn');
    
    // Disable all clicks
    allBtns.forEach(b => b.onclick = null);

    if (isCorrect) {
        btnElement.classList.add('correct');
        score++;
        streak++;
        updateStreak();
        btnElement.innerText += " ✅";
        playSound('success');
    } else {
        btnElement.classList.add('wrong');
        streak = 0;
        updateStreak();
        btnElement.innerText += " ❌";
        playSound('error');
        
        // Highlight correct
        currentOptions.forEach((opt, i) => {
            if (opt.correta) allBtns[i].classList.add('correct');
        });
    }

    // Show Feedback
    document.getElementById('feedbackText').innerText = selectedOpt.feedback;
    document.getElementById('feedbackArea').style.display = 'block';
}

// Fisher-Yates Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// DOPAMINE SOUND ENGINE (Web Audio API)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'success') {
        // High Pitch "Ding" (Coin Sound)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
        
        // Haptic Feedback (Mobile)
        if (navigator.vibrate) navigator.vibrate(50); // Light tap
        
    } else if (type === 'error') {
        // Low Pitch "Buzz" (Error Sound)
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
        
        // Haptic Feedback (Mobile)
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]); // Double buzz
        
    } else if (type === 'start') {
        // Tactical "Whoosh/Charge" Sound
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(200, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
        
        // Haptic Feedback (Mobile)
        if (navigator.vibrate) navigator.vibrate(100); // Single confirm
    }
}

function updateStreak() {
    const sEl = document.getElementById('streakVal');
    const sContainer = document.querySelector('.streak-counter');
    sEl.innerText = streak;
    
    if (streak > 0) {
        sContainer.style.display = 'block';
        sContainer.style.animation = 'pulse 0.5s';
    } else {
        sContainer.style.display = 'none';
    }
}

function nextQuestion() {
    currentQ++;
    if (currentQ < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('finalScore').innerText = `${percentage}%`;
    
    const msg = document.getElementById('resultMsg');
    if (percentage === 100) {
        msg.innerText = "EXCELENTE! Você tem o perfil exato de um futuro PRF. Só falta as ferramentas certas.";
    } else if (percentage >= 60) {
        msg.innerText = "MUITO BOM! Você tem a base, mas precisa afinar a malícia de prova para não cair em pegadinhas.";
    } else {
        msg.innerText = "ATENÇÃO! Sua base precisa de reforço urgente antes do edital sair.";
    }
}
