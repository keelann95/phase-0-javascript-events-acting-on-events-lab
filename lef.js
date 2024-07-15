
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "100px";
dodger.style.bottom = "0px";
dodger.style.left = "0px";

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});

function moveDodgerRight() {
    

        const left = dodger.style.left
        left = parseInt(left);
    
        dodger.style.left = `${left + 1}px`;
       
        moveDodgerRight()
        let newPosition= dodger.style.left
        newPosition=parseInt(newPosition)

        if (left<360) {
            newPosition>left
        }else{newPosition=left}

}