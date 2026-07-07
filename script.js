const yes = document.getElementById("yes");
const no = document.getElementById("no");

let count = 0;


yes.onclick = () => {


    confetti({

        particleCount:300,

        spread:200,

        startVelocity:50

    });


    document.querySelector(".content").innerHTML=`

        <div class="flower">
        💖
        </div>

        <h1>
        Oh!! 
        </h1>

        <h2>
        You wish, bitch 🙂‍↔️
        </h2>

    `;

};



no.onmouseover=()=>{


    if(count>5)
        return;


    count++;


    no.style.position="fixed";


    no.style.left=Math.random()*80+"vw";


    no.style.top=Math.random()*80+"vh";


};
