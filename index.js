const btn = document.querySelectorAll(".drum");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    console.log("i got clicked");
  });
}
