import { Observable } from "rxjs";
import { createHttpObservable } from "./util";
import { map } from "rxjs/operators";

const http$ = createHttpObservable(
  "https://jsonplaceholder.typicode.com/albums?userId=1"
);

const albums$ = http$.pipe(map((res) => Object.values(res)));

albums$.subscribe({
  next: (courses) => console.log(courses),
  complete: () => console.log("Completed"),
});
