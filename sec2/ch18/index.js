const { interval, merge } = rxjs;
const { map } = rxjs.operators;

const interval1$ = interval(1000);

const interval2$ = interval1$.pipe(map((val) => 10 * val));

const result$ = merge(interval1$, interval2$);

result$.subscribe((val) => console.log(val));
