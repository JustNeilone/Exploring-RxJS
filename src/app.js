import $ from 'jquery';
import Rx from 'rxjs/Rx';

// Observables from events
/*const output = $('#output')
const btn = $('#btn');
const btnStream$ = Rx.Observable.fromEvent(btn, 'click');
btnStream$.subscribe(
    function(e) {
        console.log(e);
    },
    function(err) {
        console.log(err);
    },
    function() {
        console.log('Completed');
    }
)
const input = $('#input');
const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');
inputStream$.subscribe(
    function(e) {
        console.log(e.currentTarget.value);
        output.append(e.currentTarget.value);
    },
    function(err) {
        console.log(err);
    },
    function() {
        console.log('Completed');
    }
)

const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');
moveStream$.subscribe(
    function(e) {
        console.log(e.currentTarget.value);
        output.html(`<h1>X: ${e.clientX}, Y: ${e.clientY}</h1>`);
    },
    function(err) {
        console.log(err);
    },
    function() {
        console.log('Completed');
    }
)*/

// Observable from array-like objects
/*const numbers = [33, 44, 55, 66, 77];
const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(
    val => {
        console.log(val);
    },
    err => console.log(err),
    complete => console.log('Completed')
);

const posts = [
    {title: 'Post one', body: 'Post body'},
    {title: 'Post two', body: 'Post body'},
    {title: 'Post three', body: 'Post body'},
];
const posts$ = Rx.Observable.from(posts);
posts$.subscribe(
    post => {
        console.log(post);
        $('#posts').append(`<li><h3>${post.title}</h3><p>${post.body}</p></li>`)
    },
    err => console.log(err),
    complete => console.log('Completed')
);

const set = new Set(['Hello', 44, {title:'My Title'}]);
const set$ = Rx.Observable.from(set);
set$.subscribe(
    val => {
        console.log(val);
    },
    err => console.log(err),
    complete => console.log('Completed')
);

const map = new Map([[1,2], [3,4], [5,6]]);
const map$ = Rx.Observable.from(map);
map$.subscribe(
    val => {
        console.log(val);
    },
    err => console.log(err),
    complete => console.log('Completed')
);*/

// Create an Observable 
/*const source$ = new Rx.Observable(observer => {
    console.log('Creating Observable');
    observer.next('Hello from observer.next()');

    //observer.error(new Error('Error: Something went wrong'))

    setTimeout(() => {
        observer.next('Yet another value');
        observer.complete();
    }, 3000); // the stream is still open, observer is not complete
});

source$
    .catch(err => Rx.Observable.of(err)) // completes if there are errors
    .subscribe(
        x => console.log(x),
        err => console.log(err),
        complete => console.log('Completed')
    );
    */


// From promise
/*const myPromise = new Promise((resolve, reject) => {
    console.log('Creating Promise');
    // imitating async operation
    setTimeout(() => {
        resolve('Promise resolved')
    }, 3000);
})

// myPromise.then(x => {
//     console.log(x);
// })
// OR
const source$ = Rx.Observable.fromPromise(myPromise);
source$.subscribe(x => console.log(x));*/

// Make a request
/*function getUser(username) {
    return $.ajax({
        url: 'https://api.github.com/users/' + username,
        dataType: 'jsonp'
    }).promise();
}

const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup')
inputSource$.subscribe(e => {
    Rx.Observable.fromPromise(getUser(e.target.value))
    .subscribe(x => {
        $('#login').text(x.data.login);
        $('#bio').text(x.data.bio);
        $('#created-at').text(x.data.created_at);
    });
});*/

// Interval, timer, range

// const source$ = Rx.Observable.interval(100)
//     .take(5);
// source$.subscribe(
//         x => console.log(x),
//         err => console.log(err),
//         complete => console.log('Completed')
//     );

// const source$ = Rx.Observable.timer(5000, 2000)
//     .take(5);
// source$.subscribe(
//         x => console.log(x),
//         err => console.log(err),
//         complete => console.log('Completed')
//     );

// const source$ = Rx.Observable.range(25, 101);
// source$.subscribe(
//         x => console.log(x),
//         err => console.log(err),
//         complete => console.log('Completed')
//     );

// Map
// const source$ = Rx.Observable.interval(1000)
//     .take(10)
//     .map(value => value * 2);
// source$.subscribe(
//     x => console.log(x)
// );

// const source$ = Rx.Observable.from(['John', 'Tom', 'Shawn']).map(name => name.toUpperCase()).map(n => 'I am ' + n);
// source$.subscribe(
//     x => console.log(x)
// );

// function getUser(username) {
//     return $.ajax({
//         url: 'https://api.github.com/users/' + username,
//         dataType: 'jsonp'
//     }).promise();
// }
// Rx.Observable.fromPromise(getUser('justneilone'))
//     .map(user => user.data.name)
//     .subscribe(name => {
//         console.log(name)
//     }
// );

// Pluck
// const users = [
//     {name: 'Will', age: 34},
//     {name: 'Bill', age: 37},
//     {name: 'Joe', age: 39},
// ]
// const users$ = Rx.Observable.from(users).pluck('name');
// users$.subscribe(x => console.log(x));

// Merge
// Rx.Observable.of('Hello')
//     .merge(Rx.Observable.of('Everyone'))
//     .subscribe(x => console.log(x));

// Rx.Observable.interval(2000)
//     .merge(Rx.Observable.interval(500))
//     .take(25)
//     .subscribe(x => console.log(x));

// const source1$ = Rx.Observable.interval(2000).map(v => 'Merge1: ' + v);
// const source2$ = Rx.Observable.interval(500).map(v => 'Merge2: ' + v);
// Rx.Observable.merge(source1$, source2$)
//     .take(25)
//     .subscribe(x => console.log(x));

// Concat
// const source1$ = Rx.Observable.range(0, 5).map(v => 'Source1: ' + v);
// const source2$ = Rx.Observable.range(5, 6).map(v => 'Source2: ' + v);
// Rx.Observable.concat(source1$, source2$).subscribe(x => console.log(x));

// MergeMap
// Rx.Observable.of('Hello')
//     .subscribe(v => {
//         Rx.Observable.of(v + ' Everyone')
//             .subscribe(x => console.log(x));
//     }) // bad example, use merge map

// Rx.Observable.of('Hello')
//     .mergeMap(v => {
//         return Rx.Observable.of(v + ' Everyone');
//     })
//     .subscribe(x => console.log(x));

// SwitchMap
function getUser(username) {
    return $.ajax({
        url: 'https://api.github.com/users/' + username,
        dataType: 'jsonp'
    }).promise();
}
/*
const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup');
inputSource$.subscribe(e => {
    Rx.Observable.fromPromise(getUser(e.target.value))
    .subscribe(x => {
        $('#login').text(x.data.login);
        $('#bio').text(x.data.bio);
        $('#created-at').text(x.data.created_at);
    });
});*/

const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup')
    .map(e => e.target.value)
    .switchMap(val => {
        return Rx.Observable.fromPromise(getUser(val))
    });

inputSource$.subscribe(x => {
    $('#login').text(x.data.login);
    $('#bio').text(x.data.bio);
    $('#created-at').text(x.data.created_at);
})
