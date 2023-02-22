const btn = document.querySelectorAll(".drum");

// console.log(this)
for (let i = 0; i < btn.length; i++) {
  // Buttton Click
  btn[i].addEventListener("click", () => {
    const buttonsValue = btn[i].innerHTML;
    makeSound(buttonsValue);
    buttonAnimation(buttonsValue);
  });
}

// KeyPress
document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      const tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      const tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      const kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  const activeBtn = document.querySelector(`.${currentKey}`);
  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 100);
}
