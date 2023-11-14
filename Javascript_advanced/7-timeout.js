console.log("Start of the execution queue");

setTimeout(() => {
 console.log("Final code block to be executed using setTimeout (with delay of 0)");
}, 0);

for (let i = 0; i < 100; i++) {
 console.log(`Iteration number: ${i}`);
}

console.log("End of the loop printing");
