let radahn = Number;
let godrick = Number;
let morgott = Number;
let rennala = Number;
radahn = 0;
godrick = 0;
morgott = 0;
rennala = 0;

let q1 = document.querySelector('.q1');
let chicken = document.querySelector(".chicken");
let bagle = document.querySelector('.bagle');
let burrito = document.querySelector('.burrito');
let sushi = document.querySelector('.sushi');
let q2 = document.querySelector('.q2');

chicken.addEventListener('click', function(){
    radahn++;
    q1.style.display='none';
    q2.style.display='block';
});

bagle.addEventListener('click', function(){
    godrick++;
    q1.style.display='none';
    q2.style.display='block';
});

burrito.addEventListener('click', function(){
    morgott++;
    q1.style.display='none';
    q2.style.display='block';
});

sushi.addEventListener('click', function(){
    rennala++;
    q1.style.display='none';
    q2.style.display='block';
});

let red = document.querySelector('.red');
let black = document.querySelector('.black');
let purple = document.querySelector('.purple');
let green = document.querySelector('.green');
let q3 = document.querySelector('.q3');

red.addEventListener('click', function(){
    radahn++;
    q2.style.display='none';
    q3.style.display='block';
});


black.addEventListener('click', function(){
    morgott++;
    q2.style.display='none';
    q3.style.display='block';
});

purple.addEventListener('click', function(){
    rennala++;
    q2.style.display='none';
    q3.style.display='block';
});

green.addEventListener('click', function(){
    godrick++;
    q2.style.display='none';
    q3.style.display='block';
});

let intl = document.querySelector('.intelligence');
let dex = document.querySelector('.dexterity');
let vig = document.querySelector('.vigor');
let str = document.querySelector('.strength');
let q4 = document.querySelector('.q4');

intl.addEventListener('click', function(){
    rennala++;
    q3.style.display='none';
    q4.style.display='block';
});

dex.addEventListener('click', function(){
    morgott++;
    q3.style.display='none';
    q4.style.display='block';
});

vig.addEventListener('click', function(){
    godrick++;
    q3.style.display='none';
    q4.style.display='block';
});

str.addEventListener('click', function(){
    radahn++;
    q3.style.display='none';
    q4.style.display='block';
});

let moon = document.querySelector('.moon');
let star = document.querySelector('.star');
let curse = document.querySelector('.curse');
let dragon = document.querySelector('.dragon');
let results = document.querySelector('.results');

moon.addEventListener('click', function(){
    rennala++;
    q4.style.display='none';
    done()
});

star.addEventListener('click', function(){
    radahn++;
    q4.style.display='none';
    done()
});

curse.addEventListener('click', function(){
    morgott++;
    q4.style.display='none';
    done()
});

dragon.addEventListener('click', function(){
    godrick++;
    q4.style.display='none';
    done()
})

let title = document.querySelector('.title h1');
let ren = document.querySelector('.resultRen');
let rad = document.querySelector('.rad');
let mor = document.querySelector('.mor');
let god = document.querySelector('.god');
let restart = document.querySelector('.restart');

function done() {
    // innerHTML = ...
    title.textContent ="Your Elden Ring Boss is: ";
    if(rennala >= radahn && rennala >= morgott && rennala >= godrick)
        {
            ren.style.display='block';
            restart.style.display='block';
            restart.addEventListener('click', function(){
                location.reload()
            });
        }else if(radahn >= rennala && radahn >= morgott && radahn >= godrick){
            rad.style.display='block';
            restart.style.display='block';
            restart.addEventListener('click', function(){
                location.reload()
            });
        }else if(morgott >= radahn && morgott >= rennala && morgott >= godrick){
            mor.style.display='block';
            restart.style.display='block';
            restart.addEventListener('click', function(){
                location.reload()
            });
        }else if(godrick >= radahn && godrick >= rennala && godrick >= morgott){
            god.style.display='block';
            restart.style.display='block';
            restart.addEventListener('click', function(){
                location.reload()
            });
        }
}