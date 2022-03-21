var { interval, timer, fromEvent } = rxjs;

// 클릭 한 3초 후 카운터를 출력하기 시작
/*
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
*/

/*
const interval$ = interval(1000);

interval$.subscribe((val) => console.log("stream 1 => " + val));

interval$.subscribe((val) => console.log("stream 2 => " + val));
*/

// 3초간 delay후, 1초에 한번씩 값을 출력
const interval$ = timer(3000, 1000);

const sub = interval$.subscribe((val) => console.log("stream 1 => " + val));
setTimeout(() => sub.unsubscribe(), 5000);

const click$ = fromEvent(document, "click");

click$.subscribe(
  (evt) => console.log(evt),
  (err) => console.log(err),
  () => console.log("Completed")
);
