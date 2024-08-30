const noteContainer = document.querySelector(".note-container");
const createButton = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes");
    attachListeners();  // Reattach event listeners after loading notes

}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", noteContainer.innerHTML);
}


function attachListeners() {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
        note.addEventListener("keyup", updateStorage);
    });
    
    noteContainer.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", function() {
            img.parentElement.remove();
            updateStorage();
        });
    });
}


createButton.addEventListener("click", function() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
    
    inputBox.addEventListener("keyup", updateStorage);
    img.addEventListener("click", function() {
        img.parentElement.remove();
        updateStorage();
    });

    updateStorage();
});

showNotes();


// noteContainer.addEventListener("click", (e) => {
//     if(e.target.tagName === "IMG"){
//         e.target.parentElement.remove();
//         updateStorage();
//     }
//     else if(e.target.tagName === "P"){
//         notes = document.querySelectorAll(".input-box");
//         notes.forEach(nt => {
//             nt.onkeyup = function(){
//                 updateStorage();

//             }
//         })
//     }
// })