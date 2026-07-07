const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");

let dodges = 0;

// YES
yes.addEventListener("click", () => {

    document.body.innerHTML = `
        <div class="success">
            <h1>you wish , bitch</h1>
            <p style="margin-top:20px;font-size:20px;">😊</p>
        </div>
    `;

    celebrate();
});

// NO Button Runs Away
no.addEventListener("mouseover", () => {

    if (dodges >= 8) return;

    dodges++;

    no.style.position = "fixed";
    no.style.left = Math.random() * (window.innerWidth - 120) + "px";
    no.style.top = Math.random() * (window.innerHeight - 60) + "px";
});

// After enough dodges, let them click No
no.addEventListener("click", () => {
    message.textContent = "😊 lol";
});

// Confetti
function celebrate(){

    const duration = 3500;
    const end = Date.now() + duration;

    (function frame(){

        confetti({
            particleCount:5,
            angle:60,
            spread:60,
            origin:{x:0}
        });

        confetti({
            particleCount:5,
            angle:120,
            spread:60,
            origin:{x:1}
        });

        if(Date.now() < end){
            requestAnimationFrame(frame);
        }

    })();

    confetti({
        particleCount:250,
        spread:150,
        origin:{y:0.6}
    });
}
