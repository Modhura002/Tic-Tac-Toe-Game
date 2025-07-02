let boxes=document.querySelectorAll(".squares");
let resetbtn=document.querySelector(".reset");
let newbtn=document.querySelector(".new");
let win=document.querySelector("#win");
const winComb=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let playerO=true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText!=="")
            return;
        if(playerO){
            box.innerText="O";
            playerO=false;
        }
        else{
            box.innerText="X";
            box.style.color="#2782F1";
            playerO=true;
        }
          
        checkWinner();

    });

});

const checkWinner=()=>{
    for(let pos of winComb){
        let p1=boxes[pos[0]].innerText;
        let p2=boxes[pos[1]].innerText;
        let p3=boxes[pos[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
               
                let winner=p1;
                console.log(winner+" wins");
                announceWinner(winner);
                 disable();
                 return;  
            }
                
        }
    }
};

const disable=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}

const announceWinner=(winner)=>{
    win.innerText="Congratulations! Winner is "+winner;
    win.classList.remove("hide");


}
 resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    playerO = true;
    win.classList.add("hide");  
});
