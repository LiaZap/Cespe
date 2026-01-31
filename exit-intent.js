document.addEventListener('DOMContentLoaded', () => {
    const exitModal = document.getElementById('exitModal');
    if (!exitModal) return;

    // Check if already shown in this session
    if (localStorage.getItem('exitIntentShown') === 'true') {
        return; 
    }

    let shown = false;

    function showModal() {
        if (shown) return;
        shown = true;
        localStorage.setItem('exitIntentShown', 'true');
        exitModal.classList.add('visible');
    }

    // DESKTOP: Mouse Leave Intent
    document.addEventListener('mouseleave', (e) => {
        // Trigger only if cursor moves to the top (address bar)
        if (e.clientY < 0) {
            showModal();
        }
    });

    // MOBILE: Timer (15 seconds)
    // Simulates "reading then leaving" pattern
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            showModal();
        }, 15000);
    }

    // CLOSE ACTIONS
    const closeBtn = document.getElementById('closeExitModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            exitModal.classList.remove('visible');
        });
    }

    // Close on backdrop click
    exitModal.addEventListener('click', (e) => {
        if (e.target === exitModal) {
            exitModal.classList.remove('visible');
        }
    });
});
