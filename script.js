function updateClock() {
    const now = new Date();
    const clock = document.getElementById('clock');
    const time = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
    clock.textContent = time;
}

// Excuse my use of js (i wanted to have a working clock qwq)
updateClock();
setInterval(updateClock, 1000);
