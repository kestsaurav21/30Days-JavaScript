

const noteContainer = document.querySelector(".note-container");
const createButton = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");


createButton.addEventListener("click", function(){
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
})


noteContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
})