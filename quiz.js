const questions = [
    {
        id: 1,
        text: "Durante uma abordagem na BR-116, o condutor apresenta nermosismo excessivo. Qual sua PRIMEIRA atitude tática?",
        options: [
            { text: "Realizar busca veicular imediatamente", correta: false, feedback: "Errado. Primeiro você deve garantir a segurança do perímetro e verbalizar." },
            { text: "Verbalizar e controlar as mãos do suspeito", correta: true, feedback: "Correto! Controle das mãos é prioridade absoluta para segurança do agente." },
            { text: "Solicitar documentos do veículo", correta: false, feedback: "Perigoso. Se ele estiver armado, pedir documentos tira sua atenção das mãos dele." }
        ]
    },
    {
        id: 2,
        text: "[CESPE/CEBRASPE] A 'crase' é facultativa antes de nomes próprios femininos. Essa afirmação é:",
        options: [
            { text: "CERTO", correta: true, feedback: "Boa! Antes de nomes femininos (ex: refiro-me a(à) Maria), a crase é facultativa." },
            { text: "ERRADO", correta: false, feedback: "Cuidado! Essa é uma regra clássica do CESPE. É facultativa sim." }
        ]
    },
    {
        id: 3,
        text: "Para ser aprovado na PRF, o que pesa mais na nota final?",
        options: [
            { text: "Legislação de Trânsito", correta: true, feedback: "Exato! Trânsito é o carro-chefe, com 30 questões na prova." },
            { text: "Direito Penal", correta: false, feedback: "Importante, mas Trânsito tem peso 3x maior na prova." },
            { text: "Português", correta: false, feedback: "Crucial para não ser eliminado, mas Trânsito tem mais volume." }
        ]
    }
];

let currentQ = 0;
let score = 0;
let streak = 0;

function startQuiz() {
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
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => checkAnswer(index, btn);
        grid.appendChild(btn);
    });
}

function checkAnswer(index, btnElement) {
    const q = questions[currentQ];
    const isCorrect = q.options[index].correta;
    const allBtns = document.querySelectorAll('.option-btn');
    
    // Disable all clicks
    allBtns.forEach(b => b.onclick = null);

    if (isCorrect) {
        btnElement.classList.add('correct');
        score++;
        streak++;
        updateStreak();
        // Play Dopamine Sound (Optional visual cue)
        btnElement.innerText += " ✅";
    } else {
        btnElement.classList.add('wrong');
        streak = 0;
        updateStreak();
        btnElement.innerText += " ❌";
        
        // Highlight correct
        q.options.forEach((opt, i) => {
            if (opt.correta) allBtns[i].classList.add('correct');
        });
    }

    // Show Feedback
    document.getElementById('feedbackText').innerText = q.options[index].feedback;
    document.getElementById('feedbackArea').style.display = 'block';
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
