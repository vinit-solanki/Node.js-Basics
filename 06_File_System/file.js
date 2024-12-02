const fs = require("fs");
// The sync fs methods can be stored into a variable
// While the async methods uses a callback function to operate
// console.log(fs); // lists all the possible methods for fs

// 1. Reading:
console.log("Sync Read: ", fs.readFileSync("./example.txt", "utf-8"));
fs.readFile("./example.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Async Read: ", result);
  }
});
// for large files use streams
const stream = fs.createReadStream("./example.txt", "utf-8");
stream.on("data", (chunck) => {
  console.log(chunck);
});

// 2. Writing:
// writing into an existing file overwrites it
fs.writeFileSync("./example.txt", "Hello, World! by sync", "utf-8");
fs.writeFile("./example.txt", "Hello, World! by async", "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Written");
  }
});
// on non-existing file it creates a new file
fs.writeFileSync("./writeFile.txt", "This is a writable file by sync");
fs.writeFile("./writeFile.txt", "This is a writable file by async", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Written");
  }
});

// 3. Appending to a file
fs.appendFile(
  "./writeFile.txt",
  "\nThis is an appended line by async",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Appended by asyc");
    }
  }
);
fs.appendFileSync("./writeFile.txt", "\nThis is an appended line by sync");

// 4. Stats of a file
fs.stat("./example.txt", (err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log(stats);
  }
});

// 5. Deleting a file

// a. Create a file and delete it
fs.writeFile("./delete.txt", "This is going to be deleted...", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Delete File Created!");
    console.log(
      "Delete File Content: ",
      fs.readFileSync("./delete.txt", "utf-8")
    );

    // b. Delete the file
    fs.unlink("./delete.txt", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File deleted");
      }
    });
  }
});

// 6. Working with directories
fs.mkdir("./newDir2", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Directory created");

    // Create a file inside the directory
    fs.writeFile(
      "./newDir2/newDir2File1.txt",
      "This is the first file in newDir going to be deleted soon!",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File created in newDir2");

          // Read directory contents
          fs.readdir("./newDir2", (err, files) => {
            if (err) {
              console.log(err);
            } else {
              if (files.length === 0) {
                console.log("Directory is empty");
              } else {
                console.log("Directory contents:", files);
              }

              // Delete the directory and its contents
              fs.rmdir("./newDir2", { recursive: true, force: true }, (err) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Directory deleted");
                }
              });
            }
          });
        }
      }
    );
  }
});
