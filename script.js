// ================================
// TACTICAL PROTOCOL - SCRIPTS
// ================================

document.addEventListener('DOMContentLoaded', () => {
    initStickyBar();
    initCountdown();
    initExitIntent();
    initSmoothScroll();
});

// 1. Sticky Mobile Bar Logic
function initStickyBar() {
    const bar = document.getElementById('stickyBar');
    if (!bar) return;

    // Show after scrolling past Hero (approx 600px)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            bar.classList.add('visible');
        } else {
            bar.classList.remove('visible');
        }
    });
}

// 2. Tactical Countdown (Urgency)
function initCountdown() {
    const timerDisplay = document.getElementById('stickyTimer');
    if (!timerDisplay) return;

    let time = 15 * 60; // 15 minutes in seconds

    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        
        const fmtMin = minutes < 10 ? `0${minutes}` : minutes;
        const fmtSec = seconds < 10 ? `0${seconds}` : seconds;

        timerDisplay.textContent = `${fmtMin}:${fmtSec}`;
        
        if (time > 0) {
            time--;
        } else {
            // Reset to 15m to create loop pressure
            time = 15 * 60;
        }
    }, 1000);
}

// 3. Exit Intent (Simulated)
function initExitIntent() {
    let hasShown = false;
    
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !hasShown) {
            // In a real scenario, this would trigger a Modal
            // highlighting the offer one last time.
            // For now, we'll just log it or flash the title.
            document.title = "🚨 VOLTE PARA A SUA APROVAÇÃO!";
            setTimeout(() => {
                document.title = "Dominando a CESPE | PRF - Material Tático";
            }, 3000);
            hasShown = true;
        }
    });
}

// 4. Smooth Anchor Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
