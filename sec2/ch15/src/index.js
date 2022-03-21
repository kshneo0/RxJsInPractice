import { of, concat, interval } from "rxjs";
import { concatWith } from "rxjs/operators";
/*
const source1$ = of(1, 2, 3);

const source2$ = of(4, 5, 6);

const source3$ = of(7, 8, 9);

const result$ = concat(source1$, source2$, source3$);
// result$.subscribe((val) => console.log("concat: ", val));
result$.subscribe(console.log);

const result1$ = source1$.pipe(concatWith(source2$), concatWith(source3$));
result1$.subscribe((val) => console.log("concatWith: ", val));
*/

//source1이 완료되지 않으면 source2가 실행되지 않는다.
const source1$ = interval(1000);
const source2$ = of(4, 5, 6);
const result$ = concat(source1$, source2$);
result$.subscribe(console.log);
