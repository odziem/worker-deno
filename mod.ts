import { delay } from "https://deno.land/std/async/delay.ts";

const workerOne = new Worker("./worker.ts", { type: "module" });
const workerTwo = new Worker("./worker.ts", { type: "module" });

workerOne.onmessage = function(event) {
  console.log('Worker1:', event.data);
}

workerTwo.onmessage = function(event) {
  console.log('Worker2:', event.data);
}

console.log("Starting main thread");
while (true) {
  workerOne.postMessage({ runtime: "node" });
  workerTwo.postMessage({ runtime: "done" });
  await delay(0);
}
