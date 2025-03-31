//code here

function showEidCard() {
    const name = document.getElementById('userName').value.trim();
    if (!name) return;
    
    document.getElementById('displayName').textContent = name;
    switchCards('nameInputCard', 'mainCard');
}

function showSenderForm() {
    switchCards('mainCard', 'senderForm');
}

// Modify the generateShareLink function
function generateShareLink() {
    const toName = document.getElementById('toName').value.trim();
    const fromName = document.getElementById('fromName').value.trim();
    
    if (!toName || !fromName) return;
    
    document.getElementById('generatedToName').textContent = toName;
    document.getElementById('generatedFromName').textContent = fromName;
    
    switchCards('senderForm', 'generatedCard');
}

// Add new shareCard function
// Modify the shareCard function
function shareCard() {
    const toName = document.getElementById('generatedToName').textContent;
    const fromName = document.getElementById('generatedFromName').textContent;
    
    const shareLink = `card.html?to=${encodeURIComponent(toName)}&from=${encodeURIComponent(fromName)}`;

    if (navigator.share) {
        navigator.share({
            title: 'Eid Mubarak Card',
            text: `You've received an Eid card from ${fromName}!`,
            url: shareLink
        });
    } else {
        prompt("Here's your shareable link:", shareLink);
    }
}


function animateStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
    });
}

function switchCards(hideId, showId) {
    const hideCard = document.getElementById(hideId);
    const showCard = document.getElementById(showId);
    
    hideCard.classList.remove('visible');
    setTimeout(() => {
        showCard.classList.add('visible');
    }, 300);
    animateStars();
}

function createStars() {
    const container = document.getElementById('starsContainer');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
            
        // Random position and size
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        const size = Math.random() * 3 + 2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
            
        // Random animation properties
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = Math.random() * 3 + 2 + 's';
            
        container.appendChild(star);
    }
}

// Fix window.onload
window.onload = function() {
    createStars();
    
    const params = new URLSearchParams(window.location.search);
    const toName = params.get('to');
    const fromName = params.get('from');
    
    if (toName && fromName) {
        document.getElementById('generatedToName').textContent = toName;
        document.getElementById('generatedFromName').textContent = fromName;
        switchCards('nameInputCard', 'generatedCard');
    }
};

window.onload = function(){
    createStars();
}