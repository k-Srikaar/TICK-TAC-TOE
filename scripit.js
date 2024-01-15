let boxes = document.querySelectorAll(".box");
let zz=   document.querySelector("body");
let xx=   document.querySelector(".win");
let Boxes = document.querySelectorAll(".box");
xx.style.visibility="hidden";
let player1=prompt("Name of Player 1 ");
let player2=prompt("Name of Player 2");
currentval=true;
var clicks=0;
let val = "false";
for(let box of boxes){
    box.addEventListener("click",()=>{
        clicks++;
        if(currentval){
            box.innerText="x"
            currentval=false;
        }
        else{
            box.innerText="o";
            currentval=true;
        }   
        box.disabled=true;  
        // console.log(clicks);
        checkwinner(); 
       
    })
}

const winnpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    ];
    
    const checkwinner = ()=>{
        
        

        for(let pattern of winnpatterns){
            let pos1val= boxes[pattern[0]].innerText;
            let pos2val= boxes[pattern[1]].innerText;
            let pos3val= boxes[pattern[2]].innerText;
    
            if(pos1val !=="" && pos2val !=="" && pos3val !=="" ){
               
                if((pos1val === pos2val) && (pos2val === pos3val)){
                   
                    zz.style.backgroundColor="yellow";
                    val="true";
                    
                    Boxes.forEach((Box)=>{
                        Box.classList.add("win-btns");
                    });
                    
                    if(currentval){
                        xx.innerText=`${player2} Won the match 🥳`;
                    }
                    else{
                        xx.innerText=`${player1} Won the match 🥳`;
                    }
                    xx.style.visibility="";
                    for(let box of boxes){
                        box.disabled=true;
                    }
                    break;
                }
               
                
            }
        }
        if(clicks === 9 && val === "false"){
            xx.style.visibility="";
            xx.innerText = `Match Draw 🤝`;
            zz.style.backgroundColor="red";
        }  
    };
    

let resetButton = document.querySelector(".reset-btn");

resetButton.addEventListener("click",()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        xx.style.visibility="hidden";
        Boxes.forEach((Box)=>{
            Box.classList.remove("win-btns");
        });
        zz.style.backgroundColor="cadetblue";
    }
        
});


