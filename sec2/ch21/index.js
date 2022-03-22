const { interval, merge } = rxjs;
const { map } = rxjs.operators;

const interval1$ = interval(1000);

const sub = interval1$.subscribe(console.log);

setTimeout(() => sub.unsubscribe(), 5000);
