const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt", {
  encoding: "utf-8",
});

// readStream.on("data", (chunk) => {
//   console.log("-----------new chunk-------------");
//   //   console.log(chunk.toString());
//   console.log(chunk);

//   writeStream.write("\nNew Chunk\n");
//   writeStream.write(chunk);
// });

// pinping
// readStream.pipe(writeStream);
