import { Observable } from "rxjs";
import { createHttpObservable } from "./util";
import { map } from "rxjs/operators";

const http$ = createHttpObservable(
  "https://jsonplaceholder.typicode.com/albums?userId=1"
);

const albums$ = http$.pipe(map((res) => Object.values(res)));

albums$.subscribe({
  next: (courses) => {
    console.log(
      "even: ",
      courses.filter((course) => course.id % 2 === 0)
    );
    console.log(
      "odd: ",
      courses.filter((course) => course.id % 2 !== 0)
    );
  },
  complete: () => console.log("Completed"),
});
