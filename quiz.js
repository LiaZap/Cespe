const questions = [
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
        text: "[CESPE] Acerca do emprego do acento grave, julgue o item: 'Refiro-me à Maria'. A crase é facultativa?",
        options: [
            { text: "CERTO", correta: true, feedback: "Boa, 06! Antes de nomes próprios femininos, o artigo é opcional, logo a crase também é facultativa." },
            { text: "ERRADO", correta: false, feedback: "Cuidado! Essa é clássica do CESPE. Antes de nomes femininos (Maria, Joana), a crase é sempre facultativa." }
        ]
    },
    {
        id: 3,
        text: "Estrategicamente, qual matéria tem o maior peso na pontuação final da prova objetiva da PRF?",
        options: [
            { text: "Legislação de Trânsito (CTB)", correta: true, feedback: "Exato! São 30 questões exclusivas. Quem não domina o CTB, não vira Policial Rodoviário Federal." },
            { text: "Direito Penal e Processual", correta: false, feedback: "Importante para a prática, mas na prova, o CTB vale 3x mais pontos." },
            { text: "Língua Portuguesa", correta: false, feedback: "Fundamental para não ser eliminado, mas o Trânsito é o fiel da balança para a classificação." }
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
