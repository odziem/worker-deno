self.onmessage = async (event) => {
  const { runtime } = event.data;
  const result = runtime.split("").sort().join("");
  self.postMessage({ result });
};