import { from } from "rxjs";
import { of } from "rxjs";
import { Observable } from "rxjs";
import { filter, map, tap, concatMap } from "rxjs/operators";

const http$ = Observable.create((observer) => {
  fetch(`https://jsonplaceholder.typicode.com/albums`)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      observer.next(body);
      observer.complete();
    })
    .catch((err) => {
      observer.error(err);
    });
});

http$
  .pipe(
    concatMap((val) => val),
    filter((album) => album.id === 1)
  )
  .subscribe((val) => console.log(val));
