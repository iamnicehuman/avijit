const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");

let dodges = 0;

yes.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            height:100vh;
            background:#ffe6ec;
            font-family:Arial;
            text-align:center;">
            <h1>🎉 YAY!! 🎉</h1>
            <h2>that was a prank, fuck off😃</h2>
        </div>
    `;
});

no.addEventListener("mouseover", () => {
    if (dodges >= 8) return; // Eventually let them click it.

    dodges++;

    no.style.position = "fixed";
    no.style.left = Math.random() * (window.innerWidth - 120) + "px";
    no.style.top = Math.random() * (window.innerHeight - 60) + "px";
});

no.addEventListener("click", () => {
    message.innerHTML =
        "😊 Thanks for being honest. No worries at all!";
});
