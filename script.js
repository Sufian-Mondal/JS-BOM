//Js Bom
//js timing effect method
// setTimeOut(), setIntervval()

// setTimeout(() => {
//   console.log("hi");
// }, 3000);

// setTimeout(display, 5000);

// function display() {
//   console.log("display function");
// }

const btnOne = document.querySelector(".btn-one");
const message = document.querySelector(".message");

// btnOne.addEventListener("click", saveUser);

// function saveUser() {
//   message.textContent = "user registration successful";

//   setTimeout(() => {
//     message.textContent = "";
//   }, 2000);
// }

btnOne.addEventListener("click", countDisplay);

function countDisplay() {
  let count = 1;
  message.textContent = count;

  setInterval(() => {
    count++;
    message.textContent = count;
  }, 2000);
}
