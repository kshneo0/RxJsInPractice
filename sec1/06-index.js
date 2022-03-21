// 클릭 한 3초 후 카운터를 출력하기 시작
document.addEventListener("click", (evt) => {
  console.log(evt);

  setTimeout(() => {
    console.log("fiished...");

    let counter = 0;

    setInterval(() => {
      console.log(counter);
      counter++;
    }, 1000);
  }, 3000);
});
