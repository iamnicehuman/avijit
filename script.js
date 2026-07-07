const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");


// falling flowers

const falling = document.getElementById("falling");


const symbols = [
"🌸",
"🌷",
"🌺",
"💗",
"✨",
"🤍"
];


function createFall(){

    let item=document.createElement("div");

    item.className="fall";


    item.innerHTML =
    symbols[Math.floor(Math.random()*symbols.length)];


    item.style.left =
    Math.random()*100+"vw";


    item.style.fontSize =
    15+Math.random()*35+"px";


    item.style.animationDuration =
    5+Math.random()*7+"s";


    falling.appendChild(item);



    setTimeout(()=>{

        item.remove();

    },12000);

}


setInterval(createFall,250);





// yes button

yes.onclick=()=>{


    confetti({

        particleCount:350,

        spread:180,

        startVelocity:60

    });



    document.querySelector(".main").innerHTML=`

    <div class="heart">
    😀
    </div>

    <h1>
    Yeah, you wish Bitch
    </h1>

    `;


};





// no button escape

let tries=0;


no.onmouseover=()=>{


if(tries>=8)
return;


tries++;


no.style.position="fixed";


no.style.left=Math.random()*80+"vw";


no.style.top=Math.random()*80+"vh";


};



no.onclick=()=>{

message.innerHTML="It's okay 💗";

};
