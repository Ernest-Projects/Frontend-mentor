


let main = document.querySelector(".button-container");
 
const names = ["GitHub", "Frontend Mentor", "LinkedIn", "X", "Instagram"];

for(let i = 0; i < 5; i++) {
    let button = document.createElement("button");
    button.textContent = `${names[i]}`;
    main.appendChild(button); 
}