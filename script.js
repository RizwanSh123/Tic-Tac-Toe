  boxes = document.querySelectorAll(".box")
  resetbtn =document.getElementById("reset-btn")
  newbtn = document.getElementById("new-btn")
  msgcontainer = document.querySelector(".msg-container")
  msg = document.getElementById("msg")

  turnO = true;

  winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

resetGame = () =>{
 turnO = true;
 enabledbox();
 msgcontainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       
       if(turnO){
        box.innerHTML ="O";
        box.style.color ="black"
        turnO = false;

       }else{
        box.innerHTML = "X";
        turnO =true;
       }
       box.disabled = true;

       checkwinner();
    });
});


enabledbox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML ="";
    }
    
 }

 disabledbox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
    
 }
 showWinner = (winner) =>{
    msg.innerHTML =`Congratulations ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbox();
 }
 

  checkwinner =() =>{
    for (let pattern of winpatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 !="" && posVal2 !="" && posVal3 !=""){
            if(posVal1 === posVal2 &&  posVal2 === posVal3){
                showWinner(posVal1);
                
            }
        }
    }

};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);