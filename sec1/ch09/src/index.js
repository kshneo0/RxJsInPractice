import { Observable } from "rxjs";

const http$ = Observable.create((observer) => {
  fetch(`https://jsonplaceholder.typicode.com/albums?userId=1`)
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

http$.subscribe({
  next: (courses) => console.log(courses),
  complete: () => console.log("Completed"),
});
