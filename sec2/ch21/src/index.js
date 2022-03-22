import { interval, merge } from "rxjs";
import { map } from "rxjs/operators";
import { createHttpObservable } from "./util";

/*
const interval1$ = interval(1000);

const sub = interval1$.subscribe(console.log);

setTimeout(() => sub.unsubscribe(), 5000);
*/

const http$ = createHttpObservable(
  "https://jsonplaceholder.typicode.com/albums?userId=1"
);

const sub = http$.subscribe(console.log);

setTimeout(() => sub.unsubscribe(), 0);
