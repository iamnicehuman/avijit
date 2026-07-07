const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");


yes.onclick = () => {


    confetti({

        particleCount:300,

        spread:180,

        origin:{
            y:0.6
        }

    });


    document.querySelector(".container").innerHTML = `

        <div class="emoji">
        💖
        </div>

        <h1>
        
        </h1>

        <p class="question">
        YEAH, YOU WISH BITCH 🙂‍↔️
        </p>

    `;

};



let moves = 0;


no.onmouseover = () => {

    if(moves >= 6) return;


    moves++;


    no.style.position="absolute";


    no.style.left =
    Math.random()*80+"vw";


    no.style.top =
    Math.random()*80+"vh";


};


no.onclick = () => {

    message.innerHTML =
    "That's okay 💗";

};
