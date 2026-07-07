const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");


let dodges = 0;


// YES BUTTON

yes.addEventListener("click",()=>{


    document.body.innerHTML = `

    <div class="success">

        <h1>You wish, bitch 🙂‍↔️</h1>

    </div>

    `;


    // Confetti explosion

    confetti({

        particleCount:250,

        spread:160,

        startVelocity:60,

        origin:{
            y:.6
        }

    });



    // Extra bursts

    setTimeout(()=>{

        confetti({

            particleCount:150,

            spread:120,

            origin:{
                x:0
            }

        });


        confetti({

            particleCount:150,

            spread:120,

            origin:{
                x:1
            }

        });


    },500);


});




// NO BUTTON RUNS AWAY 😂

no.addEventListener("mouseover",()=>{


    if(dodges >= 7){

        return;

    }


    dodges++;


    no.style.position="fixed";


    no.style.left =
    Math.random() *
    (window.innerWidth-120)
    +"px";


    no.style.top =
    Math.random() *
    (window.innerHeight-60)
    +"px";


});




// If they finally click NO

no.addEventListener("click",()=>{

    message.innerHTML=
    "oh";

});
