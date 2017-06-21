import Rx from "rxjs";

const streamStore = new Rx.Subject();

function stream() {
    return streamStore;
}

module.exports = { stream };