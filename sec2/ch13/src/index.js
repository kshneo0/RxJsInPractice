import { Observable } from "rxjs";
import { createHttpObservable } from "./util";
import { map, tap, share } from "rxjs/operators";

const http$ = createHttpObservable(
  "https://jsonplaceholder.typicode.com/albums?userId=1"
);

const albums$ = http$.pipe(
  tap(console.log("HTTP request executed")),
  map((res) => Object.values(res)),
  share() //사용시 확인
);

const odd$ = http$.pipe(
  map((albums) => albums.filter((album) => album.id % 2 !== 0))
);

const even$ = http$.pipe(
  map((albums) => albums.filter((album) => album.id % 2 === 0))
);

odd$.subscribe((val) => console.log("odd: ", val));
even$.subscribe((val) => console.log("even: ", val));
