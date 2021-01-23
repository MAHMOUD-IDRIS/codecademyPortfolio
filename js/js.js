
const winwidth = window.innerWidth;
console.log(`width is ${winwidth}`);
let mahmoudImg = document.getElementById("mImg").src;


//changing image source when width is <= 320px
 


var counter = 0;

if(counter < 100) {
    setInterval(() => {
    console.log(counter);
    counter++
    if (mahmoudImg == "./resources/imgs/mahmoudIdris.PNG"){
        mahmoudImg = "./resources/imgs/Mahmoud-Idiriss.png";
        console.log('src not changed')
    } else {
        mahmoudImg = "./resources/imgs/mahmoudIdris.PNG";
        console.log('this is the else')
    }
}, 5000);
}


