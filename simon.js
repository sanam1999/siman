let gamesqn = [];
let usersqn = [];
btnc = ["green","yellow","red","blue"];
let h4 = document.querySelector('h4')
let contener = document.querySelector('.contener')
nextl = document.createElement('button')
let lavel = 0;
let cerenlabel = 5;

let gamestart = false; // Initialize gamestart variable
if(gamestart == false){
    nextl.innerText = "Start Game"
nextl.setAttribute('class' , 'next');
contener.setAttribute('class' , 'c');

document.querySelector('body').append(nextl)

}

nextl.addEventListener("click", function(){
  
    if (gamestart == false) {
        console.log("game started");
        setTimeout(levelup,1000)
        gamestart =  true;
    }
    contener.classList.remove('c')
    contener.setAttribute('class' , 'contener');
    nextl.classList.remove('next');
    nextl.remove();
    
    
});


function levelup(){
    if(lavel== cerenlabel){
        newlavel(cerenlabel)
    }
    usersqn = []
    lavel++;
    h4.innerText = `Level ${lavel}`;
    let random = Math.floor(Math.random()*4)
    let color = btnc[random]
    let btn = document.querySelector(`.${color}`)
    console.log(btn)
    btnFlash(btn)
    gamesqn.push(color)
    console.log(gamesqn)

}

function btnFlash(btn){
    
    btn.classList.add('click')
    setTimeout(function(){
        btn.classList.remove('click')
    },300)
}
function btnpresh(){//event
    
   // let userbtn =event.target;
    let userbtn=this;
    btnFlash(userbtn)
    let user = userbtn.getAttribute('id');       
    
    usersqn.push(user)
   complare(usersqn.length-1);

    
    
}

let bAll = document.querySelectorAll('.b')
for(b of bAll){
    b.addEventListener('click',btnpresh);
}

function complare(index){
   
   if( usersqn[index]===gamesqn[index]){
    if( usersqn.length==gamesqn.length){

        if(index+1==cerenlabel){
            newlavel();
        }
        else{
            setTimeout(levelup,1000)
        }
       

    }
   }else{
    h4.innerText = "Game Over!";
    contener.setAttribute('class' , 'c');
    resetgame();
   }
   
    
}

function resetgame(){
 gamesqn = [];
 usersqn = [];
 lavel = 0;
 gamestart = false; 
 nextl.innerText = "Start Game"
 nextl.setAttribute('class' , 'next');
 document.querySelector('body').append(nextl)
}


function newlavel(){
    gamesqn = [];
 usersqn = [];
 lavel = 0;
    cerenlabel += 5;
    h4.innerText = "level completed"

    contener.setAttribute('class' , 'c');
nextl.innerText = "Next lavel"
nextl.setAttribute('class' , 'next');
document.querySelector('body').append(nextl)
nextl.addEventListener('click',function(){
    
    nextl.classList.remove('next');
    nextl.remove();
    setTimeout(levelup,1000)


})
}