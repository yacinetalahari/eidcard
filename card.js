window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const toName = params.get('to');
    const fromName = params.get('from');

    if (toName && fromName) {
        document.getElementById('cardToName').textContent = decodeURIComponent(toName);
        document.getElementById('cardFromName').textContent = decodeURIComponent(fromName);
    }
    
    // Create stars
    const container = document.getElementById('starsContainer');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        const size = Math.random() * 3 + 2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = Math.random() * 3 + 2 + 's';
        container.appendChild(star);
    }
};
