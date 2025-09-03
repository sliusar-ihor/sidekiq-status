document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll('.progress').forEach(function(progress) {
        const bar = progress.querySelector('.bar');
        const pct = bar.textContent;
        if (bar && pct) {
            const newBar = bar.cloneNode(true);
            newBar.style.width = pct + '%';
            bar.parentNode.replaceChild(newBar, bar);
        }
    });

    document.querySelectorAll('.progress-full').forEach(function(progressFull) {
        const bar = progressFull.querySelector('.progress-bar');
        if (!bar) return;
        const pct = bar.getAttribute('aria-valuenow');
        const newBar = bar.cloneNode(true);

        newBar.style.width = pct + '%';
        const percentageDiv = newBar.querySelector('.progress-percentage');
        if (percentageDiv) {
            percentageDiv.textContent = pct + '%';
        }
        bar.parentNode.replaceChild(newBar, bar);
    });
});
