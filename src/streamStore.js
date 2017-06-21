import Rx from "rxjs";
const socket = require('socket.io-client')('http://localhost:8001');

const subject = new Rx.Subject();

function subjectStream() {
    return subject;
}

function websocketStream(eventName) {
    return Rx.Observable.create(observer => {
        socket.on(eventName, (data) => {
            observer.next(data.message)
        });
    });
}

module.exports = { subjectStream, websocketStream };