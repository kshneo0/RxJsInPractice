document.addEventListener("click", (evt) => {
  console.log(evt);
});

let counter = 0;

setInterval(() => {
  console.log(counter);
  counter++;
}, 1000);

setTimeout(() => {
  console.log("fiished...");
}, 3000);
