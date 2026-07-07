const yes = document.getElementById("yes");

yes.addEventListener("click", () => {

    // Big confetti blast
    confetti({
        particleCount: 250,
        spread: 180,
        startVelocity: 60,
        origin: { y: 0.6 }
    });

    // Continue confetti for 3 seconds
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 6,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 6,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    })();

    // Show success message after a short delay
    setTimeout(() => {
        document.body.innerHTML = `
            <div class="success">
                <h1>Yeah, you wish bitch</h1>
            </div>
        `;
    }, 500);
});
