const fomoConfig = {
    names: [
        "Lucas S.", "Marcos P.", "Rafael M.", "Gabriel O.", "Thiago A.",
        "Bruno C.", "Felipe R.", "Rodrigo T.", "Gustavo L.", "André F.",
        "Carlos E.", "Daniel S.", "Eduardo B.", "Fernando K.", "Henrique V.",
        "Igor J.", "João P.", "Leonardo M.", "Matheus G.", "Pedro H."
    ],
    locations: [
        "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Brasília, DF",
        "Curitiba, PR", "Porto Alegre, RS", "Salvador, BA", "Fortaleza, CE",
        "Recife, PE", "Goiânia, GO"
    ],
    products: [
        "Combo PRF Elite", "Mentoria Tática", "Curso Operacional", "Apostila Digital"
    ],
    minDelay: 5000,  // 5 seconds
    maxDelay: 15000, // 15 seconds
    displayDuration: 4000 // 4 seconds
};

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function createNotification() {
    const container = document.getElementById('fomo-container');
    if (!container) return;

    const name = getRandomElement(fomoConfig.names);
    const location = getRandomElement(fomoConfig.locations);
    const product = getRandomElement(fomoConfig.products);
    
    // Create notification element
    const notif = document.createElement('div');
    notif.className = 'fomo-notification';
    notif.innerHTML = `
        <div class="fomo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        </div>
        <div class="fomo-content">
            <span class="fomo-title">${name} de ${location}</span>
            <span class="fomo-text">Acabou de adquirir <strong>${product}</strong></span>
            <span class="fomo-time">Agora mesmo</span>
        </div>
    `;

    container.appendChild(notif);

    // Animate In
    setTimeout(() => {
        notif.classList.add('visible');
    }, 100);

    // Remove after duration
    setTimeout(() => {
        notif.classList.remove('visible');
        setTimeout(() => {
            notif.remove();
        }, 300); // Wait for transition
    }, fomoConfig.displayDuration);
}

function scheduleNextNotification() {
    const delay = Math.floor(Math.random() * (fomoConfig.maxDelay - fomoConfig.minDelay + 1)) + fomoConfig.minDelay;
    setTimeout(() => {
        createNotification();
        scheduleNextNotification();
    }, delay);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    // Create Container
    const container = document.createElement('div');
    container.id = 'fomo-container';
    document.body.appendChild(container);

    // Start Loop
    scheduleNextNotification();
});
