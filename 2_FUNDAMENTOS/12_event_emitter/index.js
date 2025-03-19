const Eventemitter = require("events");
const myEmitter = new Eventemitter();

myEmitter.on("event", () => {
  console.log("an event occurred!");
});

console.log("before");
myEmitter.emit("event");

console.log("after");
